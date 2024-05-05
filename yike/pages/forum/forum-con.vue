<template>
	<view class="">
		<view class="forumPostsTop">
			<image src="../../static/images/forum_2.png" class="forumSelectUlLiTopImg"></image>
			<view class="forumSelectUlLiTopLeft">
				<view class="forumSelectUlLiTopLeftName">
					<text class="forumSelectUlLiTopLeftNameTxt">自由的宝飞飞飞飞飞飞飞飞飞飞飞飞飞</text>
					<view class="forumSelectUlLiTopLeftNameTab">工长</view>
					<view class="forumSelectUlLiTopLeftNameTab">水电</view>
				</view>
				<view class="forumSelectUlLiTopLeftTime">2024-04-15 16:09:32</view>
			</view>
			<view class="forumPoststxt">
				<view class="forumPoststxt_t1">帖子标题帖子标题帖子标题帖子标题
				</view>
				<view class="forumPoststxt_t2">
					发布内容发布内容发布内容发布内容发布内容发内容发布内容发布内容发布内容发布内容发布内容发布内容发布内容发布内容发布内容发布内容发布内容发布内容欢迎大家批斗留言！！
				</view>
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

				<view class="forumSelectUlLiConBotGood" @click="toggleLike">
					<image :src="likeImage" mode="widthFix"></image>
					<text :class="{'liked-text': isLiked}">{{ likeText }}({{ formattedNumber }})</text>
				</view>

			</view>
		</view>
		<view class="forumPostsBot">
			<view class="forumPostsBotTit">
				<view class="forumPostsBotT_1">全部回复</view>
				<view class="forumPostsBotT_2">
					<text class="forumPostsBotT_2On">热门</text>
					<text>正序</text>
				</view>
			</view>
			<view class="forumPostsBotUl">
				<view class="forumPostsBotUlLi">
					<view class="forumPostsBotUlLiTop">
						<image src="../../static/images/forum_2.png" class="forumPostsBotUlLiTopImg"></image>
						<view class="forumPostsBotUlLiTopLeft">
							<text class="forumPostsBotUlLiTopLeftName">自由的宝飞飞飞</text>
							<view class="forumPostsBotUlLiTopLeftTab">
								<view class="forumPostsBotUlLiTopLeftTabLand">
									楼主
								</view>
								<view style="background:#ffdb00" class="forumPostsBotUlLiTopLeftTabLi">
									水电
								</view>
								<view style="background:#ffdb00" class="forumPostsBotUlLiTopLeftTabLi">
									水电
								</view>
							</view>
						</view>
						<view class="forumPostsBotUlLiTopLeftGood">
							<image src="../../static/images/forum_8.png" mode="widthFix"></image>
							<text>2232</text>
						</view>
					</view>
					<view class="forumPostsBotUlLiTxt">
						<view class="forumPostsBotUlLiTxt_t1">
							内容文字内容文字内容文字内容文字~~~
							哈哈哈哈~~~~~
						</view>
						<view class="forumPostsBotUlLiTxt_t2">
							2024-04-15 16:09:32
						</view>
					</view>
					<view class="forumPostsBotUlLiComment">
						<view class="forumPostsBotUlLiCommentLi">
							<text class="forumPostsBotUlLiCommentLi_t1">
								你喜欢的唐唐 <view class="forumPostsBotUlLiTopLeftTabLand">楼主</view>：
							</text>
							<text class="forumPostsBotUlLiCommentLi_t2">
								什么啊
							</text>
						</view>

						<view class="forumPostsBotUlLiCommentLi">
							<text class="forumPostsBotUlLiCommentLi_t1">
								无语了：回复 你喜欢的唐唐
							</text>
							<text class="forumPostsBotUlLiC ommentLi_t2">
								什么啊什么啊？
							</text>
						</view>

						<view class="forumPostsBotUlLiCommentLi">
							<text class="forumPostsBotUlLiCommentLi_t1">
								你喜欢的唐唐：
							</text>
							<text class="forumPostsBotUlLiCommentLi_t2">
								什么啊
							</text>
						</view>
						<view class="forumPostsBotUlLiCommentLiMore">查看全部回复 >></view>
					</view>
				</view>

				<view class="forumPostsBotUlLi">
					<view class="forumPostsBotUlLiTop">
						<image src="../../static/images/forum_2.png" class="forumPostsBotUlLiTopImg"></image>
						<view class="forumPostsBotUlLiTopLeft">
							<text class="forumPostsBotUlLiTopLeftName">娃哈哈哈哈哈</text>
							<view class="forumPostsBotUlLiTopLeftTab">
								<view style="background:#ffdb00" class="forumPostsBotUlLiTopLeftTabLi">
									水电
								</view>
								<view style="background:#ffdb00" class="forumPostsBotUlLiTopLeftTabLi">
									水电
								</view>
							</view>
						</view>
						<view class="forumPostsBotUlLiTopLeftGood">
							<image src="../../static/images/forum_8.png" mode="widthFix"></image>
							<text>2232</text>
						</view>
					</view>
					<view class="forumPostsBotUlLiTxt">
						<view class="forumPostsBotUlLiTxt_t1">
							内容文字内容文字内容文字内容文字~~~
							哈哈哈哈~~~~~
						</view>
						<view class="forumPostsBotUlLiTxt_t2">
							2024-04-15 16:09:32
						</view>
					</view>
				</view>

