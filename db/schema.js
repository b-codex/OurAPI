import { recipeModel } from "./model"

export let recipeSchema = new mongoose.Schema(recipeModel)

var Recipe = mongoose.model('Recipe', recipeSchema, 'Recipes')