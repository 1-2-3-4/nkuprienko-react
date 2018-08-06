import React from 'react';

class Tictactoe extends React.Component {
	render() {
		return (
			<div id="ttt-wrapper">
				<p>Player: <span className="player-num-wins">0</span></p>
				<p>Computer: <span className="computer-num-wins">0</span></p>
				<div className="box-wrapper">
					<div className="box open">
						<span className="player hide">X</span>
						<span className="computer hide">O</span>
					</div>
					<div className="box open">
						<span className="player hide">X</span>
						<span className="computer hide">O</span>
					</div>
					<div className="box open">
						<span className="player hide">X</span>
						<span className="computer hide">O</span>
					</div>
					<div className="box open">
						<span className="player hide">X</span>
						<span className="computer hide">O</span>
					</div>
					<div className="box open">
						<span className="player hide">X</span>
						<span className="computer hide">O</span>
					</div>
					<div className="box open">
						<span className="player hide">X</span>
						<span className="computer hide">O</span>
					</div>
					<div className="box open">
						<span className="player hide">X</span>
						<span className="computer hide">O</span>
					</div>
					<div className="box open">
						<span className="player hide">X</span>
						<span className="computer hide">O</span>
					</div>
					<div className="box open">
						<span className="player hide">X</span>
						<span className="computer hide">O</span>
					</div> 
				</div>
				<div className="win-msg player-wins-msg">
					<h3>Player wins!</h3>
					<button><i className="fa fa-refresh"></i>&nbsp;play again</button>
				</div>
				<div className="win-msg computer-wins-msg">
					<h3>Computer wins!</h3>
					<button><i className="fa fa-refresh"></i>&nbsp;play again</button>
				</div>
			</div>
		)
	}
}

export default Tictactoe;