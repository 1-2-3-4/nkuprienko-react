import React from 'react';

class Tictactoe extends React.Component {

	constructor() {
		super();

		this.state = {
			boardState: Array(9).fill(''),
			isHovered: '',
			playerTurn1: true,
			turn: 0,
			winner: '',
			player1wins: 0,
			player2wins: 0
		};

		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleMouseEnter(index) {
		this.setState({
			isHovered: index
		});
	}

	handleMouseLeave(index) {
		this.setState({
			isHovered: ''
		});
	}

	handleClick(index) {
		let newBoardState = this.state.boardState;
		newBoardState[index] = this.state.playerTurn1 ? 'player1' : 'player2';
		
		this.setState({
			boardState: newBoardState,
			playerTurn1: !this.state.playerTurn1,
			turn: this.state.turn + 1
		})

		this.checkForWinner();
	}

	checkForWinner() {
		const { boardState, turn } = this.state;
		let winner = false;

		if (turn >= 4) {
			// check for win on rows and columns
			for (let i = 0; i < 3; i++) {
				if (boardState[i * 3] &&
					(boardState[i * 3] === boardState[(i * 3) + 1] && boardState[i * 3] === boardState[(i * 3) + 2])) {
					winner = boardState[i * 3];
					break;
				} else if (boardState[i] &&
					(boardState[i] === boardState[i + 3] && boardState[i] === boardState[i + 6])) {
					winner = boardState[i];
					break;
				}
			}
			// check for win on diagonal
			if (!winner && boardState[0] && boardState[0] === boardState[4] && boardState[0] === boardState[8]) {
				winner = boardState[0];
			} else if (!winner && boardState[2] && boardState[2] === boardState[4] && boardState[2] === boardState[6]) {
				winner = boardState[2];
			}
		}

		if (winner) {
			this.setState({
				winner: winner,
				player1wins: winner === 'player1' ? this.state.player1wins + 1 : this.state.player1wins,
				player2wins: winner === 'player2' ? this.state.player2wins + 1 : this.state.player2wins
			})
		}
	}

	handlePlayAgain() {
		this.setState({
			winner: '',
			boardState: Array(9).fill(''),
			playerTurn1: !this.state.playerTurn1,
			turn: 0
		})
	}

	render() {
		const { boardState, isHovered, playerTurn1, winner, player1wins, player2wins } = this.state;
		return (
			<div id="ttt-wrapper">
				<p>Player One: <span className="player1-num-wins">{ player1wins }</span></p>
				<p>Player Two: <span className="player2-num-wins">{ player2wins }</span></p>
				<div className="box-wrapper">
				{
					boardState.map((square, index) => {
						const userTurn = playerTurn1 ? 'player1' : 'player2';
						const userMap = {
							player1: 'X',
							player2: 'O'
						}
						const user = boardState[index] ? boardState[index] : userTurn;

						return (
							<div 
								className="box open" 
								key={ index } 
								onMouseEnter={ () => this.handleMouseEnter(index) } 
								onMouseLeave={ () => this.handleMouseLeave(index) }
								onClick={ () => this.handleClick(index) }
							>
								{ (isHovered === index || boardState[index])  && 
									<span className={user} key={ `${user}-${index}` }>
										{ userMap[user] }
									</span>
								}
							</div>
						)
					})
				}
				</div>
				{ winner &&
					<div className={ `win-msg ${winner}-wins-msg` }>
						<h3>{winner === 'player1' ? 'Player One' : 'Player Two'} wins!</h3>
						<button onClick={ () => this.handlePlayAgain() }>
							<i className="fa fa-refresh"></i>&nbsp;play again
						</button>
					</div>
				}
			</div>
		)
	}
}

export default Tictactoe;