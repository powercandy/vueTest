import axios from 'axios';
import { commonParams } from './config';
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
    }
};