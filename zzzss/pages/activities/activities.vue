<template>
  <view class="container">
    <!-- 发布活动按钮 -->
    <view class="publish-btn-container">
      <button class="publish-btn" @click="publishActivity">发布活动</button>
    </view>

    <!-- 活动列表展示 -->
    <scroll-view
      class="activity-list"
      scroll-y="true"
      :scroll-with-animation="true"
      style="height: 100%;"
      lower-threshold="50"
      @scrolltolower="loadMore"
    >
      <view class="activity-list-inner">
        <view v-for="(activity, index) in activities" :key="index" class="activity-item" @click="goToActivityDetail(activity, index)">
          <view class="activity-title">{{ activity.title }}</view>
          <view class="activity-description">{{ activity.description }}</view>
        </view>
        <view class="refresh-tip">向下拉刷新 ^_^</view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 活动列表，暂时使用一些占位数据
      activities: [
        { title: '吴靖萱回避型依恋纠正', description: '分享最近的情感经历，提升自我。' },
        { title: '王钢行政管理技巧', description: '一起给学生画饼，探讨其中的深意。' },
        { title: '黄林生编程马拉松', description: '校园编程挑战赛，快速开发，展示你的实力！' },
        { title: '106户外健身', description: '自律的肌肉掌管者一起参加的户外活动，有嘉宾汪哥私人指导。' },
        { title: '扶贫终结者', description: '为需要帮助的吴靖萱，黄雨欣，希尔薇，汪欣倩捐赠物资和爱心。' },
        { title: '黄雨欣大王讲座', description: '黄雨欣将分享她的成王之路。' },
        { title: '汪哥成功学讲座', description: '汪哥将讲述她的创业故事。' },
        { title: '希尔薇读书分享会', description: '希尔薇将推荐她的同人文。' }
      ]
    };
  },
  methods: {
    // 动态跳转到活动详情页面
    goToActivityDetail(activity, index) {
      uni.navigateTo({
        url: `/pages/activities/activityDetail/activityDetail?id=${index}`
      });
    },
    // 模拟发布活动功能
    publishActivity() {
      uni.showToast({
        title: '发布活动功能待开发',
        icon: 'none'
      });
    },
    // 模拟加载更多
    loadMore() {
      uni.showToast({
        title: '加载更多活动',
        icon: 'none'
      });
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f0f8ff;
}

.publish-btn-container {
  display: flex;
  justify-content: center;
  padding: 20rpx;
}

.publish-btn {
  width: 90%;
  padding: 15rpx;
  margin: 10rpx auto;
  background-color: #4ea1d3; /* 蓝色按钮 */
  color: #fff;
  border-radius: 10rpx;
  text-align: center;
  font-size: 18px; /* 与活动标题一致的字体大小 */
  font-weight: bold; /* 使按钮文字更加醒目 */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* 增加阴影，提升质感 */
  border: none; /* 去除边框 */
  transition: background-color 0.3s ease;
}

.publish-btn:hover {
  background-color: #3a8bb0; /* 鼠标悬停时按钮颜色变化 */
}

.activity-list {
  flex: 1;
  padding: 20rpx;
  background-color: #f0f8ff; /* 确保背景色覆盖滚动区域 */
}

.activity-list-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  box-sizing: border-box; /* 包含内边距和边框在元素的总宽度和总高度内 */
}

.activity-item {
  background-color: #fff;
  border-radius: 20rpx; /* 圆角边框 */
  padding: 20rpx;
  margin-bottom: 20rpx;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 90%; /* 确保活动项宽度一致 */
   box-sizing: border-box; /* 包含内边距和边框在元素的总宽度和总高度内 */
}

.activity-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.activity-description {
  font-size: 14px;
  color: #666;
  margin-top: 10rpx;
}

.refresh-tip {
  text-align: center;
  padding: 10rpx;
  color: #999;
  font-size: 14px;
}
</style>