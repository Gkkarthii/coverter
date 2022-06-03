import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Converter';
  selected = 'option2';
  good:any='';
  display1:any='';
  display2:any='';
  getValue(val:string) {
    this.good=val;
    // console.warn(val)
  }
  conversion(item:string) {
    if(item==='option1') {
      const far: { type: any, num: any } = {
        type: 'C',
        num: (this.good - 32)*1.8
      };
      this.display1=far.num;
      this.display2=far.type;
      // console.warn(this.display1,this.display2);
    }
    else {
      const cel: { type: any, num:any } = {
        type: 'F',
        num: 1.8*this.good+32
      };
      this.display1=cel.num;
      this.display2=cel.type;
      // console.warn(this.display1,this.display2);
    }
  }
}

