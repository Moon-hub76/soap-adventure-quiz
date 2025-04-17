// Track the current step
let storyPart = 0;

// Container for next part of story
const nextPartDiv = document.getElementById('next-part');

// Main function to handle choices
function nextStep(choice) {
  storyPart++;

  if (storyPart === 1) {
    if (choice === 'A') {
      showNext(`
        You unfold the letter. It's written in elegant handwriting:<br><br>
        “You have been selected for a magical journey that ends with the perfect soap gift for your parenting style.”<br><br>
        A little bell chimes. You blink — and suddenly you’re standing in a beautiful garden.
        <br><br>
        What do you do?<br>
        <button onclick="nextStep('GardenExplore')">A. Explore the garden</button>
        <button onclick="nextStep('GardenWait')">B. Sit on the bench and wait</button>
      `);
    } else {
      showNext(`
        You open the letter slowly. Something feels strange.<br><br>
        The writing shimmers: “You’ve been chosen for a heartfelt journey. Follow your instincts.”<br><br>
        A soft breeze lifts you from your bed — and gently sets you in a glowing forest clearing.<br><br>
        What do you do?<br>
        <button onclick="nextStep('ForestWalk')">A. Walk toward the sound of laughter</button>
        <button onclick="nextStep('ForestPause')">B. Pause and take a deep breath</button>
      `);
    }

  } else if (storyPart === 2) {
    switch (choice) {
      case 'GardenExplore':
        showNext(`
          You follow a path lined with orange blossoms and herbs.<br>
          A small cottage comes into view. Inside, jars of oils and soaps shimmer under the light.<br><br>
          A note says: “Your energy shines brightest when you’re engaged and uplifting.”<br><br>
          🌿 You reach for a soap that smells like <strong>Lemongrass & Orange</strong>.
          <div class="result">✨ You’re a Bright & Playful Parent ✨</div>
        `);
        break;
      case 'GardenWait':
        showNext(`
          As you sit, soft lavender fills the air. A fox curls beside you. You smile, calm.<br>
          A message appears in your mind: “Your peace creates peace in others.”<br><br>
          You are drawn to the scent of <strong>Lavender & Orange</strong>.<br>
          <div class="result">✨ You’re a Gentle & Mindful Parent ✨</div>
        `);
        break;
      case 'ForestWalk':
        showNext(`
          Laughter leads you to a cozy treehouse where children play. They invite you up.<br>
          You laugh too. You feel seen, appreciated.<br><br>
          You are handed a warm bar of <strong>Lavender & Peppermint</strong>.<br>
          <div class="result">✨ You’re a Creative & Supportive Parent ✨</div>
        `);
        break;
      case 'ForestPause':
        showNext(`
          Birds chirp. The scent of sandalwood drifts through the air. You close your eyes.<br>
          A memory of a loved one surfaces. You smile.<br><br>
          You pick up a bar of <strong>Lavender & Sandalwood</strong>.<br>
          <div class="result">✨ You’re a Heart-Centered & Reflective Parent ✨</div>
        `);
        break;
      default:
        showNext(`
          You continue forward, past both the garden and the forest.<br>
          You reach a bubbling brook surrounded by lemongrass and lavender plants.<br><br>
          A floating message reads: “You mix strength and kindness effortlessly.”<br><br>
          You choose <strong>Lavender & Lemongrass</strong>.<br>
          <div class="result">✨ You’re a Balanced & Wise Parent ✨</div>
        `);
        break;
    }
  }
}

// Helper function to update the next part
function showNext(html) {
  nextPartDiv.innerHTML = html;
  nextPartDiv.classList.remove('hidden');
}
