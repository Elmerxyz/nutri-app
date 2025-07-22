export interface Meal {
  id: string;
  name: string;
  thumbnailUrl: string;
  suitableFor: MedicalCondition[];
  mealTypes: MealType[];
  day: number;
  totalDays: number;
  addToMealPlanEnabled: boolean;
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
