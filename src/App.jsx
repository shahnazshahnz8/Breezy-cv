
import {
  createRoutesFromElements, createBrowserRouter, Route, RouterProvider
} from "react-router-dom";
import Home from './Pages/Home'
import About from './Pages/About'
import Features from './Pages/Features'
import Error from './Pages/Error'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/features" element={<Features />}></Route>
      <Route path="*" element={<Error />}></Route>
      
    </>

  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
