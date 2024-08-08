import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  searchText!: string;
  @Input() showSearch = false;
  @Output() search = new EventEmitter<string>();
  onSearch(event) {
    this.search.emit(event.target.value);
  }
}
