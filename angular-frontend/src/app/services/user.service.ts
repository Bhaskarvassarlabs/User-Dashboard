
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = 'http://127.0.0.1:8000/api/users/';

  async getUsers() {
    try {
      const response = await axios.get(this.API_URL);
      console.log("Backend Response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  }

  async addUser(user: any) {
    try {
      const response = await axios.post(`${this.API_URL}add/`, user, {
        headers: { 'Content-Type': 'application/json' }
      });
      return response.data;
    } catch (error) {
      console.error("Error adding user:", error);
      throw error;
    }
  }

  async removeUser(userId: number) {
    try {
      console.log("Removing user with ID:", userId);
      await axios.delete(`${this.API_URL}remove/${userId}/`);
    } catch (error) {
      console.error("Error removing user:", error);
      throw error;
    }
  }

  async getUserById(userId: number) {
    try {
      const response = await axios.get(`${this.API_URL}getdetails/${userId}/`);
      console.log("User Details:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching user details:", error);
      throw error;
    }
  }
}
