import ErrorTab from "@/src/components/ErrorTab/ErrorTab";
import ModelsList from "@/src/components/ModelsList/ModelsList";
import { VehicleModel } from "@/src/types/global";
import { notFound } from "next/navigation";
import { Suspense } from "react";

async function fetchVehicleModels(makeId: string, year: string) {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`;

  const res = await fetch(URL);

  if (!res.ok) {
    throw new Error("Failed to fetch vehicle models");
  }

  const data = await res.json();
  return data.Results as VehicleModel[];
}

export async function generateStaticParams() {
  const exampleMakes = ["440", "441", "442", "448"];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2015 + 1 }, (_, i) =>
    (2015 + i).toString()
  );

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
      <Suspense fallback={<div>Loading vehicle models...</div>}>
        <div className="min-h-screen bg-gray-100 p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Vehicle Models for Make ID: {makeid} and Year: {year}
          </h1>
          <ModelsList models={models} />
        </div>
      </Suspense>
    );
  } catch {
    return <ErrorTab />;
  }
}
