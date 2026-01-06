import { AxiosError } from "./services/api-client";
import PostService, { type Post } from "./services/post-service";

import usePosts from "./hooks/usePosts";

function App() {
  const { posts, error, loading, setPosts } = usePosts();

  const handleDelete = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
    const originalPosts = [...posts];

    PostService.delete(id)
      .then(() => console.log(`Post deleted of ${id}`))
      .catch((error: AxiosError) => {
        console.log(error);
        setPosts(originalPosts);
      });
  };

  let updatedPostsLength = posts.length;

  const handleAddPost = () => {
    const originalPosts = [...posts];
    const newPost = {
      id: updatedPostsLength + 1,
      title: "New Post ",
      body: "New Post",
      userId: 1,
    };
    setPosts([newPost, ...posts]);

    PostService.add(newPost)
      .then(({ data: savedPost }: { data: Post }) =>
        setPosts([savedPost, ...posts])
      )
      .catch((error: AxiosError) => {
        console.log(error);
        setPosts(originalPosts);
      });
  };

  const handleUpdatePost = (id: number) => {
    const updatedPost = posts.map((post) =>
      post.id === id ? { ...post, title: post.title + " Updated" } : post
    );
    if (!updatedPost) return;
    setPosts(updatedPost);

    PostService.update(posts[id])
      .then(() => console.log(`Post updated of ${id}`))
      .catch((error: AxiosError) => {
        console.log(error);
        setPosts(updatedPost);
      });
  };

  return (
    <>
      {/* Axios */}
      {loading && <div className="spinner-border"></div>}
      {error && <p className="text-danger">{error}</p>}
      <button className="btn-primary mb-3" onClick={handleAddPost}>
        Add Post
      </button>
      {posts.map((post) => (
        <ul key={post.id} className="list-gro">
          <li className="list-group-item d-flex justify-content-between">
            {post.title}
            <div>
              <button
                className="primary mx-1"
                onClick={() => handleUpdatePost(post.id)}
              >
                {" "}
                Update{" "}
              </button>
              <button
                className="text-danger mx-1"
                onClick={() => handleDelete(post.id)}
              >
                {" "}
                Delete{" "}
              </button>
            </div>
          </li>
        </ul>
      ))}
    </>
  );
}

export default App;
