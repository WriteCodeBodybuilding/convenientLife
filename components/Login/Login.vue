<template>
	<view class="login-container">
		<uni-icons type="contact-filled" size="100" color="#AFAFAF"></uni-icons>
		<button type="primary" class="btn-login" @click="getUserProfile">一键登录</button>
		<text class="tips-text">登录后尽享更多权益</text>
	</view>
</template>

<script>
	import {
		mapMutations
	} from 'vuex'
	import {
		login
	} from 'api/login'
	export default {
		name: "Login",
		data() {
			return {

			};
		},
		created() {

		},
		methods: {
			...mapMutations('my_user', ['updateUserInfo','updateToken']),
			//用户授权以后,获取用户的基本信息
			getUserProfile(e) {
				const _this = this
				uni.getSetting({
					success(res) {
						uni.showModal({
							title: '授权提醒',
							content: '请授权头像等信息，以便为您提供更好的服务',
							cancelText: "取消",
							confirmText: '确认授权',
							success: function(showres) {
								if (showres.confirm) {
									uni.getUserProfile({
										desc: '获取你的昵称、头像、地区及性别', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
										lang: "zh_CN",
										success: (infoRes) => {
											// console.log('授权信息', infoRes);
											
											_this.getToken(infoRes)
										}
									})
								} else if (showres.cancel) {
									uni.$showMsg('你已取消授权')
								}
							}
						})
					}
				})

			},
			async getToken(info) {
				console.log(info)
				const [err, res] = await uni.login().catch(err => err)
				if (err || res.errMsg !== 'login:ok') return uni.$showMsg('微信登录授权失败')
				// 準備获取token參數
				const params = {
					code: res.code,
					// encryptedData: info.encryptedData,
					// iv: info.iv,
					// rawData: info.rawData,
					// signature: info.signature
				}
				const resData = await login(params)
				this.updateUserInfo({...info.userInfo,...resData.data})
				this.updateToken(resData.data.access_token)



			},

		},
		mounted() {

		},

	}
</script>

<style lang="scss" scoped>
	.login-container {
		height: 750rpx;
		background-color: #f8f8f8;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
		overflow: hidden;

		&::after {
			content: ' ';
			display: block;
			width: 100%;
			height: 80rpx;
			background-color: #f8f8f8;
			position: absolute;
			bottom: 0;
			left: 0;
			border-radius: 100%;
			transform: translateY(50%);
		}

		.btn-login {
			width: 90%;
			border-radius: 100px;
			margin: 30rpx 0rpx;
			background-color: #1296db;
		}

		.tips-text {
			font-size: 24rpx;
			color: gtay;
		}
	}
</style>
