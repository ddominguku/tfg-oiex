import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.css']
})
export class LogInPageComponent implements OnInit {

  public visibleSignIn = true
  public visibleRegister = false;

  constructor() { }

  ngOnInit(): void {
  }

  activateRegister(event: Boolean) : void{
    this.visibleSignIn = false;  
    this.visibleRegister = true;
    
  }

  activateSigIn(event: Boolean) : void{
    this.visibleRegister = false;
    this.visibleSignIn = true;  
  }

}
