import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class AddUserComponent {
  user = {
    name: '',
    email: '',
    phone_number: '',
    date_of_birth: '',
    gender: ''
  };

  constructor(private userService: UserService, private router: Router) {}

  async addUser() {
    try {
      await this.userService.addUser(this.user);
      alert('User added successfully!');
      this.router.navigate(['']); 
    } catch (error) {
      console.error('Error adding user:', error);
      alert('Failed to add user. Please check the form and try again.');
    }
  }

  goToDashboard() {
    this.router.navigate(['']);
  }
}
