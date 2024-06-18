<template>
	<!-- 课程详情 -->
	<view class="schoolCon">
		<view class="schoolConT">
			<!-- <text class="schoolConTit">{{ '' }}</text> -->
			<!-- <text class="schoolConTime">发布时间：{{ getDate("yyyy-MM-dd", knowledgeInfo.createTime) }}  &nbsp;&nbsp;&nbsp;来源：合吉生智慧养老</text> -->
		</view>
		<view class="schoolCon_C">
			<view class=""> 
				<!-- <video class="pyqVideo" :src="knowledgeInfo.knowledgeVideo" controls height="300rpx"> -->
				<!-- </video> -->
			</view>
			<rich-text :nodes="contents" />
		</view>
		
		
	</view>
</template>

<script>
	import IndexApi from "@/api/index.js";
	export default {
		components: {
		},
		props: {},
	
		data() {
			
			return {
				contents:null,
				id:0
			}
		},
		onLoad(params) {
			if (params) {
				this.id = params.id || 0;
				this.getYinsi();
			}
		},
		
		methods: {
			getYinsi(){
				IndexApi.getYinsi({
				}).then(res => {
					console.log('隐私有返回', res.data.txt)
					this.contents = res.data.txt;
					// 动态设置导航栏标题
					    uni.setNavigationBarTitle({
					      title: res.data.title
					    });
				}).catch(res => {
					console.log(res)
				})
			}
		}
	}
</script>
<style>
	page{
		background: #fff !important;
	}
	.schoolCon{
		width: 90%;
		float: left;
		margin:0 20px 5%;
		padding: 20rpx;
		box-sizing: border-box;
	}
	.schoolConT{
		width: 100%;
		float: left;
		padding-bottom: 20rpx;
		border-bottom: 1px solid #ccc;
	}
	.schoolConTit{
		width: 100%;
		float: left;
		text-align: center;
		line-height: 60rpx;
		font-size: 36rpx;
		color: #222;
	}
	.schoolConTime{
		width: 100%;
		float: left;
		text-align: center;
		font-size: 26rpx;
		color: #666;
		margin-top: 14rpx;
	}
	.schoolCon_C{
		width: 100%;
		float: left;
		margin-top: 20rpx;
	}
	.schoolCon_C image{
		width: 100%;
		float: left;
	}
	.schoolCon_C text{
		width: 96%;
		float: left;
		text-align: justify;
		line-height: 40rpx;
		font-size: 30rpx;
		color: #555;
		margin-top: 10rpx;
		margin-left: 2%;
	}
	.pyqVideo{
		width: 100%;
	}
</style>