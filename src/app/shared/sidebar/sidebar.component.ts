import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


   // Define the object with string indexing
   isCollapsed: { [key: string]: boolean } = {
    salesMovementSub: true,
    salesManagersSub: true,
    clientsSub: true,
    salesReportsSub: true,
    settingsSub: true,
  };
  

  openSubmenus: { [key: string]: boolean } = {};

  toggleSubmenu(menuId: string) {
    // Close the currently open submenu if it's different
    for (const key in this.openSubmenus) {
      if (key !== menuId) {
        this.openSubmenus[key] = false;
      }
    }
    // Toggle the clicked submenu
    this.openSubmenus[menuId] = !this.openSubmenus[menuId];
  }

  isSubmenuOpen(menuId: string): boolean {
    return !!this.openSubmenus[menuId];
  }
  
  toggleCollapse(section: string) {
    this.isCollapsed[section] = !this.isCollapsed[section];
  }

}
