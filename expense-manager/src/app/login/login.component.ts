import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  formData!: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {

    this.formData = new FormGroup({
      username: new FormControl("admin"),
      password: new FormControl("admin")
    });
    
  }

  onClickSubmit(data: any) {
    this.username = data.username;
    this.password = data.password;

    console.log("Login page: " + this.username);
    console.log("Login page" + this.password);

    this.authService.login(this.username, this.password)
      .subscribe(data => {
        console.log("Is Login Success: " + data);

        if (data) this.router.navigate(['/expenses']);

      });

  }

}
