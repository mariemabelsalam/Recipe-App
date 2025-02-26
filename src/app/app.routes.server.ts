import { RenderMode, ServerRoute } from '@angular/ssr';
import { MealsComponent } from './components/meals/meals.component';
import { MealdetailsComponent } from './components/mealdetails/mealdetails.component';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  { path: "category/:name", renderMode: RenderMode.Client },
  { path: 'details/:id', renderMode: RenderMode.Client }
];
