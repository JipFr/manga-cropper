
const sourceImages = [
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-001.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-002.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-003.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-004.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-005.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-006.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-007.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-008.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-009.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-010.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-011.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-012.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-013.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-014.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-015.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-016.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-017.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-018.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-019.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-020.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-021.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-022.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-023.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-024.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-025.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-026.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-027.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-028.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-029.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-030.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-031.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-032.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-033.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-034.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-035.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-036.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-037.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-038.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-039.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-040.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-041.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-042.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-043.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-044.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-045.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-046.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-047.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-048.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-049.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-050.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-051.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-052.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-053.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-054.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-055.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-056.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-057.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-058.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-059.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-060.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-061.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-062.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-063.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-064.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-065.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-066.png",
	"https://s4-1.mangabeast.com/manga/Tower-Of-God/S2/0026-067.png"
];

async function init() {

	let wrapper = document.querySelector(".images");

	for(let src of sourceImages) {
		
		await new Promise(resolve => {
			let img = new Image();
			img.src = `https://cors-anywhere.herokuapp.com/${src}`;
			img.crossOrigin = "Anonymous";


			img.onload = () => {
				console.log(src);

				// Get images and such
				let canvas = document.createElement("canvas");
				let ctx = canvas.getContext("2d");
				canvas.width = img.width;
				canvas.height = img.height;

				ctx.drawImage(img, 0, 0);

				// Get data
				let rowHeight = 20;

				let rows = [];
				for(let y = 1; y < img.height; y += rowHeight) {
					let isSame = checkRow(ctx, canvas, y, rowHeight / 3);
					rows.push(isSame);
				}
				let rowHeights = rows.map((v, i) => v ? false : i * rowHeight).filter(value => typeof value !== "boolean");
				console.log(rowHeights);

				// Get new canvas
				let newCanvas = document.createElement("canvas");
				newCanvas.width = img.width;
				newCanvas.height = rowHeights.length * rowHeight;
				let nCtx = newCanvas.getContext("2d");

				// Render new canvas
				for(let [i, y] of Object.entries(rowHeights)) {
					// nCtx.drawImage(img, 0, y, 0, y, img.width, );
					nCtx.drawImage(img, 0, y, img.width, rowHeight, 0, i * rowHeight, img.width, rowHeight);
				}


				// Add canvas
				wrapper.appendChild(newCanvas);

				resolve();
			};

		});

	}

};
init();

function checkRow(ctx, canvas, y, height) {
	let imgData = [...ctx.getImageData(1, y, canvas.width - 2, height).data];
	let colors = [];
	while(imgData.length > 0) {
		colors.push(imgData.splice(0, 3));
	}

	let valid = true;

	for(let i = 1; i < colors.length; i++) { // Skip the first
		let diff = getColorDiff(colors[i - 1], colors[i]);
		if(diff > 10) valid = false;
	}
	return valid;
}

function getColorDiff([r1, g1, b1], [r2, g2, b2]) {
	let diffR = (r2 - r1) ** 2;
	let diffG = (g2 - g1) ** 2;
	let diffB = (b2 - b1) ** 2;
	return Math.sqrt(diffR + diffG + diffB);
}