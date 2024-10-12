import { Component, OnInit } from '@angular/core';
import { TagService } from 'src/app/services/getAllServices/Tag/tag.service';
import { WarehouseService } from 'src/app/services/getAllServices/Warehouse/warehouse.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit{
  Tags: any[] = [];
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
