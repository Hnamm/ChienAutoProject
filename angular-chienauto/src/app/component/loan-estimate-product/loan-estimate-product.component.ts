import { Component } from '@angular/core';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { LoanMoneyService } from '../../services/loan-money.service';

@Component({
  selector: 'app-loan-estimate-product',
  templateUrl: './loan-estimate-product.component.html',
  styleUrl: './loan-estimate-product.component.css'
})
export class LoanEstimateProductComponent {

  product!: Product;
  downPayment: number = 0; //phần trăm trả trước
  interestRate: number = 0; //lãi suất
  loanDuration: number = 0; //tháng vay
  constructor( private productService: ProductService,
    private route : ActivatedRoute,
    private loanMoneyService: LoanMoneyService
  ) {}; 

  ngOnInit(): void {
      this.route.paramMap.subscribe(() => {
        this.handleProductDetail();
      })
  }
  handleProductDetail() {
    const theProductId: number = +this.route.snapshot.paramMap.get('id')!;
    
    this.productService.getProduct(theProductId).subscribe(
      data => {
        this.product = data;
      }
    )
  }

  updateLoanDuration(duration: number) {
    this.loanMoneyService.setLoanDuration(duration);
  } 
  get priceAfterDiscount() {
    return this.loanMoneyService.calculatePriceAfterDiscount(this.product.unitPrice);
  }

  get soTienTraTruoc() {
    return this.loanMoneyService.calculateDownPayment(this.priceAfterDiscount, this.downPayment);
  }

  get soTienVay() {
    return this.loanMoneyService.calculateLoanAmount(this.priceAfterDiscount, this.downPayment);
  }

  get soTienLai() {
    return this.loanMoneyService.calculateInterestAmount(this.soTienVay, this.interestRate);
  }

  get tongTien() {
    return this.loanMoneyService.calculateTotalAmount(this.soTienVay, this.soTienLai);
  }
}
