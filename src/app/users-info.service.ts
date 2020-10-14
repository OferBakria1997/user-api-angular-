import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { MyResponse } from './myresponse';

@Injectable({
  providedIn: 'root'
})
export class UsersInfoService {
  private url = 'https://randomuser.me/api/?results=50';
  private indexOfLastClickedCard:number = 0;
  private aCardWasClicked:boolean = false;
  indexOfLastClickedCardSubject = new Subject<number>();
  aCardWasClickedSubject = new Subject<boolean>();
  sortAgain = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  getUsersFromAPIObservable(): Observable<MyResponse> {
    return this.http.get<MyResponse>(this.url);
  }

  sortMe(str:string){
    this.sortAgain.next(str);
  }

  updateCurrentClickedCard(i:number)
  {
    this.aCardWasClicked = true;
    this.aCardWasClickedSubject.next(this.aCardWasClicked);
    this.indexOfLastClickedCard = i;
    this.indexOfLastClickedCardSubject.next(this.indexOfLastClickedCard);
  }

  updateClosedDetailsView()
  {
    this.aCardWasClicked = false;
    this.aCardWasClickedSubject.next(this.aCardWasClicked)
  }


};