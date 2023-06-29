"use server";
import { connectToDatabase } from "@/lib/mongodb.config";
import { Db, ObjectId } from "mongodb";
import { CreateRecipeDTO, Recipe, UpdateRecipeDTO } from "./data";

export type CreateRecipeResponse = { success: boolean; message: string; id?: string };
export async function CreateRecipe(data: CreateRecipeDTO): Promise<CreateRecipeResponse> {
  try {
    const { name, description, ingredients, preparationSteps, yieldWeight, yieldUnits } = data;

    if (!name || !description || !ingredients || !preparationSteps || !yieldWeight || !yieldUnits) {
      return { success: false, message: "Invalid data" };
    }

    const db: Db = await connectToDatabase();

    const recipe = {
      name,
      description,
      ingredients,
      preparationSteps,
      yieldWeight,
      yieldUnits,
    };

    const result = await db.collection("recipes").insertOne(recipe);

    if (result.acknowledged) {
      return { success: true, message: "Recipe added successfully", id: result.insertedId.toHexString() };
    } else {
      return { success: false, message: "Failed to add recipe" };
    }
  } catch (error) {
    console.log(error);
    return { success: false, message: "Failed to add recipe" };
  }
}

export type UpdateRecipeResponse = { success: boolean; message: string };
export async function UpdateRecipe(data: UpdateRecipeDTO): Promise<UpdateRecipeResponse> {
  try {
    const { _id, name, description, ingredients, preparationSteps, yieldWeight, yieldUnits } = data;
    const db: Db = await connectToDatabase();

    const updatedResult = await db
      .collection("recipes")
      .updateOne(
        { _id: new ObjectId(_id) },
        { $set: { name, description, ingredients, preparationSteps, yieldWeight, yieldUnits } },
      );

    if (updatedResult.acknowledged) {
      return { success: true, message: "Recipe updated successfully" };
    } else {
      return { success: false, message: "Failed to update recipe" };
    }
  } catch (error) {
    console.log(error);
    return { success: false, message: "Failed to update recipe" };
  }
}

export type GetRecipesResponse = { success: boolean; message: string; data?: Recipe[] };
export async function GetRecipes(): Promise<GetRecipesResponse> {
  try {
    const db: Db = await connectToDatabase();
    const recipes = (await db.collection("recipes").find().toArray()).map((recipe) => {
      return {
        _id: recipe._id.toHexString(),
        name: recipe.name,
        description: recipe.description,
        ingredients: recipe.ingredients,
        preparationSteps: recipe.preparationSteps,
        yieldWeight: recipe.yieldWeight,
        yieldUnits: recipe.yieldUnits,
      };
    });
    return { success: true, message: "Recipes found", data: recipes as unknown as Recipe[] };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Failed to get recipes" };
  }
}

export type DeleteRecipeResponse = { success: boolean; message: string };
export async function DeleteRecipe(id: string): Promise<DeleteRecipeResponse> {
  try {
    const db: Db = await connectToDatabase();
    const deleteResult = await db.collection("recipes").deleteOne({ _id: new ObjectId(id) });
    if (deleteResult.acknowledged) {
      return { success: true, message: "Recipe deleted successfully" };
    } else {
      return { success: false, message: "Failed to delete recipe" };
    }
  } catch (error) {
    console.log(error);
    return { success: false, message: "Failed to delete recipe" };
  }
}
