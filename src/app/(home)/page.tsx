"use client";
import { Suspense, useEffect, useState } from "react";
import FilterForm from "../../components/FilterForm/FilterForm";
import { IVehicle } from "../../types/global";
import Loader from "../../components/Loader/Loader";
import ErrorTab from "@/src/components/ErrorTab/ErrorTab";

const Home = () => {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMakes = async () => {
      const URL = `${process.env.NEXT_PUBLIC_API_URL}/GetMakesForVehicleType/car?format=json`;
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setVehicles(data.Results || []);
        setError(null);
      } catch (error) {
        console.error("Failed to fetch vehicle makes:", error);
        setError("Failed to fetch vehicle makes. Please try again later.");
      }
    };

    fetchMakes();
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Find Your Car
          </h1>

          {error ? <ErrorTab /> : <FilterForm makes={vehicles} />}
        </div>
      </div>
    </Suspense>
  );
};

export default Home;
