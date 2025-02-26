import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { Meal } from '../../interfaces/IAllCategory/iall-category';
import { MealG } from './../../interfaces/IGroup/igroup';
import { MealsService } from './../../services/meals/meals.service';

@Component({
  selector: 'app-meals',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.css'
})
export class MealsComponent implements OnInit {
  constructor(private readonly mealsService: MealsService,
    private readonly activatedRoute: ActivatedRoute
  ) { }

  categories: Meal[] = []
  meals: MealG[] = []
  categoryName: any
  getCategories() {
    this.mealsService.getAllCategories().subscribe({
      next: (res) => {
        this.categories = res.meals
        console.log(this.categories);
      }

    })

    this.activatedRoute.paramMap.subscribe((param) => {
      this.categoryName = param.get('name')
      this.mealsService.getGroup(this.categoryName).subscribe({
        next: (res) => {
          this.meals = res.meals
        }
      })
    })

  }

  ngOnInit(): void {
    this.getCategories()
  }


}
