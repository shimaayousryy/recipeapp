import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(recipes:any[],term:string): any {
    if(term == undefined){
      return recipes;
    }
    return recipes.filter(function(recipes){
      return recipes.title.toLowerCase().includes(term.toLowerCase());
    })
  }

}
