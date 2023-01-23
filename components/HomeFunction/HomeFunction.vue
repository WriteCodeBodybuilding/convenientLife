<template>
	<view class="home-function">
		<view class="territory">
			<text class="h3">IP版图授权</text>
			<text class="introduce">商业有保障</text>
			<view class="button"><text>查看版图</text></view>
		</view>
		<view class="aside">
			<view class="business-card">
				<text class="h3">一键定制</text>
				<text class="introduce">开启专属名片</text>
			</view>
			<view class="channel-resources">
				<text class="h3">渠道资源</text>
				<text class="introduce">品牌联名合作</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "HomeFunction",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.home-function {
		margin: 10px 10px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		height: 240rpx;

		.territory {
			width: 50%;
			margin-right: 10rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding: 24rpx 30rpx;
			background-color: rgba(60, 100, 231, 0.1);
			border-radius: 16rpx;

			.h3 {
				font-size: 32rpx;
				font-weight: bold;
			}

			.introduce {
				font-size: 28rpx;
				color: rgba(153, 153, 153, 0.8);
			}

			.button {
				display: inline;
				color: white;
				font-size: 30rpx;

				text {
					padding: 8rpx 16rpx;
					border-radius: 100rpx;
					background: linear-gradient(to right, rgba(245, 108, 239, 0.7), rgba(60, 100, 231, 0.8), rgba(60, 100, 231, 1));
				}

			}
		}

		.aside {
			width: 50%;
			margin-left: 10rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.business-card {
				height: 50%;
				margin-bottom: 5rpx;
				border-radius: 16rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				padding: 12rpx 24rpx;
				background-color: rgba(60, 100, 231, 0.15);
				border-radius: 16rpx;

				.h3 {
					font-size: 30rpx;
					font-weight: bold;
				}

				.introduce {
					font-size: 24rpx;
					color: #575757;
				}
			}

			.channel-resources {
				height: 50%;
				margin-top: 5rpx;
				border-radius: 16rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				padding: 12rpx 24rpx;
				background-color: rgba(60, 100, 231, 0.15);
				border-radius: 16rpx;

				.h3 {
					font-size: 30rpx;
					font-weight: bold;
				}

				.introduce {
					font-size: 24rpx;
					color: #575757;
				}
			}
		}
	}
</style>
