import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flashcard-details',
  templateUrl: './flashcard-details.component.html',
  styleUrls: ['./flashcard-details.component.css']
})
export class FlashcardDetailsComponent implements OnInit {
  @Input() card: any;
  showAnswer = false;
  constructor() { }

  ngOnInit(): void {
  }

  flip() {
    this.showAnswer = !this.showAnswer;
    console.log(this.showAnswer);
  }

}
