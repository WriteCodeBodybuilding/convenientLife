<template>
	<page-meta :page-style="'overflow:'+(show?'hidden':'visible')"></page-meta>
	<view class="news">
		<van-tabs class="van-tabs" :active="active" title-inactive-color="#999999" @change="onChange" line-width="30rpx"
			color="#4A9CE7">
			<van-tab :title="`全部(${total})`">
				<NewsAll ref="newsAll" class="news-all" :data="table" @click="newsClick()" v-if="loading" />
			</van-tab>
			<van-tab title="系統通知">
				<NewsAll ref="newsAll" class="news-all" :data="table" @click="newsClick()" />
			</van-tab>
			<van-tab title="反馈">
				<NewsAll ref="newsAll" class="news-all" :data="table" @click="newsClick()" />
			</van-tab>
		</van-tabs>
		<view class="icon-tabs" @click="click">
			<uni-icons custom-prefix="iconfont" type="icon-qingchu" size="26rpx" color="#999999"></uni-icons>
			清除未读
		</view>

		<view class="container">
			<!-- 普通弹窗 -->
			<uni-popup ref="popup" background-color="#fff" @change="change">
				<view class="popup-content"><text class="text">{{form.content}}</text></view>
				<view class="popup-tail">
					<view class="tail">
						<text class="text" v-text="form.state===1 ? '系统通知':'反馈'"></text>
						<text class="text">{{form.createTime}}</text>
					</view>
				</view>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	import NewsAll from '@/components/NewsAll/NewsAll'
	import {
		newsList,
		newsUpdata
	} from 'api/system/news'
	export default {
		data() {
			return {
				active: 0,
				// 数据存放
				table: [],
				form: {},
				// 表单
				queryParams: {
					page: 1,
					pageSize: 10,
				},

				// 遮罩层
				total: 0,
				loading: true,
				show: false,


			};
		},
		components: {
			NewsAll,
		},
		created() {

		},
		methods: {
			async getList() {
				if (this.active === 0) {
					this.queryParams.state = ''
				} else if (this.active === 1) {
					this.queryParams.state = 1
				} else if (this.active === 2) {
					this.queryParams.state = 2
				}
				const res = await newsList(this.queryParams)
				this.table = res.data

			},
			onChange(event) {
				this.rest()
				this.active = event.detail.index
				this.getList()
			},
			newsClick(e) {
				const params = e
				params.is_bages = 1
				newsUpdata(params).then(res => {
					this.getList()
					// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
					this.form = e
					this.$refs.popup.open('center')

				})
			},
			click() {
				newsUpdata().then(res => {
					this.getList()
				})
			},
			change(e) {
				this.show = e.show
			},
			rest() {
				this.queryParams = {
					page: 1,
					pageSize: 10,
				}
				this.table = []
			}
		},
		mounted() {
			this.getList()
			newsList({
				page: 1,
				pageSize: 10,
			}).then(res => {
				this.total = res.total
			})

		}
	}
</script>

<style lang="scss" scoped>
	.news {
		position: relative;

		/deep/.van-tabs {
			.van-tabs__scroll {
				background-color: rgba(245, 245, 245, 1) !important;

				.van-tabs__nav {
					width: 60%;
				}

			}

			.van-tab--active {
				color: #333333 !important;
				font-weight: bold;
			}

			.van-tab {
				padding: 0px !important;
			}

		}

		.icon-tabs {
			position: absolute;
			top: 28rpx;
			right: 10rpx;
			z-index: 5;
			font-size: 28rpx;
			color: #999999;

			uni-icons {
				margin-right: 10rpx;
			}
		}
	}

	.box {
		display: flex;
	}

	/deep/.uni-popup__wrapper {
		display: flex !important;
		flex-direction: column;
		bottom: 200rpx !important;
		height: 200rpx;
		width: 80%;
		padding: 15px;
		justify-content: space-between;
	}
	.popup-content {
		
		
	}
	.popup-tail{
		margin-left: auto;
		.tail{
			display: flex;
			flex-direction: column;
			width: 120px;
			text-align: center;
		}
	}
	.text {
		font-size: 12px;
		color: #333;
	}

	.dialog-box {
		padding: 10px;
	}

	.dialog-text {
		font-size: 14px;
		color: #333;
	}
</style>
