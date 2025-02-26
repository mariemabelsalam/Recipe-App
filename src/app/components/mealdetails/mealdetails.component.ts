import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MealDetails } from '../../interfaces/iDetails/idetails';
import { MealsService } from './../../services/meals/meals.service';

@Component({
  selector: 'app-mealdetails',
  imports: [],
  templateUrl: './mealdetails.component.html',
  styleUrl: './mealdetails.component.css'
})
export class MealdetailsComponent implements OnInit {
  constructor(private readonly mealsService: MealsService, private activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) { }
  mealId: string = '';
  details: MealDetails[] = []
  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (param) => {
        this.mealId = param['id'];
        console.log(this.mealId);

      }
    })
    this.mealsService.details(this.mealId).subscribe({
      next: (res) => {
        this.details = res.meals
        console.log(this.details);
      }
    })
  }

  openVideo(url: string) {
    window.open(url, '_self')
  }

  openSrc(src: string) {
    window.location.href = src
  }
}
