"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "Index",
  methods: {
    goToActivities() {
      common_vendor.index.navigateTo({
        url: "/pages/activities/activities"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.goToActivities && $options.goToActivities(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