<view class="forumPostsBotUlLi">
					<view class="forumPostsBotUlLiTop">
						<image src="../../static/images/forum_2.png" class="forumPostsBotUlLiTopImg"></image>
						<view class="forumPostsBotUlLiTopLeft">
							<text class="forumPostsBotUlLiTopLeftName">娃哈哈哈哈哈</text>
							<view class="forumPostsBotUlLiTopLeftTab">
								<view style="background:#ffdb00" class="forumPostsBotUlLiTopLeftTabLi">
									水电
								</view>
								<view style="background:#ffdb00" class="forumPostsBotUlLiTopLeftTabLi">
									水电
								</view>
							</view>
						</view>
						<view class="forumPostsBotUlLiTopLeftGood">
							<image src="../../static/images/forum_8.png" mode="widthFix"></image>
							<text>2232</text>
						</view>
					</view>
					<view class="forumPostsBotUlLiTxt">
						<view class="forumPostsBotUlLiTxt_t1">
							内容文字内容文字内容文字内容文字~~~
							哈哈哈哈~~~~~
						</view>
						<view class="forumPostsBotUlLiTxt_t2">
							2024-04-15 16:09:32
						</view>
					</view>
				</view>

<view class="forumPostsBotUlLi">
					<view class="forumPostsBotUlLiTop">
						<image src="../../static/images/forum_2.png" class="forumPostsBotUlLiTopImg"></image>
						<view class="forumPostsBotUlLiTopLeft">
							<text class="forumPostsBotUlLiTopLeftName">娃哈哈哈哈哈</text>
							<view class="forumPostsBotUlLiTopLeftTab">
								<view style="background:#ffdb00" class="forumPostsBotUlLiTopLeftTabLi">
									水电
								</view>
								<view style="background:#ffdb00" class="forumPostsBotUlLiTopLeftTabLi">
									水电
								</view>
							</view>
						</view>
						<view class="forumPostsBotUlLiTopLeftGood">
							<image src="../../static/images/forum_8.png" mode="widthFix"></image>
							<text>2232</text>
						</view>
					</view>
					<view class="forumPostsBotUlLiTxt">
						<view class="forumPostsBotUlLiTxt_t1">
							内容文字内容文字内容文字内容文字~~~
							哈哈哈哈~~~~~
						</view>
						<view class="forumPostsBotUlLiTxt_t2">
							2024-04-15 16:09:32
						</view>
					</view>
				</view>

			</view>
		</view>
		<!-- 底部回复 -->
		<view class="forumPostsReply">
			<input class="forumPostsReplyInt" type="text" placeholder="发布评论，说点好听的" />
			<view class="forumPostsReplySub">发布</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLiked: false, // 是否已点赞的状态
				likeImage: '../../static/images/forum_8.png', // 初始未点赞时的图片
				likeText: '点赞',
				number: 1,
			}
		},
		methods: {
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

		},
	}
</script>

