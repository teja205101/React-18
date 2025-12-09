import apiClient from "./api-client";

export interface Post {
  id: number;
  title: string;
  body: string;
}

class PostService {
    getAllPosts(){
        const controller = new AbortController();
        const request = apiClient.get<Post[]>("/posts",{ signal : controller.signal})
        return {request, cancel :()=> controller.abort()}
    }
}

export default new PostService();