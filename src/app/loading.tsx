import Loader from "../components/Loader/Loader";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center flex-col gap-4">
      <Loader />
      <div className="text-xl text-gray-700">Loading...</div>
    </div>
  );
}
