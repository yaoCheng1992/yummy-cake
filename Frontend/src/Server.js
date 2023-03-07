import Axios from 'axios'
import Api from './Api'
class Server {
    login(params) {
        return Axios.post(Api.login,  params ,  {headers: {
            'Content-Type': 'application/json'
          }})
    }
    register(params) {
        return Axios.post(Api.register,  params ,{headers: {
            'Content-Type': 'application/json'
          }})
    } 
    customerRegister(params) {
        return Axios.post(Api.customerRegister, params, {headers: {
            'Content-Type': 'application/json',
          }},)
    } 

    ownerRegister(params) {
        return Axios.post(Api.ownerRegister, params, {headers: {
            'Content-Type': 'application/json',
          }},)
    } 

    customerActivation(id){
        return Axios.post(Api.customerActivation + id,{headers: {
            'Content-Type': 'application/json',
        }})
    }

    ownerActivation(id){
        return Axios.post(Api.ownerActivation + id,{headers: {
            'Content-Type': 'application/json',
        }})
    }
    
}



export default new Server()