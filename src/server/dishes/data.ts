import z from "zod";

export type Dish = {
  _id: string;
  name: string;
  description: string;
  recipeId: string;
  additionalIngredients: {
    ingredientId: string;
    quantity: string;
  }[];
  sellingPrice: string;
  peopleServed: string;
  weight: string;
};

const dishSchema = {
  name: z.string(),
  description: z.string(),
  recipeId: z.string(),
  additionalIngredients: z.array(
    z.object({
      ingredientId: z.string(),
      quantity: z
        .string()
        .refine(
          (val) => {
            return Number(val);
          },
          { message: "Quantity must be a number and greater than 0" },
        )
        .refine(
          (val) => {
            const decimalPlaces = val.toString().split(".")[1];
            return !decimalPlaces || decimalPlaces.length <= 2;
          },
          { message: "Quantity must have no more than 2 decimal places" },
        )
        .refine(
          (val) => {
            return Number(val) > 0;
          },
          { message: "Quantity must be greater than 0" },
        ),
    }),
  ),
  sellingPrice: z.string().refine(
    (val) => {
      return Number(val);
    },
    { message: "Selling price must be a number and greater than 0" },
  ),
  peopleServed: z.string().refine(
    (val) => {
      return Number(val);
    },
    { message: "People served must be a number and greater than 0" },
  ),
  weight: z.string(),
};

export const CreateDishSchema = z.object({
  name: dishSchema.name,
  description: dishSchema.description,
  recipeId: dishSchema.recipeId,
  additionalIngredients: dishSchema.additionalIngredients,
  sellingPrice: dishSchema.sellingPrice,
  peopleServed: dishSchema.peopleServed,
  weight: dishSchema.weight,
});

export type CreateDishDTO = z.infer<typeof CreateDishSchema>;

export const UpdateDishSchema = z.object({
  _id: dishSchema.name,
  name: dishSchema.name,
  description: dishSchema.description,
  recipeId: dishSchema.recipeId,
  additionalIngredients: dishSchema.additionalIngredients,
  sellingPrice: dishSchema.sellingPrice,
  peopleServed: dishSchema.peopleServed,
  weight: dishSchema.weight,
});

export type UpdateDishDTO = z.infer<typeof UpdateDishSchema>;
