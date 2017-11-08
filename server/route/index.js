const express = require('express');
const mysql = require('mysql');
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'vueTest'
});
module.exports = () => {
    const route = express.Router();
    route.get('/api/number', (req, res) => {
        getNumberData(res);
    })

    route.post('/api/login', (req, res) => {
        validAccount(req, res);
    })

    function getNumberData(res) {
        res.send('123456');
    }

    function validAccount(req, res) {
        const reqData = JSON.parse(Object.keys(req.body)[0]);
        const account = reqData.account;
        const password = reqData.password;
        const queryStateMent = `SELECT * FROM user WHERE user_name = '${account}'`;
        // 连接数据库，查询数据
        db.query(queryStateMent, (err, data) => {
            if (err) {
                console.log(err);
                res.send('dataBase error').end();
            } else {
                if (data.length === 0) {
                    res.send(returnData(false, null, '账号不存在！'));
                } else {
                    if (password === data[0].login_password) {
                        req.session['user_id'] = data[0].user_id;
                        res.send(returnData(true, null, '验证成功！')) 
                    } else {
                        res.send(returnData(false, null, '密码错误！'));
                    }
                }
            }
             
        });
       
    }

    return route;
}

function returnData(code, data = {}, msg = '') {
    return {
        code: code ? '000' : '999',
        data: data,
        msg: msg
    };
}