import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {
  transform(value: string, todas:boolean = true): string {

    value = value.toLowerCase();

    let arr = value.split(" ");

    if(todas){
      for(let i in arr){
        arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
      }
    }
    else{
      arr[0] = arr[0][0].toUpperCase() + arr[0].substr(1);
    }


    return arr.join(" ");
  }
}
