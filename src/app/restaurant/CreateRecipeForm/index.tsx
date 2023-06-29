"use strict";
import { Ingredient } from "@/server/ingredients/data";
import { GetIngredients } from "@/server/ingredients/features";
import { CreateRecipeDTO, CreateRecipeSchema, Recipe } from "@/server/recipes/data";
import { CreateRecipe, GetRecipes } from "@/server/recipes/features";
// import { CreateRecipe } from "@/server/recipes/features";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import ReactModal from "react-modal";
import Select from "react-select";
import { toast } from "react-toastify";

ReactModal.setAppElement("#rootapp");

export const CreateRecipeForm: React.FC<{
  isOpen: boolean;
  onRequestClose: () => void;
  onSubmit: (id: string) => void;
  refetchIngredients: boolean;
  setRefetchIngredients: (value: boolean) => void;
}> = ({ isOpen, onRequestClose, onSubmit: onSuccess, refetchIngredients, setRefetchIngredients }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    reset,
  } = useForm<CreateRecipeDTO>({
    defaultValues: {
      name: "",
      description: "",
      ingredients: [{ ingredientId: "", quantity: "" }],
      preparationSteps: [{ step: "", procedure: "" }],
      yieldWeight: "",
      yieldUnits: "",
    },
    resolver: zodResolver(CreateRecipeSchema),
  });

  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [refetchRecipes, setRefetchRecipes] = useState<boolean>(false);

  const fetchIngredients = async () => {
    const response = await GetIngredients();
    if (!response.data) {
      console.log(response.message);
      return;
    }
    setIngredients(response.data);
  };

  useEffect(() => {
    fetchIngredients();
  }, [refetchIngredients]);

  const fetchRecipes = async () => {
    const response = await GetRecipes();
    if (!response.data) {
      console.log(response.message);
      return;
    }
    setRecipes(response.data);
  };
  useEffect(() => {
    fetchRecipes();
  }, [refetchRecipes]);

  useEffect(() => {
    if (isOpen) {
      setRefetchIngredients(true);
      setRefetchRecipes(true);
      reset();
    }
  }, [isOpen]);

  const onSubmit = async (data: CreateRecipeDTO) => {
    console.log(data);
    const response = await CreateRecipe(data);
    if (response.success) {
      toast.success("Recipe created successfully");
      onSuccess(response.id!);
    } else {
      console.error(response.message);
    }
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredients",
  });

  const {
    fields: fieldsPrep,
    append: appendPrep,
    remove: removePrep,
  } = useFieldArray({
    control,
    name: "preparationSteps",
  });

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Create Recipe"
      className={`p-4 mx-auto my-20 bg-background-dark rounded shadow-xl overflow-y-scroll w-[96%] h-[80vh]`}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <h2 className={`text-2xl font-semibold text-primary-dark`}>Add New Recipe</h2>
        <label className={`text-primary-dark`}>Recipe Name</label>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              className={`w-full p-2 border-border-dark bg-secondary-dark rounded text-primary-dark`}
              placeholder="Recipe name"
            />
          )}
        />
        {errors.name && <p className={`bg-error-dark`}>{`${errors.name.message}`}</p>}
        <label className={`text-primary-dark`}>Description</label>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <textarea
              {...field}
              className={`w-full p-2 border-border-dark bg-secondary-dark rounded`}
              placeholder="Recipe description"
            />
          )}
        />
        {errors.description && <p className={`bg-error-dark`}>{`${errors.description.message}`}</p>}
        <label className={`text-primary-dark`}>Ingredients</label>
        {fields.map((field, index) => (
          <div key={field.id} className="flex space-x-2">
            <Controller
              name={`ingredients.${index}.ingredientId`}
              control={control}
              defaultValue={field.ingredientId}
              render={({ field: { onChange, value, ...field } }) => (
                <Select
                  {...field}
                  options={ingredients.map((ingredient) => ({ value: ingredient._id, label: ingredient.name }))}
                  className="w-full p-2 border border-gray-300 rounded"
                  isSearchable={true}
                  value={{
                    label: ingredients.find((ingredient) => ingredient._id === value)?.name || "Selecione",
                    value: ingredients.find((ingredient) => ingredient._id === value)?._id || "",
                  }}
                  onChange={(selectedOption) => {
                    onChange(selectedOption?.value || "");
                  }}
                />
              )}
            />
            <Controller
              name={`ingredients.${index}.quantity`}
              control={control}
              defaultValue={field.quantity}
              render={({ field }) => (
                <input
                  {...field}
                  type="number"
                  className={`w-full p-2 border-border-dark bg-secondary-dark rounded`}
                  placeholder="Quantity"
                />
              )}
            />
            <span className={`self-center text-primary-dark`}>
              {`porções de (${
                ingredients.find((ingredient) => ingredient._id === watch(`ingredients.${index}.ingredientId`))
                  ?.unitQuantity || "0"
              } ${
                ingredients.find((ingredient) => ingredient._id === watch(`ingredients.${index}.ingredientId`))?.unit ||
                "0"
              })`}
            </span>
            {errors.ingredients && errors.ingredients[index] && (
              <p className="text-red-500">{`${errors.ingredients[index]?.quantity?.message}`}</p>
            )}
            <button
              type="button"
              onClick={() => remove(index)}
              className="self-center p-2 bg-red-500 rounded text-white"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          className="self-center p-2 bg-blue-500 rounded text-white"
          type="button"
          onClick={() => append({ ingredientId: "", quantity: "" })}
        >
          Add Ingredient
        </button>
        <label className={`block text-primary-dark`}>Preparation Steps</label>
        {fieldsPrep.map((field, index) => (
          <div key={field.id} className="flex space-x-2">
            <Controller
              name={`preparationSteps.${index}.step`}
              control={control}
              defaultValue={field.step}
              render={({ field }) => (
                <input
                  {...field}
                  className={`w-full p-2 border-border-dark bg-secondary-dark rounded`}
                  placeholder="Step"
                />
              )}
            />
            <Controller
              name={`preparationSteps.${index}.procedure`}
              control={control}
              defaultValue={field.procedure}
              render={({ field }) => (
                <input
                  {...field}
                  className={`w-full p-2 border-border-dark bg-secondary-dark rounded`}
                  placeholder="Procedure"
                />
              )}
            />
            <button
              type="button"
              onClick={() => removePrep(index)}
              // add a pretty button
              className="self-center p-2 bg-red-500 rounded text-white"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => appendPrep({ step: "", procedure: "" })}
          className="self-center p-2 bg-blue-500 rounded text-white"
        >
          Add Preparation Step
        </button>
        <label className={`block text-primary-dark`}>Yield Units</label>
        <Controller
          name="yieldUnits"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              className={`w-full p-2 border border-gray-300 rounded text-primary-dark bg-secondary-dark`}
              placeholder="Yield Units"
            />
          )}
        />
        {errors.yieldUnits && <p className="text-red-500">{`${errors.yieldUnits.message}`}</p>}
        <label className={`block text-primary-dark`}>Yield Weight</label>
        <Controller
          name="yieldWeight"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              className={`w-full p-2 border border-gray-300 rounded text-primary-dark bg-secondary-dark`}
              placeholder="Yield Weight"
            />
          )}
        />
        {errors.yieldWeight && <p className="text-red-500">{`${errors.yieldWeight.message}`}</p>}

        <button type="submit" className={`px-4 py-2 bg-button-dark rounded hover:bg-button-light`}>
          Add Recipe
        </button>
      </form>
    </ReactModal>
  );
};
