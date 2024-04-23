<template>
  <view>
    <view v-for="user in users" :key="user.id">
      <text>{{ user.name }}</text>
    </view>
  </view>
</template>

<script>
import IndexApi from '../../api/index';

export default {
  data() {
    return {
      users: []
    };
  },
  methods: {
   getindexData(){
	   const { memberInfo } = await MemberApi.list({ memberId: this.memberInfo.memberId }, true);
	   //const { memberInfo }后台给我数组
	   // { memberId: this.memberInfo.memberId }  我给后台传的数据
   },
   goodsList(){
	   const {goodsList } = await MemberApi.goodsList({ memberId: this.memberInfo.memberId }, true);
   }
  },
  mounted() {
    this.getindexData(); // 组件加载时获取数据
  }
};
</script>
