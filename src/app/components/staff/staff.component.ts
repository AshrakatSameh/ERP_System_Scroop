import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from 'src/app/services/getAllServices/Employee/employee.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent {




  currentPage: number = 1; // Set the initial page
  totalPages: number = 3; // Set the total number of pages

  setPage(page: number): void {
    this.currentPage = page; // Update the current page
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--; // Go to the previous page
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++; // Go to the next page
    }
  }

 
  
  buttons=['المعلومات الشخصية ','معلومات المستخدم','المرفقات','معلومات العمل' ,'الاشعارات','المبيعات','الطلبات و المرفقات','الخطط و المهام','العهد المستلمه','الحساب البنكي']

  selectedButton: number | null = null; // To track which button is clicked

  // Method to handle button click and show content
  showContent(index: number): void {
    this.selectedButton = index;
  }



}
