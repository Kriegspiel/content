---
title: "A research map of Kriegspiel"
slug: "kriegspiel-research-map"
summary: "A compact guide to public Kriegspiel research, key papers, and the academic history around the game."
publishedAt: "2026-04-18"
updatedAt: "2026-04-18"
author: "Kriegspiel Team"
tags: ["research", "history", "academia"]
draft: false
lifecycle: published
---

Kriegspiel has always been a small game with an outsized research footprint. It looks like chess, but its hidden information turns ordinary move search into a problem about belief states, partial observability, referee announcements, and uncertainty.

When we went looking for the public academic trail, several clusters and one especially important bridge figure stood out most clearly:

- an older English and mathematical line running from Anderson to Ferguson
- Lloyd Shapley as a RAND-to-UCLA bridge figure with a smaller but important Kriegspiel trail of his own
- a Japanese and Shogi-adjacent line around Makoto Sakuta, Hiroyuki Iida, and Jin Yoshimura
- a Maryland line around Austin Parker, Dana Nau, and V. S. Subrahmanian
- a long and unusually rich Bologna line around Paolo Ciancarini and collaborators
- a smaller Berkeley line centered on Jason Wolfe and Stuart Russell

This post is not a complete bibliography of every Kriegspiel paper ever written. It is a practical map of the public materials we found while tracing the modern research history of the game.

One especially useful secondary index while doing that work was the Chessprogramming wiki's [KriegSpiel page](https://www.chessprogramming.org/KriegSpiel). It is not a substitute for the primary papers, but it is a very good cross-check because it collects publication links, Computer Olympiad notes, and wider context such as Henry Michael Temple's 1899 origin story and the ICC / Wild 16 rules line.

## Before Bologna and Berkeley: Anderson and the English problem tradition

There is also an earlier book-length source that deserves to be named on its own: Gerald Frank Anderson's [Are There Any? A Chess Problem Book](https://www.chesshistory.com/winter/winter15.html).

It does not belong to the later Bologna or Berkeley AI lines. It belongs to an older English Kriegspiel problem tradition, centered more on composed problems and referee logic than on modern search algorithms. That is exactly why it still matters.

The book appears with a small date ambiguity in later references. Thomas Ferguson cites it as a `1958` book in his UCLA paper on Kriegspiel endgames, while Edward Winter refers to it as Anderson's `1959` book, and Ciancarini's *La Scacchiera Invisibile* treats it as the classic Anderson source on Kriegspiel problems. The safe way to cite it is:

