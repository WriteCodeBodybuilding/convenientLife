<template>
	<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
		<swiper class="swiper-box" @change="change" :autoplay="true" :interval="5000">
			<swiper-item v-for="(item ,index) in info" :key="index">
				<view class="swiper-item">
					<image :src="item.content" mode="aspectFill"></image>
				</view>
			</swiper-item>
		</swiper>
	</uni-swiper-dot>
</template>

<script>
	export default {
		name: "Carousel",
		data() {
			return {
				info: [{
					content: 'https://w.wallhaven.cc/full/l3/wallhaven-l33zp2.jpg'
				}, {
					content: 'https://w.wallhaven.cc/full/57/wallhaven-577zo5.jpg'
				}, {
					content: 'https://w.wallhaven.cc/full/x6/wallhaven-x6l3q3.png'
				}],
				current: 0,
				mode: '',//dot
			};
		},
		methods: {
			change(e) {
				this.current = e.detail.current;
			}
		}
	}
</script>

<style lang="scss" scoped>
	swiper {
		height: 300rpx;
		margin: 0px 10px;
		.swiper-item,
		image {
			width: 100%;
			height: 100%;
			border-radius: 20rpx;
		}

	}
</style>
