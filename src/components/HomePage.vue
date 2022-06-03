<template>
	<div id="homepage">
		<h1 class="py-5">Do you want to be a millionaire?</h1>
		<h4 class="pb-5">Choose a difficulty:</h4>
		<div
			class="
				r-link
				d-flex
				flex-wrap flex-row
				col-12
				justify-content-center
				align-items-center
			"
		>
			<router-link
				:to="{ name: 'game', params: { level: this.game.easy, title: 'easy' } }"
				class="cs-btn"
				>Easy Mode</router-link
			>
			<router-link
				:to="{
					name: 'game',
					params: { level: this.game.normal, title: 'normal' },
				}"
				class="cs-btn"
				>Normal Mode</router-link
			>
			<router-link
				:to="{ name: 'game', params: { level: this.game.hard, title: 'hard' } }"
				class="cs-btn"
				>Hard Mode</router-link
			>
		</div>
	</div>
</template>

<script>
export default {
	name: "HomePage",
	data() {
		return {
			game: {
				easy: [
					{
						question: "How would one say goodbye in Spanish?",
						correct_answer: "Adios",
						all_answers: ["Adios", "Hola", "Salir", "Au Revoir"],
					},
					{
						question:
							"Which of the following regions is NOT a part of the United Kingdom?",
						correct_answer: "The isle of man",
						all_answers: ["The isle of man", "England", "Scotland", "Wales"],
					},
					{
						question: "English belongs to what Indo-European language family?",
						correct_answer: "Germanic",
						all_answers: ["Germanic", "Romance", "Slavic", "Sitinic"],
					},
					{
						question:
							"Portugal borders only one other country. Which one is it?",
						correct_answer: "Spain",
						all_answers: ["Spain", "Italy", "Monaco", "Germany"],
					},
					{
						question: "What does the British slang “tosh” stand for?",
						correct_answer: "Nonsense",
						all_answers: ["Nonsense", "Dishes", "Dough", "Purse"],
					},
					{
						question: "What is the more common name for a “lexicon”?",
						correct_answer: "Dictionary",
						all_answers: [
							"Dictionary",
							"Prayer Book",
							"Autobiography",
							"Travel Guide",
						],
					},
					{
						question: "What is the capital of Estonia?",
						correct_answer: "Talinn",
						all_answers: ["Talinn", "Riga", "Vilnius", "Helsinki"],
					},
					{
						question: "What does the word “renaissance” stand for?",
						correct_answer: "Rebirth",
						all_answers: ["Rebirth", "Truth", "Life", "Knowledge"],
					},
					{
						question:
							"What was the first country to recognize Lithuania’s independence?",
						correct_answer: "Iceland",
						all_answers: ["Iceland", "Sweden", "Russia", "United States"],
					},
					{
						question:
							"How many languages has the European Union designated by agreement with the member states as “official and working”?",
						correct_answer: "24",
						all_answers: ["24", "8", "12", "18"],
					},
					{
						question: "Which famous theologian founded Protestantism?",
						correct_answer: "Martin Luther",
						all_answers: [
							"Martin Luther",
							"Voltear",
							"Adolf Hitler",
							"Ignatius Loyola",
						],
					},
					{
						question: "Poisson d’Avril is the French equivalent of what day?",
						correct_answer: "April Fools",
						all_answers: [
							"April Fools",
							"Good Friday",
							"Christmas Eve",
							"Thanksgiving",
						],
					},
				],
				normal: [
					{
						question: "What is the word for “hello” in German?",
						correct_answer: "Hallo",
						all_answers: ["Hallo", "Tschess", "Auf Wiedersehen", "Bonjour"],
					},
					{
						question: "What is the most widely translated book in the world?",
						correct_answer: "The Bible",
						all_answers: [
							"Don Quixote",
							"Hamlet",
							"The Bible",
							"The Great Gatsby",
						],
					},
					{
						question:
							"Which of the following countries is the smallest in the world?",
						correct_answer: "Vatican City",
						all_answers: ["Cyprus", "Luxembourg", "Singapore", "Vatican City"],
					},
					{
						question:
							"Who won Eurovision in 2015 with the Mans Zelmerlow song entitled “Heroes”?",
						correct_answer: "Sweden",
						all_answers: ["France", "Sweden", "Norway", "Estonia"],
					},
					{
						question: "Which of these countries do NOT touch the Alps?",
						correct_answer: "Poland",
						all_answers: ["Poland", "Italy", "France", "Switzerland"],
					},
					{
						question: "How many people in the world speak English?",
						correct_answer: "Around 480 million",
						all_answers: [
							"Around 100 million",
							"Around 260 million",
							"Around 480 million",
							"Around a billion",
						],
					},
					{
						question: "Which country won football World Cup 2018?",
						correct_answer: "France",
						all_answers: ["Croatia", "Germany", "Mexico", "France"],
					},
					{
						question: "What time zone is the United Kingdom has NEVER used?",
						correct_answer: "Central European Time (CET)",
						all_answers: [
							"British Summer Time (BST)",
							"Central European Time (CET)",
							"Greenwich Mean Time (GMT)",
							"Coordinated Universal Time (UTC)",
						],
					},
					{
						question: "Which of the following is the longest river in Europe?",
						correct_answer: "Volga River",
						all_answers: [
							"Volga River",
							"Shannon River",
							"Tagus River",
							"Rhone River",
						],
					},
					{
						question: "Where was the croissant invented?",
						correct_answer: "Austria",
						all_answers: ["Switzeland", "France", "Austria", "Portugal"],
					},
					{
						question: "What are Switzerland’s official, national languages?",
						correct_answer: "German, Italian, French, Romansh",
						all_answers: [
							"Italian, German, French, Dutch",
							"German, French, Bavarian, English",
							"French, English, German, Dutch",
							"German, Italian, French, Romansh",
						],
					},
					{
						question:
							"What popular game’s name is derived from a Svahili word meaning “to build”?",
						correct_answer: "Jenga",
						all_answers: ["Jenga", "Monopoly", "Scrabble", "Dominoes"],
					},
				],
				hard: [
					{
						question: "What countries consist of the Baltics?",
						correct_answer: "Lithuania, Estonia, Latvia",
						all_answers: [
							"Finland, Sweden, Belgium",
							"Lithuania, Estonia, Latvia",
							"Estonia, Lithuania, Russia",
							"Belgium, Bulgaria, Lithuania",
						],
					},
					{
						question: "Russia is a — what?",
						correct_answer: "Federation",
						all_answers: [
							"Democratic Republic",
							"Kingdom",
							"Federation",
							"State of Anarchy",
						],
					},
					{
						question:
							"Which country is world-renowned for chocolate with a major chocolate manufacturing center and more than 2,000 chocolate shops?",
						correct_answer: "Belgium",
						all_answers: ["Belgium", "Lithuania", "Estonia", "Morocco"],
					},
					{
						question: "Which of these words is misspelled?",
						correct_answer: "Conflagciation",
						all_answers: [
							"Confliction",
							"Conflagciation",
							"Configuration",
							"Contraction",
						],
					},
					{
						question:
							"Commonly used in online discussions, what does the common abbreviation “IMHO” stand for?",
						correct_answer: "In my honest opinion",
						all_answers: [
							"In my honorable opinion",
							"In my honor, Oliver",
							"In my house, oh!",
							"In my honest opinion",
						],
					},
					{
						question: "Which country joined the European Union in 2007?",
						correct_answer: "Bulgaria",
						all_answers: ["Sweden", "Norway", "Bulgaria", "Latvia"],
					},
					{
						question: "How many languages are spoken around the world?",
						correct_answer: "Over 7,000",
						all_answers: ["2,000", "Over 7,000", "1,506", "over 15,000"],
					},
					{
						question:
							"What does the German idiom “Ich verstehe nur Bahnhof” mean when not translated literally? If literally: “I only understand the train station.”",
						correct_answer:
							"I don’t understand a thing about what that person is saying.",
						all_answers: [
							"I understand what that person is saying.",
							"I don’t understand a thing about what that person is saying.",
							"I can only be accustomed to few things.",
							"I don’t understand a thing about what I am saying.",
						],
					},
					{
						question:
							"Which of the following European cities is NOT a national capital?",
						correct_answer: "Zurich",
						all_answers: ["Minsk", "San Marino", "Vaduz", "Zurich"],
					},
					{
						question:
							"Before its current name, the European Union was named — what?",
						correct_answer: "European Coal and Steel Community",
						all_answers: [
							"European Common Goods Market",
							"European Coal and Steel Community",
							"United European Nations",
							"None of these",
						],
					},
					{
						question:
							"Which of the following was NOT a former capital of Lithuania?",
						correct_answer: "Telsiai",
						all_answers: ["Telsiai", "Kaunas", "Kernave", "Trakai"],
					},
					{
						question:
							"European citizens can freely travel from countries like France to Belgium. This area of free travel has a name, what is it?",
						correct_answer: "The Schengen Area",
						all_answers: [
							"EU Free Travel Area",
							"European Economical Prosperity Union",
							"The Schengen Area",
							"EU Free Market Zone",
						],
					},
				],
			},
		};
	},
	mounted() {
		// console.log(this.game);
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
