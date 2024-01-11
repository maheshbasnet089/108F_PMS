import axios from "axios";
import { baseURL } from "../config";


class ApiService{
    constructor(baseURL){
        // axios ko instance banako ho yaha
        this.api = axios.create({
        baseURL 
    })
    }
    // methods
    async getAll(endpoint){
        const response = await this.api.get(`/${endpoint}`)
        return response.data
    }
    async getById(endpoint,id){
        const response = await this.api.get(`/${endpoint}/${id}`)
        return response.data
    }
    async add(endpoint,data){
        const response = await this.api.post(`/${endpoint}`,data)
        
        return {data : response.data,status : response.status}
    }

}

const api = new ApiService(baseURL) // class instantsiation gareko ho
export default api