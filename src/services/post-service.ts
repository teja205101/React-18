import apiClient from "./api-client";

export interface Post {
  id: number;
  title: string;
  body: string;
}

class PostService {
    getAllPosts(){
        const controller = new AbortController();
        const request = apiClient.get<Post[]>("/posts",{ signal : controller.signal});
        return {request, cancel :()=> controller.abort()}
    }

    deletePost(id : number){
      const request = apiClient.delete(`/posts/${id}`)
      return request;
    }
    
    addPost(newPost : Post){
      return apiClient.post("/posts",newPost);
    }

    updatePost(id: number, updatedPost : Post[]){
      return apiClient.patch(`/posts/${id}`,{title : updatedPost});
    }
}

export default new PostService();