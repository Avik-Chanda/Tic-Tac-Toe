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
  diagonalWinner = false;
  diagonalWinner1 = false;
  winner123 = false;
  winner456 = false;
  winner789 = false;
  winner147 = false;
  winner258= false;
  winner369 = false;

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
      this.winner123 = true;
    }
    if (this.Tiles[3].text !== '' && this.Tiles[3].text === this.Tiles[4].text && this.Tiles[3].text === this.Tiles[5].text) {
      this.turn = 'Winner is' + " " + this.Tiles[3].text;
      this.Tiles[3].color = '#f23900';
      this.Tiles[4].color = '#f23900';
      this.Tiles[5].color = '#f23900';
      this.winner456 = true;
    }
    if (this.Tiles[6].text !== '' && this.Tiles[6].text === this.Tiles[7].text && this.Tiles[7].text === this.Tiles[8].text) {

      this.turn = 'Winner is' + " " + this.Tiles[6].text;
      this.Tiles[6].color = '#f23900';
      this.Tiles[7].color = '#f23900';
      this.Tiles[8].color = '#f23900';
      this.winner789 = true;
    }
    if (this.Tiles[0].text !== '' && this.Tiles[0].text === this.Tiles[3].text && this.Tiles[0].text === this.Tiles[6].text) {

      this.turn = 'Winner is' + " " + this.Tiles[0].text;
      this.Tiles[0].color = '#f23900';
      this.Tiles[3].color = '#f23900';
      this.Tiles[6].color = '#f23900';
      this.winner147 = true;
    }
    if (this.Tiles[1].text !== '' && this.Tiles[1].text === this.Tiles[4].text && this.Tiles[4].text === this.Tiles[7].text) {

      this.turn = 'Winner is' + " " + this.Tiles[1].text;
      this.Tiles[4].color = '#f23900';
      this.Tiles[1].color = '#f23900';
      this.Tiles[7].color = '#f23900';
      this.winner258 = true;
    }
    if (this.Tiles[2].text !== '' && this.Tiles[2].text === this.Tiles[5].text && this.Tiles[2].text === this.Tiles[8].text) {

      this.turn = 'Winner is' + " " + this.Tiles[2].text;
      this.Tiles[8].color = '#f23900';
      this.Tiles[5].color = '#f23900';
      this.Tiles[2].color = '#f23900';
      this.winner369 = true
    }
    if (this.Tiles[0].text !== '' && this.Tiles[0].text === this.Tiles[4].text && this.Tiles[0].text === this.Tiles[8].text) {

      this.turn = 'Winner is' + " " + this.Tiles[0].text;
      this.Tiles[0].color = '#f23900';
      this.Tiles[4].color = '#f23900';
      this.Tiles[8].color = '#f23900';
      this.diagonalWinner = true;
    }
    if (this.Tiles[2].text !== '' && this.Tiles[2].text === this.Tiles[4].text && this.Tiles[2].text === this.Tiles[6].text) {

      this.turn = 'Winner is' + " " + this.Tiles[2].text;
      this.Tiles[6].color = '#f23900';
      this.Tiles[4].color = '#f23900';
      this.Tiles[2].color = '#f23900';
      this.diagonalWinner1 = true;
    }

    if (this.x_or_o === 9) {
      this.turn = 'Its a draw... play again';
    }

  }

  changeText(index: number) {
    if (this.Tiles[index].text === '' && this.x_or_o <= 9 && this.winner123 === false && 
    this.winner147===false && this.winner258 ===false 
    &&this.winner369 ===false && this.winner456 ===false && this.winner789===false &&
    this.diagonalWinner ==false && 
    this.diagonalWinner1 == false) {
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
    this.winner123 = false;
  this.winner456 = false;
  this.winner789 = false;
  this.winner147 = false;
  this.winner258= false;
  this.winner369 = false;
    this.diagonalWinner = false;
    this.diagonalWinner1 = false;
    for (const i of this.Tiles) {
      i.text = '';
      i.isSelected = false;
      i.color = '';
    }
  }


}
