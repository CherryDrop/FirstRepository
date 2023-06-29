"use strict";
import { Recipe, UpdateRecipeDTO } from "@/server/recipes/data";
import { DeleteRecipe, GetRecipes } from "@/server/recipes/features";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
// import { EditRecipeForm } from "../EditRecipeForm";

export const ListRecipes: React.FC<{
  refetchRecipes: boolean;
  setRefetchRecipes: (value: boolean) => void;
}> = ({ refetchRecipes, setRefetchRecipes }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [createRecipeModalIsOpen, setCreateRecipeModalIsOpen] = useState(false);
  const [editingRecipe, setEditingRecipe] = useState<Recipe>({
    _id: "",
    name: "",
    description: "",
    ingredients: [],
    preparationSteps: [],
    yieldWeight: "",
    yieldUnits: "",
  });

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await GetRecipes();
      if (!response.data) {
        console.log(response.message);
        return;
      }
      setRecipes(response.data);
    };

    fetchRecipes();
  }, [refetchRecipes]);

  const handleEditClick = (recipe: UpdateRecipeDTO) => {
    setEditingRecipe(recipe);
    setCreateRecipeModalIsOpen(true);
  };

  const handleUpdateSuccess = async (updatedRecipeId: string) => {
    if (!updatedRecipeId) {
      return;
    }
    toast.success("Recipe updated successfully");
    setRefetchRecipes(!refetchRecipes);
    setCreateRecipeModalIsOpen(false);
  };

  const handleDelete = async (id: string) => {
    const response = await DeleteRecipe(id);
    if (response.success) {
      setRefetchRecipes(!refetchRecipes);
    } else {
      console.error(response.message);
    }
  };

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredRecipes = recipes.filter((recipe: any) => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <h2 className="text-2xl font-semibold">Recipes</h2>
      <div>
        <input
          type="text"
          placeholder="Search by recipe name"
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border border-gray-300 rounded w-[80%]"
        />
      </div>
      <div className="w-full h-[90vh] overflow-y-scroll scrollbar-thumb-red scrollbar-track-transparent flex flex-wrap">
        {filteredRecipes.map((recipe: Recipe) => (
          <div key={recipe._id} className="m-4 w-64 bg-white shadow rounded p-4">
            <h3 className="font-bold">{recipe.name}</h3>
            <p>{recipe.description}</p>
            <button
              onClick={() => handleEditClick(recipe)}
              className="mt-4 px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 w-full"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(recipe._id)}
              className="mt-2 px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 w-full"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {editingRecipe && (
        <></>
        // <EditRecipeForm
        //   isOpen={createRecipeModalIsOpen}
        //   onRequestClose={() => setCreateRecipeModalIsOpen(false)}
        //   onSubmit={handleUpdateSuccess}
        //   defaultValues={editingRecipe}
        // />
      )}
    </div>
  );
};
