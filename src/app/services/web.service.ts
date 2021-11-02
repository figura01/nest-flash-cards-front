import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../interfaces/card';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  private BASE_URL = 'http://localhost:3000';
  cards = [];
  error = null;
  answers = [];

  constructor(private http: HttpClient) {
    this.getCards()
      .subscribe(data => {
        // @ts-ignore
        this.cards = data;
        console.log('cards: ', data);
      }, error => {
        this.error = error;
        console.error(error);
      })
  }

  getCards() {
    return this.http.get<Card[]>(`${this.BASE_URL}/cards`);
  }

  saveAnswer(answer: any) {
    // @ts-ignore
    this.answers = [...this.answers, answer];
    console.log('this.answers: ', this.answers)
  }

  get allCardsAnswered() {
    return this.answers.length === this.cards.length;
  }
}
