import { Component, OnInit } from '@angular/core';
import { WebService } from '../services/web.service';

@Component({
  selector: 'app-flashcard-list',
  templateUrl: './flashcard-list.component.html',
  styleUrls: ['./flashcard-list.component.css']
})
export class FlashcardListComponent implements OnInit {

  constructor(public web: WebService) { }

  ngOnInit(): void {
  }

  saveAnswer(answer: any) {
    //console.log('answer', answer);
    this.web.saveAnswer(answer);
  }

  saveAll() {
    this.web.saveAllAnswersToServer().subscribe(data => {
      console.log('saveAllAnswersTosServer SUCCESS', data);
    }, err => {
      console.log('saveAllAnswersTosServer FAILURE', err);
    })
  }

}
