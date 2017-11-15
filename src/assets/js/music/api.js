import axios from 'axios';
import jsonp from './jsonp.js';
import { commonParams, options } from './config';
export default{
    /* 获取推荐歌单列表数据 */
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
    /* 获取轮播图列表数据 */
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
    },
    /* 获取歌手列表数据 */
    getSingerList() {
        const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg';
        const data = Object.assign({}, commonParams, {
            channel: 'singer',
            page: 'list',
            key: 'all_all_all',
            pagesize: 100,
            pagenum: 1,
            hostUin: 0,
            needNewCode: 0,
            platform: 'yqq'
        });
        return jsonp(url, data, options);
    },
    /* 获取歌手详情数据 */
    getSingerDetail(singerId) {
        const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg';
        const data = Object.assign({}, {
            hostUin: 0,
            needNewCode: 0,
            platform: 'yqq',
            order: 'listen',
            begin: 0,
            num: 80,
            songstatus: 1,
            singermid: singerId
        });
        return jsonp(url, data, options);
    }
};