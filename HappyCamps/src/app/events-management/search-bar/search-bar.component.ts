import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  searchText:string;

  @Output() searchedText= new EventEmitter<String>();

  search(searchText:String){
    this.searchedText.emit(searchText);
  }

}
