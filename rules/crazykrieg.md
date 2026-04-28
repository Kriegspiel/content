---
title: "CrazyKrieg / Crazyhouse Kriegspiel rules"
slug: "crazykrieg"
summary: "Crazyhouse mixed with Kriegspiel: hidden board, public reserves, typed captures, and secret drop squares."
publishedAt: "2026-04-28"
updatedAt: "2026-04-28"
author: "Kriegspiel Team"
tags: ["rules", "crazykrieg", "crazyhouse"]
draft: false
lifecycle: published
version: "1.0.0"
revision: "rules-crazykrieg-r1"
lastReviewedAt: "2026-04-28"
---

CrazyKrieg, also known as Crazyhouse Kriegspiel, combines Kriegspiel with Crazyhouse. Each player sees only their own pieces, while the referee or server sees the full board. On your turn, you may attempt either a normal move or a drop from your reserve. Illegal attempts are rejected and you must try again; a legal attempt becomes your move.

Captured pieces change color and enter the capturer's public reserve. Both players can see both reserves. On a later turn, a player may drop a reserve piece onto an empty square instead of moving a board piece. Pawns may not be dropped on the 1st or 8th rank. Drops may give check or checkmate.

When a capture occurs, the referee announces the capture square and the identity of the unit that enters reserve: pawn, knight, bishop, rook, or queen. If a promoted pawn is captured, it is announced as a pawn and enters reserve as a pawn, even if it was moving as a queen, rook, bishop, or knight on the board.

Promotions are not announced. Drop squares are not announced. Check is announced only by direction or knight-check, as in standard Kriegspiel. Checkmate, stalemate, repetition, and other draw results are announced by the referee or server.

## Basic idea

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

## Making a move

On a player's turn, the player may attempt either:

1. a normal chess move by one of their visible pieces, or
2. a Crazyhouse drop from their reserve.

If the attempt is legal in the true position, it becomes the move. If it is illegal, the referee rejects it and the player must try again. Illegal attempts do not end the turn.

Normal chess moves may fail because of hidden enemy pieces. For example:

- a rook, bishop, or queen may be blocked by an invisible enemy piece,
- a pawn advance may fail because the destination square is secretly occupied,
- a king move may fail because the destination square is secretly attacked,
- castling may fail because the king is in check, passes through check, lands in check, or because the path is not truly clear.

If the attempted move is illegal only because of the true hidden position, the referee says `No`.

If the attempted move is impossible regardless of hidden information, the referee may say `Impossible`, `Hell no`, or `Nonsense`.

Illegal attempts should be private. If White tries an illegal move, only White receives the rejection. Black should not learn that White attempted anything until a legal move is completed.

## Reserves

Both players' reserves are public information.

When a piece is captured, it changes color and enters the capturing player's reserve. Because reserves are public, both players know how many pawns, knights, bishops, rooks, and queens each side has available to drop.

The reserve does not reveal where dropped pieces are placed. If White drops a knight, Black knows that White's reserve lost one knight, but Black does not know the square unless the drop gives check, checkmate, or later affects another announcement.

## Drops

Instead of moving a piece on the board, a player may drop a piece from their reserve onto an empty square.

A drop attempt consists of:

- the piece type being dropped,
- the destination square.

Example:

```text
N@f5
```

The drop is legal if:

- the player has that piece type in reserve,
- the destination square is empty in the true position,
- the drop does not violate pawn-drop restrictions,
- the move leaves the player's own king safe,
- if the player is in check, the drop legally gets out of check.

A legal drop becomes the move. The piece appears on the referee's board and on the dropping player's own board. The opponent does not see the square.

A drop cannot capture. Crazyhouse drops are made only onto empty squares.

## Pawn drops

Pawns may be dropped on empty squares, but not on the 1st or 8th rank.

These are illegal for both players:

- dropping a pawn on rank 1,
- dropping a pawn on rank 8.

Pawn drops may give check or checkmate.

## Captures

When a capture occurs, the referee announces:

1. the capture square, and
2. the reserve identity of the captured unit.

Recommended announcements:

```text
Pawn captured on e5.
Knight captured on c3.
Bishop captured on g7.
Rook captured on a8.
Queen captured on d4.
```

The captured unit is removed from its owner's board and added to the capturer's reserve.

For clarity, use this rule:

> When a capture occurs, the referee announces the identity of the piece that enters the capturer's reserve. A promoted pawn is announced as a pawn, because it enters reserve as a pawn.

## Promoted pawns

Promotion works as in chess: when a pawn reaches the last rank, it promotes to a queen, rook, bishop, or knight.

Promotion is not announced:

- the promoting player chooses the promotion piece privately,
- the promoted piece appears on the promoting player's own board,
- the opponent is not told that promotion occurred,
- the opponent is not told the promoted piece type.

If a promoted pawn is later captured, it enters the capturer's reserve as a pawn, not as the piece it was promoted to.

So the referee announces the reserve identity:

```text
Pawn captured on e8.
```

Do not announce `Queen captured on e8` unless the captured unit was an original queen, not a promoted pawn.

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

The same applies to checks by dropped pieces:

- a dropped knight giving check is announced as `Check by a knight`,
- a dropped rook giving file-check is announced as `Check on the vertical`,
- a dropped bishop or queen giving diagonal check is announced as long-diagonal or short-diagonal check.

The square of the checking piece is not announced.

## Checkmate and draws

A player is checkmated if their king is in check and they have no legal response.

Legal responses include:

- moving the king,
- capturing the checking piece,
- blocking a line-check with a normal move,
- blocking a line-check with a drop,
- any other legal Crazyhouse defense.

A position that would be checkmate in ordinary chess may not be checkmate in CrazyKrieg if the defender can block with a reserve drop. A legal drop may also deliver checkmate.

Stalemate occurs if the player to move is not in check and has no legal move and no legal drop.

Draw rules may include:

- stalemate,
- threefold repetition,
- fifty-move rule,
- insufficient mating material, evaluated using the true board and reserves.

For CrazyKrieg, insufficient material must account for reserves, because a player with pieces in reserve may still have mating chances.

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

## En passant

En passant is legal if it is legal in the true position.

If an en passant capture is made, the referee should announce that it was en passant.

Recommended announcement:

```text
Pawn captured en passant on f6.
```

The captured pawn enters the capturer's reserve as a pawn.

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

This page summarizes original-style CrazyKrieg, also called Crazyhouse Kriegspiel, and uses the historical [Chess Variant Pages Crazyhouse Kriegspiel entry](https://ftp.chessvariants.com/incinf.dir/crazyhousekriegspiel.html), standard [Kriegspiel referee-announcement rules](https://en.wikipedia.org/wiki/Kriegspiel_%28chess%29), and standard [Crazyhouse reserve/drop rules](https://lichess.org/variant/crazyhouse) as references.
