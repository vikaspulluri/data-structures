const PokerHands = {
  Flush: 'Flush',
  Three_Of_A_Kind: 'Three of a Kind',
  Pair: 'Pair',
  High_Card: 'High Card'
}

function bestHand(ranks, suits) {
  const set = new Set();
  const map = new Map();
  suits.forEach((suit) => set.add(suit));

  if (set.size === 1) return PokerHands.Flush;
  ranks.forEach((rank) => map.set(rank, map.has(rank) ? map.get(rank) + 1 : 1));
  let max_rank = 1;
  map.forEach(value => max_rank = Math.max(max_rank, value));
  if (max_rank >= 3) return PokerHands.Three_Of_A_Kind;
  if (max_rank >= 2) return PokerHands.Pair;
  return PokerHands.High_Card;
};

bestHand([4,4,2,4,4], ["d","a","a","b","c"]);