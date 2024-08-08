import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../user.modal';

@Component({
  selector: 'app-singleuserpage',
  templateUrl: './singleuserpage.component.html',
  styleUrl: './singleuserpage.component.css',
})
export class SingleuserpageComponent implements OnInit {
  id!: number;
  user!: User;
  isLoading = false;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.isLoading = true;
    // this.id = JSON.parse(localStorage.getItem('user')).id;
    this.route.queryParams.subscribe((queryParams) => {
      this.user = JSON.parse(localStorage.getItem('user'));
      if (this.user) {
        this.isLoading = false;

        if (this.user.id === +queryParams.id) {
          return;
        } else {
          this.id = queryParams.id;
          this.fetchSingleUser();
        }
      } else {
        this.id = queryParams.id;
        this.fetchSingleUser();
      }
      // if (this.id === queryParams.id) {
      //   this.user = JSON.parse(localStorage.getItem('user'));
      //   return;
      // } else {
      //   this.id = queryParams.id;

      //   this.fetchSingleUser();
      // }
    });
  }
  private fetchSingleUser() {
    this.http
      .get(`https://reqres.in/api/users/${this.id}`)
      .subscribe((data: any) => {
        this.isLoading = false;
        this.user = data.data;
        localStorage.setItem('user', JSON.stringify(this.user));
      });
  }
  onBack() {
    this.router.navigate(['/']);
  }
}
