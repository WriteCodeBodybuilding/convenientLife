<template>
	<view class="writediary">
		<view class="operation">
			<view class="left">
				<view class="date">
					<text v-text="queryParams.time"></text>
					<uni-icons custom-prefix="iconfont" type="icon-sanjiao" size="36rpx"></uni-icons>
				</view>
				<view class="label">
					<text v-text="'标签'"></text>
					<uni-icons custom-prefix="iconfont" type="icon-sanjiao" size="36rpx"></uni-icons>
				</view>
			</view>
			<view class="right">
				<view class="preservation" @click="preservation">
					<text v-text="'保存'"></text>
					<uni-icons type="right" size="36rpx" color="#fff"></uni-icons>
				</view>
			</view>
		</view>
		<view class="content">
			<view class="uni-textarea" ref="textarea">
				<textarea @linechange="linechange" :style="{'height': height}" class="textarea"
					placeholder-style="color:#9c9c9c" v-model="queryParams.content" placeholder="时光易逝,点击记录"
					maxlength="3000" />
			</view>
		</view>
	</view>
</template>

<script>
	import {
		uploadDiary
	} from '@/api/user/diary.js'
	import {
		mapState
	} from 'vuex'
	import moment from "moment";
	export default {
		computed: {
			...mapState('my_user', ['userInfo'])
		},
		data() {
			return {
				text: '',
				height: '154rpx',
				queryParams: {
					time: moment().format('MM-DD'),
				},
			};
		},
		methods: {
			linechange(e) {
				if (e.detail.lineCount >= 5) {
					console.log(e.detail)
					this.height = `${e.detail.heightRpx+40}rpx`
				} else {
					this.height = '154rpx'
				}
			},
			preservation() {
				if(!this.queryParams.content) {
					uni.$showMsg('日记不能为空')
					return
				}
				this.queryParams.userId = this.userInfo.id
				uploadDiary(this.queryParams).then(res => {
					uni.navigateBack({
						delta: 1
					});
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.writediary {
		display: flex;
		flex-direction: column;
		margin: 20rpx 20rpx;

		.operation {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			padding-bottom: 20rpx;
			margin-bottom: 20rpx;
			border-bottom: 1rpx double rgba(0, 0, 0, 0.2);

			.left {
				display: flex;
				flex-direction: row;

				.date {
					padding: 8rpx 16rpx;
					border-radius: 10rpx;
					border: 1px double rgba(16, 16, 16, 0.4);
					font-weight: bold;
				}

				.label {
					padding: 8rpx 16rpx;
					border-radius: 10rpx;
					border: 1px double rgba(16, 16, 16, 0.4);
					margin-left: 20rpx;
				}
			}

			.right {
				display: flex;
				flex-direction: row;

				.preservation {
					padding: 8rpx 16rpx;
					border-radius: 10rpx;
					color: #fff;
					display: flex;
					flex-direction: row;
					align-items: center;
					background-color: rgba(74, 156, 231, 1);
					border: 1px double rgba(74, 156, 231, 1);
				}
			}
		}

		.content {
			.uni-textarea {
				padding: 10rpx;
				border: 1rpx double rgba(0, 0, 0, 0.2);

				.textarea {
					width: 100%;
				}
			}
		}
	}
</style>
