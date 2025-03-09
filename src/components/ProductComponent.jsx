import React from "react";
// const formatRupiah = (number) => {
//   return new Intl.NumberFormat("id-ID", {
//     style: "currency",
//     currency: "IDR",
//     minimumFractionDigits: 0,
//   }).format(number);
// };
const ProductComponent = ({ id, title, desc,  image1 }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img className="w-full h-72 object-cover" src={image1} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title capitalize">{title}</h2>
        <p className="line-clamp-3">{desc}</p>
        <div className="card-actions justify-end">
          <button onClick={() => (window.location.href = `/product/${id}`)} className="btn btn-neutral">
            Lihat Detail
          </button>
        </div>
      </div>
    </div>
    //     <a href={`/product/${id}`} className="px-6 py-6 w-full border-2 border-gray-200 rounded-3xl">
    //       <div className="flex justify-center mb-6">
    //         <img src={image1} alt={title} className="w-full h-72 object-cover rounded-lg hover:opacity-75 transition ease-in-out duration-500" />
    //       </div>
    // {/* <h1 className="text-7xl">{id}</h1> */}
    //       <h4 className="font-semibold text-gray-900 text-lg md:text-2xl mb-2 line-clamp-2">{title}</h4>
    //       <p className="text-gray-500 text-sm md:text-md lg:text-lg mb-2 line-clamp-2">{desc}</p>
    //       <div className="mb-2">
    //         <span className="font-bold text-xl text-gray-900">{formatRupiah(price)}</span>
    //       </div>

    //       <div className="text-sm text-gray-400 mb-4">
    //         <p>Date: {date}</p>
    //         <p>Category: {category}</p>
    //         <p>Estimate: {estimate}</p>
    //         {/* <p className="line-clamp-1">Color: {color}</p> */}
    //       </div>

    //       <button className="w-full py-4 bg-gray-800 font-semibold text-white text-lg rounded-xl hover:bg-gray-500 transition ease-in-out duration-500">Pesan</button>
    //     </a>
  );
};

export default ProductComponent;
