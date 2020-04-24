import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  private language = new BehaviorSubject("fr");

  getLanguage(): Observable<string> {
    return this.language.asObservable();
  }

  switchLanguage(language: string) {
    this.language.next(language);
  }

}
