import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  // entered!: boolean;

  constructor(private router: Router) {};

  ngOnInit(): void {
    // this.entered = false
  }

  enterPortfolio(): void {
    // this.entered = true
    this.router.navigate(['accueil'])
  }
}
