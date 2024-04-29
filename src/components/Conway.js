import React, { Component } from 'react';
import './conway.css';

const CELL_SIZE = 20;
const WIDTH = 800;
const HEIGHT = 600;

class Cell extends React.Component {
    render() {
        const { x, y, isAlive } = this.props;
        return (


            <div
                className="Cell"
                style={{
                    left: `${CELL_SIZE * x + 1}px`,
                    top: `${CELL_SIZE * y + 1}px`,
                    width: `${CELL_SIZE - 1}px`,
                    height: `${CELL_SIZE - 1}px`,
                    backgroundColor: isAlive ? 'white' : 'green',
                    border: '1px solid black',
                }}
            />
        );
    }
}

class Game extends Component {
    constructor() {
        super();
        this.rows = HEIGHT / CELL_SIZE;
        this.cols = WIDTH / CELL_SIZE;
        this.board = this.makeEmptyBoard();
    }

    state = {
        cells: [],
        isRunning: false,
        interval: 100,
        randomPercentage: 20
    };

    makeEmptyBoard() {
        let board = [];
        for (let y = 0; y < this.rows; y++) {
            board[y] = [];
            for (let x = 0; x < this.cols; x++) {
                board[y][x] = false;
            }
        }
        return board;
    }

    getElementOffset() {
        const rect = this.boardRef.getBoundingClientRect();
        const doc = document.documentElement;
        return {
            x: (rect.left + window.pageXOffset) - doc.clientLeft,
            y: (rect.top + window.pageYOffset) - doc.clientTop,
        };
    }

    makeCells() {
        let cells = [];
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                if (this.board[y][x]) {
                    cells.push({ x, y });
                }
            }
        }
        return cells;
    }

    handleClick = (event) => {
        const elemOffset = this.getElementOffset();
        const offsetX = event.clientX - elemOffset.x;
        const offsetY = event.clientY - elemOffset.y;
        const x = Math.floor(offsetX / CELL_SIZE);
        const y = Math.floor(offsetY / CELL_SIZE);
        if (x >= 0 && x <= this.cols && y >= 0 && y <= this.rows) {
            this.board[y][x] = !this.board[y][x];
        }
        this.setState({ cells: this.makeCells() });
    }

    runGame = () => {
        this.setState({ isRunning: true });
        this.runIteration();
    }

    stopGame = () => {
        this.setState({ isRunning: false });
        if (this.timeoutHandler) {
            window.clearTimeout(this.timeoutHandler);
            this.timeoutHandler = null;
        }
    }

    runIteration() {
        let newBoard = this.makeEmptyBoard();
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                let neighbors = this.calculateNeighbors(this.board, x, y);
                if (this.board[y][x]) {
                    if (neighbors === 2 || neighbors === 3) {
                        newBoard[y][x] = true;
                    } else {
                        newBoard[y][x] = false;
                    }
                } else {
                    if (!this.board[y][x] && neighbors === 3) {
                        newBoard[y][x] = true;
                    }
                }
            }
        }
        
        // Increase white blocks on collision
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                if (this.board[y][x] && newBoard[y][x]) {
                    newBoard[y][x] = false; // Remove the collided block
                    this.increaseWhiteBlocks(newBoard, x, y);
                }
            }
        }
        
        this.board = newBoard;
        this.setState({ cells: this.makeCells() });
        this.timeoutHandler = window.setTimeout(() => {
            this.runIteration();
        }, this.state.interval);
    }
    
    increaseWhiteBlocks(board, x, y) {
        const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
        for (let i = 0; i < dirs.length; i++) {
            const [dx, dy] = dirs[i];
            const newX = x + dx;
            const newY = y + dy;
            if (newX >= 0 && newX < this.cols && newY >= 0 && newY < this.rows) {
                board[newY][newX] = true;
            }
        }
    }

    calculateNeighbors(board, x, y) {
        let neighbors = 0;
        const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
        for (let i = 0; i < dirs.length; i++) {
            const dir = dirs[i];
            let y1 = y + dir[0];
            let x1 = x + dir[1];
            if (x1 >= 0 && x1 < this.cols && y1 >= 0 && y1 < this.rows && board[y1][x1]) {
                neighbors++;
            }
        }
        return neighbors;
    }

    handleIntervalChange = (event) => {
        this.setState({ interval: event.target.value });
    }

    handleClear = () => {
        this.board = this.makeEmptyBoard();
        this.setState({ cells: this.makeCells() });
    }

    handleRandom = () => {
        this.handleClear();
        const totalCells = this.rows * this.cols;
        const whiteCellsCount = Math.floor((this.state.randomPercentage / 100) * totalCells);
        const shuffledCells = Array.from({ length: totalCells }, (_, i) => i)
            .sort(() => 0.5 - Math.random());
        for (let i = 0; i < whiteCellsCount; i++) {
            const cellIndex = shuffledCells[i];
            const x = Math.floor(cellIndex % this.cols);
            const y = Math.floor(cellIndex / this.cols);
            this.board[y][x] = true;
        }
        this.setState({ cells: this.makeCells() });
    }

    handleRandomPercentageChange = (event) => {
        this.setState({ randomPercentage: parseInt(event.target.value) });
    }

    render() {
        const { cells, interval, isRunning, randomPercentage } = this.state;
        return (
          <div className='conway'>
            <br></br><br></br>
             <p className='text' >Conway's Game of Life Simulation</p>
              <div className="Board"
                  style={{ width: WIDTH, height: HEIGHT, backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`}}
                  onClick={this.handleClick}
                  ref={(n) => { this.boardRef = n; }}>
                  {cells.map(cell => (
                      <Cell x={cell.x} y={cell.y} key={`${cell.x},${cell.y}`}/>
                  ))}

              </div>
              <div className="controls">
                  Update every <input value={this.state.interval} onChange={this.handleIntervalChange} /> msec
                  {isRunning ?
                      <button className="button" onClick={this.stopGame}>Stop</button> :
                      <button className="button" onClick={this.runGame}>Run</button>
                  }
                  <button className="button" onClick={this.handleRandom}>Random</button>
                  <button className="button" onClick={this.handleClear}>Clear</button>
              </div>
              <div className="info-container">
                  <div className="info">
                  <p>🟩  Forest area</p>
                      <p>⬜  Human acquisition</p>
                      <p>Convey's Game of Life helps us to visualize how the forest land distributes over the years in Conway's Game of Life, we can modify the Game component to initialize the board cells with a default value representing the health of the mountain ecosystems. We can then add a condition of human intervention to depict effects of excess intervention of humans on ecosystems</p>
                  </div>
              </div>
          </div>
      );
  }
}
class Conway extends Component {
    render() {
        return (
            <div className="App">
                <h1>Conway's Game of Life</h1>
                <Game />
            </div>
        );
    }
}

export default Conway;
