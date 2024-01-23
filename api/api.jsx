import axios from "axios";
const apiURL = 'http://localhost:4000';
class RentApi {
    constructor(baseURL){
        this.api = axios.create({baseURL})
    }
    getAllUsers = async () =>{
        try {
           const {data} = await this.api.get('/get-users');
           return data;
         
        } catch (error) {
            console.error(error);
        }
        
    }
}

const rentApi = new RentApi(apiURL);

export default rentApi;