- Gerald Frank Anderson, [Are There Any? A Chess Problem Book](https://www.chesshistory.com/winter/winter15.html) (`1958/1959`)

The title itself is a piece of Kriegspiel history. "Are there any?" is the famous English-rule question about whether there are any legal pawn tries available. That makes the book more than a bibliography footnote: it captures a whole rules culture around the game.

## UCLA: the mathematical endgame line

One thing the first version of this post underplayed was UCLA. Thomas S. Ferguson's Kriegspiel work deserves to be called out directly, because it represents a different kind of contribution again: a more mathematical and endgame-focused line.

The central published item here is Ferguson's [Mate with bishop and knight in kriegspiel](https://www.math.ucla.edu/~tom/papers/ks.pdf), published in *Theoretical Computer Science* in 1992. The UCLA-hosted PDF is still available, and it is a substantial paper, not just a note. Its main result is that king, bishop, and knight can win against king alone in Kriegspiel with probability one, together with a constructive winning procedure.

### UCLA publication we should have listed

| Year | Author | Title | Venue or type |
| --- | --- | --- | --- |
| 1992 | Thomas S. Ferguson | [Mate with bishop and knight in kriegspiel](https://www.math.ucla.edu/~tom/papers/ks.pdf) | Theoretical Computer Science 96(2), 389-403 |

### Related UCLA-hosted Kriegspiel materials

- Ferguson's paper explicitly connects back to Anderson's English-rule problem book and to Lloyd Shapley's Kriegspiel work.
- UCLA also still hosts related unpublished Ferguson notes such as [Mate with the Two Bishops in Kriegspiel](https://www.math.ucla.edu/~tom/papers/unpublished/kriegbishop.pdf) and [On a Kreigspiel Problem of Lloyd Shapley](https://www.math.ucla.edu/~tom/papers/unpublished/kriegshap.pdf).
- Taken together, these materials feel less like a broad software program and more like a mathematical endgame tradition around specific forced-mate questions.

## Lloyd Shapley: the bridge figure we should have listed directly

Lloyd S. Shapley was one of the founding giants of game theory, later a Nobel laureate, first at RAND and later at UCLA. He was also a serious Kriegspiel player, problem composer, and theorist of the game. The public record around him is just less tidy than the Bologna or Berkeley clusters: fewer journal papers, more manuscripts, problem collections, rules packets, and later papers built around his ideas.

That is the real reason the earlier versions of this post underplayed him. It was not because he was unimportant. It was because his Kriegspiel trail is more archival and manuscript-based than the more easily tabled Bologna and Berkeley publication lines.

For background on Shapley himself, the clearest short public references we found are UCLA's [Nobel profile and reminiscence](https://newsroom.ucla.edu/stories/colleagues-at-ucla-applaud-lloyd-239730), the [Game Theory Society memorial](https://gametheorysociety.org/in-memoriam-lloyd-s-shapley-1924-2016/), and the [Harlow Shapley Project's Lloyd pages](https://harlowshapley.org/lloyd).

### Direct Shapley Kriegspiel item we found

| Year | Author | Title | Venue or type |
| --- | --- | --- | --- |
| 1987 | Lloyd S. Shapley | [The Invisible Chessboard](https://harlowshapley.org/s/Kriegspiel-rules-and-Lloyd-Shapley-demo.pdf) | Unpublished manuscript and problem collection, public archival scan |

### Public Shapley-centered Kriegspiel items worth listing too

| Year | Author | Title | Venue or type |
| --- | --- | --- | --- |
| 1992 | Thomas S. Ferguson | [Mate with bishop and knight in kriegspiel](https://www.math.ucla.edu/~tom/papers/ks.pdf) | Theoretical Computer Science; cites Shapley's manuscript directly |
| unpublished public PDF | Thomas S. Ferguson | [On a Kreigspiel Problem of Lloyd Shapley](https://www.math.ucla.edu/~tom/papers/unpublished/kriegshap.pdf) | UCLA-hosted note on a Shapley quarter-infinite-board problem |
| 2018 | Alexander Matros | [Lloyd Shapley and chess with imperfect information](https://eprints.lancs.ac.uk/id/eprint/89158/) | Games and Economic Behavior; retrospective analysis of Shapley's problems |
| undated public archive | Harlow Shapley Project | [Kriegspiel rules and Lloyd Shapley demo](https://harlowshapley.org/s/Kriegspiel-rules-and-Lloyd-Shapley-demo.pdf) | Archival packet linking Williams' rules and Shapley material |

## Two more research lines the Chessprogramming wiki helps surface

One thing the Chessprogramming wiki makes much easier to see is that the Bologna and Berkeley lines are not the whole modern technical story. It also preserves a smaller Japanese line around Kriegspiel-like solving methods, and a Maryland line focused on huge belief states and opponent models.

### Japan: Sakuta, Iida, and Kriegspiel-like solving

This line is slightly adjacent to orthodox chess Kriegspiel rather than identical to it. A lot of the work is framed through Tsuitate-Tsume-Shogi, or screen-shogi mating problems, but the reason it belongs on a Kriegspiel research map is that it tackles the same core question: how to search and solve game trees under uncertainty.

### Japanese and Kriegspiel-like publications surfaced by the Chessprogramming wiki

| Year | Authors | Title | Venue or type |
| --- | --- | --- | --- |
| 2000 | Makoto Sakuta, Hiroyuki Iida, Jin Yoshimura | [A Deterministic Approach for Solving Kriegspiel-like Problems](https://www.chessprogramming.org/5th_Computer_Olympiad) | 5th Computer Olympiad Workshop |
| 2000 | Makoto Sakuta, Hiroyuki Iida | [Solving Kriegspiel-Like Problems: Examining Efficient Search Methods](https://link.springer.com/chapter/10.1007/3-540-45579-5_4) | Computers and Games 2000 |
| 2000 | Makoto Sakuta, Hiroyuki Iida | [Solving Kriegspiel-like Problems: Exploiting a Transposition Table](https://dblp.org/rec/journals/icga/SakutaI00) | ICGA Journal 23(4) |
| 2000 | Makoto Sakuta, Hiroyuki Iida, Jin Yoshimura | [Solving Problems under Uncertainty Paradigm](https://www.fit.ac.jp/~sakuta/research/tts-papers.html) | SSGRR 2000; listed on Sakuta's public research page |

If the UCLA line is the cleanest mathematical endgame line, then the Sakuta-Iida line is the clearest "Kriegspiel-like solving methods" line. It leans toward proof-number style search, AND/OR search, and deterministic solving of uncertainty-heavy puzzles rather than full practical play on ICC.

### Maryland: Parker, Nau, and Subrahmanian

The Chessprogramming wiki also makes it easier to spot a Maryland line that we had only indirectly touched before. These papers are not about composing problems or endgame theory. They are about huge belief states, statistical sampling, and opponent modeling in imperfect-information games, with Kriegspiel used as a core testbed.

### Maryland publications we should have listed directly

| Year | Authors | Title | Venue or type |
| --- | --- | --- | --- |
| 2005 | Austin Parker, Dana S. Nau, V. S. Subrahmanian | [Game-Tree Search with Combinatorially Large Belief States](https://www.cs.umd.edu/~nau/papers/parker2005game-tree.pdf) | IJCAI 2005 |
| 2006 | Austin Parker, Dana S. Nau, V. S. Subrahmanian | [Overconfidence or Paranoia? Search in Imperfect-Information Games](https://cdn.aaai.org/AAAI/2006/AAAI06-164.pdf) | AAAI 2006 |

Taken together, those papers sit very naturally beside the Berkeley belief-state work. They are not identical in framing, but they belong in the same conversation about search under hidden information.

## Bologna: the deepest public line

The strongest public cluster we found is the Bologna one. The core source is Paolo Ciancarini's [Kriegspiel page](https://www.cs.unibo.it/~paolo.ciancarini/wwwpages/chesssite/kriegspiel/kriegspiel.html), backed by his [chess library page](https://www.cs.unibo.it/~cianca/wwwpages/chesssite/mychesspage.html) and Giampiero Favini's doctoral thesis, [The dark side of the board: advances in chess Kriegspiel](https://amsdottorato.unibo.it/id/eprint/2403/1/favini_gianpiero_tesi.pdf).

What makes the Bologna line stand out is breadth. It covers metapositions, practical playing programs, Monte Carlo Tree Search, retrograde endgame analysis, and the bridge from theory to strong ICC play.

The Chessprogramming wiki also helps preserve the competitive side of that story. It links the Olympiad notes around Darkboard, including [Darkboard wins KriegSpiel tournament](https://journals.sagepub.com/toc/icg/29/2) at the 11th Computer Olympiad and [Darkboard wins KriegSpiel tournament](https://www.chessprogramming.org/14th_Computer_Olympiad) at the 14th Computer Olympiad.

### Bologna publications listed on Ciancarini's Kriegspiel page

| Year | Title | Venue or type |
| --- | --- | --- |
| 1997 | [A Rational Approach to Kriegspiel](https://www.cs.unibo.it/~paolo.ciancarini/wwwpages/chesssite/kriegspiel/rational.pdf) | Advances in Computer Chess 8 |
| 2003 | [Computer Programming of Kriegspiel Endings](https://www.cs.unibo.it/~paolo.ciancarini/wwwpages/chesssite/kriegspiel/endings.pdf) | Advances in Computer Games 10 |
| 2004 | [Searching over Metapositions in Kriegspiel](https://www.cs.unibo.it/~paolo.ciancarini/wwwpages/chesssite/kriegspiel/metapositions.pdf) | Computer and Games 2004 |
| 2007 | [Representing Kriegspiel States with Metapositions](https://www.ijcai.org/Proceedings/07/Papers/394.pdf) | IJCAI 2007 |
| 2007 | [Moving in the Dark: Progress through Uncertainty in Kriegspiel](https://www.cs.unibo.it/~paolo.ciancarini/wwwpages/chesssite/kriegspiel/2007Amsterdam.pdf) | Computer Games Workshop 2007 |
| 2007 | [A Program to Play Kriegspiel](https://doi.org/10.3233/ICG-2007-30102) | ICGA Journal |
| 2009 | [Solving Kriegspiel endings with brute force: the case of KR vs. K](https://cris.unibo.it/handle/11585/83676) | Advances in Computer Games 12 |
| 2009 | [Monte Carlo Tree Search Techniques in the Game of Kriegspiel](https://www.ijcai.org/Proceedings/09/Papers/086.pdf) | IJCAI 2009 |
| 2010 | [Progress through uncertainty in some Kriegspiel endings](https://doi.org/10.1109/TCIAIG.2010.2048711) | IEEE Transactions on Computational Intelligence and AI in Games |
| 2010 | [Monte Carlo Tree Search in Kriegspiel](https://doi.org/10.1016/j.artint.2010.04.017) | Artificial Intelligence |
| 2010 | [Retrograde analysis of Kriegspiel endgames](https://cris.unibo.it/handle/11585/93683) | IEEE Conference on Computational Intelligence and Games |
| 2010 | [Algorithmic explorations of a well known wargame](https://cris.unibo.it/handle/11585/108400) | SING 2010 |
| 2010 | [Playing the perfect Kriegspiel endgame](https://doi.org/10.1016/j.tcs.2010.05.019) | Theoretical Computer Science |
| undated on page | [La Scacchiera Invisibile](https://www.cs.unibo.it/~paolo.ciancarini/wwwpages/chesssite/kriegspiel/scacchierainvisibile.pdf) | Book manuscript in progress |

### Bologna theses and related academic work listed on the chess library page

| Year | Author | Title |
| --- | --- | --- |
| 1993 | Francesco Maran | [Razionalità Sostanziale e Procedurale nel Kriegspiel](https://www.cs.unibo.it/~cianca/wwwpages/chesssite/Maran.pdf) |
| 2002 | Marco Collareda | [Progetto e Realizzazione di un programma cliente per Internet Chess Club](https://www.cs.unibo.it/~cianca/wwwpages/chesssite/collareda.pdf) |
| 2003 | Alessandro Bolognesi | [Analisi e progettazione di un programma di gioco ad informazione imperfetta (Kriegspiel)](https://www.cs.unibo.it/~cianca/wwwpages/chesssite/bolognesi.pdf) |
| 2003 | Gian Piero Favini | [A Java Interface for Kriegspiel on ICC](https://www.cs.unibo.it/~cianca/wwwpages/chesssite/favini.pdf) |
| 2006 | Gian Piero Favini | [A program to play Kriegspiel](https://www.cs.unibo.it/~cianca/wwwpages/chesssite/favini2.pdf) |
| 2010 | Gian Piero Favini | [The dark side of the board: advances in chess Kriegspiel](https://amsdottorato.unibo.it/id/eprint/2403/1/favini_gianpiero_tesi.pdf) |

If you want one place to start, start with Favini's thesis. It is the closest thing we found to a single-document synthesis of the Bologna line.

## Berkeley: a tighter line around belief-state search

The Berkeley trail is smaller, but very sharp. The main public hub is Jason Wolfe's [Berkeley page](https://w01fe.com/berkeley/), which links a dedicated [Berkeley Kriegspiel rules page](https://w01fe.com/berkeley/kriegspiel/rules.html), a [Kriegspiel problem database](https://w01fe.com/berkeley/kriegspiel/problems.html), and a [Kriegspiel PGN notation spec](https://w01fe.com/berkeley/kriegspiel/notation.html).

Compared with Bologna, Berkeley's contribution looks less like a long program in endgame solving and more like a focused line on belief-state search for partially observable games.

### Berkeley papers we found

| Year | Authors | Title | Venue or type |
| --- | --- | --- | --- |
| 1972 | C. S. Wetherell, T. J. Buckholtz, K. S. Booth | [A Director for Kriegspiel, a Variant of Chess](https://doi.org/10.1093/comjnl/15.1.66) | The Computer Journal |
| 2005 | Stuart Russell, Jason Wolfe | [Efficient Belief-State AND-OR Search, with Application to Kriegspiel](https://people.eecs.berkeley.edu/~russell/papers/ijcai05-krieg.pdf) | IJCAI 2005 |
| 2007 | Jason Wolfe, Stuart Russell | [Exploiting Belief State Structure in Graph Search](https://w01fe.com/berkeley/pubs/07-icaps_games-graph.pdf) | ICAPS Workshop on Planning in Games |

The 1972 paper is worth calling out because it is an early Berkeley-connected systems paper about using programs as Kriegspiel directors. The Wolfe and Russell papers are the ones that feel closest to the modern AI framing: belief states, AND-OR search, and structured search in partially observable spaces.

### Useful Berkeley research artifacts

- The [Berkeley rules page](https://w01fe.com/berkeley/kriegspiel/rules.html) is important because it defines a concrete local ruleset rather than assuming a single universal Kriegspiel standard.
- The [Kriegspiel problem database](https://w01fe.com/berkeley/kriegspiel/problems.html) shows how the Berkeley work turned theory into benchmarkable test sets.
- The [Kriegspiel PGN notation spec](https://w01fe.com/berkeley/kriegspiel/notation.html) is a small but very practical contribution: it treats hidden-information game records as something worth standardizing, not just improvising.

## What this research map says

The Bologna and Berkeley lines overlap, but they do not feel identical.

- UCLA looks like the clearest mathematical endgame line: deep, specific, and focused on forced-mate questions.
- Shapley looks less like a neat publication cluster and more like a bridge figure: RAND lunch-hour Kriegspiel, UCLA mathematics, unpublished problem manuscripts, and later formal analysis.
- Sakuta and Iida look like the clearest Kriegspiel-like solving-method line: proof-number search, AND/OR search, and deterministic solving under uncertainty.
- Parker, Nau, and Subrahmanian look like a Maryland belief-state line: large hidden-state spaces, sampling, and opponent models.
- Bologna looks like the broadest public research program: representation, search, endgames, MCTS, and strong practical play.
- Berkeley looks like a narrower but very elegant line: define a variant, define benchmarks, and attack the belief-state search problem directly.
- Together they explain why Kriegspiel keeps attracting researchers. It is not just a chess variant. It is a clean laboratory for reasoning under hidden information.

If you want a reading order, this is the one we would suggest:

1. Start with Anderson's *Are There Any?* if you want an older problem-book view of English Kriegspiel.
2. Read Ferguson's [Mate with bishop and knight in kriegspiel](https://www.math.ucla.edu/~tom/papers/ks.pdf) for the UCLA mathematical line.
3. Read Shapley's [The Invisible Chessboard](https://harlowshapley.org/s/Kriegspiel-rules-and-Lloyd-Shapley-demo.pdf) and Ferguson's [Shapley note](https://www.math.ucla.edu/~tom/papers/unpublished/kriegshap.pdf) for the RAND/UCLA bridge.
4. Read the Sakuta-Iida line, starting with [Solving Kriegspiel-Like Problems: Examining Efficient Search Methods](https://link.springer.com/chapter/10.1007/3-540-45579-5_4).
5. Read Ciancarini's [Kriegspiel page](https://www.cs.unibo.it/~paolo.ciancarini/wwwpages/chesssite/kriegspiel/kriegspiel.html) to see the Bologna arc in one place.
6. Read Favini's [doctoral thesis](https://amsdottorato.unibo.it/id/eprint/2403/1/favini_gianpiero_tesi.pdf) for the strongest single Bologna document.
7. Read Parker, Nau, and Subrahmanian's [Game-Tree Search with Combinatorially Large Belief States](https://www.cs.umd.edu/~nau/papers/parker2005game-tree.pdf).
8. Read Russell and Wolfe's [IJCAI 2005 paper](https://people.eecs.berkeley.edu/~russell/papers/ijcai05-krieg.pdf).
9. Then read Wolfe and Russell's [2007 workshop paper](https://w01fe.com/berkeley/pubs/07-icaps_games-graph.pdf).
10. Keep the Chessprogramming wiki's [KriegSpiel page](https://www.chessprogramming.org/KriegSpiel) open as a secondary index while you read. It fills in the Sakuta-Iida line, the Parker-Nau line, and the Olympiad record around Darkboard.

That gives you one broad research tradition and one clean belief-state tradition, which is a very good starting map for anyone building modern Kriegspiel software.

**Updated on 2026-04-18.**
