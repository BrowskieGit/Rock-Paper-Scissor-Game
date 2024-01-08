let result = document.getElementById("result");
      let getMatch = document.getElementById("Match");
      let getWins = document.getElementById("Wins");
      let getLoss = document.getElementById("Loss");
      let getDraw = document.getElementById("Draw");
      let finalResult = document.getElementById("text1");
      let Match = 0,
        Wins = 0,
        Loss = 0;
      draw = 0;

      function showResult(e) {
        let Bot = Math.floor(Math.random() * 3) + 1;
        Match++;
        let botValue;
        if (
          (e == "Rock" && Bot == 3) ||
          (e == "Paper" && Bot == 1) ||
          (e == "Scissor" && Bot == 2)
        ) {
          if (Bot == 1) {
            botValue = "Rock";
          } else if (Bot == 2) {
            botValue = "Paper";
          } else {
            botValue = "Scissor";
          }
          result.innerHTML =
            "Hey, You Won this time &#x1F60D;!!! <br> Bot Choose: " + botValue;
          Wins++;
          clearResult();
        } else if (
          (e == "Rock" && Bot == 1) ||
          (e == "Paper" && Bot == 2) ||
          (e == "Scissor" && Bot == 3)
        ) {
          if (Bot == 1) {
            botValue = "Rock";
          } else if (Bot == 2) {
            botValue = "Paper";
          } else {
            botValue = "Scissor";
          }
          result.innerHTML =
            "Super, tough call... Match Draw... &#x1F60D;!!! <br> Bot Choose: " +
            botValue;
          draw++;
          clearResult();
        } else {
          if (Bot == 1) {
            botValue = "Rock";
          } else if (Bot == 2) {
            botValue = "Paper";
          } else {
            botValue = "Scissor";
          }
          result.innerHTML =
            "Oops, Bot Won this time &#128517;!!! <br> Bot Choose: " + botValue;
          Loss++;
          clearResult();
        }

        checkFinalResult();
      }

      function clearResult() {
        setTimeout(() => {
          result.innerHTML = "";
        }, 2000);
      }

      function checkFinalResult() {
        if (Match <= 10) {
          getMatch.innerHTML = Match;
          getWins.innerHTML = Wins;
          getLoss.innerHTML = Loss;
          getDraw.innerHTML = draw;
        } else if (Match > 10) {
          if (Wins > Loss) {
            finalResult.innerHTML =
              "Game Over !!! <br /><br />You have beat the Browskie Bot &#x1F60D;";
            overlayOn();
          } else if (Wins == Loss) {
            finalResult.innerHTML =
              "Game Over !!! <br /><br />Good Fight!!! Try again, You can do it &#128526;";
            overlayOn();
          } else {
            finalResult.innerHTML =
              "Game Over !!! <br /><br />Better Luck next time &#128579;";
            overlayOn();
          }
        }
      }

      function overlayOn() {
        document.getElementById("overlay").style.display = "block";
      }
      function overlayOff() {
        document.getElementById("overlay").style.display = "none";
        location.reload();
      }