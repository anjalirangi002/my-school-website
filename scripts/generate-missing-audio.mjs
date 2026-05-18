import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const API_KEY = "sk_car_EmuEiTrS49bw7M2NTcQF89";
const VOICE_ID = "791d5162-d5eb-40f0-8189-f19db44611d8";
const MODEL = "sonic-2";
const OUT_DIR = join(__dirname, "../artifacts/sunrise-school/public/audio");

const MISSING = [
  { file: "home-principal", text: "Principal Mr. Khushi Ram — M.A., B.Ed., 30 se zyada saal ka anubhav. Unka kehna hai — character banana hi asli taleem hai." },
  { file: "home-trust",     text: "100% board results, 24 ghante CCTV, smart classrooms, experienced faculty, aur school transport — yahi hai Sunrise ka fark." },
  { file: "home-campus",    text: "Hamaara campus — khule maidan, science labs, library, aur ek safe environment jahan bacche khulkar seekhte aur badhte hain." },
  { file: "home-testimonials", text: "Real families, real experiences. Sunte hain kya kehte hain Sunrise ke parents apne bachon ki padhai aur growth ke baare mein." },
  { file: "about-values",   text: "Hamaara mission — integrity, discipline, compassion aur curiosity. Yeh hi woh values hain jo ek Sunrise student ko alag banati hain." },
  { file: "about-achievements", text: "6 saal lagaataar 100% CBSE board results. Awards, recognitions, aur students ki safalata — yeh hai Sunrise ki asli pehchaan." },
  { file: "principal-message", text: "Principal Mr. Khushi Ram ka sandesh — 30 saal ke anubhav se nikli ek baat — education sirf exams nahi, zindagi ki taiyaari hai." },
  { file: "about-affiliation", text: "Hum CBSE affiliated hain — affiliation number 531671. National standard ka hissa banna hamare students ko ek global edge deta hai." },
  { file: "academic-structure", text: "Pre-Primary, Primary, Middle aur Senior Secondary — har level par specialized teaching approach aur dedicated faculty ka full support." },
  { file: "academic-streams", text: "Class 11 aur 12 mein 4 streams — Medical PCB, Non-Medical PCM, Commerce, aur Arts. Har student ka interest aur sapna yahan welcome hai." },
  { file: "academic-smart", text: "Smart classrooms, interactive boards, aur modern science labs — technology aur education ka perfect combination sirf Sunrise mein milta hai." },
  { file: "faculty-principal", text: "Principal Mr. Khushi Ram — school ke captain. 30 saal ka anubhav aur ek vision — har baccha apni best version mein jiye." },
  { file: "faculty-stats",  text: "32 plus teachers, sabhi B.Ed ya M.Ed qualified, average 7 saal se zyada teaching experience. Quality education — guaranteed." },
  { file: "faculty-grid",   text: "Yeh hain hamare dedicated teachers — Science, Commerce, Arts, Physical Education — har department mein subject specialists." },
  { file: "studentlife-events", text: "Annual functions, sports meets, Republic Day, Independence Day — events ka yeh calendar students mein confidence aur team spirit bharta hai." },
  { file: "studentlife-clubs", text: "Science Club, Music, Dance, Eco Club, Debate Society — 8 se zyada clubs mein bachche apni hidden talents discover karte hain." },
  { file: "studentlife-gallery", text: "In tasveeeron mein hai Sunrise ki asli pehchaan — khushi, mehnat, aur ek aise school ki kahani jo apne students ko sach mein pyar karta hai." },
  { file: "updates-notices", text: "Yeh hain hamare latest notices — admission updates, exam dates, school events. Sab kuch yahan regularly updated rehta hai." },
  { file: "contact-info",   text: "Phone: plus 91 9255528310. Monday to Saturday, 8 AM to 3 PM. Village Mago Majri, Kaithal, Haryana. Humara darwaza hamesha khula hai — aapka swagat hai!" },
];

async function generate(item) {
  const res = await fetch("https://api.cartesia.ai/tts/bytes", {
    method: "POST",
    headers: {
      "Cartesia-Version": "2024-06-10",
      "X-API-Key": API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model_id: MODEL,
      transcript: item.text,
      voice: { mode: "id", id: VOICE_ID },
      output_format: { container: "mp3", encoding: "mp3", sample_rate: 44100 },
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`HTTP ${res.status}: ${err}`);
  }

  const buf = Buffer.from(await res.arrayBuffer());
  const outPath = join(OUT_DIR, `${item.file}.mp3`);
  writeFileSync(outPath, buf);
  console.log(`✅  ${item.file}.mp3  (${buf.length} bytes)`);
}

console.log(`Generating ${MISSING.length} audio files…\n`);
for (const item of MISSING) {
  try {
    await generate(item);
  } catch (e) {
    console.error(`❌  ${item.file}: ${e.message}`);
  }
}
console.log("\nDone.");
