import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {


  transform(value: any, arg: any): any {
    const resultPosts = [];
    if (value){
      for(let post of value){
        console.log(post);

        if(post.name.indexOf(arg) > -1){
          resultPosts.push(post);
        }
      }

      return resultPosts;
  }
  }
}
