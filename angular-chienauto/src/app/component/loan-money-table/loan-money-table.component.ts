import { Component, OnInit } from '@angular/core';
import { LoanMoneyService } from '../../services/loan-money.service';

@Component({
  selector: 'app-loan-money-table',
  templateUrl: './loan-money-table.component.html',
  styleUrl: './loan-money-table.component.css'
})
export class LoanMoneyTableComponent implements OnInit {
  loanDuration!: number;
  constructor(
    private loanMoneyService: LoanMoneyService
  ){}
  ngOnInit(): void {
    this.loanDuration =  this.loanMoneyService.getLoanDuration();
  }

  
}
