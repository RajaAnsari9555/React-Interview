
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const App = () => {

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0)

  const PAGE_SIZE = 10;

  const fetchData = async() => {
    const data =await fetch("https://dummyjson.com/products?limit=500");
    const json =await data.json();
    setProducts(json.products);
  };

  useEffect(() => {

    fetchData();
    
  },[])

  const totalProducts = products.length;
  const noofpages = Math.ceil(totalProducts/PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const handlePageChange = (n) => {
    setCurrentPage(n);
  }


  return !products.length? (
    <h1>No products found</h1>):(

    <div className='items-center  '>
      <h1 className=' text-xl font-bold mb-4'>Pagination</h1>
      
      {[...Array(noofpages).keys()].map((n => (
        <span className=' p-2 m-2 border cursor-pointer border-black' key={n} onClick={() => handlePageChange(n)}>{n}</span>
      )))}
      <div className=" flex flex-wrap ">
         {

products.slice(start,end).map((p) => (
  <ProductCard key={p.id} image={p.thumbnail} title={p.title}/>
))
      }


      </div>
     
    </div>
  )
}

export default App