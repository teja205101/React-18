import axios, { CanceledError, AxiosError} from "axios";

const apiClient = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
    headers:{
        "Content-Type":"application/json"
    }
})

export default apiClient;

export { CanceledError, AxiosError };