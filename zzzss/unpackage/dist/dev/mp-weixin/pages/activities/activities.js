"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      // 活动列表，暂时使用一些占位数据
      activities: [
        { title: "吴靖萱回避型依恋纠正", description: "分享最近的情感经历，提升自我。" },
        { title: "王钢行政管理技巧", description: "一起给学生画饼，探讨其中的深意。" },
        { title: "黄林生编程马拉松", description: "校园编程挑战赛，快速开发，展示你的实力！" },
        { title: "106户外健身", description: "自律的肌肉掌管者一起参加的户外活动，有嘉宾汪哥私人指导。" },
        { title: "扶贫终结者", description: "为需要帮助的吴靖萱，黄雨欣，希尔薇，汪欣倩捐赠物资和爱心。" },
        { title: "黄雨欣大王讲座", description: "黄雨欣将分享她的成王之路。" },
        { title: "汪哥成功学讲座", description: "汪哥将讲述她的创业故事。" },
        { title: "希尔薇读书分享会", description: "希尔薇将推荐她的同人文。" }
      ]
    };
  },
  methods: {
    // 动态跳转到活动详情页面
    goToActivityDetail(activity, index) {
      common_vendor.index.navigateTo({
        url: `/pages/activities/activityDetail/activityDetail?id=${index}`
      });
    },
    // 模拟发布活动功能
    publishActivity() {
      common_vendor.index.showToast({
        title: "发布活动功能待开发",
        icon: "none"
      });
    },
    // 模拟加载更多
    loadMore() {
      common_vendor.index.showToast({
        title: "加载更多活动",
        icon: "none"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.publishActivity && $options.publishActivity(...args)),
    b: common_vendor.f($data.activities, (activity, index, i0) => {
      return {
        a: common_vendor.t(activity.title),
        b: common_vendor.t(activity.description),
        c: index,
        d: common_vendor.o(($event) => $options.goToActivityDetail(activity, index), index)
      };
    }),
    c: common_vendor.o((...args) => $options.loadMore && $options.loadMore(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-aeaf27eb"]]);
wx.createPage(MiniProgramPage);
