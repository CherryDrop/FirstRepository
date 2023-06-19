"use client"
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#rootapp') // replace #__next with your app element

export function EditModal({ isOpen, onRequestClose, onSubmit, defaultValues }:any) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(recipeSchema),
    defaultValues
  });

  const submitForm = (data:any) => {
    onSubmit(data);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit Recipe"
      className="p-4 mx-auto my-20 bg-white rounded shadow-xl w-96"
    >
      <h2 className="mb-4 text-lg font-bold text-center">Edit Recipe</h2>
      <form onSubmit={handleSubmit(submitForm)} className="space-y-2">
        <input {...register('name')} className="w-full p-2 border border-gray-300 rounded" placeholder="Recipe name" />
        {errors.name && <p className="text-red-500">{`${errors.name.message}`}</p>}
        <textarea {...register('ingredients')} className="w-full p-2 border border-gray-300 rounded" placeholder="Ingredients" />
        {errors.ingredients && <p className="text-red-500">{`${errors.ingredients.message}`}</p>}
        <textarea {...register('instructions')} className="w-full p-2 border border-gray-300 rounded" placeholder="Instructions" />
        {errors.instructions && <p className="text-red-500">{`${errors.instructions.message}`}</p>}
        <button type="submit" className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Update Recipe</button>
      </form>
    </Modal>
  );
}

const recipeSchema = z.object({
  name: z.string(),
  ingredients: z.string(),
  instructions: z.string()
});

export default function RecipePage() {
  const { register, handleSubmit, control, reset, formState: { errors } } = useForm({
    resolver: zodResolver(recipeSchema)
  });

  const [recipes, setRecipes] = useState<any[]>([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [editingRecipe, setEditingRecipe] = useState({name:"",ingredients:"",instructions:"",_id:""});

  const handleDelete = async (id:string) => {
    const response = await axios.delete(`/api?id=${id}`);
    if (response.data.success) {
      setRecipes(recipes.filter((recipe) => recipe._id !== id));
    } else {
      console.error(response.data.message);
    }
  }

  const handleEdit = (recipe:any) => {
    setEditingRecipe(recipe);
    setIsOpen(true);
  }

  const handleUpdate = async (updatedRecipe:any) => {
    const response = await axios.put(`/api?id=${editingRecipe._id}`, updatedRecipe);
    if (response.data.success) {
      setRecipes(recipes.map((recipe) => recipe._id === editingRecipe._id ? {...recipe, ...updatedRecipe} : recipe));
    } else {
      console.error(response.data.message);
    }
  }
  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await axios.get('/api');
    
      setRecipes(response.data.data);
    }

    fetchRecipes();
  }, []);

  const onSubmit = async (data: any) => {
    const response = await axios.post('/api', data).catch((error)=>{
      console.log(error);
      return {data:null}
    })
    if (response.data.success) {
      setRecipes([...recipes, response.data.data]);
      reset();
    } else {
      console.error(response.data.message);
    }
  }

  return (
    <div className="p-4 space-y-4">
       <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <h2 className="text-2xl font-semibold">Add New Recipe</h2>
        <Controller
          name="name"
          control={control}
          render={({ field }) => 
            <input {...field} className="w-full p-2 border border-gray-300 rounded" placeholder="Recipe name" />}
        />
    {errors.name && <p className="text-red-500">{`${errors.name.message}`}</p>}
        <Controller
          name="ingredients"
          control={control}
          render={({ field }) => 
            <textarea {...field} className="w-full p-2 border border-gray-300 rounded" placeholder="Ingredients" />}
        />
    {errors.ingredients && <p className="text-red-500">{`${errors.ingredients.message}`}</p>}
        <Controller
          name="instructions"
          control={control}
          render={({ field }) => 
            <textarea {...field} className="w-full p-2 border border-gray-300 rounded" placeholder="Instructions" />}
        />
    {errors.instructions && <p className="text-red-500">{`${errors.instructions.message}`}</p>}
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add Recipe</button>
      </form>
      <h2 className="text-2xl font-semibold">Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {recipes.map(recipe => (
        <div key={recipe._id} className="p-4 border border-gray-300 rounded">
            <h3 className="text-xl font-semibold">{recipe.name}</h3>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
          <div className="flex justify-end">
            <button onClick={() => handleEdit(recipe)} className="px-2 py-1 mr-2 text-white bg-green-500 rounded hover:bg-green-600">Edit</button>
            <button onClick={() => handleDelete(recipe._id)} className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600">Delete</button>
          </div>
        </div>
      ))}
      {editingRecipe && 
        <EditModal 
          isOpen={modalIsOpen} 
          onRequestClose={() => setIsOpen(false)} 
          onSubmit={handleUpdate} 
          defaultValues={editingRecipe} 
        />}
    </div>


   </div>
  );
}
