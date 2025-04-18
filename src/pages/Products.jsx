import React, { useEffect, useState } from "react";
import ProductComponent from "../components/ProductComponent";
import { Client, Databases } from "appwrite";

const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject("puspitajatifurniture");

const database = new Databases(client);

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
          const response = await database.listDocuments("katalogID", "productID");
          console.log(response.documents[0].$id);
          
        const cleanedProducts = response.documents.map((product) => ({
            ...product,
          
          image1: product.image1.replace(/&mode=admin$/, ""),
        }));
        setProducts(cleanedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Seo
        title="E Katalog Mebel Jepara"
        description={"Membantu mu dalam memilih dan menentukan mebel jepara yang sesuai dengan keinginanmu"}
        canonical={"https://e-katalog-jepara.vercel.app/"}
        schemaMarkup={{ "@type": "WebSite", url: "https://e-katalog-jepara.vercel.app/", name: "E Katalog Mebel Jepara", description: "Membantu mu dalam memilih dan menentukan mebel jepara yang sesuai dengan keinginanmu" }}
      />

      <div class="mockup-window border border-base-300 w-full">
        <section className="py-16 bg-white">
          <div className="container max-w-screen-xl mx-auto flex justify-center ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {products.map((product) => (
                <ProductComponent
                  id={product.$id}
                  key={product.$id}
                  title={product.title}
                  desc={product.desc}
                  price={product.price}
                  date={product.date}
                  category={product.category}
                  estimate={product.estimate}
                  color={product.color}
                  image1={product.image1}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Products;
