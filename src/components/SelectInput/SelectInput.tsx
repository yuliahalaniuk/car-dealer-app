import { FilterFormDataEntity } from "@/src/types/global";
import React from "react";
import { Control, Controller } from "react-hook-form";

interface SelectInputProps {
  name: keyof FilterFormDataEntity;
  label: string;
  options: Array<{ value: string; label: string }>;
  control: Control<FilterFormDataEntity>;
  error: string | undefined;
}

const SelectInput = ({
  name,
  label,
  options,
  control,
  error,
}: SelectInputProps) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <select
          {...field}
          className="w-full border border-gray-300 rounded-lg p-2 text-gray-700"
        >
          <option value="" className="text-gray-700">
            Select {label}
          </option>
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="text-gray-700"
            >
              {option.label}
            </option>
          ))}
        </select>
      )}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default SelectInput;
