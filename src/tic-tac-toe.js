class TicTacToe {
    constructor() {
        this.player = 'x';
        this.winner = null;
        this.field = new Array(9);
        this.field.fill(null);
    }

    getCurrentPlayerSymbol() {
        return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex + columnIndex * 3]) {
            return;
        }
        this.field[rowIndex + columnIndex * 3] = this.player;

        if ((this.field[0] === this.field[1] && this.field[1] === this.field[2] && this.field[2] !== null)
            || (this.field[3] === this.field[4] && this.field[4] === this.field[5] && this.field[5] !== null)
            || (this.field[6] === this.field[7] && this.field[7] === this.field[8] && this.field[8] !== null)
            || (this.field[0] === this.field[4] && this.field[4] === this.field[8] && this.field[8] !== null)
            || (this.field[2] === this.field[4] && this.field[4] === this.field[6] && this.field[6] !== null)
            || (this.field[0] === this.field[3] && this.field[3] === this.field[6] && this.field[6] !== null)
            || (this.field[1] === this.field[4] && this.field[4] === this.field[7] && this.field[7] !== null)
            || (this.field[2] === this.field[5] && this.field[5] === this.field[8] && this.field[8] !== null)
          ) {
            this.winner = this.player;
        }

        if (this.player === 'x') {
            this.player = 'o';
        } else {
          this.player = 'x';
        }
    }

    isFinished() {
        return !!this.winner || this.noMoreTurns();
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
          return !this.field.includes(null);
    }

    isDraw() {
          return !this.winner && this.noMoreTurns();
    }

    getFieldValue(rowIndex, colIndex) {
          return this.field[rowIndex + colIndex * 3];
    }
}

module.exports = TicTacToe;
