import { useEffect, useState } from "react"

const ProductCard = () => {
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
                const data = await res.json();
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
    <div className="cursor-pointer border border-gray-100 rounded-lg p-4 shadow-sm hover:shadow-lg transition bg-gray-100 w-50 mx-6 my-4
    ">
        <div>
            <div className="h-40 flex items-center justify-center mb-4">
        <img
          src="https://images-cdn.ubuy.co.in/660129b8cf52ac68f976755e-plus-size-women-s-lace-patchwork-tops.jpg"
          alt=""
          className="h-full object-contain rounded-xl"
        />
      </div>
      <h3 className="text-sm font-semibold text-slate-800 line-clamp-2 mb-2">
        Tops
      </h3>
      <p className="text-slate-900 font-bold">₹200.00</p>
        </div>
    </div>
  )
}

export default ProductCard