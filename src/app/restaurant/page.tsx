"use client";
import { useState } from "react";
import { CreateIngredientForm } from "./CreateIngredientsForm";
import { CreateRecipeForm } from "./CreateRecipeForm";
import { ListIngredients } from "./ListIngredientsTable";
import { ListRecipes } from "./ListRecipes";

export default function ManageDataPage() {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isCreateRecipeOpen, setIsCreateRecipeOpen] = useState(false);
  const [ísCreateDishOpen, setIsCreateDishOpen] = useState(false);

  const [refetchIngredients, setRefetchIngredients] = useState(false);
  const [refetchRecipes, setRefetchRecipes] = useState(false);
  const [refetchDishes, setRefetchDishes] = useState(false);

  const handleCreateIngredientOpen = () => {
    setIsCreateOpen(true);
  };
  const handleCreateRecipeOpen = () => {
    setIsCreateRecipeOpen(true);
  };
  const handleCreateDishOpen = () => {
    setIsCreateDishOpen(true);
  };

  const handleCreateIngredientSuccess = () => {
    setRefetchIngredients(!refetchIngredients);
    setIsCreateOpen(false);
  };
  const handleCreateRecipeSuccess = () => {
    setRefetchRecipes(!refetchRecipes);
    setIsCreateRecipeOpen(false);
  };
  const handleCreateDishSuccess = () => {
    setRefetchDishes(!refetchDishes);
    setIsCreateDishOpen(false);
  };

  const handleRefetchIngredients = () => {
    setRefetchIngredients(!refetchIngredients);
  };
  const handleRefetchRecipes = () => {
    setRefetchRecipes(!refetchRecipes);
  };
  const handleRefetchDishes = () => {
    setRefetchDishes(!refetchDishes);
  };

  return (
    <>
      <div className="grid grid-cols-7 gap-4 pb-[10rem] bg-background-dark">
        <div className="col-span-3">
          <ListIngredients refetchIngredients={refetchIngredients} setRefetchIngredients={handleRefetchIngredients} />
        </div>
        <div className="col-span-4">
          <ListRecipes refetchRecipes={refetchRecipes} setRefetchRecipes={handleRefetchRecipes} />
        </div>
        {isCreateOpen && (
          <CreateIngredientForm
            isOpen={isCreateOpen}
            onRequestClose={() => setIsCreateOpen(false)}
            onSubmit={handleCreateIngredientSuccess}
          />
        )}
      </div>
      <div className="bg-zinc-700 opacity-25 w-full h-[4.5rem] fixed bottom-0 left-0" />
      <div className=" w-full h-[4.5rem] fixed bottom-0 left-0 flex items-center justify-around">
        <button
          onClick={() => handleCreateIngredientOpen()}
          className="
              p-[1rem] text-white w-[30%] bg-red-500 
              rounded-lg hover:bg-red-600 
              mb-2 ml-2 shadow-lg hover:shadow-xl transition duration-300 ease-in-out
              "
        >
          <i className="fa fa-plus mr-2 animate-pulse" />
          Create Ingredient
        </button>
        <button
          onClick={() => handleCreateRecipeOpen()}
          className="
              p-[1rem] text-white w-[30%] bg-red-500
              rounded-lg hover:bg-red-600 
              mb-2 ml-2 shadow-lg hover:shadow-xl transition duration-300 ease-in-out
              "
        >
          <i className="fa fa-plus mr-2 animate-pulse" />
          Create Recipe
        </button>
        <button
          onClick={() => handleCreateDishOpen()}
          className="
              p-[1rem] text-white w-[30%] bg-red-500
              rounded-lg hover:bg-red-600 
              mb-2 ml-2 shadow-lg hover:shadow-xl transition duration-300 ease-in-out
              "
        >
          <i className="fa fa-plus mr-2 animate-pulse" />
          Create Dish
        </button>
      </div>
      <CreateRecipeForm
        refetchIngredients={refetchIngredients}
        setRefetchIngredients={handleRefetchIngredients}
        isOpen={isCreateRecipeOpen}
        onRequestClose={() => {
          setIsCreateRecipeOpen(false);
        }}
        onSubmit={() => {
          handleCreateRecipeSuccess();
        }}
      />
    </>
  );
}

// // CreateRecipeForm.tsx
// const recipeSchema = z.object({
//   name: z.string(),
//   description: z.string(),
//   ingredients: z.array(z.object({
//     ingredientId: z.string(),
//     quantity: z.number(),
//     isQuantityUnits: z.boolean(),
//   })),
//   preparationSteps: z.array(z.string()),
//   yieldWeight: z.number(),
//   yieldUnits: z.string(),
// });

// export function CreateRecipeForm({
//     isOpen,
//     onRequestClose,
//     onSubmit: onSuccess
//  }: any) {
//   const { register, handleSubmit, control, formState: { errors } } = useForm({
//     resolver: zodResolver(recipeSchema)
//   });

