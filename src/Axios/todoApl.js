import axios from "axios";

const instance=axios.create({
baseURL:"https://todolist-985ee-default-rtdb.asia-southeast1.firebasedatabase.app/",
 timeout:15000
})

instance.interceptors.request.use(function(config){
    console.log(config);
    return config
},function(err){
return Promise.reject(err)})

instance.interceptors.response.use(function(respones){
    console.log(respones)
    return respones;
} ,function(err){
    console.log(err)
    return Promise.reject(err)
})

export default instance