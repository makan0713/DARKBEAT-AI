const FREE_LIMIT = 3;

function getUsage(){
  return parseInt(localStorage.getItem("usage") || "0");
}

function setUsage(v){
  localStorage.setItem("usage", v);
}

function generate(){

  let usage = getUsage();

  if(usage >= FREE_LIMIT){
    document.getElementById("output").innerText =
      "🚫 Free limit reached.\nUpgrade to Pro to continue generating unlimited music ideas.";
    return;
  }

  let topic = document.getElementById("topic").value || "unknown topic";
  let genre = document.getElementById("genre").value;
  let mood = document.getElementById("mood").value;
  let lang = document.getElementById("lang").value;

  let lyrics = buildLyrics(topic, genre, mood, lang);
  let prompt = buildPrompt(topic, genre, mood);

  let result = `
🎤 LYRICS IDEA
----------------
${lyrics}

🎼 MUSIC STRUCTURE
----------------
Intro → Verse → Hook → Verse → Outro

🔥 AI MUSIC PROMPT
----------------
${prompt}

📊 META
Genre: ${genre}
Mood: ${mood}
Language: ${lang}
Topic: ${topic}
`;

  document.getElementById("output").innerText = result;

  setUsage(usage + 1);
}

function buildLyrics(topic, genre, mood, lang){

  if(lang === "Persian"){
    return `
[Verse]
تو تاریکیِ ${topic} گم شدم دوباره...

[Hook]
حس من ${mood} ـه، توی این مسیر...

[Verse 2]
اما هنوز می‌جنگم، نمی‌افتم...
`;
  }

  return `
[Verse]
In the world of ${topic}, I stand alone...

[Hook]
Feeling ${mood}, I keep moving on...

[Verse 2]
This is my ${genre} story unfolding...
`;
}

function buildPrompt(topic, genre, mood){
  return `
${mood} ${genre} music about ${topic},
cinematic atmosphere,
modern production,
deep bass,
emotional melody,
90-140 BPM,
radio quality mix
`;
}

function upgrade(){
  alert("👉 Redirect to payment system (Stripe/LemonSqueezy)\nPro plan: €5/month");
}