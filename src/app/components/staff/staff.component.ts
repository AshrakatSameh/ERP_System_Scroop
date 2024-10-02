import { Component } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent {
  
  buttons=['المعلومات الشخصية ','معلومات المستخدم','المرفقات','معلومات العمل' ,'الاشعارات','المبيعات','الطلبات و المرفقات','الخطط و المهام','العهد المستلمه','الحساب البنكي']

  selectedButton: number | null = null; // To track which button is clicked

  // Method to handle button click and show content
  showContent(index: number): void {
    this.selectedButton = index;
  }
}
