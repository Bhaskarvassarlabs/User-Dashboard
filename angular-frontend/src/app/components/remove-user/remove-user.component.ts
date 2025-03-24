import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-remove-user',
  templateUrl: './remove-user.component.html',
  styleUrls: ['./remove-user.component.css'],
  imports :[CommonModule]
})
export class RemoveUserComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.loadUsers();
  }

  async loadUsers() {
    try {
      this.users = await this.userService.getUsers();
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  async removeUser(userId: number) {
    console.log("RemoveUser user id is",userId)
    if (confirm('Are you sure you want to remove this user?')) {
      try {
        await this.userService.removeUser(userId);
        alert('User removed successfully!');
        this.loadUsers(); 
      } catch (error) {
        console.error('Error removing user:', error);
        alert('Failed to remove user. Please try again.');
      }
    }
  }

  goToDashboard() {
    this.router.navigate(['']); 
  }
}
