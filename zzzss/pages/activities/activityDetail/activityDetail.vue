<template>
  <view>
    <view class="activity-title">{{ activity.title }}</view>
    <view class="activity-description">{{ activity.description }}</view>
    <view>报名人数：{{ activity.registeredSlots }}/{{ activity.totalSlots }}</view>
    <button 
      :disabled="activity.registeredSlots >= activity.totalSlots" 
      :class="activity.registeredSlots >= activity.totalSlots ? 'disabled-btn' : 'active-btn'"
    >
      {{ activity.registeredSlots >= activity.totalSlots ? '已结束' : '立即报名' }}
    </button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      activity: null // 用于存储当前活动详情
    };
  },
  onLoad(options) {
    const activityId = options.id; // 接收传递过来的活动 id 参数
    const activities = [
      { title: '吴靖萱回避型依恋纠正', description: '分享最近的情感经历，提升自我。', totalSlots: 30, registeredSlots: 10 },
      { title: '王钢行政管理技巧', description: '一起给学生画饼，探讨其中的深意。', totalSlots: 25, registeredSlots: 25 },
      // 其他活动数据...
    ];

    // 根据 id 动态加载活动数据
    this.activity = activities[activityId];
  }
};
</script>

<style scoped>
.active-btn {
  background-color: #4ea1d3;
}
.disabled-btn {
  background-color: #ccc;
}
</style>
