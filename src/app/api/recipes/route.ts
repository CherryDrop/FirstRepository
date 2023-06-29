import { Db, ObjectId } from "mongodb";
import { connectToDatabase } from "@/lib/mongodb.config";
import { NextResponse } from "next/server";
import z from "zod";
import { Ingredient } from "@/lib/DTOs/dtos";

export type Recipe = {
  _id: string;
  name: string;
  description: string;
  ingredients: Ingredient[];
  preparationSteps: string[];
  yieldWeight: number;
  yieldUnits: string;
};

export const CreateRecipeSchema = z.object({
  name: z.string(),
  description: z.string(),
  ingredients: z.array(
    z.object({
      _id: z.string(),
      name: z.string(),
      unit: z.number(),
      pricePerUnit: z.number(),
    })
  ),
  preparationSteps: z.array(z.object({ step: z.string(), description: z.string() })),
  yieldWeight: z.string().refine((val) => {
    return Number(val)
  }, { message: "Yield weight must be a number and greater than 0"}),
  yieldUnits: z.string()
});

export type CreateRecipeDTO = z.infer<typeof CreateRecipeSchema>;

export interface CreateRecipeBody {
  name: string;
  description: string;
  ingredients: Ingredient[];
  preparationSteps: string[];
  yieldWeight: number;
  yieldUnits: string;
}


export async function POST(request: Request) {
  try {
    const parsedRequest = await request.json();

    const { name, description, ingredients, preparationSteps, yieldWeight, yieldUnits } = parsedRequest;

    if (!name || !description || !ingredients || !preparationSteps || !yieldWeight || !yieldUnits) {
      return NextResponse.json({ success: false, message: "Invalid data" });
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
      return NextResponse.json({ success: true, message: "Recipe added successfully" });
    } else {
      return NextResponse.json({ success: false, message: "Failed to add recipe" });
    }
  } catch (error) {
    console.log(error);
  }
}

export async function GET() {
  const db: Db = await connectToDatabase();
  const recipes = await db.collection("recipes").find().toArray();
  return NextResponse.json({ success: true, data: recipes });
}

export async function PUT(request: Request) {
  try {
    const parsedRequest = await request.json();
    const { _id, name, description, ingredients, preparationSteps, yieldWeight, yieldUnits } = parsedRequest;
    const db: Db = await connectToDatabase();

    const updatedResult = await db.collection("recipes").updateOne(
      { _id: new ObjectId(_id) },
      { $set: { name, description, ingredients, preparationSteps, yieldWeight, yieldUnits } }
    );

    if (updatedResult.acknowledged) {
      return NextResponse.json({ success: true, message: "Recipe updated successfully" });
    } else {
      return NextResponse.json({ success: false, message: "Failed to update recipe" });
    }
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE(request: Request) {
  try {
    const parsedRequest = await request.json();
    const { _id } = parsedRequest;
    const db: Db = await connectToDatabase();

    const deletedResult = await db.collection("recipes").deleteOne({ _id: new ObjectId(_id) });

    if (deletedResult.acknowledged) {
      return NextResponse.json({ success: true, message: "Recipe deleted successfully" });
    } else {
      return NextResponse.json({ success: false, message: "Failed to delete recipe" });
    }
  } catch (error) {
    console.log(error);
  }
}
