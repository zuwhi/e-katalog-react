import React from "react";
import ModelViewer from "../components/ModelViewer";
import ProductComponent from "../components/ProductComponent";

const Home = () => {
  return (
    <div className="mt-4">
      <div className="mockup-window border bg-slate-100 border-base-300 w-full">
        <section className="bg-white py-2 md:mb-10">
          <div className="  px-4">
            <div className="flex   flex-col lg:flex-row justify-between space-x-20">
              <div className="text-center w-full  lg:text-left flex items-center relative ">
                <div className="flex flex-col   justify-center  w-full">
                  <h1 className="md:mt-0 mt-10 font-bold text-gray-900 text-4xl md:text-6xl leading-normal mb-6">
                    E Katalog <br /> Mebel Jepara
                  </h1>
                  <p className="font-light text-gray-400 text-md md:text-lg leading-normal mb-12">
                    Membantu mu dalam memilih dan menentukan <br /> mebel jepara yang sesuai dengan keinginanmu
                  </p>
                </div>
              </div>
              <div className=" ">
                <ModelViewer />
              </div>
            </div>
          </div>
          {/* <!-- container.// --> */}
        </section>
      </div>

      <div class="mockup-window border border-base-300 w-full my-10">
     
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <div class="mockup-phone  scale-75">
              <div class="mockup-phone-camera"></div>
              <div class="mockup-phone-display">
                <img alt="wallpaper" src="/image/mok.jpeg" />
              </div>
            </div>
            <div>
              <h1 className="text-5xl font-bold">Unduh Aplikasi kami!</h1>
              <p className="py-6">unduh aplikasi kami untuk melihat semua koleksi kami</p>
              <button onClick={() => (window.location.href = "https://drive.google.com/drive/folders/1ahlnhrUYwhoamd-RELaT9Lt2JQywINKY")} className="btn btn-neutral">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="mockup-window border border-base-300 w-full my-10">
        <section className="bg-white py-10">
          <div className="">
            <h1 className="font-semibold text-gray-900 text-xl md:text-4xl text-center mb-16">Product Kami</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <ProductComponent />
              <ProductComponent />
              <ProductComponent />
            </div>
            <div className="mt-20 flex justify-center">
              <a href="" className="py-4 px-8 hover:bg-gray-900 hover:text-white transition ease-in-out duration-500 text-gray-900 font-semibold text-lg rounded-xl border-2 w-fit">
                Lihat Selengkapnya
              </a>
            </div>
          </div>
          {/* <!-- container.// --> */}
        </section>
      </div>

      {/* <!-- product section //end --> */}
      <div id="about" class="mockup-window border border-base-300 w-full mb-10">
        <section className="bg-white py-10 ">
          <div className="container max-w-screen-xl mx-auto px-4">
            <h1 className="font-semibold text-gray-900 text-xl md:text-4xl text-center mb-10">Tentang Kami</h1>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20">
              <div className="flex items-center">
                <h1 className="font-light text-gray-500 text-xl md:text-xl leading-normal mb-10">
                  Elegan, Fungsional, dan Berkualitas – Hanya di E-Katalog Mebel Jepara! Jelajahi koleksi mebel berkualitas tinggi dengan desain modern, klasik, hingga minimalis. Temukan berbagai pilihan furnitur untuk rumah dan kantor Anda
                  dengan harga terbaik!
                </h1>
              </div>
              <div className="">
                <img
                  className=" max-w-lg rounded-lg shadow-2xl"
                  src="https://cdn.cgdream.ai/_next/image?url=https%3A%2F%2Fapi.cgdream.ai%2Frails%2Factive_storage%2Fblobs%2Fredirect%2FeyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBKzFuZXc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ%3D%3D--a8cdc50a3f6f177dc17e446f51fa56d49b4f007f%2F2ccc16c9-bcf7-4e35-aa88-aeb3f76f9aba_0.png&w=1080&q=95"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* <!-- container.// --> */}
        </section>
      </div>

      {/* <!-- feature section //end --> */}
    </div>
  );
};

export default Home;
