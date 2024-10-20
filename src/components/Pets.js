import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/Pets.css";

const PetCard = ({ pet }) => {
  return (
    // One single box/container for both the image and the information
    <div className="bg-white rounded-lg shadow-lg overflow-hidden card">
      {/* The image wrapped with a link to redirect */}
      <Link to={`/pets/${pet.id}`}>
        <img src={pet.image} alt={pet.name} className="w-full" />
      </Link>
      {/* Pet information inside the same box */}
      <div className="card-content">
        <h4 className="font-semibold text-lg">
          {pet.id} - {pet.name}
        </h4>
        <div className="flex items-center text-gray-600 pet-info">
          <p className="mr-4 gender">Gender: {pet.gender}</p>
          <p className="age">Age: {pet.age}</p>
        </div>
        <p className="text-gray-800 font-bold">{pet.price}</p>
      </div>
    </div>
  );
};

const Pets = () => {
  const [petsData, setPetsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch pet data from the API
  const fetchPetsData = async () => {
    try {
      const response = await fetch(
        "https://monitor-backend-rust.vercel.app/api/pets"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setPetsData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchPetsData();
  }, []);

  // Render loading state
  if (loading) {
    return <div className="text-center">Loading pets...</div>;
  }

  // Render error state
  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold text-black">What's new?</h2>
        <button className="text-[#003366] border border-[#003366] rounded-full px-4 py-2 hover:bg-gray-600 font-extrabold button">
          View more &gt;
        </button>
      </div>
      <h3 className="text-lg mb-4 font-bold dark-blue">
        Take A Look At Some Of Our Pets
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {petsData.map((pet) => (
          // Use PetCard component for each pet
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default Pets;
