export function uniqueCards() {
  const cards = ["cat", "defuse", "shuffle", "bomb"];

  const extraCard = ["cat", "defuse", "shuffle", "bomb"];

  const deck = [
    ...cards,
    extraCard[Math.floor(Math.random() * extraCard.length)],
  ];
  deck.sort(() => Math.random() - 0.5);
  //   console.log(deck, "deck");
  return deck;
}
