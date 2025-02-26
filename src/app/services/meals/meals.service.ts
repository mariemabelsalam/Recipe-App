import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAllCategory } from '../../interfaces/IAllCategory/iall-category';
import { IGroup } from '../../interfaces/IGroup/igroup';
import { IDetails } from '../../interfaces/iDetails/idetails';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  constructor(private readonly httpClient: HttpClient) { }
  getAllCategories(): Observable<IAllCategory> {
    return this.httpClient.get<IAllCategory>('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
  }


  getGroup(meal: string): Observable<IGroup> {
    if (meal == 'all') {
      return this.httpClient.get<IGroup>('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    }
    return this.httpClient.get<IGroup>(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
  }


  details(id:string):Observable<IDetails> {
    return this.httpClient.get<IDetails>(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  }

}
