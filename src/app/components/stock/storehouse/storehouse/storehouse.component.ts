import { Component } from '@angular/core';
import { WarehouseService } from 'src/app/services/getAllServices/Warehouse/warehouse.service';

@Component({
  selector: 'app-storehouse',
  templateUrl: './storehouse.component.html',
  styleUrls: ['./storehouse.component.css']
})
export class StorehouseComponent {
  Warehouses:any[] =[];

  constructor(private Warehouse: WarehouseService){}

  
  ngOnInit(): void {
       // Fetch UserWarehouses when the component initializes
       this.Warehouse.getWarehouses().subscribe(
        (response) => {
          this.Warehouses = response; // Assign the fetched Warehouses
          console.log('Warehouses:', this.Warehouses);
        },
        (error) => {
          console.error('Error fetching Warehouses:', error); // Handle errors
        }
      );

}
}
