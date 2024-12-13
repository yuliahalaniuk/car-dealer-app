export interface VehicleModel {
  Model_Name: string
}

export interface FilterFormDataEntity {
  make: string;
  year: string;
}
export interface IVehicle {
  MakeName: string;
  MakeId: string;
  VehicleTypeId?: string;
  VehicleTypeName?: string;
}