---
title: "A research map of Kriegspiel"
slug: "kriegspiel-research-map"
summary: "A compact guide to the main public research lines on Kriegspiel, with publication lists from Bologna and Berkeley."
publishedAt: "2026-04-18"
updatedAt: "2026-04-18"
author: "Kriegspiel Team"
tags: ["research", "history", "academia"]
draft: false
lifecycle: published
---

Kriegspiel has always been a small game with an outsized research footprint. It looks like chess, but its hidden information turns ordinary move search into a problem about belief states, partial observability, referee announcements, and uncertainty.

When we went looking for the public academic trail, two clusters stood out most clearly:

- a long and unusually rich Bologna line around Paolo Ciancarini and collaborators
- a smaller Berkeley line centered on Jason Wolfe and Stuart Russell

This post is not a complete bibliography of every Kriegspiel paper ever written. It is a practical map of the public materials we found while tracing the modern research history of the game.

## Bologna: the deepest public line

The strongest public cluster we found is the Bologna one. The core source is Paolo Ciancarini's [Kriegspiel page](https://www.cs.unibo.it/~paolo.ciancarini/wwwpages/chesssite/kriegspiel/kriegspiel.html), backed by his [chess library page](https://www.cs.unibo.it/~cianca/wwwpages/chesssite/mychesspage.html) and Giampiero Favini's doctoral thesis, [The dark side of the board: advances in chess Kriegspiel](https://amsdottorato.unibo.it/id/eprint/2403/1/favini_gianpiero_tesi.pdf).

What makes the Bologna line stand out is breadth. It covers metapositions, practical playing programs, Monte Carlo Tree Search, retrograde endgame analysis, and the bridge from theory to strong ICC play.

### Bologna publications listed on Ciancarini's Kriegspiel page

| Year | Title | Venue or type |
| --- | --- | --- |
| 1997 | *A Rational Approach to Kriegspiel* | Advances in Computer Chess 8 |
| 2003 | *Computer Programming of Kriegspiel Endings* | Advances in Computer Games 10 |
| 2004 | *Searching over Metapositions in Kriegspiel* | Computer and Games 2004 |
| 2007 | *Representing Kriegspiel States with Metapositions* | IJCAI 2007 |
| 2007 | *Moving in the Dark: Progress through Uncertainty in Kriegspiel* | Computer Games Workshop 2007 |
| 2007 | *A Program to Play Kriegspiel* | ICGA Journal |
| 2009 | *Solving Kriegspiel endings with brute force: the case of KR vs. K* | Advances in Computer Games 12 |
| 2009 | *Monte Carlo Tree Search Techniques in the Game of Kriegspiel* | IJCAI 2009 |
| 2010 | *Progress through uncertainty in some Kriegspiel endings* | IEEE Transactions on Computational Intelligence and AI in Games |
| 2010 | *Monte Carlo Tree Search in Kriegspiel* | Artificial Intelligence |
| 2010 | *Retrograde analysis of Kriegspiel endgames* | IEEE Conference on Computational Intelligence and Games |
| 2010 | *Algorithmic explorations of a well known wargame* | SING 2010 |
| 2010 | *Playing the perfect Kriegspiel endgame* | Theoretical Computer Science |
| undated on page | *La Scacchiera Invisibile* | Book manuscript in progress |

### Bologna theses and related academic work listed on the chess library page

| Year | Author | Title |
| --- | --- | --- |
| 1993 | Francesco Maran | *Razionalità Sostanziale e Procedurale nel Kriegspiel* |
| 2002 | Marco Collareda | *Progetto e Realizzazione di un programma cliente per Internet Chess Club* |
| 2003 | Alessandro Bolognesi | *Analisi e progettazione di un programma di gioco ad informazione imperfetta (Kriegspiel)* |
| 2003 | Gian Piero Favini | *A Java Interface for Kriegspiel on ICC* |
| 2006 | Gian Piero Favini | *A program to play Kriegspiel* |
| 2010 | Gian Piero Favini | *The dark side of the board: advances in chess Kriegspiel* |

If you want one place to start, start with Favini's thesis. It is the closest thing we found to a single-document synthesis of the Bologna line.

## Berkeley: a tighter line around belief-state search

The Berkeley trail is smaller, but very sharp. The main public hub is Jason Wolfe's [Berkeley page](https://w01fe.com/berkeley/), which links a dedicated [Berkeley Kriegspiel rules page](https://w01fe.com/berkeley/kriegspiel/rules.html), a [Kriegspiel problem database](https://w01fe.com/berkeley/kriegspiel/problems.html), and a [Kriegspiel PGN notation spec](https://w01fe.com/berkeley/kriegspiel/notation.html).

Compared with Bologna, Berkeley's contribution looks less like a long program in endgame solving and more like a focused line on belief-state search for partially observable games.

### Berkeley papers we found

| Year | Authors | Title | Venue or type |
| --- | --- | --- | --- |
| 1972 | C. S. Wetherell, T. J. Buckholtz, K. S. Booth | *A Director for Kriegspiel, a Variant of Chess* | The Computer Journal |
| 2005 | Stuart Russell, Jason Wolfe | *Efficient Belief-State AND-OR Search, with Application to Kriegspiel* | IJCAI 2005 |
| 2007 | Jason Wolfe, Stuart Russell | *Exploiting Belief State Structure in Graph Search* | ICAPS Workshop on Planning in Games |

The 1972 paper is worth calling out because it is an early Berkeley-connected systems paper about using programs as Kriegspiel directors. The Wolfe and Russell papers are the ones that feel closest to the modern AI framing: belief states, AND-OR search, and structured search in partially observable spaces.

### Useful Berkeley research artifacts

- The [Berkeley rules page](https://w01fe.com/berkeley/kriegspiel/rules.html) is important because it defines a concrete local ruleset rather than assuming a single universal Kriegspiel standard.
- The [Kriegspiel problem database](https://w01fe.com/berkeley/kriegspiel/problems.html) shows how the Berkeley work turned theory into benchmarkable test sets.
- The [Kriegspiel PGN notation spec](https://w01fe.com/berkeley/kriegspiel/notation.html) is a small but very practical contribution: it treats hidden-information game records as something worth standardizing, not just improvising.

## What this research map says

The Bologna and Berkeley lines overlap, but they do not feel identical.

- Bologna looks like the broadest public research program: representation, search, endgames, MCTS, and strong practical play.
- Berkeley looks like a narrower but very elegant line: define a variant, define benchmarks, and attack the belief-state search problem directly.
- Together they explain why Kriegspiel keeps attracting researchers. It is not just a chess variant. It is a clean laboratory for reasoning under hidden information.

If you want a reading order, this is the one we would suggest:

1. Read Ciancarini's [Kriegspiel page](https://www.cs.unibo.it/~paolo.ciancarini/wwwpages/chesssite/kriegspiel/kriegspiel.html) to see the Bologna arc in one place.
2. Read Favini's [doctoral thesis](https://amsdottorato.unibo.it/id/eprint/2403/1/favini_gianpiero_tesi.pdf) for the strongest single Bologna document.
3. Read Russell and Wolfe's [IJCAI 2005 paper](https://people.eecs.berkeley.edu/~russell/papers/ijcai05-krieg.pdf).
4. Then read Wolfe and Russell's [2007 workshop paper](https://w01fe.com/berkeley/pubs/07-icaps_games-graph.pdf).

That gives you one broad research tradition and one clean belief-state tradition, which is a very good starting map for anyone building modern Kriegspiel software.

**Updated on 2026-04-18.**
