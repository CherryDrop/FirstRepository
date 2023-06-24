import { Db, ObjectId } from "mongodb";
import { connectToDatabase } from "@/lib/mongodb.config";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
      const parsedRequest = await request.json();
  
      const { name, unitPrice, weightPricePerGram } = parsedRequest;
  
      if (!name || !unitPrice || !weightPricePerGram) {
        return NextResponse.json({ success: false, message: "Invalid data" });
      }
  
      const db: Db = await connectToDatabase();
  
      const ingredient = {
        name,
        unitPrice,
        weightPricePerGram,
      };
  
      const result = await db.collection("ingredients").insertOne(ingredient);
  
      if (result.acknowledged) {
        return NextResponse.json({ success: true, message: "Ingredient added successfully" });
      } else {
        return NextResponse.json({ success: false, message: "Failed to add ingredient" });
      }
    } catch (error) {
      console.log(error);
    }
}

export async function GET() {
const db: Db = await connectToDatabase();
const ingredients = await db.collection("ingredients").find().toArray();
return NextResponse.json({ success: true, data: ingredients });
}

export async function PUT(request: Request) {
try {
    const parsedRequest = await request.json();
    const { _id, name, unitPrice, weightPricePerGram } = parsedRequest;
    const db: Db = await connectToDatabase();

    const updatedResult = await db.collection("ingredients").updateOne(
    { _id: new ObjectId(_id) },
    { $set: { name, unitPrice, weightPricePerGram } }
    );

    if (updatedResult.acknowledged) {
    return NextResponse.json({ success: true, message: "Ingredient updated successfully" });
    } else {
    return NextResponse.json({ success: false, message: "Failed to update ingredient" });
    }
} catch (error) {
    console.log(error);
}
}

export async function DELETE(request: Request) {
try {
    console.log(request);
    const parsedRequest = await request.json();
    const { _id } = parsedRequest;
    const db: Db = await connectToDatabase();

    const deletedResult = await db.collection("ingredients").deleteOne({ _id: new ObjectId(_id) });

    if (deletedResult.acknowledged) {
    return NextResponse.json({ success: true, message: "Ingredient deleted successfully" });
    } else {
    return NextResponse.json({ success: false, message: "Failed to delete ingredient" });
    }
} catch (error) {
    console.log(error);
}
}
