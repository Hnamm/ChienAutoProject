import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoanMoneyService {
  loanDuration!: number;
  constructor() { }

  setLoanDuration(duration: number) {
    this.loanDuration = duration;
  }

  getLoanDuration() {
    return this.loanDuration;
  }

  calculatePriceAfterDiscount(unitPrice: number): number {
    return unitPrice * 0.99;
  }

  calculateDownPayment(priceAfterDiscount: number, downPayment: number): number {
    return priceAfterDiscount * downPayment / 100;
  }

  calculateLoanAmount(priceAfterDiscount: number, downPayment: number): number {
    return priceAfterDiscount - this.calculateDownPayment(priceAfterDiscount, downPayment);
  }

  calculateInterestAmount(loanAmount: number, interestRate: number): number {
    return loanAmount * interestRate / 100;
  }

  calculateTotalAmount(loanAmount: number, interestAmount: number): number {
    return loanAmount + interestAmount;
  }
}
