import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  imports :[CommonModule]
})
export class UserDetailsComponent implements OnInit {
  user: any = null;

  constructor(
    private route: ActivatedRoute, 
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id'); 
    if (userId) {
      this.loadUserDetails(Number(userId));  
    }
  }

  async loadUserDetails(userId: number) {
    try {
      this.user = await this.userService.getUserById(userId);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  }

  goToDashboard() {
    this.router.navigate(['/']); 
  }

  // Convert gender short code (M/F/O) to full label
  getGenderLabel(gender: string): string {
    switch (gender) {
      case 'M': return 'Male';
      case 'F': return 'Female';
      case 'O': return 'Other';
      default: return 'Unknown';
    }
  }
}
