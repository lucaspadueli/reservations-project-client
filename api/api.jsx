import axios from "axios";
const apiURL = 'http://localhost:8000';
//import { saveToken } from "../src/utils/local-storage.ultils";
class RentApi {
    constructor(baseURL){
        this.api = axios.create({baseURL})
    }

    rentRoom = async ({date,roomId,timeSlot}) => {
        try {
            const {data} = this.api.post("/create-reservation", {date,roomId,timeSlot});
            console.log(data);
        } catch (error) {
            console.error(error);
            throw error;
        }
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

    login = async ({username,password}) => {
        
        try{
            const user = await this.api.post('/login',{username,password});
            console.log(user);
 //           saveToken(data.authToken);
            return user
        }
        catch(error){
            console.log("Usuário ou senha incorretos!")
            return error;
            
        }
            
        
    }

    verify = async (token) => {
        const {data} = await this.api.get('/verify',{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return data;
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