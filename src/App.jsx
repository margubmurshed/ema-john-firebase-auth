import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Orders from "./components/Orders/Orders";
import cartProductsLoader from "./loaders/cartProductsLoader";
import Checkout from "./components/Checkout/Checkout";
import "./App.css";

const router = createBrowserRouter([
  {path: '/', element: <Home />, children:[
    {index:true, element: <h2 className="container">It is my home</h2>},
    {path: '/shop', element: <Shop/>},
    {path: '/orders', element: <Orders/>, loader: 
    
    
    cartProductsLoader},
    {path: '/checkout', element: <Checkout/>}
  ]}
])
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
