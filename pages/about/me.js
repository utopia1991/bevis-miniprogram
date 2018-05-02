Page({
  data: {
    user: {},
    gender: ''
  },
  onLoad: function () {
    let user = wx.getStorageSync('user')

    if (user) {
      this.setData({
        user: user,
        gender: this.genderFomat(user.gender)
      })
    } else {
      wx.getUserInfo({
        success: res => {
          this.setData({
            user: user
          })
        }
      })
    }
  },
  genderFomat:function (e) {
    console.log(e)
    let ob = {
      1: ' 男',
      2: '女'
    }
    return ob[e]
  }
})
