import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs';
import { NotificationService } from 'src/app/services/notification.service';


@Component({
  selector: 'app-dash2',
  templateUrl: './dash2.component.html',
  styleUrls: ['./dash2.component.scss']
})
export class Dash2Component implements OnInit {

  constructor(    private snackbar: MatSnackBar,private notificationService: NotificationService
    // private userMsg: UserMessages
) { }

  ngOnInit(): void {
  }
  pop2() {
    this.snackbar.open('second pop', 'Close', {
      duration: 3000, horizontalPosition: 'right', verticalPosition: 'top'

      }
    )

    // this.userMsg.success("well done!");
    // this.userMsg.fail("Try Again Later!");
    // this.userMsg.warn("Take Care!");  //i18n


  }
  successMessage$ = this.notificationService.successMessageAction$.pipe(
    tap((message: any) => {
      if (message) {
        setTimeout(() => {
          this.notificationService.clearAllMessages();
        }, 5000);
      }
    })
    );
    warningMessage$ = this.notificationService.warningMessageAction$.pipe(
      tap((message: any) => {
        if (message) {
          setTimeout(() => {
            this.notificationService.clearAllMessages();
          }, 5000);
        }
      })
    );
  errorMessage$ = this.notificationService.errorMessageAction$.pipe(
    tap((message: any) => {
      if (message) {
      setTimeout(() => {
        this.notificationService.clearAllMessages();
      }, 5000);
    }
    })
  );
  onSuccess(){

    this.notificationService.setSuccessMessage("Success");
  }
  onError(){
    this.notificationService.setErrorMessage("error");

  }
  onWarning(){

    this.notificationService.setWarningMessage("Warning");
  }
  save() {
    this.notificationService.clearAllMessages;

  }
  cancel() {
    this.notificationService.clearErrorMessage;

  }
}
