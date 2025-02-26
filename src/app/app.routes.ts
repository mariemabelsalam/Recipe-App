import { Routes } from '@angular/router';
import { MealdetailsComponent } from './components/mealdetails/mealdetails.component';
import { MeallayoutComponent } from './components/meallayout/meallayout.component';
import { MealsComponent } from './components/meals/meals.component';



export const routes: Routes = [
    {
        path: '', component: MeallayoutComponent, children: [
            { path: '', redirectTo: 'category/all', pathMatch: 'full' },
            { path: "category/:name", component: MealsComponent },
            { path: 'details/:id', component: MealdetailsComponent }
        ]
    }
];
