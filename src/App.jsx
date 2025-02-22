import './App.css'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'

function App() {

  return (
    <>
    <Navbar />
      <section className="text-center py-20 bg-gray-900 text-white">
        <h1 className="text-5xl font-bold">Bem-vindo à Academia de Boxe! 🥊</h1>
        <p className="text-lg mt-4">Treine como um campeão. Junte-se a nós agora!</p>
      </section>
    <Footer />
    </>
  )
}

export default App
