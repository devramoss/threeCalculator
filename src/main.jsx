import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import GlobalStyle from './Components/GlobalStyle.jsx'
import Home from './pages/Home.jsx'
import IMC from './pages/IMC.jsx'
import Combustivel from './pages/Combustivel.jsx'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/imc",
          element: <IMC/>
        },
        {
          path: "/combustivel",
          element: <Combustivel/>
        }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
