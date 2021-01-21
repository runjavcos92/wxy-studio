import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  title="Somos una agencia"
  constructor() { }
  
  ngOnInit(): void {
  }

}
