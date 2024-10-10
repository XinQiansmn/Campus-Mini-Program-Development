"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      activity: null
      // 用于存储当前活动详情
    };
  },
  onLoad(options) {
    const activityId = options.id;
    const activities = [
      { title: "吴靖萱回避型依恋纠正", description: "分享最近的情感经历，提升自我。", totalSlots: 30, registeredSlots: 10 },
      { title: "王钢行政管理技巧", description: "一起给学生画饼，探讨其中的深意。", totalSlots: 25, registeredSlots: 25 }
      // 其他活动数据...
    ];
    this.activity = activities[activityId];
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.activity.title),
    b: common_vendor.t($data.activity.description),
    c: common_vendor.t($data.activity.registeredSlots),
    d: common_vendor.t($data.activity.totalSlots),
    e: common_vendor.t($data.activity.registeredSlots >= $data.activity.totalSlots ? "已结束" : "立即报名"),
    f: $data.activity.registeredSlots >= $data.activity.totalSlots,
    g: common_vendor.n($data.activity.registeredSlots >= $data.activity.totalSlots ? "disabled-btn" : "active-btn")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c100148a"]]);
wx.createPage(MiniProgramPage);
