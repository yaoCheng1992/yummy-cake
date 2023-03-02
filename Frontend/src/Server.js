import Axios from 'axios'
import Api from './Api'
class Server {
    login(params) {

        return Axios.post(Api.login, { params },  {headers: {
            'Content-Type': 'application/json'
          }})



    }
    register(params) {
        return Axios.post(Api.register, { params },{headers: {
            'Content-Type': 'application/json'
          }})
    } 
    customerRegister(params) {
        return Axios.post(Api.customerRegister, { params },{headers: {
            'Content-Type': 'application/json'
          }})
    } 
    
}



export default new Server()