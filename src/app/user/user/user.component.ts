import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { TranslateConfigService } from 'src/app/services/translate-config.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private translateConfigService: TranslateConfigService,  private notificationService: NotificationService

) {}

  ngOnInit(): void {

  }
  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
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

  changeLanguage(type: string) {
    this.translateConfigService.changeLanguage(type);
  }
}
