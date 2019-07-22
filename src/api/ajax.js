
// 发送axios请求
import axios from 'axios'
export default function ajax(url,data={},type='GET'){
  return new Promise((resolve,reject) => {
    let promise
    // 执行异步请求
    if(type==='GET'){
      promise = axios.get(url,{params:data})
    } else{
      promise = axios.post(url,data)
    }
    promise.then(response => {
      // 成功的数据，调用resolve
      resolve(response.data)
    })
    .catch(error => {
      // 失败的数据，调用reject
      alert('请求出错:'+ error.message)
    })
  })
}
