import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { databases } from "../config/appwrite-config";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await databases.getDocument("katalogID", "productID", id);
        setProduct(response);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <div class="mockup-window border border-base-300 w-full">
      <div className="w-full md:px-6 px-4 pb-10 bg-white">
        <div className="flex flex-col items-start">
          <h1 className="pb-3 md:text-4xl text-4xl font-bold flex justify-center items-center pt-10 capitalize ">{product.title}</h1>
          <div className="h-[0.7px] w-full bg-gray-300"></div>
          <div className="my-3 w-full flex justify-between items-center gap-2 text-xl text-gray-700">
            <div>
              <span className="font-normal">Harga: </span>
              <span className="font-semibold text-black">
                <span className="text-gray-600">Rp.</span> {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(product.price)}
              </span>
            </div>
            <div>
              <span className="font-normal">Category: </span>
              <span className="font-semibold text-black">{product.category}</span>
            </div>
            <div className="text-lg text-black">{product.date}</div>
          </div>
          <div className="h-[0.7px] w-full bg-gray-300"></div>
        </div>

        {/* Gambar Carousel */}
        <div className="mt-8 w-full flex flex-col">
          <div className="flex gap-8 md:h-[28rem] overflow-x-scroll no-scrollbar" id="carousel">
            <img className="object-cover w-auto cover rounded-xl" src={product.image1.replace("&mode=admin", "")} alt="" />
            <img className="object-cover w-auto cover rounded-xl" src={product.image2?.replace("&mode=admin", "")} alt="" />
            <img className="object-cover w-auto cover rounded-xl" src={product.image3?.replace("&mode=admin", "")} alt="" />
          </div>
        </div>

        {/* Deskripsi */}
        <div className="mt-10 flex md:flex-row flex-col">
          <div className="md:w-2/3">
            <h3 className="font-bold text-xl">Deskripsi</h3>
            <p className="mt-4">{product.desc}</p>
          </div>
          <div className="md:w-1/3 md:mt-0 mt-5 md:pl-5 flex justify-center items-center">
            <a
              href={`https://wa.me/62895415005347?text=${encodeURIComponent(
                `Halo, saya tertarik untuk memesan produk berikut:\n\n` +
                  `🛒 *${product.title}*\n` +
                  `💰 Harga: Rp. ${new Intl.NumberFormat("id-ID").format(product.price)}\n` +
                  `🎨 Warna: ${product.color}\n` +
                  `📦 Estimasi: ${product.estimate}\n\n` +
                  `Apakah produk ini masih tersedia?`
              )}`}
              className="btn btn-neutral w-full py-6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>

        {/* Warna */}
        <div className="mt-10">
          <h3 className="font-bold text-xl">Color</h3>
          <p className="mt-4 max-w-4xl">{product.color}</p>
        </div>

        {/* Estimasi */}
        <div className="mt-10">
          <h3 className="font-bold text-xl">Estimasi</h3>
          <p className="mt-4 max-w-4xl">{product.estimate}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
