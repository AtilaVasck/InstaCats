import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header/header'
import Footer from './Footer/footer'
import Form from './ImagesCat/imagesCat'
import './responsivo.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Header/>
   <Form/>
   <Footer/>
  </React.StrictMode>,
)
