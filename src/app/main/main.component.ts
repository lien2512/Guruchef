import { Component, OnInit } from '@angular/core';
import {Searchdata} from '../models/searchdata';
import {SearchServiceService} from '../services/search-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  listMeat = ['Fish', 'Chicken', 'Pork', 'Beef', 'Other'];
  listVeget = ['cauliflower', 'cabbage', 'Spinach', 'carrot', 'potato', 'tomato', 'garlic'];
  listSpice = ['onions', 'garlic', 'pepper', 'salt', 'sugar', 'lemon', 'chili', 'omelet'];
  Vegetable;
  Meat;
  Spice;
  searchData: Searchdata[];
  constructor(
    private searchService: SearchServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }
  doSearch () {
  this.searchService.getRecipe(this.Meat, this.Vegetable, this.Spice).subscribe(
    (res: Searchdata[]) => {
      this.searchData = res;
      console.log(res);
    },
    (err) => {
      console.log(err);
    }
  );
  }
}
