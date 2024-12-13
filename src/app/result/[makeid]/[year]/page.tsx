import ErrorTab from "@/src/components/ErrorTab/ErrorTab";
import ModelsList from "@/src/components/ModelsList/ModelsList";
import { fetchVehicleModels } from "@/src/utils/fetchVehicleModels";
import { generateYears } from "@/src/utils/generateYears";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const exampleMakes = ["440", "441", "442", "448"];

  const years = generateYears();
  const staticParams = exampleMakes.flatMap((makeId) =>
    years.map((year) => ({
      makeId,
      year,
    }))
  );

  return staticParams;
}

export default async function ResultPage({
  params: rawParams,
}: {
  params: Promise<{ makeid: string; year: string }>;
}) {
  const params = await rawParams;
  const { makeid, year } = params;

  if (!makeid || !year) {
    return <ErrorTab />;
  }

  try {
    const models = await fetchVehicleModels(makeid, year);

    if (models.length === 0) {
      return notFound();
    }

    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Vehicle Models for Make ID: {makeid} and Year: {year}
        </h1>
        <ModelsList models={models} />
      </div>
    );
  } catch {
    return <ErrorTab />;
  }
}
