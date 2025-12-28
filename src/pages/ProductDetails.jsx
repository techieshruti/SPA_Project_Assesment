import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");   
  
useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");

        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
  return <Loader />;
}

  if (error) {
    return <p className="text-center mt-10 text-red-500">{error}</p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
        {/* Image */}
      <div className="flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-80 object-contain"
        />
      </div>

      <div>
        <h1 className="text-2xl font-bold text-slate-900 mb-4">
          {product.title}
        </h1>

        <p className="text-slate-700 mb-4">
          {product.description}
        </p>

        <p className="text-lg font-bold text-slate-900 mb-2">
          ${product.price}
        </p>

        <p className="text-sm text-slate-500 mb-6">
          Category: {product.category}
        </p>

        <button
          onClick={() => navigate(-1)}
          className="bg-slate-900 text-white px-6 py-2 rounded-md hover:bg-slate-800 transition"
        >
          Back to Products
        </button>
      </div>

    </div>
  )
}

export default ProductDetails