import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './assets/pages/Home/Home'
import QuemSomos from './assets/pages/QuemSomos/QuemSomos'
import Menu from './assets/pages/Menu/Menu'
import Pedidos from './assets/pages/Pedidos/Pedidos'
import Contato from './assets/pages/Contato/Contato'

export default function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        
        <Routes>
          <Route path='/quem-somos' element={<QuemSomos />} />
        </Routes>
        
        <Routes>
          <Route path='/menu' element={<Menu />} />
        </Routes>
        
        <Routes>
          <Route path='/pedidos' element={<Pedidos />} />
        </Routes>
        
        <Routes>
          <Route path='contato' element={<Contato />} />
        </Routes>
        
      </Router>
    </>
  )
}