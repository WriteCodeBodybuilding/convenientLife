<template>
	<view class="diary">
		<view class="classification">
			<view class="left">
				<view class="search search-time" @click="$refs.share.open()">
					<text v-text="queryParams.text"></text>
					<uni-icons custom-prefix="iconfont" type="icon-sanjiao" size="30rpx"></uni-icons>
				</view>
				<view class="search search-label">
					<text>标签</text>
					<uni-icons custom-prefix="iconfont" type="icon-sanjiao" size="30rpx"></uni-icons>
				</view>
			</view>
			<view class="right">
				<view class="search search-recovery">
					<text>回收站(0)</text>
					<uni-icons custom-prefix="iconfont" type="icon-sanjiao" size="30rpx"></uni-icons>
				</view>
				<view class="search search-bookmark">
					<uni-icons custom-prefix="iconfont" type="icon-shu" size="30rpx"></uni-icons>
				</view>
				<view class="search search-search">
					<uni-icons custom-prefix="iconfont" type="icon-sousuo" size="30rpx"></uni-icons>
				</view>
			</view>
		</view>
		<Diary ref="diary" :params="queryParams" />
		<uni-popup ref="share" type="share" safeArea backgroundColor="#fff">
			<van-picker title=" " show-toolbar default-index="0" :columns="columns" @cancel="$refs.share.close()"
				@confirm="onConfirm"></van-picker>
		</uni-popup>

		<uni-fab ref="fab" :pattern="pattern" :content="content" :horizontal="horizontal" :vertical="vertical"
			:direction="direction" @fabClick="fabClick" />

	</view>
</template>

<script>
	import Diary from '@/components/Diary/Diary.vue'
	import {
		diaryQueryList
	} from '@/api/user/diary.js'
	import moment from "moment";
	export default {
		data() {
			return {
				show: false,
				columns: [],
				//添加按钮属性
				title: 'uni-fab',
				directionStr: '垂直',
				horizontal: 'right',
				vertical: 'bottom',
				direction: 'horizontal',
				pattern: {
					color: '#7A7E83',
					backgroundColor: '#fff',
					selectedColor: '#007AFF',
					buttonColor: '#007AFF',
					iconColor: '#fff'
				},
				is_color_type: false,
				total: 0,
				queryParams: {}
			};
		},
		components: {
			Diary,
		},
		created() {
			diaryQueryList().then(res => {
				this.columns = res.data.map((item, index) => {
					return {
						text: `${index ?moment(item.time).format('YYYY年MM月'):'全部'}(${item.total}篇)`,
						time: item.time,
						total: item.total
					}
				})
				this.queryParams = this.columns[0]
			})
		},
		methods: {
			onConfirm(e) {
				console.log(e)
				this.promise().then(() => {
					this.queryParams = e.detail.value
				}).then(() => {
					this.$refs.diary.getList()
				})
				this.$refs.share.close()
			},
			fabClick() {
				uni.navigateTo({
					url: '/subpkg/writediary/writediary'
				});
			},
			promise() {
				return new Promise((resolve, reject) => {
					resolve();
				});
			}
		},
		mounted() {
			setTimeout(() => {
				this.total = this.$refs.diary.total
			}, 300)
		},
		onShow(){
			this.$refs.diary.getList()
		},
	}
</script>

<style lang="scss" scoped>
	.diary {
		height: 100vh;

		.classification {
			padding: 0 20rpx;
			background-color: #4A9CE7;
			height: 80rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 24rpx;

			.left {
				display: flex;
				align-items: center;
				justify-content: left;

				.search {
					margin-right: 20rpx;
					border-radius: 10rpx;
					padding: 8rpx 10rpx;
					background-color: rgba(241, 239, 240, 1);
				}
			}

			.right {
				display: flex;
				align-items: center;
				justify-content: left;

				.search {
					margin-left: 20rpx;
					border-radius: 10rpx;
					padding: 8rpx 10rpx;
					background-color: rgba(241, 239, 240, 1);
				}
			}
		}
	}

	.uni-popup {}

	/deep/.uni-popup__wrapper {
		display: flex !important;
		flex-direction: column;
		height: 530rpx;
	}
</style>
