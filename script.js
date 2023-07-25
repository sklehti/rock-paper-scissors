const firstView = document.getElementById("first-view");
const secondView = document.getElementById("second-view");
const selectedValues = document.getElementById("selected-values");
const playAgainBtn = document.getElementById("play-again-layout");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");
const rock = document.getElementById("rock");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");
const gameEnded = document.getElementById("game-ended");
const scoreAmount = document.getElementById("score-amount");
const rules = document.getElementById("rules");
const youPicked = document.getElementById("you-picked");

const allIcons = ["scissors", "paper", "rock", "lizard", "spock"];

scoreAmount.innerHTML = localStorage.getItem(scoreAmount);

function handleSelectedIcon(icon) {
  firstView.classList.add("first-view-unvisible");
  secondView.classList.remove("second-view-unvisible");

  twoSelectedValues(icon);
  selectRandomIcon();
}

scissors.addEventListener("click", function () {
  handleSelectedIcon("scissors");
});
paper.addEventListener("click", function () {
  handleSelectedIcon("paper");
});
rock.addEventListener("click", function () {
  handleSelectedIcon("rock");
});
lizard.addEventListener("click", function () {
  handleSelectedIcon("lizard");
});
spock.addEventListener("click", function () {
  handleSelectedIcon("spock");
});

playAgainBtn.addEventListener("click", function () {
  firstView.classList.remove("first-view-unvisible");
  secondView.classList.add("second-view-unvisible");
  playAgainBtn.classList.add("play-again-layout");
});

function twoSelectedValues(value) {
  const housePicked = selectRandomIcon();

  // playGame(value, housePicked);

  const selectedValuesHtml = `
    <div id="you-picked" class="selected-icons">
    
        
          <div class="selected-${value}-border">
              <div id="selected-${value}" >
                  <img class="game-img" src="images/icon-${value}.svg" alt="rock" />
              </div>
           
      
      </div>

        <div id="house-picked" class="house-picked">
          <div id="house-picked-icon" class="selected-${housePicked}-border win-opacity">
            <div id="selected-${housePicked}" >
                <img class="game-img" src="images/icon-${housePicked}.svg" alt="rock" />
            </div>
          </div>         
        </div>
    </div>
    
    <div class="selected-icons">
      <p class="second-view-titles you-title-tie">You picked</p>
      <p class="second-view-titles house-title-tie">The house picked</p>
    </div>
    `;

  selectedValues.innerHTML = selectedValuesHtml;

  playGame(value, housePicked);

  document
    .getElementById("house-picked-icon")
    .classList.add("house-picked-icon-unvisible");

  setTimeout(() => {
    document
      .getElementById("house-picked-icon")
      .classList.remove("house-picked-icon-unvisible");
    document.getElementById("house-picked").classList.remove("house-picked");

    setTimeout(() => {
      playAgainBtn.classList.remove("play-again-layout");
    }, 1250);
  }, 1250);
}

function selectRandomIcon() {
  return allIcons[Math.floor(Math.random() * allIcons.length)];
}

function playGame(youValue, houseValue) {
  if (
    (youValue === "scissors" && houseValue === "paper") ||
    (youValue === "scissors" && houseValue === "lizard") ||
    (youValue === "paper" && houseValue === "rock") ||
    (youValue === "paper" && houseValue === "spock") ||
    (youValue === "rock" && houseValue === "scissors") ||
    (youValue === "rock" && houseValue === "lizard") ||
    (youValue === "lizard" && houseValue === "spock") ||
    (youValue === "lizard" && houseValue === "paper") ||
    (youValue === "spock" && houseValue === "scissors") ||
    (youValue === "spock" && houseValue === "rock")
  ) {
    gameEnded.innerHTML = "You win";

    youWin(youValue, houseValue);

    setTimeout(() => {
      scoreAmount.innerHTML = Number(scoreAmount.innerHTML) + 1;
      localStorage.setItem(scoreAmount, scoreAmount.innerHTML);
    }, 2500);
  } else if (youValue === houseValue) {
    gameEnded.innerHTML = "Tie";
  } else {
    gameEnded.innerHTML = "You loose";

    houseWin(youValue, houseValue);

    setTimeout(() => {
      scoreAmount.innerHTML = Number(scoreAmount.innerHTML) - 1;
      localStorage.setItem(scoreAmount, scoreAmount.innerHTML);
    }, 2500);
  }
}

function showRules() {
  rules.classList.remove("rules-visibility");
  rules.classList.add("rules-layout");

  const allRules = `
  <div id="rules-div" class="rules-style" >
    <h2 class="rules-title">Rules</h2>
     <img class="rules-padding" alt="rules" src="images/image-rules-bonus.svg"/>
    <button id="rules-button">
      <img  alt="close button" src="images/icon-close.svg" onClick="closeRules()"/>
    </button>
  </div>
  `;

  rules.innerHTML = allRules;
}

function closeRules() {
  rules.classList.remove("rules-layout");
  rules.classList.add("rules-visibility");
}

function youWin(value, housePicked) {
  const selectedValuesHtml = `
    <div id="you-picked" class="selected-icons">
    <div class="win-img-layout">
      <div class=" win-div-1 win-style-1">
        <div class="win-div-2 win-style-2" >
        <div class="win-div-3 win-style-3" >
        
          <div class="selected-${value}-border">
              <div id="selected-${value}" >
                  <img class="game-img" src="images/icon-${value}.svg" alt="rock" />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      

        <div id="house-picked" class="house-picked">
          <div id="house-picked-icon" class="selected-${housePicked}-border win-opacity">
            <div id="selected-${housePicked}" >
                <img class="game-img" src="images/icon-${housePicked}.svg" alt="rock" />
            </div>
          </div>         
        </div>
    </div>
    
    <div class="selected-icons">
      <p class="second-view-titles you-title">You picked</p>
      <p class="second-view-titles house-title">The house picked</p>
    </div>
    `;

  selectedValues.innerHTML = selectedValuesHtml;
}

// TODO vaihda toisin päin!!
function houseWin(value, housePicked) {
  const selectedValuesHtml = `
    <div id="you-picked" class="selected-icons">
    
        
          <div class="selected-${value}-border">
              <div id="selected-${value}" >
                  <img class="game-img" src="images/icon-${value}.svg" alt="rock" />
              </div>
            </div>
          

        
        <div class="house-win-img-layout">
      <div class=" win-div-1 win-style-1">
        <div class="win-div-2 win-style-2" >
        <div class="win-div-3 win-style-3" >
        <div id="house-picked" class="house-picked">
          <div id="house-picked-icon" class="selected-${housePicked}-border win-opacity">
            <div id="selected-${housePicked}" >
                <img class="game-img" src="images/icon-${housePicked}.svg" alt="rock" />
            </div>
          </div>         
        </div>
        </div>
          </div>
        </div>
      </div>

    </div>
    
     <div class="selected-icons">
       <p class="second-view-titles you-title">You picked</p>
       <p class="second-view-titles house-title">The house picked</p>
     </div>
    `;

  selectedValues.innerHTML = selectedValuesHtml;
}
