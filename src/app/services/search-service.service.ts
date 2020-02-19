import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Searchdata} from '../models/searchdata';

@Injectable()
export class SearchServiceService {
  constructor(private httpClient: HttpClient) { }
  public data: Searchdata[];
  getRecipe (ingredients1: string, ingredients2: string, ingredients3: string ): Observable<Searchdata[]> {
  const url = `http://www.recipepuppy.com/api/?i=${ingredients1},${ingredients2}&q=${ingredients3}&p=3`;
  return this.httpClient.get<Searchdata[]>(url);
  }

}
