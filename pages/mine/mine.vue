<template>
	<view class="mine">
		<Login v-if="!token"></Login>
		<UserInfo v-else></UserInfo>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {

			};
		},
		computed: {
			...mapState('my_user', ['token'])
		}
	}
</script>

<style lang="scss" scoped>
	.mine {
		height: 100vh;
		background-color: #F3F4F8;
	}
</style>
