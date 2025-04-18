import React, { useState, useEffect } from "react";
import { databases, appwriteConfig } from "../config/appwrite-config";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    price: "",
    date: "",
    category: "",
    estimate: "",
    image1: "",
  });
  const [editId, setEditId] = useState(null); // Untuk menyimpan ID data yang sedang di-edit

  // Fetch data dari Appwrite
  const fetchData = async () => {
    try {
      const response = await databases.listDocuments(appwriteConfig.databaseId, appwriteConfig.collectionId);
      setData(response.documents);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submit (Create/Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        // Update data
        await databases.updateDocument(appwriteConfig.databaseId, appwriteConfig.collectionId, editId, formData);
        setEditId(null); // Reset editId setelah update
      } else {
        // Create data baru
        await databases.createDocument(
          appwriteConfig.databaseId,
          appwriteConfig.collectionId,
          "unique()", // ID unik untuk dokumen baru
          formData
        );
      }
      setFormData({
        title: "",
        desc: "",
        price: "",
        date: "",
        category: "",
        estimate: "",
        image1: "",
      });
      fetchData(); // Refresh data setelah create/update
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  // Handle edit data
  const handleEdit = (item) => {
    setFormData({
      title: item.title,
      desc: item.desc,
      price: item.price,
      date: item.date,
      category: item.category,
      estimate: item.estimate,
      image1: item.image1,
    });
    setEditId(item.$id); // Set ID data yang sedang di-edit
  };

  // Handle delete data
  const handleDelete = async (id) => {
    try {
      await databases.deleteDocument(appwriteConfig.databaseId, appwriteConfig.collectionId, id);
      fetchData(); // Refresh data setelah delete
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Form untuk Create/Update */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="title" value={formData.title} onChange={handleInputChange} placeholder="Title" className="p-2 border rounded" required />
          <input type="text" name="desc" value={formData.desc} onChange={handleInputChange} placeholder="Description" className="p-2 border rounded" required />
          <input type="number" name="price" value={formData.price} onChange={handleInputChange} placeholder="Price" className="p-2 border rounded" required />
          <input type="date" name="date" value={formData.date} onChange={handleInputChange} placeholder="Date" className="p-2 border rounded" required />
          <input type="text" name="category" value={formData.category} onChange={handleInputChange} placeholder="Category" className="p-2 border rounded" required />
          <input type="text" name="estimate" value={formData.estimate} onChange={handleInputChange} placeholder="Estimate" className="p-2 border rounded" required />
          <input type="text" name="image1" value={formData.image1} onChange={handleInputChange} placeholder="Image URL" className="p-2 border rounded" required />
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          {editId ? "Update" : "Create"}
        </button>
      </form>

      {/* Tabel untuk menampilkan data */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">Description</th>
              <th className="px-4 py-2 border">Price</th>
              <th className="px-4 py-2 border">Date</th>
              <th className="px-4 py-2 border">Category</th>
              <th className="px-4 py-2 border">Estimate</th>
              <th className="px-4 py-2 border">Image</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.$id}>
                <td className="px-4 py-2 border">{item.title}</td>
                <td className="px-4 py-2 border">{item.desc}</td>
                <td className="px-4 py-2 border">{item.price}</td>
                <td className="px-4 py-2 border">{item.date}</td>
                <td className="px-4 py-2 border">{item.category}</td>
                <td className="px-4 py-2 border">{item.estimate}</td>
                <td className="px-4 py-2 border">
                  <img src={item.image1} alt={item.title} className="w-16 h-16 object-cover" />
                </td>
                <td className="px-4 py-2 border">
                  <button onClick={() => handleEdit(item)} className="bg-white-500 text-white px-2 py-1 rounded mr-2">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(item.$id)} className="bg-red-500 text-white px-2 py-1 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
