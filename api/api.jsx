import axios from "axios";
const apiURL = 'http://localhost:4000';
class RentApi {
    constructor(baseURL){
        this.api = axios.create({baseURL})
    }

    signUp = async ({username,email,password}) => {
        try {
            const {data} = await this.api.post('/signup', {username,email,password});
            console.log(data) ;
        } catch (error) {
            console.log(error);
            throw error;
        }
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