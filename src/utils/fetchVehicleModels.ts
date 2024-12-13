import { VehicleModel } from "../types/global";

export async function fetchVehicleModels(makeId: string, year: string) {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`;

  const res = await fetch(URL);

  if (!res.ok) {
    throw new Error("Failed to fetch vehicle models");
  }

  const data = await res.json();
  return data.Results as VehicleModel[];
}
