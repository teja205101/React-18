import { useEffect, useState } from "react";
import PostService, { type Post } from "../services/post-service";
import { AxiosError, CanceledError } from "axios";

const usePosts =()=>{

    const [ posts, setPosts] = useState<Post[]>([])
    
       const [error, setError] = useState("")
    
       const [loading, setLoading] = useState(false);
    
    
        useEffect(()=>{
    
          setLoading(true);
          const { request, cancel } = PostService.getAll<Post>(); 
    
          request
            .then(({ data: posts }) => {
              setPosts(posts);
              setLoading(false);
            })
            .catch((error) => {
              if (error instanceof CanceledError) return;
              setError((error as AxiosError).message);
              setLoading(false);
            });
    
          return () => cancel();
        },[])

        return {posts,error,loading, setPosts}
}

export default usePosts;