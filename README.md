# integration-demo

## cko 模式

[ckpay/demo.html](./ckpay/demo.html)

Step 1: 前端对接内嵌，获取token。这步不同的收单行前端js也会不同。
通过接口获取公钥。

```javascript
const publicKeyUrl = `${baseUrl}/v1/saas/checkout?apiKey=${apiKey}`;
//class 为 card-number-frame expiry-date-frame cvv-frame 的元素是必须的

```

有了公钥，才能显示ckpay内嵌页面。

用户输入卡号、过期时间、cvv后，提交后能拿到付款token。

Step 2: 调用 “收单-创建支付订单（跳转模式）” 接口。

Step 3: 调用付款接口，可以前端也可以后台调用，建议后台调用。返回参数请参考 “收单-付款（直连模式）” 的返回参数

```javascript
const payUrl = `${baseUrl}/v1/channel/payment`;let params = { id: orderId, tokenization: token,};
```

## tpay 模式

[tpay/demo.html](./tpay/demo.html)

Step 1: 前端对接内嵌，获取token。通过接口获取公钥以及其他信息。

```javascript
const publicKeyUrl = `${baseUrl}/v1/checkout?id=${orderId}`;

```

有了公钥和Token，才能显示该订单对应tpay内嵌页面。

Step 2: 用户输入卡号、过期时间、cvv后，点击付款，结束支付

Step 3: 在回调接口中获取付款结果，跳转相应的returnUrl
