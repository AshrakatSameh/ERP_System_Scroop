import { Component } from '@angular/core';

@Component({
  selector: 'app-category-employee-requests',
  templateUrl: './category-employee-requests.component.html',
  styleUrls: ['./category-employee-requests.component.css']
})
export class CategoryEmployeeRequestsComponent {
  buttons=['المعلومات الشخصية ','معلومات المستخدم','المرفقات','معلومات العمل' ,'الاشعارات','المبيعات','الطلبات و المرفقات','الخطط و المهام','العهد المستلمه','الحساب البنكي']

  selectedButton: number | null = null; // To track which button is clicked

  // Method to handle button click and show content
  showContent(index: number): void {
    this.selectedButton = index;
  }
}
