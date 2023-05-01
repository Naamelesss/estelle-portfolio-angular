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
  expandImgLink!: string;
  expandImgActive!: boolean;

  constructor(private portfolioKnowledgeService: PortfolioKnowledgeService) {}

  ngOnInit(): void {
    this.expandImgActive = false;
    this.expandImgLink = '';
    this.portfolioKnowledge = this.portfolioKnowledgeService.getAllKnowledge();
  }

  viewImage(lien: string): void {
    this.expandImgLink = lien;
    this.expandImgActive = true;

    // alert(this.expandImgLink);
  }

  closeExpand(): void {
    this.expandImgActive = false;
    this.expandImgLink = '';
  }
}
