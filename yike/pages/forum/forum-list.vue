<template>
	<!-- 从热门进入的列表页面 -->
	<view class="handleScroll">
		<view class="indexTopPositionConSearchInput">
			<image src="../../static/images/index_6.png" mode="widthFix"></image>
			<input type="text" placeholder="请输入搜索关键字" />
		</view>
		<!-- 帖子 -->
		<view class="forumSelect">
			<view class="forumSelectTit">默认筛选</view>
			<uni-data-select class="forumSelectC" v-model="valueSe" :localdata="range"
				@change="changeSe"></uni-data-select>
		</view>
		<view class="forumSelectUl">

			<view class="forumSelectUlLi">
				<navigator hover-class="none" class="forumSelectUlLiTop">
					<image src="../../static/images/forum_2.png" class="forumSelectUlLiTopImg"></image>
					<view class="forumSelectUlLiTopLeft">
						<view class="forumSelectUlLiTopLeftName">
							<text class="forumSelectUlLiTopLeftNameTxt">自由的宝飞飞飞飞飞飞飞飞飞飞飞飞飞飞飞飞飞飞飞飞飞</text>
							<view class="forumSelectUlLiTopLeftNameTab">工长</view>
							<view class="forumSelectUlLiTopLeftNameTab">水电</view>
						</view>
						<view class="forumSelectUlLiTopLeftTime">2024-04-15 16:09:32</view>
					</view>
					<image class="forumSelectUlLiTopLeftUp" src="../../static/images/forum_4.png" mode="widthFix">
					</image>
				</navigator>
				<view class="forumSelectUlLiCon">
					<navigator url="/pages/forum/forum-con" hover-class="none" class="forumSelectUlLiConTxt">
						内容文字内容文字内容文字内容文字~~~ <br />
						哈哈哈哈~~~~~
					</navigator>
					<view class="forumSelectUlLiConImg">
						<view @click="previewImage"
							style="background: url(http://www.moehosp.com/Public/home/images/about/about_team.png) no-repeat center center;"
							class="forumSelectUlLiConImgBack"></view>
						<view
							style="background: url(http://www.moehosp.com/Public/home/images/about/about_team.png) no-repeat center center;"
							class="forumSelectUlLiConImgBack"></view>
						<view
							style="background: url(http://www.moehosp.com/Public/home/images/about/about_team.png) no-repeat center center;"
							class="forumSelectUlLiConImgBack"></view>
					</view>
					<view class="forumSelectUlLiConBot">
						<navigator url="/pages/forum/forum-con" hover-class="none" class="forumSelectUlLiConBotComment">
							<image src="../../static/images/forum_7.png" mode="widthFix"></image>
							<text>评论({{ commentNumber }})</text>
						</navigator>
						<view class="forumSelectUlLiConBotGood" @click="toggleLike">
							<text :class="{'liked-text': isLiked}">{{ likeText }}({{ formattedNumber }})</text>
							<image :src="likeImage" mode="widthFix"></image>
						</view>
					</view>
				</view>
			</view>


			<view class="forumSelectUlLi">
				<navigator hover-class="none" class="forumSelectUlLiTop">
					<image src="../../static/images/forum_2.png" class="forumSelectUlLiTopImg"></image>
					<view class="forumSelectUlLiTopLeft">
						<view class="forumSelectUlLiTopLeftName">
							<text class="forumSelectUlLiTopLeftNameTxt">自由的宝飞飞飞飞飞飞飞飞飞飞飞飞飞飞飞飞飞飞飞飞飞</text>
							<view class="forumSelectUlLiTopLeftNameTab">工长</view>
							<view class="forumSelectUlLiTopLeftNameTab">水电</view>
						</view>
						<view class="forumSelectUlLiTopLeftTime">2024-04-15 16:09:32</view>
					</view>
					<image class="forumSelectUlLiTopLeftUp" src="../../static/images/forum_6.png" mode="widthFix">
					</image>
				</navigator>
				<view class="forumSelectUlLiCon">
					<navigator hover-class="none" class="forumSelectUlLiConTxt">
						内容文字内容文字内容文字内容文字~~~ <br />
						哈哈哈哈~~~~~
					</navigator>
					<view class="forumSelectUlLiConImg">
						<view @click="previewImage"
							style="background: url(http://www.moehosp.com/Public/home/images/about/about_team.png) no-repeat center center;"
							class="forumSelectUlLiConImgBack"></view>
						<view
							style="background: url(http://www.moehosp.com/Public/home/images/about/about_team.png) no-repeat center center;"
							class="forumSelectUlLiConImgBack"></view>
						<view
							style="background: url(http://www.moehosp.com/Public/home/images/about/about_team.png) no-repeat center center;"
							class="forumSelectUlLiConImgBack"></view>
					</view>
					<view class="forumSelectUlLiConBot">
						<navigator hover-class="none" class="forumSelectUlLiConBotComment">
							<image src="../../static/images/forum_7.png" mode="widthFix"></image>
							<text>评论({{ commentNumber }})</text>
						</navigator>
						<view class="forumSelectUlLiConBotGood">
							<text>点赞({{ formattedNumber }})</text>
							<image src="../../static/images/forum_8.png" mode="widthFix"></image>
						</view>
					</view>
				</view>
			</view>


			<view class="forumSelectUlLi">
				<navigator hover-class="none" class="forumSelectUlLiTop">
					<image src="../../static/images/forum_2.png" class="forumSelectUlLiTopImg"></image>
					<view class="forumSelectUlLiTopLeft">
						<view class="forumSelectUlLiTopLeftName">
							<text class="forumSelectUlLiTopLeftNameTxt">自由的宝飞飞飞飞飞飞飞飞飞飞飞飞飞飞飞飞飞飞飞飞飞</text>
							<view class="forumSelectUlLiTopLeftNameTab">工长</view>
							<view class="forumSelectUlLiTopLeftNameTab">水电</view>
						</view>
						<view class="forumSelectUlLiTopLeftTime">2024-04-15 16:09:32</view>
					</view>
				</navigator>
				<view class="forumSelectUlLiCon">
					<navigator hover-class="none" class="forumSelectUlLiConTxt">
						内容文字内容文字内容文字内容文字~~~ <br />
						哈哈哈哈~~~~~
					</navigator>
					<view class="forumSelectUlLiConImg">
						<view @click="previewImage"
							style="background: url(http://www.moehosp.com/Public/home/images/about/about_team.png) no-repeat center center;"
							class="forumSelectUlLiConImgBack"></view>
						<view
							style="background: url(http://www.moehosp.com/Public/home/images/about/about_team.png) no-repeat center center;"
							class="forumSelectUlLiConImgBack"></view>
						<view
							style="background: url(http://www.moehosp.com/Public/home/images/about/about_team.png) no-repeat center center;"
							class="forumSelectUlLiConImgBack"></view>
					</view>
					<view class="forumSelectUlLiConBot">
						<navigator hover-class="none" class="forumSelectUlLiConBotComment">
							<image src="../../static/images/forum_7.png" mode="widthFix"></image>
							<text>评论({{ commentNumber }})</text>
						</navigator>
						<view class="forumSelectUlLiConBotGood">
							<text>点赞({{ formattedNumber }})</text>
							<image src="../../static/images/forum_8.png" mode="widthFix"></image>
						</view>
					</view>
				</view>
			</view>


			<view class="forumSelectUlLi">
				<navigator hover-class="none" class="forumSelectUlLiTop">
					<image src="../../static/images/forum_2.png" class="forumSelectUlLiTopImg"></image>
					<view class="forumSelectUlLiTopLeft">
						<view class="forumSelectUlLiTopLeftName">
							<text class="forumSelectUlLiTopLeftNameTxt">自由的宝飞飞飞飞飞飞飞飞飞飞飞飞飞飞飞飞飞飞飞飞飞</text>
							<view class="forumSelectUlLiTopLeftNameTab">工长</view>
							<view class="forumSelectUlLiTopLeftNameTab">水电</view>
						</view>
						<view class="forumSelectUlLiTopLeftTime">2024-04-15 16:09:32</view>
					</view>
				</navigator>
				<view class="forumSelectUlLiCon">
					<navigator hover-class="none" class="forumSelectUlLiConTxt">
						内容文字内容文字内容文字内容文字~~~ <br />
						哈哈哈哈~~~~~
					</navigator>
					<view class="forumSelectUlLiConImg">
						<view @click="previewImage"
							style="background: url(http://www.moehosp.com/Public/home/images/about/about_team.png) no-repeat center center;"
							class="forumSelectUlLiConImgBack"></view>
						<view
							style="background: url(http://www.moehosp.com/Public/home/images/about/about_team.png) no-repeat center center;"
							class="forumSelectUlLiConImgBack"></view>
						<view
							style="background: url(http://www.moehosp.com/Public/home/images/about/about_team.png) no-repeat center center;"
							class="forumSelectUlLiConImgBack"></view>
					</view>
					<view class="forumSelectUlLiConBot">
						<navigator hover-class="none" class="forumSelectUlLiConBotComment">
							<image src="../../static/images/forum_7.png" mode="widthFix"></image>
							<text>评论({{ commentNumber }})</text>
						</navigator>
						<view class="forumSelectUlLiConBotGood">
							<text>点赞({{ formattedNumber }})</text>
							<image src="../../static/images/forum_8.png" mode="widthFix"></image>
						</view>
					</view>
				</view>
			</view>

			<view class="forumSelectUlLi">
				<navigator hover-class="none" class="forumSelectUlLiTop">
					<image src="../../static/images/forum_2.png" class="forumSelectUlLiTopImg"></image>
					<view class="forumSelectUlLiTopLeft">
						<view class="forumSelectUlLiTopLeftName">
							<text class="forumSelectUlLiTopLeftNameTxt">自由的宝飞飞飞飞飞飞飞飞飞飞飞飞飞飞飞飞飞飞飞飞飞</text>
							<view class="forumSelectUlLiTopLeftNameTab">工长</view>
							<view class="forumSelectUlLiTopLeftNameTab">水电</view>
						</view>
						<view class="forumSelectUlLiTopLeftTime">2024-04-15 16:09:32</view>
					</view>
				</navigator>
				<view class="forumSelectUlLiCon">
					<navigator hover-class="none" class="forumSelectUlLiConTxt">
						内容文字内容文字内容文字内容文字~~~ <br />
						哈哈哈哈~~~~~
					</navigator>
					<view class="forumSelectUlLiConImg">
						<view @click="previewImage"
							style="background: url(http://www.moehosp.com/Public/home/images/about/about_team.png) no-repeat center center;"
							class="forumSelectUlLiConImgBack"></view>
						<view
							style="background: url(http://www.moehosp.com/Public/home/images/about/about_team.png) no-repeat center center;"
							class="forumSelectUlLiConImgBack"></view>
						<view
							style="background: url(http://www.moehosp.com/Public/home/images/about/about_team.png) no-repeat center center;"
							class="forumSelectUlLiConImgBack"></view>
					</view>
					<view class="forumSelectUlLiConBot">
						<navigator hover-class="none" class="forumSelectUlLiConBotComment">
							<image src="../../static/images/forum_7.png" mode="widthFix"></image>
							<text>评论({{ commentNumber }})</text>
						</navigator>
						<view class="forumSelectUlLiConBotGood">
							<text>点赞({{ formattedNumber }})</text>
							<image src="../../static/images/forum_8.png" mode="widthFix"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		
	</view>

