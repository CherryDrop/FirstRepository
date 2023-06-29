"use client"
import { UpdateIngredientDTO, UpdateIngredientSchema } from "@/server/ingredients/data";
import { UpdateIngredient } from "@/server/ingredients/features";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import ReactModal from "react-modal";
import { toast } from "react-toastify";

ReactModal.setAppElement("#rootapp");

export const EditIngredientForm: React.FC<{
    isOpen: boolean,
    onRequestClose: () => void,
    onSubmit: (id: string) => void,
    defaultValues: UpdateIngredientDTO,
  }> = ({ isOpen, onRequestClose, onSubmit, defaultValues }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<UpdateIngredientDTO>({
      resolver: zodResolver(UpdateIngredientSchema),
      defaultValues
    });
  
    const submitForm = async (data: UpdateIngredientDTO) => {
      const response = await UpdateIngredient(data);
      if (response.success) {
        toast.success("Ingredient updated successfully");
        onSubmit(data._id);
        onRequestClose();
      } else {
        toast.error("Error updating ingredient");
        console.error(response.message);
      }
    };
  
    useEffect(() => {
      reset(defaultValues);
      console.log(defaultValues);
    }, [defaultValues]);
    return (
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Edit Ingredient"
        className="p-4 mx-auto my-20 bg-white rounded shadow-xl w-96"
      >
        <h2 className="mb-4 text-lg font-bold text-center">Edit Ingredient</h2>
        <form onSubmit={handleSubmit(submitForm)} className="space-y-2">
          <label className="block">Ingredient Name</label>
          <input {...register('name')} className="w-full p-2 border border-gray-300 rounded" placeholder="Ingredient name" />
          {errors.name && <p className="text-red-500">{`${errors.name.message}`}</p>}
          <label className="block">Unit</label>
          <input {...register('unit')} className="w-full p-2 border border-gray-300 rounded" placeholder="Unit" />
          {errors.unit && <p className="text-red-500">{`${errors.unit.message}`}</p>}
          <label className="block">Unit Quantity</label>
          <input {...register('unitQuantity')} type="number" className="w-full p-2 border border-gray-300 rounded" placeholder="Unit Quantity" />
          {errors.unitQuantity && <p className="text-red-500">{`${errors.unitQuantity.message}`}</p>}
          <label className="block">Price Per Unit quantity</label>
          <input {...register('pricePerUnit')} type="number" className="w-full p-2 border border-gray-300 rounded" placeholder="Weight Price per Unit Quantity" />
          {errors.pricePerUnit && <p className="text-red-500">{`${errors.pricePerUnit.message}`}</p>}
          <button type="submit" className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Update Ingredient</button>
        </form>
      </ReactModal>
    );
  }