import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../user.modal';
import { SearchService } from '../../header/search.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private router: Router,
    private searchService: SearchService
  ) {}
  users!: User[];
  page = 1;
  isLoading = false;
  totalPages: number;
  textSearch!: string;
  user!: User;
  ngOnInit(): void {
    this.isLoading = true;
    this.users = JSON.parse(localStorage.getItem('users'));
    if (this.users) {
      this.isLoading = false;
      return;
    }
    this.fetchAllUser();
  }
  nextPage() {
    this.page = this.page + 1;
    this.fetchAllUser();
  }
  prevPage() {
    this.page = this.page - 1;
    this.fetchAllUser();
  }

  private fetchAllUser() {
    this.http
      .get(`https://reqres.in/api/users?page=${this.page}`)
      .subscribe((userData: any) => {
        this.isLoading = false;
        this.users = userData?.data;
        localStorage.setItem('users', JSON.stringify(this.users));
        this.totalPages = userData?.total_pages;
      });
  }
  searchHandler(value) {
    if (value) {
      this.textSearch = value;
      this.isLoading = true;
      this.fetchSearchUser(this.textSearch);
    } else {
      this.fetchAllUser();
    }
  }
  private fetchSearchUser(id: string) {
    this.http
      .get(`https://reqres.in/api/users/${id}`)
      .subscribe((userData: any) => {
        this.isLoading = false;
        this.user = userData?.data;
        this.users = [];
        this.users.push(this.user);
      });
  }
}
