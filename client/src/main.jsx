import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import { Authprovider } from './context/Authcontext.jsx'
import Myblog from './pages/Myblogs.jsx'
import Addblog from './pages/Addblog.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"",
        element:<Homepage/>
      },
      {
        path:"register",
        element:<Register/>
      },
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"myblog",
        element:<Myblog/>
      },
      {
        path:"addblog",
        element:<Addblog/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
    <RouterProvider router={router}/>
    </Authprovider>
  </React.StrictMode>,
)
