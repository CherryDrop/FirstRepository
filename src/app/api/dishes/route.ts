import { Db, ObjectId } from "mongodb";
import { connectToDatabase } from "@/lib/mongodb.config";
import { NextResponse } from "next/server";
import { parse } from "path";

export async function GET() {
  const db: Db = await connectToDatabase();

  const dishes = await db.collection("dishes").find().toArray();

  return NextResponse.json({ success: true, data: dishes });
}

export async function POST(request: Request) {
  try {
    const parsedRequest = await request.json();

    const { name, description, costPrice, sellingPrice, costPercentage, rating, recipeID, imageUrl } = parsedRequest;

    if (!name || !description || !costPrice || !sellingPrice || !costPercentage || !rating || !recipeID || !imageUrl) {
      return NextResponse.json({ success: false, message: "Invalid data" });
    }

    const db: Db = await connectToDatabase();

    const dish = {
      name,
      description,
      costPrice,
      sellingPrice,
      costPercentage,
      rating,
      recipeID,
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

export async function PUT(request: Request) {
  const parsedRequest = await request.json();
  const { id, name, description, costPrice, sellingPrice, costPercentage, rating, recipeID, imageUrl } = parsedRequest;

  if (!id || !name || !description || !costPrice || !sellingPrice || !costPercentage || !rating || !recipeID || !imageUrl) {
    return NextResponse.json({ success: false, message: "Invalid data" });
  }

  const db: Db = await connectToDatabase();

  const result = await db.collection("dishes").updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        name,
        description,
        costPrice,
        sellingPrice,
        costPercentage,
        rating,
        recipeID,
        imageUrl,
      },
    }
  );

  if (result.modifiedCount === 1) {
    return NextResponse.json({ success: true, message: "Dish updated successfully" });
  } else {
    return NextResponse.json({ success: false, message: "Failed to update dish" });
  }
}

export async function DELETE(request: Request) {
  const parsedRequest = await request.json();
  const { id } = parsedRequest;

  if (!id) {
    return NextResponse.json({ success: false, message: "Invalid data" });
  }

  const db: Db = await connectToDatabase();

  const result = await db.collection("dishes").deleteOne({ _id: new ObjectId(id) });

  if (result.deletedCount === 1) {
    return NextResponse.json({ success: true, message: "Dish deleted successfully" });
  } else {
    return NextResponse.json({ success: false, message: "Failed to delete dish" });
  }
}
