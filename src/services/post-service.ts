import httpService from "./http-service";


export interface Post {
  id: number;
  title: string;
  body: string;
}



export default httpService("/posts");