export const wordChanger = (word: string) =>
	word
		.toLowerCase()
		.replaceAll("ą", "a")
		.replaceAll("ć", "c")
		.replaceAll("ę", "e")
		.replaceAll("ł", "l")
		.replaceAll("ń", "n")
		.replaceAll("ó", "o")
		.replaceAll("ś", "s")
		.replaceAll("ż", "z")
		.replaceAll("ź", "z");