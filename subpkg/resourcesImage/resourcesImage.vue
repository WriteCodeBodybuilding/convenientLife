<template>
	<view class="resources-image">
		<web-view :src="form.url">

		</web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {}
			};
		},
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			const eventChannel = this.getOpenerEventChannel();
			eventChannel.on('acceptDataFromOpenerPage', (res) => {
				this.form = res.data
			})
		},
	}
</script>

<style lang="scss" scoped>
	.resources-image {}
</style>
