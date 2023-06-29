import z from "zod";

export type Ingredient = {
  _id: string;
  name: string;
  unit: string;
  pricePerUnit: string;
  unitQuantity: string;
};

const IngredientSchema = {
  _id: z.string(),
  name: z.string(),
  unit: z.string(),
  pricePerUnit: z.string().refine(
    (val) => {
      return Number(val);
    },
    { message: "Weight price per gram must be a number and greater than 0" },
  ),
  unitQuantity: z.string().refine(
    (val) => {
      return Number(val);
    },
    { message: "Unit quantity must be a number and greater than 0" },
  ),
};

export const CreateIngredientSchema = z.object({
  name: IngredientSchema.name,
  unit: IngredientSchema.unit,
  pricePerUnit: IngredientSchema.pricePerUnit,
  unitQuantity: IngredientSchema.unitQuantity,
});

export type CreateIngredientDTO = z.infer<typeof CreateIngredientSchema>;

export const UpdateIngredientSchema = z.object({
  _id: IngredientSchema._id,
  name: IngredientSchema.name,
  unit: IngredientSchema.unit,
  pricePerUnit: IngredientSchema.pricePerUnit,
  unitQuantity: IngredientSchema.unitQuantity,
});

export type UpdateIngredientDTO = z.infer<typeof UpdateIngredientSchema>;
