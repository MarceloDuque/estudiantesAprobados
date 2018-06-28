import { Component } from '@angular/core';
import { NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  a: number;
  b: number;
  c: number;
  d: number;

  resultado: string;


  calculo() {
    if (this.a + this.b + this.c + this.d <= 750  ) {
      this.resultado = 're-probado';
    }else{
      this.resultado = 'aprobado';
    }
  }
}
