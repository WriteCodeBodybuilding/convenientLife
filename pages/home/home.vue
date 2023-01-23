<template>
	<view class="home">
		<uni-forms ref="queryParams" :modelValue="queryParams">
			<uni-forms-item>
				<uni-easyinput prefixIcon="search" v-model="queryParams.keyWord" type="text" placeholder="请输入关键词" />
			</uni-forms-item>
		</uni-forms>
		<Carousel ref="carousel" class="carousel" />
		<HomeNews ref="homeNews" class="homeNews" />
		<HomeFunction ref="homeFunction" class="homeFunction"></HomeFunction>
		<LatestConsultation ref="latestConsultation" class="latestConsultation"></LatestConsultation>
	</view>
</template>

<script>
	import Carousel from '@/components/Carousel/Carousel'
	import HomeNews from '@/components/HomeNews/HomeNews'
	import HomeFunction from '@/components/HomeFunction/HomeFunction'
	import LatestConsultation from '@/components/LatestConsultation/LatestConsultation'
	export default {
		data() {
			return {
				queryParams: {}
			};
		},
		components: {
			Carousel,
			HomeNews,
			HomeFunction,
			LatestConsultation
		},
		//上拉触底事件
		onReachBottom() {
			setTimeout(() => {
				this.$refs.latestConsultation.onReach()
			}, 300)

		},
	}
</script>

<style lang="scss" scoped>
	.home {
		height: 100vh;
		background-color: #F3F4F8;

		/deep/.uni-forms {
			overflow: hidden;
			margin: 10rpx 20rpx;

			.uni-forms-item {
				margin-bottom: 10rpx;

				.uni-forms-item__content {

					.uni-easyinput__content,
					.is-input-border {
						border-radius: 20rpx;
						background-color: white;
					}
				}

			}
		}

		/deep/.carousel {}

		/deep/.homeNews {
			.uni-notice-bar {
				display: block;
				margin: 10px 10px;

				.uni-noticebar {
					border-radius: 16rpx;
					display: flex;
					align-items: center;

					view {
						display: flex;
					}

					.news {
						width: 120rpx;
						font-weight: bold;
						margin-right: 16rpx;
					}

					.text {
						font-size: 28rpx;
						color: #575757;
						overflow: hidden;
						word-break: break-all;
						/* break-all(允许在单词内换行。) */
						text-overflow: ellipsis;
						/* 超出部分省略号 */
						display: -webkit-box;
						/** 对象作为伸缩盒子模型显示 **/
						-webkit-box-orient: vertical;
						/** 设置或检索伸缩盒对象的子元素的排列方式 **/
						// -webkit-line-clamp: 1;

					}
				}
			}

		}
	}
</style>
