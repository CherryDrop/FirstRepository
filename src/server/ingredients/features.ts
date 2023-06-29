"use server";

import { connectToDatabase } from "@/lib/mongodb.config";
import { CreateIngredientDTO, Ingredient, UpdateIngredientDTO } from "@/server/ingredients/data";
import { Db, ObjectId } from "mongodb";

export type CreateIngredientResponse = { success: boolean; message: string; id?: string };
export async function CreateIngredient(data: CreateIngredientDTO): Promise<CreateIngredientResponse> {
  try {
    const { name, unit, pricePerUnit } = data;

    if (!name || !unit || !pricePerUnit) {
      return { success: false, message: "Invalid data" };
    }

    const db: Db = await connectToDatabase();

    const ingredient = {
      name,
      unit,
      pricePerUnit,
    };

    const result = await db.collection("ingredients").insertOne(ingredient);

    if (result.acknowledged) {
      return { success: true, message: "Ingredient added successfully", id: result.insertedId.toHexString() };
    } else {
      return { success: false, message: "Failed to add ingredient" };
    }
  } catch (error) {
    console.log(error);
    return { success: false, message: "Failed to add ingredient" };
  }
}

export type UpdateIngredientResponse = { success: boolean; message: string };
export async function UpdateIngredient(data: UpdateIngredientDTO): Promise<UpdateIngredientResponse> {
  try {
    const { _id, name, unit, pricePerUnit } = data;
    const db: Db = await connectToDatabase();

    const updatedResult = await db
      .collection("ingredients")
      .updateOne({ _id: new ObjectId(_id) }, { $set: { name, unit, pricePerUnit } });

    if (updatedResult.acknowledged) {
      return { success: true, message: "Ingredient updated successfully" };
    } else {
      return { success: false, message: "Failed to update ingredient" };
    }
  } catch (error) {
    console.log(error);
    return { success: false, message: "Failed to update ingredient" };
  }
}

export type GetIngredientsResponse = { success: boolean; message: string; data?: Ingredient[] };
export async function GetIngredients(): Promise<GetIngredientsResponse> {
  try {
    const db: Db = await connectToDatabase();
    const ingredients = (await db.collection("ingredients").find().toArray()).map((ingredient) => {
      return {
        _id: ingredient._id.toHexString(),
        name: ingredient.name,
        unit: ingredient.unit,
        pricePerUnit: ingredient.pricePerUnit,
        unitQuantity: ingredient.unitQuantity,
      };
    });
    return { success: true, message: "Ingredients found", data: ingredients as unknown as Ingredient[] };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Failed to get ingredients" };
  }
}

export type DeleteIngredientResponse = { success: boolean; message: string };
export async function DeleteIngredient(id: string): Promise<DeleteIngredientResponse> {
  try {
    const db: Db = await connectToDatabase();
    const deleteResult = await db.collection("ingredients").deleteOne({ _id: new ObjectId(id) });
    if (deleteResult.acknowledged) {
      return { success: true, message: "Ingredient deleted successfully" };
    } else {
      return { success: false, message: "Failed to delete ingredient" };
    }
  } catch (error) {
    console.log(error);
    return { success: false, message: "Failed to delete ingredient" };
  }
}

// export async function reset() {
//     const db: Db = await connectToDatabase();
//     const result = await db.collection("ingredients").updateMany({}, { $set: { unit: "kg", pricePerUnit: "1", unitQuantity: "1000"}});
//     return result;
// }
