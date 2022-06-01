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
				:to="{ name: 'game', params: { easy: game['easy'] } }"
				class="cs-btn"
				>Easy Mode</router-link
			>
			<router-link
				:to="{ name: 'game', params: { normal: game['normal'] } }"
				class="cs-btn"
				>Normal Mode</router-link
			>
			<router-link
				:to="{ name: 'game', params: { hard: game['hard'] } }"
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
						incorrect_answers: ["Hola", "Salir", "Au Revoir"],
					},
					{
						question:
							"Which of the following regions is NOT a part of the United Kingdom?",
						correct_answer: "The isle of man",
						incorrect_answers: ["England", "Scotland", "Wales"],
					},
					{
						question: "English belongs to what Indo-European language family?",
						correct_answer: "Germanic",
						incorrect_answers: ["Romance", "Slavic", "Sitinic"],
					},
					{
						question:
							"Portugal borders only one other country. Which one is it?",
						correct_answer: "Spain",
						incorrect_answers: ["Italy", "Monaco", "Germany"],
					},
					{
						question: "What does the British slang “tosh” stand for?",
						correct_answer: "Nonsense",
						incorrect_answers: ["Dishes", "Dough", "Purse"],
					},
					{
						question: "What is the more common name for a “lexicon”?",
						correct_answer: "Dictionary",
						incorrect_answers: ["Prayer Book", "Autobiography", "Travel Guide"],
					},
					{
						question: "What is the capital of Estonia?",
						correct_answer: "Talinn",
						incorrect_answers: ["Riga", "Vilnius", "Helsinki"],
					},
					{
						question: "What does the word “renaissance” stand for?",
						correct_answer: "Rebirth",
						incorrect_answers: ["Truth", "Life", "Knowledge"],
					},
					{
						question:
							"What was the first country to recognize Lithuania’s independence?",
						correct_answer: "Iceland",
						incorrect_answers: ["Sweden", "Russia", "United States"],
					},
					{
						question:
							"How many languages has the European Union designated by agreement with the member states as “official and working”?",
						correct_answer: "24",
						incorrect_answers: ["8", "12", "18"],
					},
					{
						question: "Which famous theologian founded Protestantism?",
						correct_answer: "Martin Luther",
						incorrect_answers: ["Voltear", "Adolf Hitler", "Ignatius Loyola"],
					},
					{
						question: "Poisson d’Avril is the French equivalent of what day?",
						correct_answer: "April Fools",
						incorrect_answers: ["Good Friday", "Christmas Eve", "Thanksgiving"],
					},
				],
				normal: [
					{
						question: "What is the word for “hello” in German?",
						correct_answer: "Hallo",
						incorrect_answers: ["Tschess", "Auf Wiedersehen", "Bonjour"],
					},
					{
						question: "What is the most widely translated book in the world?",
						correct_answer: "The Bible",
						incorrect_answers: ["Don Quixote", "Hamlet", "The Great Gatsby"],
					},
					{
						question:
							"Which of the following countries is the smallest in the world?",
						correct_answer: "Vatican City",
						incorrect_answers: ["Cyprus", "Luxembourg", "Singapore"],
					},
					{
						question:
							"Who won Eurovision in 2015 with the Mans Zelmerlow song entitled “Heroes”?",
						correct_answer: "Sweden",
						incorrect_answers: ["France", "Norway", "Estonia"],
					},
					{
						question: "Which of these countries do NOT touch the Alps?",
						correct_answer: "Poland",
						incorrect_answers: ["Italy", "France", "Switzerland"],
					},
					{
						question: "How many people in the world speak English?",
						correct_answer: "Around 480 million",
						incorrect_answers: [
							"Around 100 million",
							"Around 260 million",
							"Around a billion",
						],
					},
					{
						question: "Which country won football World Cup 2018?",
						correct_answer: "France",
						incorrect_answers: ["Croatia", "Germany", "Mexico"],
					},
					{
						question: "What time zone is the United Kingdom has NEVER used?",
						correct_answer: "Central European Time (CET)",
						incorrect_answers: [
							"British Summer Time (BST)",
							"Greenwich Mean Time (GMT)",
							"Coordinated Universal Time (UTC)",
						],
					},
					{
						question: "Which of the following is the longest river in Europe?",
						correct_answer: "Volga River",
						incorrect_answers: ["Shannon River", "Tagus River", "Rhone River"],
					},
					{
						question: "Where was the croissant invented?",
						correct_answer: "Austria",
						incorrect_answers: ["Switzeland", "France", "Portugal"],
					},
					{
						question: "What are Switzerland’s official, national languages?",
						correct_answer: "German, Italian, French, Romansh",
						incorrect_answers: [
							"Italian, German, French, Dutch",
							"German, French, Bavarian, English",
							"French, English, German, Dutch",
						],
					},
					{
						question:
							"What popular game’s name is derived from a Svahili word meaning “to build”?",
						correct_answer: "Jenga",
						incorrect_answers: ["Monopoly", "Scrabble", "Dominoes"],
					},
				],
				hard: [
					{
						question: "What countries consist of the Baltics?",
						correct_answer: "Lithuania, Estonia, Latvia",
						incorrect_answers: [
							"Finland, Sweden, Belgium",
							"Estonia, Lithuania, Russia",
							"Belgium, Bulgaria, Lithuania",
						],
					},
					{
						question: "Russia is a — what?",
						correct_answer: "Federation",
						incorrect_answers: [
							"Democratic Republic",
							"Kingdom",
							"State of Anarchy",
						],
					},
					{
						question:
							"Which country is world-renowned for chocolate with a major chocolate manufacturing center and more than 2,000 chocolate shops?",
						correct_answer: "Belgium",
						incorrect_answers: ["Lithuania", "Estonia", "Morocco"],
					},
					{
						question: "Which of these words is misspelled?",
						correct_answer: "Conflagciation",
						incorrect_answers: ["Confliction", "Configuration", "Contraction"],
					},
					{
						question:
							"Commonly used in online discussions, what does the common abbreviation “IMHO” stand for?",
						correct_answer: "In my honest opinion",
						incorrect_answers: [
							"In my honorable opinion",
							"In my honor, Oliver",
							"In my house, oh!",
						],
					},
					{
						question: "Which country joined the European Union in 2007?",
						correct_answer: "Bulgaria",
						incorrect_answers: ["Sweden", "Norway", "Latvia"],
					},
					{
						question: "How many languages are spoken around the world?",
						correct_answer: "Over 7,000",
						incorrect_answers: ["2,000", "1,506", "over 15,000"],
					},
					{
						question:
							"What does the German idiom “Ich verstehe nur Bahnhof” mean when not translated literally? If literally: “I only understand the train station.”",
						correct_answer:
							"I don’t understand a thing about what that person is saying.",
						incorrect_answers: [
							"I understand what that person is saying.",
							"I can only be accustomed to few things.",
							"I don’t understand a thing about what I am saying.",
						],
					},
					{
						question:
							"Which of the following European cities is NOT a national capital?",
						correct_answer: "Zurich",
						incorrect_answers: ["Minsk", "San Marino", "Vaduz"],
					},
					{
						question:
							"Before its current name, the European Union was named — what?",
						correct_answer: "European Coal and Steel Community",
						incorrect_answers: [
							"European Common Goods Market",
							"United European Nations",
							"None of these",
						],
					},
					{
						question:
							"Which of the following was NOT a former capital of Lithuania?",
						correct_answer: "Telsiai",
						incorrect_answers: ["Kaunas", "Kernave", "Trakai"],
					},
					{
						question:
							"European citizens can freely travel from countries like France to Belgium. This area of free travel has a name, what is it?",
						correct_answer: "The Schengen Area",
						incorrect_answers: [
							"EU Free Travel Area",
							"European Economical Prosperity Union",
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
