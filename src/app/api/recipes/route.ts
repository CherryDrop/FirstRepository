import { Db, ObjectId } from "mongodb";
import { connectToDatabase } from "@/lib/mongodb.config";
import { NextResponse } from "next/server";
import { parse } from "path";

export async function GET() {
  const db: Db = await connectToDatabase();

  const recipes = await db.collection("recipes").find().toArray();

  return NextResponse.json({ success: true, data: recipes });
}

export async function POST(request: Request) {
  try {
    const parsedrequest = await request.json();

    const { name, ingredients, preparationSteps } = parsedrequest;

    if (!name || !ingredients || !preparationSteps) {
      return NextResponse.json({ success: false, message: "Invalid data" });
    }

    const db: Db = await connectToDatabase();

    const recipe = {
      name,
      ingredients,
      preparationSteps,
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

export async function PUT(request: Request) {
  const parsedrequest = await request.json();
  const { id, name, ingredients, preparationSteps } = parsedrequest;
  if (!id || !name || !ingredients || !preparationSteps) {
    return NextResponse.json({ success: false, message: "Invalid data" });
  }

  const db: Db = await connectToDatabase();

  const result = await db.collection("recipes").updateOne(
    { _id: new ObjectId(id) },
    { $set: { name, ingredients, preparationSteps } }
  );

  if (result.modifiedCount === 1) {
    return NextResponse.json({ success: true, message: "Recipe updated successfully" });
  } else {
    return NextResponse.json({ success: false, message: "Failed to update recipe" });
  }
}

export async function DELETE(request: Request) {
  const parsedrequest = await request.json();
  const { id } = parsedrequest;

  if (!id) {
    return NextResponse.json({ success: false, message: "Invalid data" });
  }

  const db: Db = await connectToDatabase();

  const result = await db.collection("recipes").deleteOne({ _id: new ObjectId(id) });

  if (result.deletedCount === 1) {
    return NextResponse.json({ success: true, message: "Recipe deleted successfully" });
  } else {
    return NextResponse.json({ success: false, message: "Failed to delete recipe" });
  }
}
