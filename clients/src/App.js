import './app.scss';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
}from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Products from './pages/Products';
import Product from './pages/Product';
import Adverts from './components/Adverts';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sell from './components/Sell';
import { FacebookProvider} from 'react-facebook';
const Layout =()=>{
  return(
    <div>
      <Adverts/>
      <Sell/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
const router  = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:"/products/:id",
        element:<Products/>
      },
       {
        path:"/product/:id",
        element: <FacebookProvider appId='970187250958916'><Product/></FacebookProvider>
      },
      {
        path:"/cart",
        element:<Cart/>
      }

    ]
  },
  
 
])
function App() {
  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
