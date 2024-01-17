export const handNumbers = [
  { 2: "Kettő" },
  { 3: "Három" },
  { 4: "Négy" },
  { 5: "Öt" },
  { 6: "Hat" },
  { 7: "Hét" },
  { 8: "Nyolc" },
  { 9: "Kilenc" },
  { 10: "Tíz" },
  { 11: "T.Egy" },
];

export const deckNumbers = [
  ...handNumbers,
  { 12: "T.Kettő" },
  { 13: "T.Három" },
  { 14: "T.Négy" },
  { 15: "T.Öt" },
  { 16: "T.Hat" },
  { 17: "T.Hét" },
  { 18: "T.Nyolc" },
  { 19: "T.Kilenc" },
  { 20: "Húsz" },
  { 21: "Huszonegy" },
];

export const winScenarios = {
  30: {
    number: 500,
    text: "Ötszáz",
  },
  25: {
    number: 1000,
    text: "Ezer",
  },
  15: {
    number: 5000,
    text: "Ötezer",
  },
  10: {
    number: 10000,
    text: "Tízezer",
  },
  5: {
    number: 100000,
    text: "Százezer",
  },
};
