<template>
	<view class="resume-container">
		<web-view :src="form.path">
			<cover-view ref="fab" class="fab" @click="fabClick">
				<cover-view style="color: rgba(255,255,255,0.8);font-size: 60rpx;">+</cover-view>
			</cover-view>
		</web-view>
		<!-- <uni-fab ref="fab" :pattern="pattern" :content="content" :horizontal="horizontal" :vertical="vertical"
			:direction="direction" @fabClick="fabClick" /> -->

	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import {
		getResume
	} from 'api/resume'
	export default {
		data() {
			return {
				form: {},
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
			}
		},
		computed: {
			...mapState('my_user', ['userInfo'])
		},
		onBackPress() {
			if (this.$refs.fab.isShow) {
				this.$refs.fab.close()
				return true
			}
			return false
		},
		methods: {
			async getList() {
				const res = await getResume({
					userId: this.userInfo.id
				})
				this.form = res.data
				this.form.path = 'http://192.168.31.188:3007/' + this.form.path.match(/upload\\(\S*)/)[1];
				// this.form.path = 'https://www.baidu.com/'
			},
			fabClick() {
				uni.$showMsg('点击了上传个人简历')
			},

		},
		mounted() {
			this.getList()
		},


	}
</script>

<style lang="scss" scoped>
	.resume-container {}

	.fab {
		background-color: #007AFF;
		border-width: 0px;
		box-shadow: 0 1px 8px 1px rgba(165, 165, 165, 0.2);
		font-weight: bold;
		right: 30rpx;
		bottom: 60rpx;
		position: fixed;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 55px;
		height: 55px;
		background-color: #4A9CE7;
		border-radius: 45px;
		z-index: 11;
	}
</style>
