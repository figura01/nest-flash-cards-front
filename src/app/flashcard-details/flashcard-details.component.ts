import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-flashcard-details',
  templateUrl: './flashcard-details.component.html',
  styleUrls: ['./flashcard-details.component.css']
})
export class FlashcardDetailsComponent implements OnInit {
  @Input() card: any;
  @Output() answer = new EventEmitter();

  showAnswer = false;
  constructor() { }

  ngOnInit(): void {
  }

  flip() {
    this.showAnswer = !this.showAnswer;
  }

  setAnswer(isRight: boolean) {
    this.answer.emit({ card: this.card, isRight});
  }

}
