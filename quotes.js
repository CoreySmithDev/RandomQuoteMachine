
// Json will be in an object with 80 entries
// need to push the button and render data[i].quote where i is a random number between 1 and 80
$(document).ready(function () {

	var currentQuote;
	var currentAuthor;

	function createColors(color) {
		var colors = ["#987284", "#D0D6B5", "#F9B5AC", "#EE7674", "#5995ED"];

		var random = colors[Math.floor(Math.random() * colors.length)];
		$("body").css("background", random);
		$("body").css("color", random);
		$(".fa").css("color", random);
		$("button").css("background", random);
		$("#footer").css("color", random);
	};

	createColors();

	function getQuote() {
		$.ajax({
			async: false,
			url: "https://talaikis.com/api/quotes/random/",
			dataType: "json",
			type: "get",
			cache: false,
			success: function (data) {
				// render random quote and author
				currentQuote = data.quote;
				currentAuthor = data.author;
				$("#quote").text(currentQuote);
				$("#author").text("- " + currentAuthor);
				// quotesStored = data;

				var quoteTweet = data.quote;
				console.log(quoteTweet);
			}
		});// end ajax call

		document.querySelector("a.twitter-share-button").href = document.querySelector("a.twitter-share-button").href + "\"" + currentQuote + "\" " + currentAuthor;
		document.querySelector("a.tumblr-share-button").href = document.querySelector("a.tumblr-share-button").href + currentQuote + ".&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button";

	};

	getQuote();

	$("button").on("click", function () {
		getQuote();
		createColors();

	});// end button click


});// end document ready function