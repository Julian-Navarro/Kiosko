import { useEffect, useState } from 'react'
import store from './zustand/store'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import FormProducts from './components/Products/FormProducts/FormProducts';

function App() {
  const { products, getProducts } = store((state) => state);

  function doGetProducts() {
    getProducts();
  };

  useEffect(() => { getProducts();console.log("HACIENDO GET PRODUCTS"); }, [])
  useEffect(() => {  console.log("Rendering APP");}, [products])

  return (
    <>
      <Routes>
        <Route path='/' element={<Home  products={products}/>} />
        <Route path='/registerProduct/:id' element={<FormProducts doGetProducts={doGetProducts}/>} />
      </Routes>
    </>
  )
}

export default App
