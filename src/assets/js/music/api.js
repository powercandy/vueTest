import axios from 'axios';
import jsonp from './jsonp.js';
import { commonParams, options } from './config';
export default{
    getDiscList() {
        const url = '/api/getDiscList';
        const data = Object.assign({}, commonParams, {
            platform: 'yqq',
            hostUin: 0,
            sin: 0,
            ein: 29,
            sortId: 5,
            needNewCode: 0,
            categoryId: 10000000,
            rnd: Math.random(),
            format: 'json'
        });
        return axios.get(url, {
            params: data
        });
    },
    getLyric(mid) {
        const url = '/api/lyric';
        const data = Object.assign({}, commonParams, {
            songmid: mid,
            platform: 'yqq',
            hostUin: 0,
            needNewCode: 0,
            categoryId: 10000000,
            pcachetime: +new Date(),
            format: 'json'
        });
        return axios.get(url, {
            params: data
        });
    },
    getRecommend() {
        const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
        const data = Object.assign({}, commonParams, {
            platform: 'h5',
            uin: 0,
            needNewCode: 1
        });
        return jsonp(url, data, options);
    },
    getSongList(disstid) {
        const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg';
        const data = Object.assign({}, commonParams, {
            disstid,
            type: 1,
            json: 1,
            utf8: 1,
            onlysong: 0,
            platform: 'yqq',
            hostUin: 0,
            needNewCode: 0
        });
        return jsonp(url, data, options);
    }
};