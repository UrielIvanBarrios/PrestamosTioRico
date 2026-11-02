import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Requisitos from './components/Requisitos'
import Resenias from './components/Resenias'
import FormSolicitud from './components/FormSolicitud'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <Requisitos />
        <Resenias />
        <FormSolicitud />
      </main>
      <Footer />
    </>
  )
}

export default App
