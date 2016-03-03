$(document).ready(function() {

  var circleOrEx = "o"; //first click gets zero.

  var isGameInProgress = true; // the game is currently being in progress.
  var winningCombos = { // represents that the board is made up of 9 squares, different combos.
    0: [ //0 is key
      [1, 2], //this multiDimensional Array is values
      [3, 6],
      [4, 8]
    ],
    1: [
      [0, 2],
      [4, 7]
    ],
    2: [
      [0, 1],
      [5, 8],
      [4, 6]
    ],
    3: [
      [0, 6],
      [4, 5]
    ],
    4: [
      [1, 8],
      [2, 6],
      [1, 7],
      [3, 5]
    ],
    5: [
      [2, 8],
      [3, 4]
    ],
    6: [
      [0, 3],
      [2, 4],
      [7, 8]
    ],
    7: [
      [1, 4],
      [6, 8]
    ],
    8: [
      [0, 4],
      [2, 5],
      [6, 7]
    ]
  };

  // once you click on the board, the function will run, and gameinprocess is true
  $("#board").find("div").on("click", function() {

    if (isGameInProgress && $(this).hasClass("empty")) { // within the #board remove the empty class and add an X or an O value to the square

      $(this).removeClass("empty").append("<span class='" + circleOrEx + "'>" + circleOrEx + "</span");

      checkIfWon($(this).index(), circleOrEx); //overall flow and cycle of the game.

      if (circleOrEx === "o") {
        circleOrEx = "x";// this is what shows up when you click on the square with your mouse. it will change from either X or O.
      } else {
        circleOrEx = "o";
      }
    }

  });

  // creates a new game.
  $("#newGame").on("click", function() {

    var boardSquares = $("#board").find("div"); //
    var firstEmptyMemorySquare = $(".container").find(".nine").filter(function() { //the overall amount of times that the game has been played.
      return $.trim($(this).text()) === "" && $(this).children().length === 0;
    }).not("#board").first();

    if (firstEmptyMemorySquare.length == 1) { //only one board then start game.
      firstEmptyMemorySquare.html($("#board").html());
    } else {// finds old or creates new game.
      $(".container").find(".nine").not("#board").empty();
      $(".container").find(".nine").first().html($("#board").html());
    }

    //this creates a new game
    boardSquares.each(function() {
      $(this).addClass("empty").empty();
    })
    isGameInProgress = true;
  })

  //this function checks if a player won, goes through the list of different combinations.
  function checkIfWon(chosenSquare) {

    var mulitArr = winningCombos[chosenSquare];
    var playerWon;

    for (var i = 0; i < mulitArr.length; i++) { //value of i is less than the length of the multiarray, playerwon is true
      playerWon = true;
      for (var j = 0; j < mulitArr[i].length; j++) {
        if (!$("#board").find("div").eq(mulitArr[i][j]).find("span").hasClass(circleOrEx)) { //Explain this condition
          playerWon = false;
        }
      }

      if (playerWon) { //after a player wins, this will prompt the other lines to be affected. Then the game progress is set to "false" which ends everything
        for (var j = 0; j < mulitArr[i].length; j++) {
          $("#board").find("div").eq(mulitArr[i][j]).find("." + circleOrEx).addClass("green"); //makes winning combo colour green.
        }
        $("#board").find("div").eq(chosenSquare).find("." + circleOrEx).addClass("green");
        alert("Winner is " + circleOrEx.toUpperCase() + "!");//alerts the winner, either X or O.
        isGameInProgress = false;//game is not in process anymore until you refresh.
        return false; //exits the loop
      }
    }


  }
})
