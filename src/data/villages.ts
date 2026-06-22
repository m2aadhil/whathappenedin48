// Destroyed Palestinian villages — 1948
// Coordinates from PalestineRemembered.com, Zochrot, and academic sources
// Representative sample of 400+ destroyed villages

export interface Village {
  name: string;
  nameAr: string;
  lat: number;
  lng: number;
  district: string;
  population1945: number;
  dateDepopulated: string;
  fate: string;
}

export const villages: Village[] = [
  // ── Jerusalem District ──────────────
  { name: "Deir Yassin", nameAr: "دير ياسين", lat: 31.7865, lng: 35.1787, district: "Jerusalem", population1945: 610, dateDepopulated: "April 9, 1948", fate: "Massacre; residents killed or expelled" },
  { name: "Lifta", nameAr: "لِفتا", lat: 31.7929, lng: 35.1969, district: "Jerusalem", population1945: 2550, dateDepopulated: "January 1948", fate: "Depopulated; some buildings remain" },
  { name: "Qalunya", nameAr: "قالونيا", lat: 31.7933, lng: 35.1558, district: "Jerusalem", population1945: 910, dateDepopulated: "April 1948", fate: "Destroyed; now part of Mevaseret Zion" },
  { name: "Ein Karim", nameAr: "عين كارم", lat: 31.7667, lng: 35.1667, district: "Jerusalem", population1945: 3180, dateDepopulated: "July 1948", fate: "Depopulated; buildings preserved" },
  { name: "al-Maliha", nameAr: "المالحة", lat: 31.7531, lng: 35.1858, district: "Jerusalem", population1945: 1940, dateDepopulated: "July 1948", fate: "Depopulated; now Malha, Jerusalem" },

  // ── Haifa District ────────────────
  { name: "al-Tantura", nameAr: "الطنطورة", lat: 32.6100, lng: 34.9167, district: "Haifa", population1945: 1490, dateDepopulated: "May 22–23, 1948", fate: "Massacre reported; residents expelled; now Dor Beach" },
  { name: "Balad al-Sheikh", nameAr: "بلد الشيخ", lat: 32.7667, lng: 35.0333, district: "Haifa", population1945: 4120, dateDepopulated: "April 1948", fate: "Destroyed; now Nesher" },
  { name: "Ijzim", nameAr: "إجزم", lat: 32.6431, lng: 34.9889, district: "Haifa", population1945: 2970, dateDepopulated: "July 1948", fate: "Depopulated; now Kerem Maharal" },

  // ── Jaffa District ────────────────
  { name: "Salama", nameAr: "سلمة", lat: 32.0500, lng: 34.8000, district: "Jaffa", population1945: 6730, dateDepopulated: "April 1948", fate: "Destroyed; now part of Tel Aviv" },
  { name: "Yazur", nameAr: "يازور", lat: 32.0278, lng: 34.8069, district: "Jaffa", population1945: 4030, dateDepopulated: "April 1948", fate: "Destroyed; now Azor industrial zone" },
  { name: "al-Mas'udiyya", nameAr: "المسعودية", lat: 32.0833, lng: 34.7833, district: "Jaffa", population1945: 850, dateDepopulated: "December 1947", fate: "Destroyed; now part of Tel Aviv" },

  // ── Ramle District ────────────────
  { name: "Lydda", nameAr: "اللد", lat: 31.9500, lng: 34.9000, district: "Ramle", population1945: 18250, dateDepopulated: "July 11, 1948", fate: "Mass expulsion; 50,000+ expelled from Lydda & Ramle" },
  { name: "Ramle", nameAr: "الرملة", lat: 31.9333, lng: 34.8667, district: "Ramle", population1945: 16000, dateDepopulated: "July 11, 1948", fate: "Mass expulsion; most residents expelled" },
  { name: "Abu Shusha", nameAr: "أبو شوشة", lat: 31.9167, lng: 34.9167, district: "Ramle", population1945: 950, dateDepopulated: "May 1948", fate: "Destroyed" },

  // ── Gaza District ─────────────────
  { name: "Isdud", nameAr: "إسدود", lat: 31.7550, lng: 34.6550, district: "Gaza", population1945: 4910, dateDepopulated: "October 1948", fate: "Depopulated; now Ashdod" },
  { name: "al-Majdal", nameAr: "المجدل", lat: 31.6667, lng: 34.5667, district: "Gaza", population1945: 9910, dateDepopulated: "October 1948", fate: "Depopulated; now Ashkelon" },
  { name: "Burayr", nameAr: "برير", lat: 31.5717, lng: 34.6386, district: "Gaza", population1945: 2740, dateDepopulated: "May 1948", fate: "Destroyed" },

  // ── Safed District ────────────────
  { name: "Safed (Arab quarter)", nameAr: "صفد", lat: 32.9647, lng: 35.4983, district: "Safed", population1945: 10250, dateDepopulated: "May 1948", fate: "Arab population expelled; city remains" },
  { name: "al-Zanghariyya", nameAr: "الزنغرية", lat: 32.9425, lng: 35.5869, district: "Safed", population1945: 840, dateDepopulated: "May 1948", fate: "Destroyed" },

  // ── Tiberias District ─────────────
  { name: "Tiberias (Arab quarter)", nameAr: "طبريا", lat: 32.7922, lng: 35.5317, district: "Tiberias", population1945: 5660, dateDepopulated: "April 18, 1948", fate: "Arab population expelled; city remains" },
  { name: "Samakh", nameAr: "سمخ", lat: 32.7067, lng: 35.5833, district: "Tiberias", population1945: 3460, dateDepopulated: "April 1948", fate: "Destroyed; now Tzemach" },

  // ── Nazareth District ─────────────
  { name: "Saffuriyya", nameAr: "صفورية", lat: 32.7464, lng: 35.2781, district: "Nazareth", population1945: 4330, dateDepopulated: "July 1948", fate: "Expelled; now Tzippori" },
  { name: "Ma'lul", nameAr: "معلول", lat: 32.6978, lng: 35.2403, district: "Nazareth", population1945: 690, dateDepopulated: "July 1948", fate: "Destroyed; now Nahalal area" },

  // ── Acre District ─────────────────
  { name: "al-Birwa", nameAr: "البروة", lat: 32.9050, lng: 35.1806, district: "Acre", population1945: 1460, dateDepopulated: "June 1948", fate: "Destroyed; now Ahihud (birthplace of Mahmoud Darwish)" },
  { name: "al-Kabri", nameAr: "الكابري", lat: 33.0167, lng: 35.1500, district: "Acre", population1945: 1520, dateDepopulated: "May 1948", fate: "Destroyed; now Kabri kibbutz" },

  // ── Tulkarm District ──────────────
  { name: "Qaqun", nameAr: "قاقون", lat: 32.3583, lng: 34.9972, district: "Tulkarm", population1945: 1970, dateDepopulated: "June 1948", fate: "Destroyed" },

  // ── Beersheba District ────────────
  { name: "Beersheba (Arab quarter)", nameAr: "بئر السبع", lat: 31.2500, lng: 34.7833, district: "Beersheba", population1945: 5570, dateDepopulated: "October 1948", fate: "Arab population expelled" },
];

export const districtColors: Record<string, string> = {
  "Jerusalem": "#D4780A",
  "Haifa": "#A85E08",
  "Jaffa": "#C4352E",
  "Ramle": "#1A7A6E",
  "Gaza": "#4A5B7A",
  "Safed": "#2D7D4A",
  "Tiberias": "#C4960D",
  "Nazareth": "#6F737A",
  "Acre": "#3A3F48",
  "Tulkarm": "#8B4513",
  "Beersheba": "#2E4053",
};
