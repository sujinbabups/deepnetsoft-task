import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'
import Mainlayout from './layout/Mainlayout'
import HomePage from './pages/HomePage'
import Menu from './pages/Menu'

function App() {

  const router=createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<Mainlayout/>}>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/menu' element={<Menu/>}/>

      </Route>
      
      </>
    )
  )
  return (
    <>
         <RouterProvider router={router}/>

    </>
  )
}

export default App