</template>

<script>
	import IndexApi from '../../api/index';
	export default {
		
		data() {
			return {

				valueSe: 1,
				range: [{
						value: 0,
						text: "按热度"
					},
					{
						value: 1,
						text: "按发布时间"
					},
				],
				number: 1,
				cnumber: 12000,
				isSticky: false,
				topThreshold: 0, // 根据实际布局调整
				isLiked: false, // 是否已点赞的状态
				likeImage: '../../static/images/forum_8.png', // 初始未点赞时的图片
				likeText: '点赞',
				isExpanded: false,
			}
		},
		mounted() {
		},
		beforeDestroy() {
			
		},
		methods: {
			
			changeSe(e) {
				console.log("e:", e);
			},
			// 点击查看放大图片
			previewImage() {
				uni.previewImage({
					urls: ['http://www.moehosp.com/Public/home/images/about/about_team.png',
						'http://www.moehosp.com/Public/home/images/about/about_team.png',
						'http://www.moehosp.com/Public/home/images/about/about_team.png'
					], // 可以放置多个图片URL，用于滑动查看
					current: 'http://www.moehosp.com/Public/home/images/about/about_team.png' // 当前显示的图片URL
				});
			},
			// 帖子点赞
			toggleLike() {
				this.isLiked = !this.isLiked; // 切换点赞状态
				this.number += this.isLiked ? 1 : -1; // 更新点赞数量
				this.likeImage = this.isLiked ? '../../static/images/forum_9.png' :
				'../../static/images/forum_8.png'; // 根据点赞状态切换图片
				this.likeText = this.isLiked ? '已点赞' : '点赞';
			},
			

		},

		
		computed: {
			formattedNumber() {
				if (this.number >= 100000) {
					return (this.number / 10000).toFixed(0) + 'w'; // 超过100,000显示为“10w”等
				} else if (this.number >= 10000) {
					return (this.number / 10000).toFixed(1) + 'w'; // 超过10,000显示为“1w”等
				} else {
					return this.number; // 不超过10,000直接显示数字
				}
			},
			commentNumber() {
				if (this.cnumber >= 100000) {
					return (this.cnumber / 10000).toFixed(0) + 'w'; // 超过100,000显示为“10w”等
				} else if (this.cnumber >= 10000) {
					return (this.cnumber / 10000).toFixed(1) + 'w'; // 超过10,000显示为“1w”等
				} else {
					return this.cnumber; // 不超过10,000直接显示数字
				}
			}
		},
		

	};
