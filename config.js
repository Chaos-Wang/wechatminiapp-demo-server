const CONF = {
    port: '5757',
    rootPathname: '/www/wwwroot/www.wx.chaoswang.cn/',

    // 微信小程序 App ID
    appId: 'wx2ad27034a7eb68d4',

    // 微信小程序 App Secret
    appSecret: '3453ed92e1f33294aa3bf944a4857bad',

    // 是否使用腾讯云代理登录小程序
    useQcloudLogin: false,

    /**
     * MySQL 配置，用来存储 session 和用户信息
     * 若使用了腾讯云微信小程序解决方案
     * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
     */
    mysql: {
        host: '172.16.0.16',
        port: 3306,
        user: 'root',
        db: 'cAuth',
        pass: 'wxb991115@@',
        char: 'utf8mb4'
    },

    cos: {
        /**
         * 地区简称
         * @查看 https://cloud.tencent.com/document/product/436/6224
         */
        region: 'ap-guangzhou',
        // Bucket 名称
        fileBucket: 'qcloudtest',
        // 文件夹
        uploadFolder: ''
    },

    // 微信登录态有效期
    wxLoginExpires: 7200,
  
  serverHost: 'https://wx.chaoswang.cn',
    tunnelServerUrl: 'http://tunnel.ws.qcloud.la',
    tunnelSignatureKey: '27fb7d1c161b7ca52d73cce0f1d833f9f5b5ec89',
  	// 腾讯云相关配置可以查看云 API 秘钥控制台：https://console.cloud.tencent.com/capi
    qcloudAppId: '1255465043',
    qcloudSecretId: 'AKIDQExVtCKp8GF8tHtSFwSnxlcIn7JKrAnG',
    qcloudSecretKey: 'TlsrfLg1BE9tW8d1a4NrhQ9nMkycCxQs',
    wxMessageToken: 'weixinmsgtoken',
    networkTimeout: 30000
}

module.exports = CONF
