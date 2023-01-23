<template>
	<view class="news-all">
		<view class="news-all-box" v-for="item in data" :key="item.id" @click="click(item)">
			<view :class="'icon icon-status-'+item.status">
				<uni-icons custom-prefix="iconfont" :type="`icon-${item.state===1?'tongzhi':'fankui'}`" size="50rpx"
					:color="`${item.state===1?'#4A9CE7':'#53D8A4'}`"></uni-icons>
			</view>
			<view class="main">
				<view class="title-time">
					<text class="title">{{item.state===1?'系统通知':'反馈'}}</text>
					<text class="time">{{item.createTime}}</text>
				</view>
				<view class="text-badge">
					<text class="text">{{item.content}}</text>
					<uni-badge class="uni-badge-left-margin" text=" " v-if="item.is_bages ===0 ?true:false" />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "NewsAll",
		data() {
			return {

			};
		},
		props: {
			data: {
				type: Array,
				default: [],
				required: true
			}
		},
		methods:{
			click(e){
				this.$emit('click',e)
			}
		}


	}
</script>

<style lang="scss" scoped>
	.news-all {
		.news-all-box {
			margin: 24rpx 26rpx;
			display: flex;
			flex-direction: row;
			height: 110rpx;
			border-bottom: 1px double rgba(87, 87, 87, 0.1);
			padding: 4rpx 10rpx;

			&:last-child {
				border-bottom: none;
			}

			.icon {
				height: 90rpx;
				width: 90rpx;
				line-height: 90rpx;
				text-align: center;
				border-radius: 100rpx;
				margin-right: 8rpx;

			}

			.icon-status-1 {
				background-color: rgba(74, 156, 231, 0.1);
			}

			.icon-status-2 {
				background-color: rgba(83, 216, 164, 0.1);
			}

			.main {
				margin-left: 8rpx;
				width: 100%;

				.title-time {
					display: flex;
					flex-direction: row;
					justify-content: space-between;

					.title {
						font-weight: bold;
						font-size: 30rpx;
					}

					.time {
						font-size: 24rpx;
						color: #CECECE;
					}
				}

				.text-badge {
					display: flex;
					flex-direction: row;
					justify-content: space-between;

					.text {
						height: 36rpx;
						color: #999999;
						font-size: 25rpx;
						margin-right: 5rpx;
						overflow: hidden;
						-webkit-line-clamp: 1;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-box-orient: vertical;

					}

					/deep/.uni-badge-left-margin {
						margin-left: 5rpx;

						text {
							height: 20rpx !important;
							min-width: 20rpx !important;
						}
					}
				}
			}
		}

	}
</style>
