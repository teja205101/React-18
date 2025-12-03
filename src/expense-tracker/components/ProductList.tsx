import { useEffect, useState } from 'react';

function ProductList( {category} : {category: string}) {

   const [ products, setProducts ] = useState<string[]>();

   useEffect(() => {

    console.log('Fetching products in', category);
    setProducts(['clothes', 'shoes', 'watches'])

   },[category])
    
    return (
        <div>
            <h2>Product List</h2>
        </div>
    );
}

export default ProductList;