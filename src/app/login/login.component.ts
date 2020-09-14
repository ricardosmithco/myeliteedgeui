import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private location:Location, private router:Router) { }

  ngOnInit() {
  }

  back(): void{
    //this.location.back();
    this.router.navigateByUrl('');
  }

}
