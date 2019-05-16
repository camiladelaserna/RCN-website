import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { LandingAnimations } from 'src/app/animations/animations';

@Component({
  selector: 'app-loan-properties',
  templateUrl: './loan-properties.component.html',
  styleUrls: ['./loan-properties.component.scss'],
  animations: LandingAnimations.animations
})
export class LoanPropertiesComponent implements OnInit {

  state = 'hide';
  lineState = 'hide';

  content = [
    {icon: 'fas fa-user',
    title: 'BORROWER',
    data: 'ox2c...ef20',
    tooltip: 'The Borrower’s address is a unique identification of his or her Ethereum wallet.',
    tooltipTitle: 'Borrower',
    icon2: 'fas fa-calendar-alt',
    title2: 'DURATION',
    data2: '90 Days',
    tooltip2: 'The Duration indicates the amount of time that the Borrower has to repay the loan before incurring in Punitory interests.',
    tooltipTitle2: 'Duration',
    icon3: 'far fa-user-circle',
    title3: 'COSIGNER',
    data3: 'Financial Institution',
    tooltip3: 'The Cosigner is responsible for originating loans, defining interest rates, performing KYC and scoring assessments and managing collection services.',
    tooltipTitle3: 'Cosigner', },
    {icon: 'fas fa-long-arrow-alt-up',
    title: 'STATUS',
    data: 'Requested',
    tooltip: 'The Status indicates whether the loan has yet to be funded (Requested), is being paid on time (Ongoing), its full repayment is delayed (In debt), has been fully repaid (Paid) or has expired without being funded (Canceled).',
    tooltipTitle: 'Status',
    icon2: 'fas fa-calculator',
    title2: 'APR',
    data2: '~ 10 %',
    tooltip2: 'The Annual Percentage Rate (APR) is the annualized interest rate the Creditor earns for funding the loan, without taking compound interest into account.',
    tooltipTitle2: 'Apr',
    icon3: 'fas fa-calculator',
    title3: 'PUNITORY',
    data3: '~ 15 %',
    tooltip3: 'The Punitory is the interest rate that replaces the APR once the Due Date has passed. It applies to the total debt accrued so far.',
    tooltipTitle3: 'Punitory' },
    {icon: 'fas fa-sort-amount-down',
    title: 'BORROWING AMOUNT',
    data: '475',
    tooltip: 'The Borrowing Amount is the amount the Borrower has requested on the loan, denominated in the Borrowing Currency.',
    tooltipTitle: 'Borrowing amount',
    icon2: 'fas fa-coins',
    title2: 'BORROWING CURRENCY',
    data2: 'USD',
    tooltip2: 'The Borrowing Currency is the currency in which the Borrowing Amount is denominated.',
    tooltipTitle2: 'Borrowing currency',
    icon3: 'fas fa-sort-amount-down',
    title3: 'GUARANTEED RETURN',
    data3: '486.88',
    tooltip3: 'The Guaranteed Return is the amount the Borrower will owe to the Creditor once the Due Date has arrived, denominated in the Borrowing Currency.',
    tooltipTitle3: 'Guaranteed return', },
    {icon: 'fas fa-sort-amount-up',
    title: 'LENDING AMOUNT',
    data: '15800',
    tooltip: 'The Lending Amount is the amount the Creditor is required to lend in order to fund the loan, denominated in the Lending Currency.',
    tooltipTitle: 'Lending amount',
    icon2: 'fas fa-coins',
    title2: 'LENDING CURRENCY',
    data2: 'RCN',
    tooltip2: 'The Lending Currency is the currency in which the Lending Amount is denominated.',
    tooltipTitle2: 'Lending currency',
    icon3: 'fas fa-sort-amount-up',
    title3: 'EXPECTED RETURN',
    data3: '16195',
    tooltip3: 'The Expected Return is the amount the Borrower will owe to the Creditor once the Due Date has arrived, denominated in the Lending Currency and assuming the exchange rate between Borrowing and Lending Currencies has not changed during the loan’s Duration.',
    tooltipTitle3: 'Expected return', },
    ];

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition + 750 >= componentPosition) {
      this.state = 'show';
      this.lineState = 'show';
    } else {
    }

  }

  ngOnInit() {
  }

}
