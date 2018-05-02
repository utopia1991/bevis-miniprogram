Page({
  data: {
    user: {},
    gender: '',
    collection: [
      {
        url: '../movie/page/darkestHour',
        icon: '../../static/card/favourite.png',
        title: '喜欢'
      }, {
        url: '../movie/page/darkestHour',
        icon: '../../static/card/diary.png',
        title: '日记'
      },
      {
        url: '../movie/page/darkestHour',
        icon: '../../static/card/album.png',
        title: '相册'
      }, {
        url: '../movie/page/darkestHour',
        icon: '../../static/card/broadcast.png',
        title: '我的广播'
      }, {
        url: '../movie/page/darkestHour',
        icon: '../../static/card/movie.png',
        title: '电影.电视'
      }, {
        icon: '../../static/card/read.png',
        title: '读书'
      }, {
        url: '../movie/page/darkestHour',
        icon: '../../static/card/music.png',
        title: '音乐'
      }, {
        url: '../movie/page/darkestHour',
        icon: '../../static/card/dou list.png',
        title: '我的豆列'
      }, {
        url: '../movie/page/darkestHour',
        icon: '../../static/card/activity.png',
        title: '同城活动'
      }
    ]
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
  genderFomat: function (e) {
    let ob = {
      1: ' 男',
      2: '女'
    }
    return ob[e]
  }
})
