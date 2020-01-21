const express = require('express')
const proxyMiddleWare = require('http-proxy-middleware')

const app = new express()

let proxyOption = {
  target: 'http://wechat.rey70n.com',
  changeOrigin: true,
  ws: true
  // pathRewrite: {'^/api': '/'}
}

app.all('*', proxyMiddleWare(proxyOption))

app.listen(3000, () => {
  console.log('server start at: ', 'http://localhost:3000/')
})
