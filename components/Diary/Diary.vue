<template>
	<view class="diary-container">
		<view class="diary" v-for="(item,idnex) in table" :key="index">
			<view class="time-classification">
				<view class="time">
					<view class="year-month">
						<text>{{turnYear(item.createTime)}}</text>
						<text>{{turnMonth(item.createTime)}}</text>
					</view>
					<view class="day">
						<text>{{turnCalendar(item.createTime)}}</text>
						<text>{{turnWeek(item.createTime)}}</text>
					</view>
				</view>
				<view class="classification">
					<uni-tag :inverted="true" :text="turnLabel(item.type)" size="mini" type="success" />
				</view>
			</view>
			<view class="content">
				{{item.content}}
			</view>
			<view class="operation">
				<uni-icons custom-prefix="iconfont" type="icon-lajixiang" size="30rpx"></uni-icons>
				<uni-icons custom-prefix="iconfont" type="icon-edit-1-copy" size="30rpx"></uni-icons>
				<uni-icons custom-prefix="iconfont" type="icon-zhuanfa" size="30rpx"></uni-icons>
			</view>
		</view>
	</view>
</template>


<script>
	import {
		mapState
	} from 'vuex'
	import {
		diaryList
	} from '@/api/user/diary.js'
	import moment from "moment";
	import 'moment/locale/zh-cn'
	moment.locale('zh-cn');
	import moonTime from "moon-time";
	export default {
		name: "Diary",
		computed: {
			...mapState('my_user', ['userInfo'])
		},
		props: {
			params: {
				type: Object,
				default: {}
			}
		},
		data() {
			return {
				queryParams: {
					page: 1,
					pageSize: 10,
					userId: 0
				},
				table: [],
				total: 0,
			};
		},
		created() {

		},
		methods: {
			async getList() {
				this.queryParams.userId = this.userInfo.id
				this.queryParams.startTime = this.params.time ? `${this.params.time}-01` : '';
				this.queryParams.endTime = this.params.time ? moment(this.params.time).endOf('month').format(
					"YYYY-MM-DD") : '';
				// console.log(this.queryParams)
				const res = await diaryList(this.queryParams)
				this.table = res.data
				this.total = res.total
			},
			turnYear(val) {
				return moment(val).format('YY')
			},
			turnMonth(val) {
				return moment(val).format('MMMM');
			},
			turnWeek(val) {
				return moment(val).format('dddd h:mm');
			},
			turnCalendar(val) {
				const moonTimes = moonTime({
					year: moment(val).format('YYYY'),
					month: moment(val).format('M'),
					day: moment(val).format('D')
				})
				return moonTimes.lunarYear + moonTimes.dayC
			},
			turnLabel(val) {
				if (val === 0) {
					return ''
				} else if (val === 1) {
					return '生活'
				} else if (val === 2) {
					return '工作'
				} else if (val === 3) {
					return '情感'
				} else if (val === 4) {
					return '亲子'
				} else if (val === 5) {
					return '游记'
				} else if (val === 6) {
					return '学习'
				} else {
					return '健身'
				}
			}
		},
		mounted() {
			this.getList()
		},
	}
</script>

<style lang="scss" scoped>
	.diary-container {
		margin: 10rpx;

		.diary {
			padding: 16rpx;
			display: flex;
			flex-direction: column;
			background-color: white;
			margin: 20rpx 0rpx;
			border-radius: 8rpx;
			overflow: hidden;

			.time-classification {
				padding-bottom: 4rpx;
				border-bottom: 1px double rgba(153, 153, 153, 0.8);
				display: flex;
				flex-direction: row;
				justify-content: space-between;

				.time {
					display: flex;
					flex-direction: row;
					align-items: center;

					.year-month {
						display: flex;
						flex-direction: column;
						border: 1px double #999999;
						border-radius: 12rpx;
						padding: 4rpx 10rpx;
						text-align: center;
						height: 60rpx;
						width: 50rpx;
						line-height: 30rpx;

						text {
							&:first-child {
								font-size: 26rpx;
								font-weight: bold;
							}

							&:last-child {
								font-size: 16rpx;

							}
						}
					}

					.day {
						display: flex;
						flex-direction: column;
						font-size: 24rpx;
						margin-left: 10rpx;

						text {
							&:first-child {}

							&:last-child {}
						}
					}
				}

				.classification {
					/deep/.uni-tag--mini {
						font-size: 10rpx !important;
					}
				}
			}

			.content {
				margin: 20rpx 0rpx;
				font-size: 28rpx;
				line-height: 50rpx;
				overflow: hidden;
				word-break: break-all;
				/* break-all(允许在单词内换行。) */
				text-overflow: ellipsis;
				/* 超出部分省略号 */
				display: -webkit-box;
				/** 对象作为伸缩盒子模型显示 **/
				-webkit-box-orient: vertical;
				/** 设置或检索伸缩盒对象的子元素的排列方式 **/
				-webkit-line-clamp: 4;

			}

			.operation {
				display: flex;
				flex-direction: row;
				align-items: center;
				margin-left: auto;

				/deep/uni-icons {
					margin: 0rpx 30rpx !important;
				}
			}
		}
	}
</style>
