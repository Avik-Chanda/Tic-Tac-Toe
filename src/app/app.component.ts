import { Component, OnInit, ViewEncapsulation } from '@angular/core';

export interface Tile {
  text: string;
  isSelected: boolean;
  color: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'TICTACTOE';
  // tslint:disable-next-line: variable-name
  x_or_o = 0;
  Tiles: Tile[] = [];
  turn = 'Play your game';
  isWinnerDecided = false;

  ngOnInit() {
    this.generateData();
  }

  generateData() {
    for (let i = 0; i < 9; i++) {
      this.Tiles.push({
        text: '',
        isSelected: false,
        color: ''
      });
    }
  }


  getWinner() {
    if (this.Tiles[0].text !== '' && this.Tiles[0].text === this.Tiles[1].text && this.Tiles[0].text === this.Tiles[2].text) {
      this.turn = 'Winner is' + " " + this.Tiles[0].text;
      this.Tiles[0].color = '#f23900';
      this.Tiles[1].color = '#f23900';
      this.Tiles[2].color = '#f23900';
      this.isWinnerDecided = true
    }
    if (this.Tiles[3].text !== '' && this.Tiles[3].text === this.Tiles[4].text && this.Tiles[3].text === this.Tiles[5].text) {
      this.turn = 'Winner is' + " " + this.Tiles[3].text;
      this.Tiles[3].color = '#f23900';
      this.Tiles[4].color = '#f23900';
      this.Tiles[5].color = '#f23900';
      this.isWinnerDecided = true;
    }
    if (this.Tiles[6].text !== '' && this.Tiles[6].text === this.Tiles[7].text && this.Tiles[7].text === this.Tiles[8].text) {

      this.turn = 'Winner is' + " " + this.Tiles[6].text;
      this.Tiles[6].color = '#f23900';
      this.Tiles[7].color = '#f23900';
      this.Tiles[8].color = '#f23900';
      this.isWinnerDecided = true;
    }
    if (this.Tiles[0].text !== '' && this.Tiles[0].text === this.Tiles[3].text && this.Tiles[0].text === this.Tiles[6].text) {

      this.turn = 'Winner is' + " " + this.Tiles[0].text;
      this.Tiles[0].color = '#f23900';
      this.Tiles[3].color = '#f23900';
      this.Tiles[6].color = '#f23900';
      this.isWinnerDecided = true;
    }
    if (this.Tiles[1].text !== '' && this.Tiles[1].text === this.Tiles[4].text && this.Tiles[4].text === this.Tiles[7].text) {

      this.turn = 'Winner is' + " " + this.Tiles[1].text;
      this.Tiles[4].color = '#f23900';
      this.Tiles[1].color = '#f23900';
      this.Tiles[7].color = '#f23900';
      this.isWinnerDecided = true;
    }
    if (this.Tiles[2].text !== '' && this.Tiles[2].text === this.Tiles[5].text && this.Tiles[2].text === this.Tiles[8].text) {

      this.turn = 'Winner is' + " " + this.Tiles[2].text;
      this.Tiles[8].color = '#f23900';
      this.Tiles[5].color = '#f23900';
      this.Tiles[2].color = '#f23900';
      this.isWinnerDecided = true
    }
    if (this.Tiles[0].text !== '' && this.Tiles[0].text === this.Tiles[4].text && this.Tiles[0].text === this.Tiles[8].text) {

      this.turn = 'Winner is' + " " + this.Tiles[0].text;
      this.Tiles[0].color = '#f23900';
      this.Tiles[4].color = '#f23900';
      this.Tiles[8].color = '#f23900';
      this.isWinnerDecided = true;
    }
    if (this.Tiles[2].text !== '' && this.Tiles[2].text === this.Tiles[4].text && this.Tiles[2].text === this.Tiles[6].text) {

      this.turn = 'Winner is' + " " + this.Tiles[2].text;
      this.Tiles[6].color = '#f23900';
      this.Tiles[4].color = '#f23900';
      this.Tiles[2].color = '#f23900';
      this.isWinnerDecided = true;
    }

    if (this.x_or_o === 9 && this.isWinnerDecided === false) {
      this.turn = 'Its a draw... play again';
    }

  }

  changeText(index: number) {
    if (this.Tiles[index].text === '' && this.x_or_o <= 9 && this.isWinnerDecided === false) {
      if (this.x_or_o % 2 === 0) {
        this.x_or_o += 1;
        this.Tiles[index].text = 'X';
        this.Tiles[index].isSelected = true;
        this.turn = 'O\'s turn now';
        this.getWinner();
      } else {
        this.x_or_o += 1;
        this.Tiles[index].text = 'O';
        this.Tiles[index].isSelected = true;
        this.turn = 'X\'s turn now';
        this.getWinner();
      }
    }
  }

  playAgain() {
    this.x_or_o = 0;
    this.turn = 'Play your game';
    this.isWinnerDecided = false;
    for (const i of this.Tiles) {
      i.text = '';
      i.isSelected = false;
      i.color = '';
    }
  }


}
