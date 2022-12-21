import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCart from './components/ProductCart';
import Slider from './components/Slider';
import Footer from './components/Footer';
function App() {
  const [data, setData] = useState([])

  useEffect(() => {

    const GetApi = async () => {
      const fetchData = await axios.get("https://fakestoreapi.com/products")
      console.log(fetchData.data)
      setData(fetchData.data)
    }
    GetApi()

  }, [])
  console.log(data)
  return (
    <div className="w-full bg-[#E9E9E9] flex flex-col items-center justify-center m-auto">
      <Slider />
      <div className="w-[98%] grid grid-cols-4 mt-[240px]">

        {
          data.map(product => (

            <ProductCart key={product.id} product={product} />

          ))
        }

      </div>
      <Footer />
    </div>
  );
}

export default App;
