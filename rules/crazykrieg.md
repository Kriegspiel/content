---
title: "CrazyKrieg / Crazyhouse Kriegspiel rules"
slug: "crazykrieg"
summary: "Crazyhouse mixed with Kriegspiel: hidden board, public reserves, typed captures, and secret drop squares."
publishedAt: "2026-04-28"
updatedAt: "2026-04-29"
author: "Kriegspiel Team"
tags: ["rules", "crazykrieg", "crazyhouse"]
draft: false
lifecycle: published
version: "1.0.1"
revision: "rules-crazykrieg-r2"
lastReviewedAt: "2026-04-29"
---

CrazyKrieg, also known as Crazyhouse Kriegspiel, combines Kriegspiel with Crazyhouse. It is played like normal Kriegspiel, except captured pieces go into the capturer's reserve and may later be dropped back onto the board.

The original Chess Variant Pages description combines Crazyhouse with Kriegspiel and adds the key reserve-tracking rule: when something is captured, the referee announces which piece or pawn has been removed so both players can track reserves.

## Basic idea

CrazyKrieg is a hidden-information chess game. Each player sees only their own pieces. The opponent's pieces are invisible. A referee, umpire, or server knows the true position and decides whether attempted moves are legal.

On a player's turn, the player may attempt either:

1. A normal chess move by one of their visible pieces, or
2. A Crazyhouse drop from their reserve.

If the attempt is legal, it becomes the move. If it is illegal, the referee says so and the player must try again. Illegal attempts do not end the turn, while a legal attempt stands as the move.

## Starting position

The game begins from the normal chess starting position.

Each player sees:

- their own pieces on the board,
- their own reserve,
- the opponent's reserve.

Each player does not see:

- the opponent's pieces on the board,
- the squares where the opponent has dropped pieces,
- the opponent's actual moves, except through referee announcements and reserve changes.

Only the referee or server sees the full board.

## Reserves are public

Both players' reserves are public information.

When a piece is captured, it changes color and enters the capturing player's reserve. Because reserves are public, both players know how many pawns, knights, bishops, rooks, and queens each side has available to drop.

The reserve does not reveal where dropped pieces are placed. If White drops a knight, Black knows that White's reserve lost one knight, but Black does not know the square unless the drop gives check, checkmate, or later affects another announcement.

## Legal moves

Normal chess moves are legal if they are legal in the true position.

A move may fail because of hidden enemy pieces. For example:

- a rook, bishop, or queen may be blocked by an invisible enemy piece,
- a pawn advance may fail because the destination square is secretly occupied,
- a king move may fail because the destination square is secretly attacked,
- castling may fail because the king is in check, passes through check, lands in check, or because the path is not truly clear.

If the attempted move is illegal only because of hidden information, the referee says:

```text
No.
```

If the attempted move is impossible regardless of hidden information, the referee may say:

```text
Impossible.
```

or:

```text
Hell no.
```

## Drops

Instead of moving a piece on the board, a player may drop a piece from their reserve onto an empty square.

A drop attempt consists of:

- the piece type being dropped,
- the destination square.

Example:

```text
White attempts N@f5.
```

The drop is legal if:

- the player has that piece type in reserve,
- the destination square is empty in the true position,
- the drop does not violate pawn-drop restrictions,
- the move leaves the player's own king safe,
- if the player is in check, the drop legally gets out of check.

A legal drop becomes the move. The piece appears on the referee's board and on the dropping player's own board. The opponent does not see the square.

A drop cannot capture. Crazyhouse drops are made onto empty squares.

## Pawn drops

Pawns may be dropped on empty squares, but not on the 1st or 8th rank.

These are illegal for both players:

- dropping a pawn on rank 1,
- dropping a pawn on rank 8.

Pawn drops may give check or checkmate.

## Captures

When a capture occurs, the referee announces the capture square and the reserve identity of the captured unit.

In ordinary Kriegspiel, the referee only needs to announce whether a pawn or piece was captured. In CrazyKrieg, the announcement must be more specific, because the captured unit enters a public reserve.

