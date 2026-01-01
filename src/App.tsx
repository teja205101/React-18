// import ZodForm from './components/Form/ZodForm';
// import Message from './components/Message/Message';
// import Form from './components/Form/Form';
// import ReactHookForm from './components/Form/ReactHookForm';
// import ExpenseList from './expense-tracker/components/ExpenseList';
// import { useState, useEffect } from 'react';
// import ExpenseFilter from './expense-tracker/components/ExpenseFilter';
// import ExpenseForm from './expense-tracker/components/ExpenseForm';

// Product Component
// import ProductList from './expense-tracker/components/ProductList';

// Axios
import { AxiosError } from "./services/api-client";
import PostService, { type Post } from "./services/post-service";

// export const Categories = ['Grocery', 'Stationary', 'Medical'] as const ;

import usePosts from "./hooks/usePosts";

function App() {
  // const [selectedCategory, setSelectedCategory] = useState('');
  // const [expenses, setExpenses] = useState([
  //     { id: 1, description: 'Milk', amount: 5, category: 'Grocery' },
  //     { id: 2, description: 'Bread', amount: 3, category: 'Grocery' },
  //     { id: 3, description: 'Eggs', amount: 4, category: 'Grocery' },
  //     { id: 4, description: 'Notebook', amount: 10, category: 'Stationary' },
  //     { id: 5, description: 'Pen', amount: 2, category: 'Stationary' },
  //     { id: 6, description: 'Pencil', amount: 1, category: 'Stationary' },
  //     { id: 7, description: 'Tylenol', amount: 15, category: 'Medical' },
  //     { id: 8, description: 'Bandages', amount: 5, category: 'Medical' },
  //     { id: 9, description: 'Apples', amount: 6, category: 'Grocery' },
  //     { id: 10, description: 'Bananas', amount: 2, category: 'Grocery' },
  //     { id: 11, description: 'Eraser', amount: 1, category: 'Stationary' },
  //     { id: 12, description: 'Ruler', amount: 3, category: 'Stationary' },
  //     { id: 13, description: 'Vitamins', amount: 20, category: 'Medical' },
  //     { id: 14, description: 'Cough Syrup', amount: 12, category: 'Medical' },
  //     { id: 15, description: 'Chicken', amount: 10, category: 'Grocery' },
  //     { id: 16, description: 'Rice', amount: 8, category: 'Grocery' },
  //     { id: 17, description: 'Marker', amount: 4, category: 'Stationary' },
  //     { id: 18, description: 'Thermometer', amount: 25, category: 'Medical' },
  //     { id: 19, description: 'Pasta', amount: 3, category: 'Grocery' },
  //     { id: 20, description: 'Sharpener', amount: 2, category: 'Stationary' },
  // ]);

  // const handleDelete = (id: number) => {
  //     // console.log(id);
  //     setExpenses(expenses.filter((expense) => expense.id !== id));
  // }

  // const visibleExpenses = selectedCategory ? expenses.filter((expense) => expense.category === selectedCategory) : expenses;

  {
    /* Product Component */
  }
  // const [ category,setCategory ] = useState('')

  const { posts, error, loading, setPosts } = usePosts();

  const handleDelete = (id: number) => {
    // console.log(`Post deleted button clicked of ${id}`);
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
    // console.log("Add Post button clciked ...")
    // console.log('Post length in handle add post',updatedPostsLength + 1);
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
      {/* <Message/> */}
      {/* <ZodForm/> */}
      {/* <Form/> */}
      {/* <ReactHookForm/> */}

      {/* Expenses Component */}
      {/* <ExpenseForm onSubmit={(expense)=>setExpenses([...expenses,{...expense,id:expenses.length+1}])}/>
      <div className="mb-3"></div>  
      <ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)}/>
      <div className="mb-3"></div>
      <ExpenseList expenses={visibleExpenses} onDelete={handleDelete}/> */}

      {/* Product Component */}
      {/* <select className="form-select" onChange={(event)=>setCategory(event.target.value)} value={category}>
        <option value="">Select Product</option>
        <option value="clothes">Clothes</option>
        <option value="shoes">Shoes</option>
        <option value="watches">Watches</option>
      </select>
      <ProductList category={category}/>   */}

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
