import { Component, OnInit } from '@angular/core';
import{RecipeService} from '../recipe.service';
//import {FormGroup , FormControl} from '@angular/forms'
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  allRecipes:any;
  searchForm:any;
  pastaRecipes:any;
  term:string;


 

  constructor(private _RecipeService:RecipeService) { 
     this._RecipeService.getRecipe().subscribe( (data)=>{
      this.allRecipes=data.recipes;
      console.log(this.allRecipes);
  
    })

    this._RecipeService.getPasta().subscribe( (data)=>{
      this.pastaRecipes=data.recipes;
      console.log(this.pastaRecipes);
    })
  }
  




 

  ngOnInit(): void {
   

  }
 
 

}
