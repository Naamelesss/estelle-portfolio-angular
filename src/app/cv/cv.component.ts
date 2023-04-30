import { Component, OnInit } from '@angular/core';
import { PortfolioCVBase } from '../models/portfolio.model';
import { PortfolioKnowledgeService } from '../services/portfolioknowledge.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  portfolioCV!: PortfolioCVBase[];

  constructor(private portfolioknowledgeService: PortfolioKnowledgeService) { }

  ngOnInit(): void {
    this.portfolioCV = this.portfolioknowledgeService.getAllCV();
  }

}