//   const onSubmit = async (data: any) => {
//     const response = await axios.post('/api/recipes', data).catch((error) => {
//       console.log(error);
//       return {data: null}
//     })
//     if (response.data.success) {
//       onSuccess(response.data.data);
//     } else {
//       console.error(response.data.message);
//     }
//   }

//   return (
//     <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
//     <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4 bg-white rounded shadow">
//       <input {...register("name")} placeholder="Recipe name" />
//       {errors.name && <p>{`${errors.name.message}`}</p>}

//       <textarea {...register("description")} placeholder="Description" />
//       {errors.description && <p>{`${errors.description.message}`}</p>}

//       <input type="number" {...register("yieldWeight")} placeholder="Yield weight" />
//       {errors.yieldWeight && <p>{`${errors.yieldWeight.message}`}</p>}

//       <input {...register("yieldUnits")} placeholder="Yield units" />
//       {errors.yieldUnits && <p>{`${errors.yieldUnits.message}`}</p>}

//       <input type="submit" />
//     </form>
//     </Modal>
//   );
// }

// // EditRecipeForm.tsx
// export function EditRecipeForm({ isOpen, onRequestClose, onSubmit, defaultValues }: any) {
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     resolver: zodResolver(recipeSchema),
//     defaultValues
//   });

//   const submitForm = (data: any) => {
//     onSubmit(data);
//     onRequestClose();
//   };

//   // inside EditRecipeForm component

// return (
//     <form onSubmit={handleSubmit(submitForm)}>
//       <input {...register("name")} placeholder="Recipe name" />
//       {errors.name && <p>{`${errors.name.message}`}</p>}

//       <textarea {...register("description")} placeholder="Description" />
//       {errors.description && <p>{`${errors.description.message}`}</p>}

//       <input type="number" {...register("yieldWeight")} placeholder="Yield weight" />
//       {errors.yieldWeight && <p>{`${errors.yieldWeight.message}`}</p>}

//       <input {...register("yieldUnits")} placeholder="Yield units" />
//       {errors.yieldUnits && <p>{`${errors.yieldUnits.message}`}</p>}

//       <input type="submit" />
//     </form>
//   );

// }

// // ListRecipes.tsx
// export function ListRecipes() {
//   const [recipes, setRecipes] = useState<any>([]);
//   const [createIngredientModalIsOpen, setCreateIngredientModalIsOpen] = useState(false);
//   const [editingRecipe, setEditingRecipe] = useState({ name: "", description: "", ingredients: [], preparationSteps: [], yieldWeight: 0, yieldUnits: "", _id: "" });
//   const [isCreateOpen, setIsCreateOpen] = useState(false);

//   useEffect(() => {
//     const fetchRecipes = async () => {
//       const response = await axios.get('/api/recipes');
//       setRecipes(response.data.data);
//     }

//     fetchRecipes();
//   }, []);

//   const handleEdit = (recipe: SetStateAction<{ name: string; description: string; ingredients: any[]; preparationSteps: string[]; yieldWeight: number; yieldUnits: string; _id: string; }>) => {
//     setEditingRecipe(recipe as any);
//     setCreateIngredientModalIsOpen(true);
//   }

//   const handleCreateIngredientOpen = () => {
//     setIsCreateOpen(true);
//   }

//   const handleCreateIngredient = () => {
//     setIsCreateOpen(false);
//     window.location.reload();
//   }

//   const handleUpdate = async (updatedRecipe: any) => {
//     const response = await axios.put(`/api/recipes?id=${editingRecipe._id}`, updatedRecipe);
//     if (response.data.success) {
//       setRecipes(recipes.map((recipe: any) => recipe._id === editingRecipe._id ? { ...recipe, ...updatedRecipe } : recipe));
//     } else {
//       console.error(response.data.message);
//     }
//   }

//   const handleDelete = async (id: any) => {
//     const response = await axios.delete(`/api/recipes?id=${id}`);
//     if (response.data.success) {
//       setRecipes(recipes.filter((recipe: any) => recipe._id !== id));
//     } else {
//       console.error(response.data.message);
//     }
//   }

//   // inside ListRecipes component

// return (
//     <div>
//       <button onClick={handleCreateIngredientOpen}>Create New Recipe</button>
//       <CreateRecipeForm isOpen={isCreateOpen} onRequestClose={handleCreateIngredient} />

//       {recipes.map((recipe: any) => (
//         <div key={recipe._id}>
//           <h2>{recipe.name}</h2>
//           <p>{recipe.description}</p>
//           <button onClick={() => handleEdit(recipe)}>Edit</button>
//           <button onClick={() => handleDelete(recipe._id)}>Delete</button>
//           <EditRecipeForm isOpen={createIngredientModalIsOpen} onRequestClose={() => setCreateIngredientModalIsOpen(false)} onSubmit={handleUpdate} defaultValues={editingRecipe} />
//         </div>
//       ))}
//     </div>
//   );

// }

// // export default ListRecipes;
