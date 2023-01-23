<template>
	<uni-notice-bar showClose :showIcon="false" background-color="white" class="uni-notice-bar" type="line">
		<template #text>
			<text class="news">
				<!-- 消 -->名<text style="color: #7288f5;">
					<!-- 息 -->言
				</text>
			</text>
			<text class="text">{{text}}</text>
		</template>
	</uni-notice-bar>
</template>

<script>
	import {getASentence} from '@/api/system/resources.js'
	export default {
		name: "HomeNews",
		data() {
			return {
				text: ''
			};
		},
		methods: {
			async getList() {
				const res = await getASentence()
				this.text = res.data
			}
		},
		mounted() {
			this.getList()
		}
	}
</script>

<style lang="scss" scoped>

</style>
