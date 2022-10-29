import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-dash3',
  templateUrl: './dash3.component.html',
  styleUrls: ['./dash3.component.scss']
})
export class Dash3Component implements OnInit {

  constructor(    private snackbar: MatSnackBar,
) { }

  ngOnInit(): void {
  }
  pop3() {
    this.snackbar.open('third pop', 'Close', {
      duration: 3000, horizontalPosition: 'right', verticalPosition: 'top'

      }
    )

  }
}
