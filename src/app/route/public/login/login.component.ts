import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/auth';
import { tap, takeUntil } from 'rxjs/operators';


@Component({
  selector: 'portfolio-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm: FormGroup;
  private readonly onDestroy$ = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.initForm();
    this.checkLogin();
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.onDestroy$.emit();
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  checkLogin() {
    this.auth.isAuthenticated()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(loggedIn => {
        console.log('意外にも通過');
        if (loggedIn) {
          this.router.navigate(['/security']);
        }
      });
  }

  onSubmitLogin(value: any) {
    const email = value.email, password = value.password;
    this.auth.signIn(email, password)
      .subscribe(
        result => {
          this.router.navigate(['/']);
        },
        error => {
          console.log(error);
        });
  }

}
