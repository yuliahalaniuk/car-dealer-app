import React from 'react'
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import SelectInput from '../SelectInput/SelectInput';
import { FilterFormDataEntity, IVehicle } from '@/src/types/global';
import { generateYears } from '@/src/utils/generateYears';

const schema = yup.object().shape({
  make: yup.string().required("Please select a vehicle make"),
  year: yup.string().required("Please select a model year"),
});



const FilterForm = ({ makes }: { makes?: IVehicle[] }) => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<FilterFormDataEntity>({
    resolver: yupResolver(schema),
    defaultValues: {
      make: "",
      year: "",
    },
  });

  const selectedMake = watch("make");
  const selectedYear = watch("year");

  const onSubmit = (data: FilterFormDataEntity) => {
    console.log(data);
    console.log("Form Submitted:", data);
  };

  const makeOptions =
    makes?.map((make) => ({
      value: make.MakeId,
      label: make.MakeName,
    })) || [];

  const yearOptions = generateYears().map((year) => ({
    value: year.toString(),
    label: year.toString(),
  }));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col space-y-6 mb-6">
        <SelectInput
          name="make"
          label="Vehicle Make"
          options={makeOptions}
          control={control}
          error={errors.make?.message}
        />

        <SelectInput
          name="year"
          label="Model Year"
          options={yearOptions}
          control={control}
          error={errors.year?.message}
        />
      </div>

      <Link
        href={
          selectedMake && selectedYear
            ? `/result/${selectedMake}/${selectedYear}`
            : "#"
        }
      >
        <button
          type="submit"
          className={`w-full bg-blue-500 text-white py-2 px-4 rounded-lg ${
            selectedMake && selectedYear
              ? "hover:bg-blue-600 cursor-pointer"
              : "opacity-50 cursor-not-allowed"
          }`}
          disabled={!selectedMake || !selectedYear}
        >
          Next
        </button>
      </Link>
    </form>
  );
};

export default FilterForm
