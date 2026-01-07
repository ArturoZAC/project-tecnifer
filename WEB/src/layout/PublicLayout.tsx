
import { Outlet } from 'react-router-dom'
// import Header from '../components/estructura/Header'
import Footer from '../components/estructura/Footer'
import HeaderV0 from '../components/estructura/HeaderV0'

export default function PublicLayout() {
  return (
    <div>
      <HeaderV0 />
      {/* <Header /> */}
      <Outlet />
      <Footer />
    </div>
  )
}
