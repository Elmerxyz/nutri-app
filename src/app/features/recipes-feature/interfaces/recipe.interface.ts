export interface Meal {
  id: string;
  name: string;
  thumbnail_url: string;
  suitable_for: MedicalCondition[];
  meal_types: MealType[];
  day: number;
  total_days: number;
  add_to_meal_plan_enabled: boolean;
}

export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'side';

export type MedicalCondition =
  | 'gastritis'
  | 'diabetic'
  | 'heart_healthy'
  | 'low_sodium'
  | 'vegan'
  | 'vegetarian';


export interface MealPlan {
  meals: Meal[];
}

export interface MealFilter {
  condition?: MedicalCondition;
  mealType?: MealType;
  day?: number;
}
