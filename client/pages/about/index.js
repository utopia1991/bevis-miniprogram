Page({
  data: {
    user: {},
    gender: '',
    collection: [
      {
        url: '../movie/page/darkestHour',
        icon: 'https://img3.doubanio.com/f/talion/091d828e06cc8fa88ad7be161becfea88e14cf1c/pics/card/favourite.png',
        title: '喜欢'
      }, {
        url: '../movie/page/darkestHour',
        icon: 'https://img3.doubanio.com/f/talion/15be66dc7121d728f11cbf4e3ac674a0a68331ca/pics/card/diary.png',
        title: '日记'
      },
      {
        url: '../movie/page/darkestHour',
        icon: 'https://img3.doubanio.com/f/talion/1a4604b83e0d7e091c610fe662c9a50518188193/pics/card/album.png',
        title: '相册'
      }, {
        url: '../movie/page/darkestHour',
        icon: 'https://img3.doubanio.com/f/talion/a827877341968d09f309b70646f409d9fe39a2f9/pics/card/broadcast.png',
        title: '我的广播'
      }, {
        url: '../movie/page/darkestHour',
        icon: 'https://img3.doubanio.com/f/talion/7d8c1ccedee37780b29e790e311da66ac863cd7b/pics/card/movie.png',
        title: '电影.电视'
      }, {
        icon: 'https://img3.doubanio.com/f/talion/d0ffbee4f5ce5b59594dc53fad59c93cb3e8f646/pics/card/read.png',
        title: '读书'
      }, {
        url: '../movie/page/darkestHour',
        icon: 'https://img3.doubanio.com/f/talion/d91d24876aaf5a441a4677a893a8d86068fbf5b1/pics/card/music.png',
        title: '音乐'
      }, {
        url: '../movie/page/darkestHour',
        icon: 'https://img3.doubanio.com/f/talion/aaa90ee88850f7665f858011bd5ea3219fca0647/pics/card/dou list.png',
        title: '我的豆列'
      }, {
        url: '../movie/page/darkestHour',
        icon: 'https://img3.doubanio.com/f/talion/175762b338bf0d1b64ca2f33f18469d3db1160ba/pics/card/activity.png',
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
