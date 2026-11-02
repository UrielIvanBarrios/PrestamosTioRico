import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Requisitos from './components/Requisitos'
import Galeria from './components/Galeria'
import Presencia from './components/Presencia'
import FormSolicitud from './components/FormSolicitud'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <Requisitos />
        <Galeria />
        <Presencia />
        <FormSolicitud />
      </main>
      <Footer />
    </>
  )
}

export default App
