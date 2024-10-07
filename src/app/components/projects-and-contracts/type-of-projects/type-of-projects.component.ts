import { Component } from '@angular/core';

@Component({
  selector: 'app-type-of-projects',
  templateUrl: './type-of-projects.component.html',
  styleUrls: ['./type-of-projects.component.css']
})
export class TypeOfProjectsComponent {
  isFirstButtonClicked = false;
  isSecondButtonClicked = false;

  istableview = true;
  iscardsview=false;

  toggleFirstButtonClick() {
    this.isFirstButtonClicked = true;
  this.isSecondButtonClicked = false;
  this.toggleCardsonClick()
  }

  toggleSecondButtonClick() {
    this.isSecondButtonClicked = true;
  this.isFirstButtonClicked = false;
  this.toggleTableonClick();
  }

  toggleTableonClick(){
    this.istableview = true;  // Set table view to true
    this.iscardsview = false; // Set cards view to false
  }

  toggleCardsonClick(){
    this.istableview = false;
    this.iscardsview = true;
  }

  isDropdownOpen = false;
  isRowRemoved = false;

  openDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    if (this.isDropdownOpen) {
      this.removeRow();
    }
  }

  removeRow() {
    this.isRowRemoved = true;
  }

}
