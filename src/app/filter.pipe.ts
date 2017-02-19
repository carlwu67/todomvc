import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], type: string): any {
    let newvalue:any[]=[];
    switch(type)
    {
      case "Active":
      {
          newvalue=value.filter(v => !v.done);
          break;
      }
      case 'Completed':
      {
          newvalue=value.filter(v => v.done);
          break;
      }
      default:
      {
          newvalue=value;
          break;

      }

    }


    return newvalue;

  }

}
