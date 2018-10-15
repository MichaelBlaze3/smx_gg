import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CanList } from '../game/canList';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  constructor(
    private _router: Router,
    private _canList: CanList
  ) { }

  starStatus: any[] = [];
  yellowStars: number = 0;
  message: string = "";
  ngOnInit() {
    let stats = this._canList.getCanStatus();
    this.starStatus.push({status: stats.aluminio.answer});
    this.starStatus.push({status: stats.organico.answer});
    this.starStatus.push({status: stats.papelycarton.answer});
    this.starStatus.push({status: stats.plastico.answer});
    for(let i = 0; i < this.starStatus.length; i++) {
      if(this.starStatus[i].status){
        this.yellowStars++;
      }
    }
    console.log(this.yellowStars);
    switch(this.yellowStars){
      case 1: 
        this.message = "Intentalo nuevamente";
        break;
      case 2: 
        this.message = "Muy Bien!";
        break;
      case 3:
        this.message = "Muy Bien!"
        break;
      case 4: 
        this.message = "Excelente!"
        break;
      default:
        console.log("Missing option");
        this.message = "Intentalo nuevamente";
        break;
    }
  }

  resetGame(): void {
    this._canList.resetCanList();
    this._router.navigate(['/landing']);
  }

}
