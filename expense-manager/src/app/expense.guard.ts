import { Injectable, inject } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


//@Injectable({
//  providedIn: 'root'
//})
export const ExpenseGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree => {

  let url: string = state.url;
  let isUserLoggedIn: string | null = localStorage.getItem("isUserLoggedIn");
  let router: Router = inject(Router);
  let authService: AuthService = inject(AuthService);   // Can be used if required
  console.log("Url: " + url);

  if (isUserLoggedIn != null && isUserLoggedIn == "true") {
    if (url == "/login")
      return router.parseUrl("/expenses");
    else
      return true;
  } else {

    // Check if already navigating to login page.
    // Must avoid endless redirect.
    if (url == "/login")
      return true;
    else
      return router.parseUrl("/login");
  }
}

//  constructor(private authService: AuthService, private router: Router) { }

//  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
//    let url: string = state.url;
//    return this.checkLogin(url);
//  }

//  checkLogin(url: string) : true | UrlTree {

//    console.log("Url: " + url);
//    let val: string | null = localStorage.getItem("isUserLoggedIn");

//    if (val != null && val == "true") {
//      if (url == "/login")
//        return this.router.parseUrl("/expenses");
//      else
//        return true;
//    } else {
//      return this.router.parseUrl("/login");
//    }
//  }
//}

