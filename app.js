//app.js
App({
  onLaunch: function (e) {
    console.log(e)
     var res =  wx.getSystemInfoSync();
    this.globalData.windowWidth=res.windowWidth;
    this.globalData.windowHeight=res.windowHeight;
  },
  globalData: {
    userInfo: null
  }
})