<style>
	.forumPostsTop {
		width: 90%;
		float: left;
		margin-left: 5%;
		margin-top: 30rpx;
	}

	.forumSelectUlLiTopImg {
		width: 120rpx;
		height: 120rpx;
		border-radius: 10rpx;
		float: left;
	}

	.forumSelectUlLiTopLeft {
		width: calc(100% - 140rpx);
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
		width: 60%;
	}

	.forumSelectUlLiTopLeftNameTab {
		float: left;
		font-size: 25rpx;
		color: #fff;
		background: #ffdb00;
		border-radius: 100px;
		padding: 3rpx 10rpx;
		margin-left: 10rpx;
	}

	.forumSelectUlLiTopLeftTime {
		width: 100%;
		float: left;
		font-size: 26rpx;
		color: #999;
		margin-top: 4rpx;
	}

	.forumPoststxt {
		width: 100%;
		float: left;
		margin-top: 50rpx;
	}

	.forumPoststxt_t1 {
		width: 100%;
		float: left;
		font-weight: bold;
		font-size: 32rpx;
		color: #222;
	}

	.forumPoststxt_t2 {
		width: 100%;
		float: left;
		font-size: 28rpx;
		color: #222;
		margin-top: 30rpx;
		line-height: 46rpx;
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

	.forumSelectUlLiConBotGood {
		float: left;
		width: 100%;
		margin-top: 40rpx;
	}

	.forumSelectUlLiConBotGood image {
		width: 80rpx;
		float: left;
		margin-left: calc(50% - 40rpx);
	}

	.forumSelectUlLiConBotGood text {
		float: left;
		font-size: 34rpx;
		color: #222;
		width: 100%;
		margin-top: 20rpx;
		text-align: center;
	}

	.forumPostsBot {
		width: 90%;
		float: left;
		border-top: 10px solid #f6f6f6;
		padding: 30rpx 5%;
		margin-top: 40rpx;
		margin-bottom: 140rpx;
	}

	.forumPostsBotTit {
		width: 100%;
		float: left;
		margin-top: 20rpx;
	}

	.forumPostsBotT_1 {
		float: left;
		color: #222;
		font-weight: bold;
		font-size: 32rpx;
		margin-top: 10rpx;
	}

	.forumPostsBotT_2 {
		float: right;
		padding: 15rpx 20rpx;
		background: #f8f8f8;
		border-radius: 100px;
	}

	.forumPostsBotT_2On {
		color: #f00 !important;
	}

	.forumPostsBotT_2 text {
		float: left;
		color: #222;
		font-size: 30rpx;
		padding: 0 10rpx;
	}

	.forumPostsBotUl {
		width: 100%;
		float: left;
		margin-top: 20rpx;
	}

	.forumPostsBotUlLi {
		width: 100%;
		float: left;
		border-bottom: 2px solid #f8f8fa;
		padding-bottom: 30rpx;
		margin-top: 20rpx;
	}

	.forumPostsBotUlLiTop {
		width: 100%;
		float: left;
		margin-top: 30rpx;
	}

	.forumPostsBotUlLiTopImg {
		width: 100rpx;
		height: 100rpx;
		float: left;
		border-radius: 10rpx;
	}

	.forumPostsBotUlLiTopLeft {
		width: calc(80% - 120rpx);
		float: left;
		margin-left: 20rpx;
	}

	.forumPostsBotUlLiTopLeftName {
		width: 100%;
		float: left;
		font-size: 30rpx;
		color: #222;
	}

	.forumPostsBotUlLiTopLeftTab {
		width: 100%;
		float: left;
		margin-top: 10rpx;
	}

	.forumPostsBotUlLiTopLeftTabLand {
		float: left;
		margin-right: 10rpx;
		border: 1px solid #6c90fe;
		font-size: 26rpx;
		color: #6c90fe;
		padding: 0rpx 10rpx;
		border-radius: 100rpx;
	}

	.forumPostsBotUlLiTopLeftTabLi {
		float: left;
		margin-right: 10rpx;
		font-size: 30rpx;
		color: #fff;
		padding: 1rpx 11rpx;
		border-radius: 100rpx;
	}

	.forumPostsBotUlLiTopLeftGood {
		width: 20%;
		float: right;
	}

	.forumPostsBotUlLiTopLeftGood image {
		width: 40rpx;
		float: left;
	}

	.forumPostsBotUlLiTopLeftGood text {
		float: left;
		font-size: 30rpx;
		color: #222;
		margin-left: 8rpx;
		margin-top: 4rpx
	}

	.forumPostsBotUlLiTxt {
		width: 100%;
		float: left;
		margin: 40rpx 0 0;
	}

	.forumPostsBotUlLiTxt_t1 {
		width: 100%;
		float: left;
		font-size: 30rpx;
		color: #222;
		line-height: 46rpx;
	}

	.forumPostsBotUlLiTxt_t2 {
		width: 100%;
		float: left;
		font-size: 28rpx;
		color: #999;
		margin-top: 20rpx;
	}

	.forumPostsBotUlLiComment {
		background: #f8f8fa;
		float: left;
		border-radius: 10px;
		padding: 0 20rpx;
		box-sizing: border-box;
		margin-top: 30rpx;
	}

	.forumPostsBotUlLiCommentLi {
		margin-top: 30rpx;
		width: 100%;
		float: left;
	}

	.forumPostsBotUlLiCommentLi_t1 {
		float: left;
		font-size: 30rpx;
		color: #777;
	}

	.forumPostsBotUlLiCommentLi_t2 {
		float: left;
		font-size: 30rpx;
		color: #222;
	}

	.forumPostsBotUlLiCommentLiMore {
		width: 100%;
		float: left;
		font-size: 30rpx;
		color: #6c90fe;
		margin: 30rpx 0;
		text-align: center;
	}
	.forumPostsReply{
		width: 100%;
		position: fixed;
		z-index: 99;
		bottom: 0;
		left: 0;
		background: #fff;
		padding: 20rpx 30rpx;
		box-sizing: border-box;
	}
	.forumPostsReplyInt{
		width: calc(70% - 70rpx);
		float: left;
		padding: 15rpx 35rpx;
		background: #eee;
		border-radius: 100px;
		font-size: 30rpx;
		color: #222;
	}
	.forumPostsReplySub{
		float: right;
		background: #6c90fe;
		color: #fff;
		font-size: 30rpx;
		padding: 15rpx 40rpx;
		border-radius: 100px;
	}
</style>