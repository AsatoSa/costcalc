import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  calcresult = '';
  kinA:number = 0;
  ryoA:number = 0;
  kinB:number = 0;
  ryoB:number = 0;

  calcAtoB(kinA,kinB,ryoA,ryoB){
    let tankaA = kinA/ryoA;
    let tankaB = kinB/ryoB;

    if(tankaA > tankaB)
    {
      this.calcresult = "Bがお得です。";
    }else if(tankaA < tankaB)
    {
      this.calcresult = "Aがお得です。";
    }else{
      this.calcresult = "AとB同じ値段です。";
    }
  }

  clearAtoB(){
   this.kinA = 0;
   this.ryoA = 0;
   this.kinB = 0;
   this.ryoB = 0;
   this.calcresult = "";
  }

  selectControl(ctrl){
    ctrl.select();
  }

}

