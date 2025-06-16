# integration-demo

## ckpay 模式

[ckpay/demo.html](./ckpay/demo.html)

### Step 1: 获取token

通过接口获取公钥。

```javascript
const publicKeyUrl = `${baseUrl}/v1/saas/checkout?apiKey=${apiKey}`;
//class 为 card-number-frame expiry-date-frame cvv-frame 的元素是必须的

```

有了公钥，才能显示ckpay内嵌页面。

用户输入卡号、过期时间、cvv后，提交后能拿到付款token。

### Step 2: 调用 “收单-创建支付订单（跳转模式）” 接口

### Step 3: 调用付款接口

可以前端也可以后台调用，建议后台调用。返回参数请参考 “收单-付款（直连模式）” 的返回参数

```javascript
const payUrl = `${baseUrl}/v1/channel/payment`;let params = { id: orderId, tokenization: token,};
```

## tpay 模式

[tpay/demo.html](./tpay/demo.html)

### Step 1: 调用 “收单-创建支付订单（跳转模式）” 接口

### Step 2: 获取支付参数

```javascript
const publicKeyUrl = `${baseUrl}/v1/checkout?id=${orderId}`;

```

有了公钥和Token，才能显示该订单对应tpay内嵌页面。

### Step 3: 用户输入卡号、过期时间、cvv后，点击付款，结束支付

### Step 4: 在回调接口中获取付款结果，跳转相应的returnUrl

## adyen 模式

[adyen/demo.html](./adyen/demo.html)

### Step 1: 准备完成订单的参数

#### clientKey

#### orderId

#### 配置请求域名

```javascript
const clientKey = `clientKey`
const orderId =`当前订单号`
```

### Step 2: 调用接口

将获取的卡号信息通过`JSON.stringify`函数转换为字符串

```javascript
    const cardDetailInfo = {
        encryptedCardNumber: '获取到的加密卡号',
        encryptedExpiryMonth: '获取到的加密月份',
        encryptedExpiryYear: '获取到的加密年份',
        encryptedSecurityCode: '获取到的加密安全码',
    }
    let params = {
      id: orderId,
      tokenization: JSON.stringify(cardDetailInfo),
    };
```

## antom 模式

[antom/demo.html](./antom/demo.html)

### Step 1: 调用 “收单-创建支付订单（跳转模式）” 接口

### Step 2: 获取支付参数

```javascript
const publicKeyUrl = `${baseUrl}/v1/checkout?id=${orderId}`;

```

有了sessionData，才能显示该订单对应antom内嵌页面。

### Step 3: 用户输入卡号、过期时间、cvv 姓名 后，点击付款，结束支付

### Step 4: 在回调接口中获取付款结果，跳转相应的returnUrl


