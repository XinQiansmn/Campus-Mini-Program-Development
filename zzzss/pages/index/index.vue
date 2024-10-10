<template>
  <view class="container">
    <button class="btn btn1">竞赛组队</button>
     <button class="btn btn2" @click="goToActivities">校园活动</button> <!-- 点击跳转到校园活动页面 -->
    <button class="btn btn3">二手闲置</button>
    <button class="btn btn4">快递代取</button>
  </view>
</template>

<script>
export default {
  name: 'Index',
  methods: {
    goToActivities() {
      // 使用 uni.navigateTo 跳转到校园活动页面
      uni.navigateTo({
        url: '/pages/activities/activities'
      });
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center; /* 将按钮组放在页面中间 */
  align-items: center;
  height: 100vh; /* 设置容器高度为视口高度 */
  background-color: #fff8dc; /* 柔和的淡黄色背景 */
    
}

.btn {
  width: 80%;
  padding: 20rpx 0;
  color: white;
  font-size: 20px; /* 增大文字的字体大小 */
  border-radius: 10rpx;
  text-align: center;
  margin-bottom: 10rpx; /* 按钮之间的间距 */
}

/* 定义每个按钮的不同背景色，颜色逐渐加深 */
.btn1 {
  background-color: #ffd966; /* 较深的柔黄色 */
}

.btn2 {
  background-color: #ffc107; /* 深黄色 */
}

.btn3 {
  background-color: #ffb300; /* 更深的橙黄色 */
}

.btn4 {
  background-color: #ff8c00; /* 深橙色 */
}
</style>
