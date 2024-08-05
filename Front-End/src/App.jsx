import { useEffect, useState } from 'react'
import store from './zustand/store'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  const { products, getProducts } = store((state) => state)
  useEffect(() => { getProducts() }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<Home products={products} />} />
      </Routes>
    </>
  )
}

export default App
