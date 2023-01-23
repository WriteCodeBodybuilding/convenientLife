<template>
	<view class="userinfo-container">
		<view class="top-data">
			<view class="userinfo">
				<image :src="userInfo.avatarUrl" class="avater" size></image>
				<view class="nickName">
					<text class="name">{{userInfo.nickName}}</text>
					<view class="authentication-and-set">
						<text class="authentication text" v-if="false">企业认证</text>
						<text class="set text">编辑资料></text>
					</view>
				</view>
			</view>
			<view class="set-up">
				<!-- <uni-icons type="heart" size="30" color="#FFFFFF"></uni-icons> -->
			</view>
		</view>
		<view class="top-my">
			<view class="my-journal-title">
				<text>我的空间</text>
				<view>全部空间<uni-icons type="right" size="16rpx"></uni-icons>
				</view>
			</view>
			<view class="my-icom">
				<view class="icom-text" @click="click('diary')">
					<uni-icons custom-prefix="iconfont" type="icon-rijiben" size="60rpx"></uni-icons>
					<text>日记</text>
				</view>
				<view class="icom-text">
					<uni-icons custom-prefix="iconfont" type="icon-tuku" size="60rpx"></uni-icons>
					<text>图库</text>
				</view>
				<view class="icom-text">
					<uni-icons custom-prefix="iconfont" type="icon-beiwanglu" size="60rpx"></uni-icons>
					<text>备忘录</text>
				</view>
				<view class="icom-text">
					<uni-icons custom-prefix="iconfont" type="icon-lianxiren" size="60rpx"></uni-icons>
					<text>联系人</text>
				</view>
			</view>
		</view>
		<view class="middle-my">
			<view class="my-application-title">
				<text>我的应用</text>
				<text></text>
			</view>
			<view class="my-application">
				<view class="application">
					<view class="view">
						<uni-icons class="icon" custom-prefix="iconfont" type="icon-mingpian" size="38rpx" />我的名片
					</view>
					<uni-icons type="right" size="24rpx"></uni-icons>
				</view>
				<view class="application">
					<view class="view">
						<uni-icons class="icon" custom-prefix="iconfont" type="icon-rongyu" size="38rpx" />我的荣誉
					</view>
					<uni-icons type="right" size="24rpx"></uni-icons>
				</view>
			</view>
		</view>
		<view class="more-settings">
			<view class="more-settings-title" v-if="false">
				<text>更多设置</text>
				<text></text>
			</view>
			<view class="more-settings">
				<navigator :url="'/subpkg/resume/resume'">
					<view class="settings">
						<view class="view">
							个人简历
						</view>
						<text v-text="''" />
					</view>
				</navigator>
				<view class="settings">
					<view class="view">
						客服中心
					</view>
					<text v-text="''" />
				</view>
				<view class="settings">
					<view class="view">
						设置
					</view>
					<text v-text="''" />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		name: "UserInfo",
		computed: {
			...mapState('my_user', ['userInfo'])
		},
		data() {
			return {

			};
		},
		created() {
			console.log(this.userInfo)
		},
		methods: {
			click(url) {
				uni.navigateTo({
					url: `/subpkg/${url}/${url}`
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	.userinfo-container {
		height: 100vh;
		background-image: linear-gradient(rgba(243, 244, 248, 1), rgba(255, 255, 255, 0.5), rgba(243, 244, 248, 1));

		.top-data {
			padding: 0 20rpx;
			background-color: #4A9CE7;
			height: 200rpx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			.userinfo {
				display: flex;
				flex-direction: row;
				align-items: center;

				.avater {
					width: 90rpx;
					height: 90rpx;
					border-radius: 45rpx;
					border: 2px solid #FFF;
					box-shadow: 0 1px 5px #21c9db;
				}

				.nickName {
					margin-left: 20rpx;

					.name {
						color: #ffffff;
						font-weight: bold;
						font-size: 38rpx;
					}

					.authentication-and-set {
						.text {
							font-size: 26rpx;

							&:first-child {
								color: #ffffff;
							}

							&:last-child {
								color: #ffffff;
								margin-left: 10rpx;
							}

						}
					}
				}
			}
		}

		.top-my {
			margin: 0 20rpx;
			margin-top: 20rpx;
			background-color: white;
			border-radius: 20rpx;

			.my-journal-title {
				display: flex;
				justify-content: space-between;
				flex-direction: row;
				align-items: center;
				padding: 24rpx;

				text {
					&:first-child {
						font-size: 26rpx;
					}
				}

				view {
					font-size: 22rpx;
					color: #999999;
				}
			}

			.my-icom {
				padding: 24rpx;
				font-size: 24rpx;
				display: flex;
				justify-content: space-between;
				flex-direction: row;
				align-items: center;

				.icom-text {
					display: flex;
					align-items: center;
					flex-direction: column;
				}
			}
		}

		.middle-my {
			margin: 0 20rpx;
			margin-top: 20rpx;
			background-color: white;
			border-radius: 20rpx;

			.my-application-title {
				display: flex;
				justify-content: space-between;
				flex-direction: row;
				align-items: center;
				padding: 24rpx;

				text {
					&:first-child {
						font-size: 26rpx;
					}

					&:last-child {
						font-size: 22rpx;
						color: #999999;
					}
				}
			}

			.my-application {
				padding: 0rpx 24rpx 12rpx 24rpx;

				.application {
					display: flex;
					justify-content: space-between;
					flex-direction: row;
					height: 66rpx;
					align-items: center;

					.view {
						display: flex;
						flex-direction: row;
						align-items: center;
						font-size: 24rpx;

						.icon {
							margin-right: 8rpx;
						}
					}

					text {
						color: #999999;
					}
				}
			}

		}

		.more-settings {
			margin: 0 20rpx;
			margin-top: 20rpx;
			background-color: white;
			border-radius: 20rpx;

			.more-settings-title {
				display: flex;
				justify-content: space-between;
				flex-direction: row;
				align-items: center;
				padding: 24rpx;

				text {
					&:first-child {
						font-size: 26rpx;
					}

					&:last-child {
						font-size: 22rpx;
						color: #999999;
					}
				}
			}

			.more-settings {
				padding: 0rpx 24rpx 12rpx 12rpx;

				.settings {
					display: flex;
					justify-content: space-between;
					flex-direction: row;
					height: 66rpx;
					align-items: center;

					.view {
						display: flex;
						flex-direction: row;
						align-items: center;
						font-size: 24rpx;

						.icon {
							// margin-right: 8rpx;
						}
					}

					text {
						color: #999999;
					}
				}
			}

		}
	}
</style>
