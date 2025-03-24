import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [CommonModule,RouterModule]
})
export class DashboardComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) {}

  async ngOnInit() {
    this.users = await this.userService.getUsers();
  }
}
