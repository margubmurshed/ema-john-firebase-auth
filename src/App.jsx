import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";

const router = createBrowserRouter([
  {path: '/', element: <Home />, children:[
    {path: '/shop', element: <Shop/>}
  ]}
])
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
