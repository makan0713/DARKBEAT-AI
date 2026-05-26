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
      "🚫 FREE LIMIT REACHED\n\nUpgrade to PRO for unlimited generations.";

    return;
  }

  let topic =
    document.getElementById("topic").value || "unknown";

  let genre =
    document.getElementById("genre").value;

  let mood =
    document.getElementById("mood").value;

  let lang =
    document.getElementById("lang").value;

  let lyrics = buildLyrics(topic,mood,genre,lang);

  let prompt = `
${mood} ${genre} music about ${topic},
cinematic atmosphere,
deep bass,
modern production,
radio quality mix
`;

  let result = `
🎤 LYRICS
────────────────

${lyrics}

🎼 STRUCTURE
────────────────

Intro → Verse → Hook → Verse → Outro

🔥 AI MUSIC PROMPT
────────────────

${prompt}

📊 DETAILS
────────────────
Genre: ${genre}
Mood: ${mood}
Language: ${lang}
`;

  document.getElementById("output").innerText = result;

  setUsage(usage + 1);
}

function buildLyrics(topic,mood,genre,lang){

  if(lang === "Persian"){

    return `
[Verse]
تو دلِ ${topic}
هنوز دنبال نورم...

[Hook]
این حسِ ${mood}
داره منو می‌سازه...

[Verse 2]
وسط شب و دود
بازم ادامه میدم...
`;
  }

  return `
[Verse]
Walking through ${topic},
searching for light...

[Hook]
Feeling ${mood},
surviving the night...

[Verse 2]
This ${genre} energy
keeps me alive...
`;
}

function upgrade(){

  alert(
    "🔥 PRO MODE COMING SOON\n\nStripe payment system will be connected here."
  );
}