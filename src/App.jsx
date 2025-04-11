import './App.css'
import Navbar from './pages/Navbar';
import Footer from './pages/Footer'
import Page from './Page'
function App() {
  return (
    <div className='bg-black font-poppin'>
      <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 '>
      <Navbar/>
      <Page/>
      <Footer/>
      </div>
 
    </div>
  )
}

export default App
