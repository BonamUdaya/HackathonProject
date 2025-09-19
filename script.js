// Feature 1: Display user input
function displayInput() {
  const input = document.getElementById('userInput').value;
  document.getElementById('displayOutput').innerText = `You entered: ${input}`;
}

// Feature 2: Generate dynamic insight
function generateInsight() {
  const insights = [
    "Insight 1: Users are engaging more today!",
    "Insight 2: Traffic increased by 20%",
    "Insight 3: Most users prefer mobile devices",
    "Insight 4: Data shows rising interest in AI tools",
    "Insight 5: Engagement is higher in the evening"
  ];
  const randomInsight = insights[Math.floor(Math.random() * insights.length)];
  document.getElementById('insightOutput').innerText = randomInsight;
}

// Feature 3: Counter
let count = 0;
function increaseCounter() {
  count++;
  document.getElementById('counter').innerText = count;
}

function decreaseCounter() {
  count--;
  document.getElementById('counter').innerText = count;
}
