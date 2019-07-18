
const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();
const serverGallery = 'http://localhost:3009',
        serverRecommendations = 'http://localhost:4001',
        serverCheckout = 'http://localhost:3000';


app.use(express.static('dist'));



app.all('/gallery/:listingid', function(req, res) {
    console.log('server1');
    apiProxy.web(req, res, {target: serverGallery});
})


app.all('/recommendations', (req, res) => {
    proxy.web(req, res, {target: serverRecommendations})
  });
  
  app.all('/recommendations/save', (req, res) => {
    proxy.web(req, res, {target: serverRecommendations})
  });
  
  app.all('/recommendations/unsave', (req, res) => {
    proxy.web(req, res, {target: serverRecommendations})
  });

  //
  app.all('/listings', (req, res) => {
    proxy.web(req, res, {target: serverCheckout})
  });
  
  app.all('/bookings', (req, res) => {
    proxy.web(req, res, {target: serverCheckout})
  });
  
  app.all('/bookings/available/:listingId', (req, res) => {
    proxy.web(req, res, {target: serverCheckout})
  });


module.exports = app;