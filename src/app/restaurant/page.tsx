"use client"
// CreateIngredientForm.jsx
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from 'axios';

const ingredientSchema = z.object({
  name: z.string(),
  unitPrice: z.string().transform((val) => Number(val)),
  weightPricePerGram: z.string().transform((val) => Number(val)),
});

export function CreateIngredientForm({ 
    isOpen,
    onRequestClose,
    onSubmit: onSuccess
 }: any) {
  const { register, handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
        name: "",
        unitPrice: "1",
        weightPricePerGram: "1"
    },
    resolver: zodResolver(ingredientSchema)
  });

  const onSubmit = async (data: any) => {
    const response = await axios.post('/api/ingredients', data).catch((error) => {
      console.log(error);
      return {data: null}
    })
    if (response.data.success) {
      onSuccess(response.data.data);
    } else {
      console.error(response.data.message);
    }
  }

  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Create Ingredient"
        className="p-4 mx-auto my-20 bg-white rounded shadow-xl w-96"
        >
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <h2 className="text-2xl font-semibold">Add New Ingredient</h2>
      <Controller
        name="name"
        control={control}
        render={({ field }) =>
          <input {...field} className="w-full p-2 border border-gray-300 rounded" placeholder="Ingredient name" />
        }
      />
      {errors.name && <p className="text-red-500">{`${errors.name.message}`}</p>}
      <Controller
        name="unitPrice"
        control={control}
        render={({ field }) =>
          <input type="number" {...field} className="w-full p-2 border border-gray-300 rounded" placeholder="Unit Price" />
        }
      />
      {errors.unitPrice && <p className="text-red-500">{`${errors.unitPrice.message}`}</p>}
      <Controller
        name="weightPricePerGram"
        control={control}
        render={({ field }) =>
          <input type="number" {...field} className="w-full p-2 border border-gray-300 rounded" placeholder="Weight Price per Gram" />
        }
      />
      {errors.weightPricePerGram && <p className="text-red-500">{`${errors.weightPricePerGram.message}`}</p>}
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add Ingredient</button>
    </form>
    </Modal>
  );
}

// EditIngredientForm.jsx
import Modal from 'react-modal';

Modal.setAppElement('#rootapp') // replace #__next with your app element

export function EditIngredientForm({ isOpen, onRequestClose, onSubmit, defaultValues }: any) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(ingredientSchema),
    defaultValues
  });

  const submitForm = (data: any) => {
    onSubmit(data);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit Ingredient"
      className="p-4 mx-auto my-20 bg-white rounded shadow-xl w-96"
    >
      <h2 className="mb-4 text-lg font-bold text-center">Edit Ingredient</h2>
      <form onSubmit={handleSubmit(submitForm)} className="space-y-2">
        <input {...register('name')} className="w-full p-2 border border-gray-300 rounded" placeholder="Ingredient name" />
        {errors.name && <p className="text-red-500">{`${errors.name.message}`}</p>}
        <input {...register('unitPrice')} type="number" className="w-full p-2 border border-gray-300 rounded" placeholder="Unit Price" />
        {errors.unitPrice && <p className="text-red-500">{`${errors.unitPrice.message}`}</p>}
        <input {...register('weightPricePerGram')} type="number" className="w-full p-2 border border-gray-300 rounded" placeholder="Weight Price per Gram" />
        {errors.weightPricePerGram && <p className="text-red-500">{`${errors.weightPricePerGram.message}`}</p>}
        <button type="submit" className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Update Ingredient</button>
      </form>
    </Modal>
  );
}


// ListIngredients.jsx
import { useState, useEffect, SetStateAction } from "react";

