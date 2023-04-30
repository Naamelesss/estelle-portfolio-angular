import { Component, OnInit } from '@angular/core';
import { PortfolioKnowledge } from '../models/portfolio.model';
import { PortfolioKnowledgeService } from '../services/portfolioknowledge.service';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})
export class KnowledgeComponent implements OnInit {
  portfolioKnowledge!: PortfolioKnowledge[];

  constructor(private portfolioKnowledgeService: PortfolioKnowledgeService) {}

  ngOnInit(): void {
    this.portfolioKnowledge = this.portfolioKnowledgeService.getAllKnowledge();
  }
}
