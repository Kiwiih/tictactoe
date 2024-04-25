import { useState } from 'react';

const Board = () => {
	const [game, setGame] = useState<(string | null)[]>(Array(9).fill(null));
	const [player, setPlayer] = useState<string>('X');

	const boxChecked = (index: number): void => {
		if (game[index] !== null) {
			alert('Box already checked!');
			return;
		}
		const updateGame = [...game];
		updateGame[index] = player;
		setGame(updateGame);
		setPlayer(player === 'X' ? 'O' : 'X');
	};

	return (
		<div className="game-board">
			{game.map((box, index) => (
				<div key={index} className="box" onClick={() => boxChecked(index)}>
					{box}
				</div>
			))}
		</div>
	);
};

export default Board;