Recommended announcements:

```text
Pawn captured on e5.
Knight captured on c3.
Bishop captured on g7.
Rook captured on a8.
Queen captured on d4.
```

The captured unit is removed from its owner's board and added to the capturer's reserve.

## Promoted pawns

Promotion works as in chess: when a pawn reaches the last rank, it promotes to a queen, rook, bishop, or knight.

In Kriegspiel, pawn promotions are not announced to the opponent. In CrazyKrieg:

- the promoting player chooses the promotion piece privately,
- the promoted piece appears on the promoting player's own board,
- the opponent is not told that promotion occurred,
- the opponent is not told the promoted piece type.

If a promoted pawn is later captured, it enters the capturer's reserve as a pawn, not as the piece it was promoted to.

Therefore, the referee announces the reserve identity:

```text
Pawn captured on e8.
```

This can happen even though an ordinary pawn could not normally stand on e8. The announcement means: "the captured unit enters reserve as a pawn."

Do not announce:

```text
Queen captured on e8.
```

unless the captured unit was an original queen, not a promoted pawn.

## Public capture identity rule

For clarity, use this rule:

> When a capture occurs, the referee announces the identity of the piece that enters the capturer's reserve. A promoted pawn is announced as a pawn, because it enters reserve as a pawn.

## Checks

After a legal move or drop gives check, the referee announces check in standard Kriegspiel style.

Possible announcements:

```text
Check on the vertical.
Check on the horizontal.
Check on the long diagonal.
Check on the short diagonal.
Check by a knight.
```

The same applies to checks by dropped pieces. For example:

- a dropped knight giving check is announced as `Check by a knight`,
- a dropped rook giving file-check is announced as `Check on the vertical`,
- a dropped bishop or queen giving diagonal check is announced as long-diagonal or short-diagonal check.

The square of the checking piece is not announced.

## Checkmate

A player is checkmated if their king is in check and they have no legal response.

Legal responses include:

- moving the king,
- capturing the checking piece,
- blocking a line-check with a normal move,
- blocking a line-check with a drop,
- any other legal Crazyhouse defense.

A position that would be checkmate in ordinary chess may not be checkmate in CrazyKrieg if the defender can block with a reserve drop. A legal drop may also deliver checkmate.

## "Any?" question

A player may ask:

```text
Any?
```

meaning:

```text
Are there any legal pawn captures for me?
```

If no legal pawn capture exists, the referee answers `No`. If at least one legal pawn capture exists, the referee answers `Try`.

As in standard Kriegspiel, asking `Any?` and receiving a positive answer obligates the player to try a pawn capture next. If that attempt fails, the player may then try another move.

The question checks whether any of the player's visible pawns has a legal capture in the true position.

It does not reveal:

- which pawn can capture,
- which square contains the target,
- what piece would be captured,
- whether the target is a promoted pawn.

## What the opponent learns

After a normal non-capturing, non-checking move:

- the opponent learns only that a legal move was made,
- the opponent does not learn the piece, origin square, or destination square.

After a capture:

- both players learn the capture square,
- both players learn the captured unit's reserve identity,
- the capturer's reserve is updated publicly.

After a drop:

- both players see the dropping player's reserve decrease,
- the opponent learns the dropped piece type,
- the opponent does not learn the drop square,
- if the drop gives check, the referee announces the check type.

After promotion:

- the opponent is not told that promotion happened,
- the opponent is not told the promoted piece type.

## Source note

This page summarizes original-style CrazyKrieg, also called Crazyhouse Kriegspiel, using the historical [Chess Variant Pages Crazyhouse Kriegspiel entry](https://www.chessvariants.org/incinf.dir/crazyhousekriegspiel.html), standard [Kriegspiel referee-announcement rules](https://en.wikipedia.org/wiki/Kriegspiel_%28chess%29), and standard [Crazyhouse reserve/drop rules](https://lichess.org/variant/crazyhouse) as references.
