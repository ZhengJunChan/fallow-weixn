//logs.js
const util = require('../../../utils/util.js')
import { activity, activityList } from '../data.js'

Page({
  data: {
    activityList: [],
    scrollTop: 300
  },
  onLoad: function () {
    this.setData({
      activityList: activityList
    })
  },
  goDetailPage: function (event) {
    const target = event.currentTarget
    
    wx.navigateTo({
      url: `../activity-detail/index?id=${target.dataset.id}`
    })
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  }
})
