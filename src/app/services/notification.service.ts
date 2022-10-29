import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }
  private successMessageSubject = new Subject<string>();
  successMessageAction$ = this.successMessageSubject.asObservable();

  private errorMessageSubject = new Subject<string>();
  errorMessageAction$ = this.errorMessageSubject.asObservable();

  private warningMessageSubject = new Subject<string>();
  warningMessageAction$ = this.warningMessageSubject.asObservable();

  setSuccessMessage(message: string) {
    this.successMessageSubject.next(message);
  }

  setErrorMessage(message: string) {
    this.errorMessageSubject.next(message);
  }
  setWarningMessage(message: string) {
    this.warningMessageSubject.next(message);
  }

  clearSuccessMessage() {
    this.setSuccessMessage('');
  }

  clearErrorMessage() {
    this.setErrorMessage('');
  }
  clearWarningMessage() {
    this.setWarningMessage('');
  }

  clearAllMessages() {
    this.clearSuccessMessage();
    this.clearErrorMessage();
    this.clearWarningMessage();
  }
}
