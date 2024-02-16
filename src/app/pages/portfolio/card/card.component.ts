import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private navegador: Router
    ) {

    // recupera o id
    this.activeRoute.params.subscribe(
      res => console.log('id da page',res)
    )

    this.activeRoute.firstChild?.params.subscribe(
      res => console.log('id da page',res)
    )

    this.activeRoute.queryParams.subscribe(
      res => console.log('params',res)
    )
   }

  ngOnInit(): void {
    // setInterval(()=> {
    //   this.navegador.navigate(['/'])
    // },5000)
  }

}
