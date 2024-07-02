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
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from  './pages/Dashboard';
import Adverts from './components/Adverts';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sell from './components/Sell';
import { FacebookProvider} from 'react-facebook';
import SellRegistration from './pages/SellRegistration';
import SellerCenter from  './pages/SellerCenter';
import SellerLogin from './pages/SellerLogin';
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
      },
      {
        path:"/dashboard",
        element:<Dashboard/>
      }
     
    ]
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path:"/sellerRegister",
    element:<SellRegistration/>
  },
  {
    path:"/sellerLogin",
    element:<SellerLogin/>
  },
  {
    path:"/sellDashboard",
    element:<SellerCenter/>
  }
]);
function App() {
  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
