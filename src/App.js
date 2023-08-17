import './App.css';

import { useState, useEffect } from 'react';

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

  //1 - Resgatando dados
  useEffect(() => {
    //usamos await pois pode demorar algum tempo
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();

      setProducts(data);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - {product.price}</li>
        ))}

      </ul>
    </div>
  );
}

export default App;
