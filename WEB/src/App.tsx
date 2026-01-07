import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Inicio from './pages/Inicio'
import PublicLayout from './layout/PublicLayout'

function App() {

  return (
    <>
      <BrowserRouter basename='/landing_page/plantilla9/'>
        <Routes>
          <Route path='/' element={ <PublicLayout /> }>
            <Route index element={ <Inicio /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
