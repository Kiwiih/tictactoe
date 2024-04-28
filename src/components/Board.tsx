import { useState } from 'react';

//Koden för att kolla vem som vunnit/vinst funkar inte, samt den för att kika
// om det är oavgjort. så ignorera gärna den koden. Sparar den för att fortsätta
// kunna arbeta med den, Tack!

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

		if (checkForWin(player)) {
			alert(player + ' vinner spelet!');
			resetGame();
			return;
		}
		if (checkForDraw()) {
			alert('oavgjort');
			resetGame();
			return;
		}
		setPlayer(player === 'X' ? 'O' : 'X');
		//console.log(index);
	};

	const winningPatterns: number[][] = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	const checkForWin = (player: string): boolean => {
		console.log(player);
		return winningPatterns.some((pattern) =>
			pattern.every((index) => game[index] === player)
		);
	};
	const checkForDraw = (): boolean => {
		console.log(player);
		return game.every((box) => box !== null);
	};

	const resetGame = (): void => {
		setGame(Array(9).fill(null));
		setPlayer('X');
	};

	return (
		<>
			<main>
				<div className="game-board">
					{game.map((box, index) => (
						<div key={index} className="box" onClick={() => boxChecked(index)}>
							{box}
						</div>
					))}
					<button onClick={() => resetGame()}>STARTA OM</button>
				</div>
			</main>
		</>
	);
};

export default Board;
