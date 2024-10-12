import { Component } from '@angular/core';

@Component({
  selector: 'app-goods-voucher',
  templateUrl: './goods-voucher.component.html',
  styleUrls: ['./goods-voucher.component.css']
})
export class GoodsVoucherComponent {
  // buttons=['الأصناف','الملاحظات','المهام' ,'مرفقات']

  buttons = ['الأصناف', 'الملاحظات', 'المهام', 'مرفقات']
  selectedButton: number | null = null; // To track which button is clicked

  // Method to handle button click and show content
  showContent(index: number): void {
    this.selectedButton = index;
  }
}
