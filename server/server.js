const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

const server = express();

server.use(bodyParser.urlencoded({ extended: false }));

server.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
        res.send(200);
        /make the require of options turn back quickly/
    } else {
        next();
    }
});

server.listen(3333, () => {
    console.log("正在监听3333端口");

});
// deal (cookie, session)
(() => {
    server.use(cookieParser());
    let keyArr = [];
    for (let i = 0; i < 100000; i++) {
        keyArr[i] = "xsa_" + Math.random() * 100 + i;
    }
    server.use(cookieSession({
        name: "hujiang",
        keys: keyArr,
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
        secure: false,
        domain: 'http://10.133.37.19:3333'
    }))
})();

server.use('/', require('./route/index.js')());