export function ListIngredients() {
  const [ingredients, setIngredients] = useState<any>([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [editingIngredient, setEditingIngredient] = useState({ name: "", unitPrice: 0, weightPricePerGram: 0, _id: "" });
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  useEffect(() => {
    const fetchIngredients = async () => {
      const response = await axios.get('/api/ingredients');
      setIngredients(response.data.data);
    }

    fetchIngredients();
  }, []);

  const handleEdit = (ingredient: SetStateAction<{ name: string; unitPrice: number; weightPricePerGram: number; _id: string; }>) => {
    setEditingIngredient(ingredient);
    setIsOpen(true);
  }

  const handleCreateOpen = () => {
    setIsCreateOpen(true);
    }

    const handleCreate = () => {
    setIsCreateOpen(false);
    window.location.reload();
    }


  const handleUpdate = async (updatedIngredient: any) => {
    const response = await axios.put(`/api/ingredients?id=${editingIngredient._id}`, updatedIngredient);
    if (response.data.success) {
      setIngredients(ingredients.map((ingredient: any) => ingredient._id === editingIngredient._id ? { ...ingredient, ...updatedIngredient } : ingredient));
    } else {
      console.error(response.data.message);
    }
  }

  const handleDelete = async (id: any) => {
    const response = await axios.delete(`/api/ingredients?id=${id}`);
    if (response.data.success) {
      setIngredients(ingredients.filter((ingredient: any) => ingredient._id !== id));
    } else {
      console.error(response.data.message);
    }
  }

  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredIngredients = ingredients.filter((ingredient: any) =>
    ingredient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-semibold">Ingredients</h2>
      <div>
        <input
          type="text"
          placeholder="Search by ingredient name"
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredIngredients.map((ingredient: any) => (
          <div key={ingredient._id} className="p-4 border border-gray-300 rounded">
            <h3 className="text-xl font-semibold">{ingredient.name}</h3>
            <p>Unit Price: {ingredient.unitPrice}</p>
            <p>Weight Price per Gram: {ingredient.weightPricePerGram}</p>
            <div className="flex justify-end">
              <button
                onClick={() => handleEdit(ingredient)}
                className="px-2 py-1 mr-2 text-white bg-green-500 rounded hover:bg-green-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(ingredient._id)}
                className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {editingIngredient && (
        <EditIngredientForm
          isOpen={modalIsOpen}
          onRequestClose={() => setIsOpen(false)}
          onSubmit={handleUpdate}
          defaultValues={editingIngredient}
        />
      )}
      {isCreateOpen && (
        <CreateIngredientForm
          isOpen={isCreateOpen}
          onRequestClose={() => setIsCreateOpen(false)}
          onSubmit={handleCreate}
        />
      )}
      <button onClick={() => handleCreateOpen()} className="p-[1rem] text-white w-[30%] bg-red-500 rounded hover:bg-red-600 fixed bottom-0 left-0">Create Ingredient</button>
    </div>
  );
}

export default ListIngredients;





















// CreateRecipeForm.tsx
const recipeSchema = z.object({
  name: z.string(),
  description: z.string(),
  ingredients: z.array(z.object({
    ingredientId: z.string(),
    quantity: z.number(),
    isQuantityUnits: z.boolean(),
  })),
  preparationSteps: z.array(z.string()),
  yieldWeight: z.number(),
  yieldUnits: z.string(),
});

export function CreateRecipeForm({ 
    isOpen,
    onRequestClose,
    onSubmit: onSuccess
 }: any) {
  const { register, handleSubmit, control, formState: { errors } } = useForm({
    resolver: zodResolver(recipeSchema)
  });

  const onSubmit = async (data: any) => {
    const response = await axios.post('/api/recipes', data).catch((error) => {
      console.log(error);
      return {data: null}
    })
    if (response.data.success) {
      onSuccess(response.data.data);
    } else {
      console.error(response.data.message);
    }
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4 bg-white rounded shadow">
      <input {...register("name")} placeholder="Recipe name" />
      {errors.name && <p>{`${errors.name.message}`}</p>}
  
      <textarea {...register("description")} placeholder="Description" />
      {errors.description && <p>{`${errors.description.message}`}</p>}
  
      <input type="number" {...register("yieldWeight")} placeholder="Yield weight" />
      {errors.yieldWeight && <p>{`${errors.yieldWeight.message}`}</p>}
  
      <input {...register("yieldUnits")} placeholder="Yield units" />
      {errors.yieldUnits && <p>{`${errors.yieldUnits.message}`}</p>}
  
      <input type="submit" />
    </form>
    </Modal>
  );
}

// EditRecipeForm.tsx
export function EditRecipeForm({ isOpen, onRequestClose, onSubmit, defaultValues }: any) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(recipeSchema),
    defaultValues
  });

  const submitForm = (data: any) => {
    onSubmit(data);
    onRequestClose();
  };

  // inside EditRecipeForm component

return (
    <form onSubmit={handleSubmit(submitForm)}>
      <input {...register("name")} placeholder="Recipe name" />
      {errors.name && <p>{`${errors.name.message}`}</p>}
  
      <textarea {...register("description")} placeholder="Description" />
      {errors.description && <p>{`${errors.description.message}`}</p>}
  
      <input type="number" {...register("yieldWeight")} placeholder="Yield weight" />
      {errors.yieldWeight && <p>{`${errors.yieldWeight.message}`}</p>}
  
      <input {...register("yieldUnits")} placeholder="Yield units" />
      {errors.yieldUnits && <p>{`${errors.yieldUnits.message}`}</p>}
  
      <input type="submit" />
    </form>
  );
  
}

// ListRecipes.tsx
export function ListRecipes() {
  const [recipes, setRecipes] = useState<any>([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [editingRecipe, setEditingRecipe] = useState({ name: "", description: "", ingredients: [], preparationSteps: [], yieldWeight: 0, yieldUnits: "", _id: "" });
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await axios.get('/api/recipes');
      setRecipes(response.data.data);
    }

    fetchRecipes();
  }, []);

  const handleEdit = (recipe: SetStateAction<{ name: string; description: string; ingredients: any[]; preparationSteps: string[]; yieldWeight: number; yieldUnits: string; _id: string; }>) => {
    setEditingRecipe(recipe as any);
    setIsOpen(true);
  }

  const handleCreateOpen = () => {
    setIsCreateOpen(true);
  }

  const handleCreate = () => {
    setIsCreateOpen(false);
    window.location.reload();
  }

  const handleUpdate = async (updatedRecipe: any) => {
    const response = await axios.put(`/api/recipes?id=${editingRecipe._id}`, updatedRecipe);
    if (response.data.success) {
      setRecipes(recipes.map((recipe: any) => recipe._id === editingRecipe._id ? { ...recipe, ...updatedRecipe } : recipe));
    } else {
      console.error(response.data.message);
    }
  }

  const handleDelete = async (id: any) => {
    const response = await axios.delete(`/api/recipes?id=${id}`);
    if (response.data.success) {
      setRecipes(recipes.filter((recipe: any) => recipe._id !== id));
    } else {
      console.error(response.data.message);
    }
  }

  // inside ListRecipes component

return (
    <div>
      <button onClick={handleCreateOpen}>Create New Recipe</button>
      <CreateRecipeForm isOpen={isCreateOpen} onRequestClose={handleCreate} />
  
      {recipes.map((recipe: any) => (
        <div key={recipe._id}>
          <h2>{recipe.name}</h2>
          <p>{recipe.description}</p>
          <button onClick={() => handleEdit(recipe)}>Edit</button>
          <button onClick={() => handleDelete(recipe._id)}>Delete</button>
          <EditRecipeForm isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)} onSubmit={handleUpdate} defaultValues={editingRecipe} />
        </div>
      ))}
    </div>
  );
  
}

// export default ListRecipes;

