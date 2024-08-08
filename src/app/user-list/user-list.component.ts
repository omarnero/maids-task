import { Component, Input, Output } from '@angular/core';
import { User } from '../user.modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  constructor(private router: Router) {}
  @Input({ required: true }) user!: User;
  onSelectedUser() {
    this.router.navigate(['singleuser'], { queryParams: { id: this.user.id } });
    console.log(this.user.id);
  }
}
