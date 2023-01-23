export default {
	//开启命名空间
	namespaced: true,

	//数据
	state: () => ({
		token: uni.getStorageSync('token') || '',
		//用户信息对象
		userInfo: JSON.parse(uni.getStorageSync('userInfo') || '{}')
	}),


	//方法
	mutations: {
		//用戶信息
		updateUserInfo(state, userInfo) {
			state.userInfo = userInfo
			this.commit('my_user/saveUserInfoToStorage')
		},
		saveUserInfoToStorage(state) {
			uni.setStorageSync('userInfo', JSON.stringify(state.userInfo))
		},
		// token
		updateToken(state, token){
			state.token = token
			this.commit('my_user/saveTokenStorage')
		},
		saveTokenStorage(state) {
			uni.setStorageSync('token', state.token)
		}
	},
	getters:{
		
	}

}
