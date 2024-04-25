// ╔════════════════════════════════════════════════════════════════════════════╗
// ║  Det ska finnas ett spelbräde med 3x3 rutor                                ║
// ╟────────────────────────────────────────────────────────────────────────────╢
// ║  Det ska finnas en knapp för att starta eller starta om spelet             ║
// ╟────────────────────────────────────────────────────────────────────────────╢
// ║  När första klicket sker i en ruta sätts ett X i rutan och vid nästa klick ║
// ║  ett O och så vidare.                                                      ║
// ╟────────────────────────────────────────────────────────────────────────────╢
// ║  Hela projektet ska vara i TypeScript i React                              ║
// ╚════════════════════════════════════════════════════════════════════════════╝

//    Extrautmaning** Om du känner att du har tid och lust så försök bygga till följande:
//    ═══════════════════════════════════════════════════════════════════════════════════
//    Användaren ska kunna bestämma storleken på brädet
//    Användaren ska kunna bestämma hur många X eller O som ska vara i rad för att vinna
//    Spelet ska automatiskt räkna ut vem som vunnit
//    ═══════════════════════════════════════════════════════════════════════════════════

import Board from './components/Board';

function App() {
	return (
		<>
			<header>
				<h1> (づ｡◕‿‿◕｡)づ Tic-Tac-Toe</h1>
			</header>
			<Board />
		</>
	);
}

export default App;
