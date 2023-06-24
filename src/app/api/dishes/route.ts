import { Db, ObjectId } from "mongodb";
import { connectToDatabase } from "@/lib/mongodb.config";
import { NextResponse } from "next/server";
import { parse } from "path";
export async function POST(request: Request) {
  try {
    const parsedRequest = await request.json();

    const { name, description, sellingPrice, rating, recipeId, imageUrl } = parsedRequest;

    if (!name || !description || !sellingPrice || !rating || !recipeId || !imageUrl) {
      return NextResponse.json({ success: false, message: "Invalid data" });
    }

    const db: Db = await connectToDatabase();

    const dish = {
      name,
      description,
      sellingPrice,
      rating,
      recipeId: new ObjectId(recipeId),
      imageUrl,
    };

    const result = await db.collection("dishes").insertOne(dish);

    if (result.acknowledged) {
      return NextResponse.json({ success: true, message: "Dish added successfully" });
    } else {
      return NextResponse.json({ success: false, message: "Failed to add dish" });
    }
  } catch (error) {
    console.log(error);
  }
}

export async function GET() {
  const db: Db = await connectToDatabase();
  const dishes = await db.collection("dishes").find().toArray();
  return NextResponse.json({ success: true, data: dishes });
}

export async function PUT(request: Request) {
  try {
    const parsedRequest = await request.json();
    const { _id, name, description, sellingPrice, rating, recipeId, imageUrl } = parsedRequest;
    const db: Db = await connectToDatabase();

    const updatedResult = await db.collection("dishes").updateOne(
      { _id: new ObjectId(_id) },
      { $set: { name, description, sellingPrice, rating, recipeId: new ObjectId(recipeId), imageUrl } }
    );

    if (updatedResult.acknowledged) {
      return NextResponse.json({ success: true, message: "Dish updated successfully" });
    } else {
      return NextResponse.json({ success: false, message: "Failed to update dish" });
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

    const deletedResult = await db.collection("dishes").deleteOne({ _id: new ObjectId(_id) });

    if (deletedResult.acknowledged) {
      return NextResponse.json({ success: true, message: "Dish deleted successfully" });
    } else {
      return NextResponse.json({ success: false, message: "Failed to delete dish" });
    }
  } catch (error) {
    console.log(error);
  }
}
