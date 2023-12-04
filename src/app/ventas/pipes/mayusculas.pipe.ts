import { Pipe, PipeTransform } from "@angular/core";

//es lo mismo de una clase

//crear nuevo pipe
@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{
    transform(valor: string, enMayusculas:boolean = true):string {
        if(enMayusculas){
            return valor.toLocaleUpperCase();
        }else{
            return valor.toLocaleLowerCase();
        }
        
    }
}