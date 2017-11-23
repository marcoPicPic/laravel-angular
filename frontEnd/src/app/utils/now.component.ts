//our root app component
import {Component, Attribute} from '@angular/core';


@Component({
  selector: 'now',
  template: `<p>Today is {{today | date}}</p>
  <p>Or if you prefer, {{today | date:'medium'}}</p>
  <p>The time is {{today | date:'jmZ'}}</p>
  <p>{{today | date:'h:mm:ss'}}</p>
  <p>Finally the date and time is {{today | date:'short'}}</p>`
})
export class NowComponent {
  private today;
  
 constructor() { 
   this.today =  new Date(); 
   
   setInterval(() => {
       this.today =  new Date();
    }, 1000);
 } 

} 