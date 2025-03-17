import { useEffect, useState } from "react";
import axios from "axios";

export default function Store() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost/backend/api/products.php").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="container">
      <section className="p-8">
        <h2 className="text-3xl font-bold mb-4">Loja de Artigos 🛍️</h2>
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border p-4">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover"/>
              <h3 className="text-xl font-bold">{product.name}</h3>
              <p className="text-lg font-semibold text-red-500">R$ {product.price}</p>
              <a href="https://orangemoney.com" className="bg-yellow-500 text-white px-4 py-2 mt-2 block text-center">Comprar</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
