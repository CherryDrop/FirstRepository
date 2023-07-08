"use client";
import { CreateIngredientDTO, CreateIngredientSchema } from "@/server/ingredients/data";
import { CreateIngredient } from "@/server/ingredients/features";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import ReactModal from "react-modal";
import { toast } from "react-toastify";

ReactModal.setAppElement("#rootapp");

export const CreateIngredientForm: React.FC<{
  isOpen: boolean;
  onRequestClose: () => void;
  onSubmit: (id: string) => void;
}> = ({ isOpen, onRequestClose, onSubmit: onSuccess }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<CreateIngredientDTO>({
    defaultValues: {
      name: "",
      unit: "kg",
      pricePerUnit: "1",
      unitQuantity: "1",
    },
    resolver: zodResolver(CreateIngredientSchema),
  });

  const onSubmit = async (data: CreateIngredientDTO) => {
    const response = await CreateIngredient(data);
    if (response.success) {
      toast.success("Ingredient created successfully");
      onSuccess(response.id!);
    } else {
      console.error(response.message);
    }
  };

  useEffect(() => {
    if (isOpen) {
      reset();
    }
  }, [isOpen]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Create Ingredient"
      className="p-4 mx-auto my-20 bg-background-dark rounded shadow-xl w-96"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 text-primary-dark ">
        <h2 className="text-2xl text-primary-dark font-semibold">Add New Ingredient</h2>
        <label className="block text-primary-dark">Ingredient Name</label>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              className="w-full p-2 border border-border-dark bg-secondary-dark  text-white rounded"
              placeholder="Ingredient name"
            />
          )}
        />
        {errors.name && <p className="text-red-500">{`${errors.name.message}`}</p>}
        <label className="block">Unit</label>
        <Controller
          name="unit"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              className="w-full p-2 border border-gray-300 rounded bg-secondary-dark text-white"
              placeholder="Unit Price"
            />
          )}
        />
        {errors.unit && <p className="text-red-500">{`${errors.unit.message}`}</p>}
        <label className="block">Unit Quantity</label>
        <Controller
          name="unitQuantity"
          control={control}
          render={({ field }) => (
            <input
              type="number"
              {...field}
              className="w-full p-2 border border-gray-300 rounded  bg-secondary-dark text-white"
              placeholder="Unit Quantity"
            />
          )}
        />

        {errors.unitQuantity && <p className="text-red-500">{`${errors.unitQuantity.message}`}</p>}
        <label className="block">Price Per Unit quantity</label>
        <Controller
          name="pricePerUnit"
          control={control}
          render={({ field }) => (
            <input
              type="number"
              {...field}
              className="w-full p-2 border border-gray-300 rounded  bg-secondary-dark text-white"
              placeholder="Weight Price per Gram"
            />
          )}
        />
        {errors.pricePerUnit && <p className="text-red-500">{`${errors.pricePerUnit.message}`}</p>}
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Add Ingredient
        </button>
      </form>
    </ReactModal>
  );
};
