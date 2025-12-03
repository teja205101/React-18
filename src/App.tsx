// import ZodForm from './components/Form/ZodForm';
// import Message from './components/Message/Message';
// import Form from './components/Form/Form';
// import ReactHookForm from './components/Form/ReactHookForm';
// import ExpenseList from './expense-tracker/components/ExpenseList';
import { useState, useEffect } from 'react';
// import ExpenseFilter from './expense-tracker/components/ExpenseFilter';
// import ExpenseForm from './expense-tracker/components/ExpenseForm';

// Product Component 
// import ProductList from './expense-tracker/components/ProductList';

// Axios
import axios from 'axios';

// export const Categories = ['Grocery', 'Stationary', 'Medical'] as const ;

interface Post {
  id: number;
  title: string;
  body: string;
}

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
    //     console.log(id);
    //     setExpenses(expenses.filter((expense) => expense.id !== id));
    // }

    // const visibleExpenses = selectedCategory ? expenses.filter((expense) => expense.category === selectedCategory) : expenses;


    {/* Product Component */}
    // const [ category,setCategory ] = useState('')

   const [ posts, setPosts] = useState<Post[]>([])

    useEffect(()=>{
      axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts").
      then((response: any)=>setPosts(response.data))
    },[])
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
      {posts.map((post)=>(
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </>
    )
}

export default App
