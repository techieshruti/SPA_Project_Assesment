import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard";

const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(()=>{
        const fetchData= async()=>{
            try{
                const result= await fetch("https://fakestoreapi.com/products");
                if(!result.ok){
                    throw new Error("Failed to fetch products");
                }
                const data = await result.json();
                setProducts(data);
            }
            catch(err){
                setError(err.message);
            }
            finally{
                setLoading(false);
            }
        };

        fetchData();
    },[]);

    if (loading) {
    return <p className="text-center mt-10">Loading products...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">{error}</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  )
}

export default Product