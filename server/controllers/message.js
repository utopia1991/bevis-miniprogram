const { message: { checkSignature } } = require('../qcloud')

async function post (ctx, next) {
    // 检查签名，确认是微信发出的请求
    const { signature, timestamp, nonce } = ctx.query
    if (!checkSignature(signature, timestamp, nonce)) ctx.body = 'ERR_WHEN_CHECK_SIGNATURE'

    /**
     * 解析微信发送过来的请求体
     * 可查看微信文档：https://mp.weixin.qq.com/debug/wxadoc/dev/api/custommsg/receive.html#接收消息和事件
     */
    const body = ctx.request.body

    ctx.body = 'success'
    ctx.request.data = {
      msg: 'hello, you sent successed!'
    }
}

module.exports = {
    post
}
