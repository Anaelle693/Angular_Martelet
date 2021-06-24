import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
  name: 'total',
})

export class TotalPipe implements PipeTransform{
  // le premier paramètre (obligatoire est avant le | )
  // le second paramètre correspond au nbJours
  // le troisième paramètre est optionnel (tva)
  transform(val: number, coef: number, tva?: number){
    if(tva){
      return (val * coef) * (1 + tva / 100);
    }
    return val * coef;
  }

}
