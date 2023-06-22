import axios from 'axios'
const instance=axios.create({
    baseURL:"https://reconnects.azurewebsites.net/api/v1/"
    //aviro 192.168.1.2
    //vivo  192.168.204.170

})
export default instance