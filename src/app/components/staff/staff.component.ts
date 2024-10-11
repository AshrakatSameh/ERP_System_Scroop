import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/getAllServices/Employee/employee.service';

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


  employees:any[] =[];

  constructor(private employeeService: EmployeeService){}
  ngOnInit(): void {
    // Fetch UserWarehouses when the component initializes
    this.employeeService.getAllEmployees().subscribe(
     (response) => {
       this.employees = response; // Assign the fetched Warehouses
       console.log('employee:', this.employees);
     },
     (error) => {
       console.error('Error fetching Warehouses:', error); // Handle errors
     }
   );
}
}
