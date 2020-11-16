import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecipeService} from '../recipe.service'
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  recipe_id:any;

  recipesDetails:any;
  constructor(private _ActivatedRoute:ActivatedRoute , private _RecipeService:RecipeService) { 
   this.recipe_id = _ActivatedRoute.snapshot.paramMap.get('recipe_id');
   _RecipeService.getDetails(this.recipe_id).subscribe((data)=>{
     this.recipesDetails = data.recipe ;
     console.log(this.recipesDetails)
   })
  }

  ngOnInit(): void {
  }

}
