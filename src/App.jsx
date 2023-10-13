import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar'
import Create from './components/Create'
import Read  from './components/Read'
import RootLayout from './components/RootLayout';
import FormUpdate from './components/FormUpdate';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
       <Route path="/create" element={<Create/>}/>
      <Route path="/read" element={<Read/>} />
      <Route path="/formUpdate" element={<FormUpdate/>} />

      </Route>
    )
  );

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}
export default App;
