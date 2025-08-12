
import './App.css'
import ProductCard from './components/productCard'
import SuperProduct from './components/superProduct'

function App() {

  return (
    <>
      <div className='w-full h-screen bg-blue-400 flex justify-center items-center'>
        <div className='w-[600px] h-[600px] bg-black flex justify-around items-center'>
          <div className='w-[75px] h-[75px] bg-red-800'></div>
          <div className='w-[75px] h-[75px] bg-orange-500'></div>
          <div className='w-[75px] h-[75px] bg-green-600'></div>
          <div className='w-[75px] h-[75px] bg-blue-900'></div>
          <div className='w-[75px] h-[75px] bg-purple-500'></div>

        </div>
       
      </div>
    </>
  )
}

export default App
