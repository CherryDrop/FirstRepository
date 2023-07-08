"use client";
import { Ingredient, UpdateIngredientDTO } from "@/server/ingredients/data";
import { DeleteIngredient, GetIngredients } from "@/server/ingredients/features";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { EditIngredientForm } from "../EditIngredientForm";

export const ListIngredients: React.FC<{
  refetchIngredients: boolean;
  setRefetchIngredients: (value: boolean) => void;
}> = ({ refetchIngredients, setRefetchIngredients }) => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [createIngredientModalIsOpen, setCreateIngredientModalIsOpen] = useState(false);
  const [editingIngredient, setEditingIngredient] = useState<Ingredient>({
    name: "",
    unit: "",
    pricePerUnit: "0",
    _id: "",
    unitQuantity: "0",
  });

  useEffect(() => {
    const fetchIngredients = async () => {
      const response = await GetIngredients();
      if (!response.data) {
        console.log(response.message);
        return;
      }
      setIngredients(response.data);
    };

    fetchIngredients();
  }, [refetchIngredients]);

  const handleEditClick = (ingredient: UpdateIngredientDTO) => {
    setEditingIngredient(ingredient);
    setCreateIngredientModalIsOpen(true);
  };

  const handleUpdateSuccess = async (updatedIngredientId: string) => {
    if (!updatedIngredientId) {
      return;
    }
    toast.success("Ingredient updated successfully");
    setRefetchIngredients(!refetchIngredients);
    setCreateIngredientModalIsOpen(false);
  };

  const handleDelete = async (id: string) => {
    const response = await DeleteIngredient(id);
    if (response.success) {
      setRefetchIngredients(!refetchIngredients);
    } else {
      console.error(response.message);
    }
  };

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredIngredients = ingredients.filter((ingredient: any) =>
    ingredient.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      <h2 className="text-2xl text-white font-semibold">Ingredients</h2>
      <div>
        <input
          type="text"
          placeholder="Search by ingredient name"
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border text-white border-border-dark rounded  w-[80%]"
        />
      </div>
      <div className="w-full h-[90vh] overflow-y-scroll scrollbar-thumb-red scrollbar-track-transparent">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-secondary-dark">
              <th className="px-4 py-2 text-white">Nome</th>
              <th className="px-4 py-2  text-white">Preço</th>
              <th className="px-4 py-2  text-white">Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredIngredients.map((ingredient: Ingredient, index) => (
              <tr
                key={ingredient._id}
                className={`${
                  index % 2 === 0 ? "bg-background-dark" : "bg-secondary-dark"
                } hover:bg-gray-200 text-white`}
              >
                <td className="px-4 py-2">{ingredient.name}</td>
                <td className="px-4 py-2">{`${(Number(ingredient.pricePerUnit) / 100).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}/${ingredient.unitQuantity}${ingredient.unit}`}</td>
                <td className="px-4 py-2 flex justify-end space-x-2">
                  <button
                    onClick={() => handleEditClick(ingredient)}
                    className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(ingredient._id)}
                    className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingIngredient && (
        <EditIngredientForm
          isOpen={createIngredientModalIsOpen}
          onRequestClose={() => setCreateIngredientModalIsOpen(false)}
          onSubmit={handleUpdateSuccess}
          defaultValues={editingIngredient}
        />
      )}
    </div>
  );
};
