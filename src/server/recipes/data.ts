import z from "zod";

export type Recipe = {
  _id: string;
  name: string;
  description: string;
  ingredients: {
    ingredientId: string;
    quantity: string;
  }[];
  preparationSteps: {
    step: string;
    procedure: string;
  }[];
  yieldWeight: string;
  yieldUnits: string;
};

const recipeSchema = {
  name: z.string(),
  description: z.string(),
  ingredients: z.array(
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
  preparationSteps: z.array(z.object({ step: z.string(), procedure: z.string() })),
  yieldWeight: z.string(),
  yieldUnits: z.string().refine((val) => {
    return Number(val) && Number(val) > 0;
  }),
};

export const CreateRecipeSchema = z.object({
  name: recipeSchema.name,
  description: recipeSchema.description,
  ingredients: recipeSchema.ingredients,
  preparationSteps: recipeSchema.preparationSteps,
  yieldWeight: recipeSchema.yieldWeight,
  yieldUnits: recipeSchema.yieldUnits,
});

export type CreateRecipeDTO = z.infer<typeof CreateRecipeSchema>;

export const UpdateRecipeSchema = z.object({
  _id: recipeSchema.name,
  name: recipeSchema.name,
  description: recipeSchema.description,
  ingredients: recipeSchema.ingredients,
  preparationSteps: recipeSchema.preparationSteps,
  yieldWeight: recipeSchema.yieldWeight,
  yieldUnits: recipeSchema.yieldUnits,
});

export type UpdateRecipeDTO = z.infer<typeof UpdateRecipeSchema>;
