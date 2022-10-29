import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { map, Observable, of, switchMap, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(
    private router: Router,
    private snackbar: MatSnackBar,

  ) {}

  logout() {
    // Removes the jwt token from the local storage, so the user gets logged out & then navigate back to the "public" routes
    this.router.navigate(['../../']);
  }

  pop() {
    this.snackbar.open('Great work', 'Close', {
      duration: 3000, horizontalPosition: 'right', verticalPosition: 'top'

      }
    )

  }

}
