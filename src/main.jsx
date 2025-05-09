//
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { createBrowserRouter, createRoutesFromElements, RouterProvider , Route} from 'react-router-dom'
// import Layout from './Layout'
//
//
// import './index.css'
// import Navbar from "./components/Navbar"
// import UserLogin from "./components/UserLogin"
// import NGOLogin from "./components/NGOLogin"
// import UserRegister from "./components/UserRegister"
//
//
//
//
//
// const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Route path='/' element = {<Layout /> } >
//
//             
//             {/* <Route path='' element ={ <Navbar />} /> */}
//
//             <Route path='login' element ={ <UserLogin />} > 
//             <Route path='userRegister' element ={ <UserRegister />} />
//             </Route>
//
//             <Route path='NGOLogin' element ={ <NGOLogin />} />
//                 
//             {/* <Route path='github' element ={ <Github />} /> */}
//
//         </Route>
//     )
// )
//
//
//
//
//
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//         <RouterProvider router={router} />
//   </StrictMode>,
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'

import Layout from './Layout'
import './index.css'

import UserLogin from './components/UserLogin'
import UserRegister from './components/UserRegister'
import NGOLogin from './components/NGOLogin'
import Home from './components/Home'
import NGORegister from "./components/NGORegister"





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<UserLogin />} />
      <Route path="UserRegister" element={<UserRegister />} />
      <Route path="NGOLogin" element={<NGOLogin />} />
      <Route path="ngoRegister" element={<NGORegister />} />
            
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