</script>
<style>
	
	page{
		background: #f8f8f8;
	}
	.indexTopPosition {
		width: 100%;
		float: left;
		position: relative;
		min-height: 500rpx;
	}

	.indexTopPositionBack {
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 0;
	}

	.indexTopPositionCon {
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 2;
	}

	.indexTopPositionConSearch {
		width: 90%;
		float: left;
		margin: 20px 5%;
	}

	.indexTopPositionConSearchCity {
		float: left;
		margin-top: 10rpx;
	}

	.input-value-border {
		border: none !important;
		margin: 0 0 !important;
		padding: 0 0 !important;
	}

	.input-value {
		height: 44rpx !important;
	}

	.placeholder {
		color: #222 !important;
	}

	.indexTopPositionConSearchCityIcon {
		width: 36rpx;
		float: left;
	}

	.indexTopPositionConSearchCityPick {
		float: left;
		margin-left: 4px;
	}

	.indexTopPositionConSearchInput {
		width: 90%;
		float: left;
		margin-left: 6px;
		background: #fff;
		padding: 25rpx 40rpx;
		border-radius: 50px;
		box-sizing: border-box;
		margin:50rpx 5% 20rpx;
	}

	.indexTopPositionConSearchInput image {
		width: 35rpx;
		float: left;
		
	}

	.indexTopPositionConSearchInput input {
		width: calc(100% - 60rpx);
		float: left;
		margin-left: 20rpx;
		font-size: 12px;
		margin-top: 4rpx;
	}

	.indexTopPositionConSearchMesR {
		float: right;
		margin-top: 20rpx;
	}

	.indexTopPositionConBanner image {
		width: 100%;
		float: left;
	}

	.indexTopPositionConSearchMesNew {
		float: right;
		width: 20rpx;
		height: 20rpx;
		border-radius: 50%;
		margin-top: 20rpx;
		background: #f00;
		margin-left: 10rpx;
	}

	.indexTopPositionConSearchMes {
		width: 40rpx;
		float: right;
	}

	.title {
		font-size: 14px;
		font-weight: bold;
		margin: 20px 0 5px 0;
	}

	.data-pickerview {
		height: 400px;
		border: 1px #e5e5e5 solid;
	}

	.popper__arrow {
		top: -6px;
		left: 50%;
		margin-right: 3px;
		border-top-width: 0;
		border-bottom-color: #EBEEF5;
	}

	.popper__arrow {
		top: -6px;
		left: 50%;
		margin-right: 3px;
		border-top-width: 0;
		border-bottom-color: #EBEEF5;
	}

	/* 推荐 */
	.fourmRecommend {
		width: 100%;
		position: absolute;
		left: 0;
		top: 150rpx;
		z-index: 1;
	}

	.fourmRecommendTop {
		width: 90%;
		margin-left: 5%;
		float: left;
	}

	.fourmRecommendTopImg1 {
		width: 24rpx;
		float: left;
		height: 80rpx;
	}

	.fourmRecommendTopLine {
		width: calc(100% - 24rpx);
		float: left;
		padding: 0 10rpx;
		box-sizing: border-box;
		height: 80rpx;
		background: #ffb955;
	}

	.fourmRecommendTopImg2 {
		width: 55rpx;
		float: left;
		margin-top: 15rpx;
	}

	.fourmRecommendTopT1 {
		font-size: 34rpx;
		float: left;
		margin-left: 30rpx;
		color: #222;
		margin-top: 10px;
	}

	.fourmRecommendBot {
		width: calc(90% - 24rpx);
		float: left;
		padding: 10rpx 10rpx 28rpx;
		background: #fff;
		border: 1px solid #ffb955;
		margin-left: 5%;
	}

	.fourmRecommendBotLi {
		width: 47%;
		float: left;
		margin-left: 2%;
		margin-top: 20rpx;
	}

	.fourmRecommendBotLiImg {
		width: 70rpx;
		height: 70rpx;
		float: left;
		border-radius: 10rpx;
	}

	.fourmRecommendBotLiTxt {
		width: calc(100% - 80rpx);
		float: right;
	}

	.fourmRecommendBotLiTxt_t1 {
		font-size: 32rpx;
		float: left;
		color: #222;
		width: 100%;
	}

	.fourmRecommendBotLiTxt_t2 {
		float: left;
		width: 100%;
	}

	.fourmRecommendBotLiTxt_t4 {
		color: #999;
		font-size: 28rpx;
		float: left;
	}

	.fourmRecommendBotLiTxt_t3 {
		padding: 0rpx 2rpx;
		background: #ffdb00;
		color: #f00;
		font-size: 22rpx;
		border-radius: 4px;
		float: left;
		margin-left: 8rpx;
		border: 1px solid #f00;
		margin-top: 8rpx;
	}

	/* 公告 */
	.indexNewTask {
		width: 90%;
		float: left;
		border: 1px solid #c6bb7a;
		border-radius: 80px;
		padding: 10rpx 30rpx;
		box-sizing: border-box;
		margin: 30rpx 5% 20rpx;
	}

	.indexNewTaskImg {
		width: 40rpx;
		float: left;
		margin-top: 16rpx;
		margin-right: 20rpx;
	}

	.scroll-text {
		width: calc(100% - 60rpx);
		padding: 0;
		float: left;
		margin-top: 4rpx;
		height: 30px;
		overflow: hidden;
		line-height: 30px;
	}

	.scroll-item {
		display: inline-block;
		padding: 0;
		margin: 0;
		line-height: 30px;
		width: 100%;
		font-size: 16px;
		color: #222;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.forumClass {
		width: 90%;
		float: left;
		position: relative;
		z-index: 3;
		background: #fffbe4;
		padding: 0 5%;
	}

	.sticky {
		position: fixed;
		top: 0;
		width: 100%;
		background-color: #fffbe4;
		z-index: 3;
		/* 保证吸顶元素在最前面 */
		box-shadow: 0 4px 10rpx rgba(205, 195, 140, 0.2);
	}

	.scroll-view {
		margin: 30rpx 0 20rpx;
		white-space: nowrap;
		/* 使所有子元素在一行显示 */
		overflow-x: auto;
		/* 允许在X轴方向上滚动 */
		width: 100%;
		/* 视图宽度设置为100% */
	}

	.forumClassLi {
		display: inline-block;
		/* 设置为内联块，保持在一行 */
		margin-right: 10px;
		/* 在分类之间添加一些间隔 */
	}

	.forumClassLi text {
		font-size: 30rpx;
		color: #222
	}

	.forumClassLiLine {
		height: 6rpx;
		/* 线条高度 */
		background-color: #ffdb00;
		/* 线条颜色 */
		width: 60rpx;
		/* 线条宽度 */
		margin-left: calc(50% - 30rpx);
		margin-top: 10rpx;
		border-radius: 10px;
	}

	.forumSelect {
		width: 100%;
		float: left;
		padding: 20rpx 0 0;
	}

	.forumSelectTit {
		font-size: 30rpx;
		color: #222;
		float: left;
		margin-left: 5%;
		padding: 14rpx 20rpx;
	}

	.forumSelectC {
		float: right !important;
		width: 30% !important;
		margin-right: 5% !important;
	}

	.uni-select {
		float: right !important;
		width: 100% !important;
		border: none !important;
	}

	.forumSelectUl {
		width: 90%;
		float: left;
		margin-left: 5%;
		margin-bottom: 40rpx;
	}

	.forumSelectUlLi {
		width: 100%;
		float: left;
		margin-top: 30rpx;
		background: #fff;
		border-radius: 20rpx;
		padding: 20rpx;
		box-sizing: border-box;
		box-shadow: 0 10rpx 10rpx #eee;
	}

	.forumSelectUlLiTop {
		width: 100%;
		float: left;
	}

	.forumSelectUlLiTopImg {
		width: 80rpx;
		height: 80rpx;
		border-radius: 10rpx;
		float: left;
	}

	.forumSelectUlLiTopLeft {
		width: calc(100% - 200rpx);
		float: left;
		margin-left: 20rpx;
	}

	.forumSelectUlLiTopLeftName {
		width: 100%;
		float: left;
	}

	.forumSelectUlLiTopLeftNameTxt {
		float: left;
		font-size: 30rpx;
		color: #222;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 50%;
	}

	.forumSelectUlLiTopLeftNameTab {
		float: left;
		font-size: 25rpx;
		color: #fff;
		background: #ffdb00;
		border-radius: 100px;
		padding: 3rpx 10rpx;
		margin-right: 10rpx;
	}

	.forumSelectUlLiTopLeftTime {
		width: 100%;
		float: left;
		font-size: 26rpx;
		color: #999;
		margin-top: 10rpx;
	}

	.forumSelectUlLiTopLeftUp {
		width: 100rpx;
		float: right;
	}

	.forumSelectUlLiCon {
		width: 100%;
		float: left;
		margin-top: 10rpx;
	}

	.forumSelectUlLiConTxt {
		width: 100%;
		float: left;
		font-size: 30rpx;
		color: #222;
		line-height: 46rpx;
		margin: 30rpx 0 20rpx;
	}

	.forumSelectUlLiConImg {
		width: 100%;
		float: left;
		margin-top: 10rpx;
	}

	.forumSelectUlLiConImgBack {
		width: 180rpx;
		height: 180rpx;
		float: left;
		margin-right: 20rpx;
		margin-top: 10rpx;
		background-size: cover !important;
		border-radius: 10rpx;
	}

	.forumSelectUlLiConBot {
		width: 100%;
		float: left;
		margin-top: 40rpx;
	}

	.forumSelectUlLiConBotComment {
		float: left;
	}

	.forumSelectUlLiConBotComment image {
		width: 40rpx;
		float: left;
	}

	.forumSelectUlLiConBotComment text {
		float: left;
		font-size: 30rpx;
		color: #222;
		margin-left: 10rpx;
	}

	.forumSelectUlLiConBotGood {
		float: right;
	}

	.forumSelectUlLiConBotGood image {
		width: 40rpx;
		float: right;
	}

	.forumSelectUlLiConBotGood text {
		float: right;
		font-size: 30rpx;
		color: #222;
		margin-right: 10rpx;
	}

	.handleScroll {
		overflow: auto;
		height: 100vh;
	}

	/* 控制 forumSelectbtn 的基本样式和位置 */
	.forumSelectbtn {
		position: fixed;
		right: 20rpx;
		bottom: 240rpx;
		/* 中间位置，可调整 */
		transform: translateY(-50%);
		width: 70rpx;
		/* 默认只显示部分 */
		overflow: hidden;
		transition: width 0.3s ease-in-out;
		z-index: 4;
	}

	/* 当展开时的样式 */
	.forumSelectbtn.expanded {
		width: 200rpx;
		/* 全部展开的宽度，根据需要调整 */
	}

	.forumSelectbtn_1 {
		width: 200rpx;
	}
</style>