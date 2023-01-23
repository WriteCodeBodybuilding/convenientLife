<template>
	<view class="latest-consultation">
		<view class="top">
			<view class="h1">
				<uni-icons class="uni-icons" custom-prefix="iconfont" type="icon-xiaoxi" size="36rpx" color="#4A9CE7">
				</uni-icons>
				<text>最新资源
					<!-- 咨询 -->
				</text>
			</view>
			<view class="more">
				查看更多
				<uni-icons class="uni-icons" type="right" size="26rpx"></uni-icons>
			</view>
		</view>
		<view class="consultation-box" v-for="(item,index) in data" :key="index" @click="click(item)">
			<view class="main">
				<text class="title">
					{{item.title}}
				</text>
				<view class="information">
					<view class="left">
						<uni-tag class="uni-tag" text="公告" type="primary" />
						<uni-icons class="uni-icons" type="eye" size="36rpx"></uni-icons>
						<text>13.2k</text>
					</view>
					<view class="right">
						<text>{{index+1}}分钟前</text>
					</view>

				</view>
			</view>
			<view class="aside">
				<image :src="`https://images.weserv.nl/?url=${item.err===undefined ? item.url :item.err}`"
					mode="aspectFill" @error="imgErrorArr(item)">
				</image>
			</view>
		</view>
	</view>
</template>

<script>
	import {resourcesList} from '@/api/system/resources.js'
	export default {
		name: "LatestConsultation",
		data() {
			return {
				queryParams: {
					page: 1,
					size: 4,
					type: 'beauty'
				},
				data: [],
			};
		},
		created() {
			this.getList()
		},
		methods: {
			async getList() {
				const res = await resourcesList(this.queryParams)
				this.data = [...this.data, ...res.data]
			},
			imgErrorArr(item) {
				item.err = 'https://gd-hbimg.huaban.com/ba776157ea13393e6d542fec3367a6ec7e609e591d2ba-U2Za3W_fw658'
			},
			click(e) {
				uni.navigateTo({
					url: `/subpkg/resourcesImage/resourcesImage`,
					success(res) {
						res.eventChannel.emit('acceptDataFromOpenerPage', {
							data: e
						})
					},
					fail(err) {
						console.log('失败啦', err);
					}
				});
			},
			//上拉触底事件
			onReach() {
				this.queryParams.page += 1
				this.getList()
			},
		},
		mounted() {

		},
	}
</script>

<style lang="scss" scoped>
	.latest-consultation {
		margin: 20px 10px;

		.top {

			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 20rpx;

			.h1 {
				font-size: 36rpx;
				font-weight: bold;
				display: flex;
				justify-content: space-between;
				flex-direction: row;
				align-items: center;

				text {
					font-weight: bold;
					margin-left: 8rpx;
				}
			}

			.more {
				font-size: 24rpx;
				color: #999999;
			}
		}

		.consultation-box {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			height: 160rpx;
			margin: 20rpx 0rpx;

			.main {
				width: 70%;
				margin-right: 5rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.title {
					color: rgba(51, 51, 51, 0.8);
					font-weight: bold;
					font-size: 30rpx;
				}

				.information {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					color: rgba(153, 153, 153, 1);
					font-size: 32rpx;

					.left {

						/deep/.uni-tag {
							margin-right: 10rpx;

							text {
								background-color: rgba(74, 156, 241, 0.3);
								border: rgba(74, 156, 241, 0.3);
								color: rgba(33, 112, 231, 1.0);
								font-size: 30rpx;
								padding: 2px 7px;
							}
						}
					}

					.right {
						color: rgba(153, 153, 153, 0.7);
					}
				}
			}

			.aside {
				width: 30%;
				margin-left: 5rpx;

				image {
					width: 100%;
					height: 100%;
					border-radius: 20rpx;
				}
			}
		}
	}
</style>
