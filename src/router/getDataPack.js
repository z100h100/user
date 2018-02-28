import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 123123;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

// 线上开发环境
// axios.defaults.baseURL = 'http://112.74.135.230:3215/';
// axios.defaults.baseURL = 'http://localhost:8888/';
// 线上生产环境
// axios.defaults.baseURL = 'http://api.wqbol.cn/';

//POST传参序列化
let CancelToken = axios.CancelToken;
let source = CancelToken.source();
let sources=[];
export default {
    fetch(type, url, params) {
        return new Promise((resolve, reject) => {
            switch (type) {
                case 'post':
                    var token = new CancelToken(function executor(c) {
                        sources.push(c)
                    })
                    axios.post(url, params, {
                        cancelToken: token
                    }).then(response => {
                        resolve(response.data);
                    })
                    // 取消请求（message 参数是可选的）
                    // source.cancel('Operation canceled by the user.');
                    break;
                case 'get':
                    // console.log( "我是参数 get",params)
                    axios.get(url, params)
                        .then(response => {
                            //   Indicator.close();
                            // console.log(  "get1111111111111" ,response)
                            resolve(response.data);
                        }, err => {
                            console.log("xxxx", err)
                            reject(err);
                            setTimeout(function () {
                                //   Indicator.close();
                            }, 2000);
                        }).catch((error) => {
                            console.log(error, "get2222222222")
                            reject(error)
                        })
                    break;
            }
        })
    },
    source:source,
    sources: sources
}