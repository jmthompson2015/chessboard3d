define(["chessboard3"], function(chessboard3d)
{
   "use strict";
   QUnit.module("chessboard3d");

   var fenChess = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
   var fen_6x10x1 = "rnbqkb/pppppp/6/6/6/6/6/6/PPPPPP/RNBQKB";
   var fen_10x6x1 = "rnbqkbnrnr/pppppppppp/82/82/PPPPPPPPPP/RNBQKBNRNR";
   var fenAliceChess = "8/8/8/8/8/8/8/8|rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
   var fenRaumschach = "rnknr/ppppp/5/5/5|buqbu/ppppp/5/5/5|5/5/5/5/5|5/5/5/PPPPP/BUQBU|5/5/5/PPPPP/RNKNR";
   var fenTetrachess = "rqkr/pppp/4/4|nbbn/pppp/4/4|4/4/PPPP/NBBN|4/4/PPPP/RQKR";

   QUnit.test("fenToObj() Chess", function(assert)
   {
      // Setup.

      // Run.
      var result = window.ChessBoard3.fenToObj(fenChess);

      // Verify.
      assert.ok(result);
      console.log("result = " + JSON.stringify(result));
      assert.equal(Object.keys(result).length, 32);
      assert.equal(result.a1, "wR");
      assert.equal(result.h8, "bR");
   });

   QUnit.test("fenToObj() 6x10x1", function(assert)
   {
      // Setup.

      // Run.
      var result = window.ChessBoard3.fenToObj(fen_6x10x1);

      // Verify.
      assert.ok(result);
      console.log("result = " + JSON.stringify(result));
      assert.equal(Object.keys(result).length, 24);
      assert.equal(result.a1, "wR");
      assert.equal(result.f9, "bP");
      assert.equal(result.fJ, "bB");
   });

   QUnit.test("fenToObj() 10x6x1", function(assert)
   {
      // Setup.

      // Run.
      var result = window.ChessBoard3.fenToObj(fen_10x6x1);

      // Verify.
      assert.ok(result);
      console.log("result = " + JSON.stringify(result));
      assert.equal(Object.keys(result).length, 40);
      assert.equal(result.a1, "wR");
      assert.equal(result.g1, "wN");
      assert.equal(result.h1, "wR");
      assert.equal(result.i1, "wN");
      assert.equal(result.j1, "wR");
      assert.equal(result.g6, "bN");
      assert.equal(result.h6, "bR");
      assert.equal(result.i6, "bN");
      assert.equal(result.j6, "bR");
   });

   QUnit.test("fenToObj() Alice Chess", function(assert)
   {
      // Setup.

      // Run.
      var result = window.ChessBoard3.fenToObj(fenAliceChess);

      // Verify.
      assert.ok(result);
      console.log("result = " + JSON.stringify(result));
      assert.equal(Object.keys(result).length, 32);
      assert.equal(result.a1A, "wR");
      assert.equal(result.h8A, "bR");
      assert.equal(result.a1B, undefined);
      assert.equal(result.h8B, undefined);
   });

   QUnit.test("fenToObj() Raumschach", function(assert)
   {
      // Setup.

      // Run.
      var result = window.ChessBoard3.fenToObj(fenRaumschach);

      // Verify.
      assert.ok(result);
      console.log("result = " + JSON.stringify(result));
      assert.equal(Object.keys(result).length, 40);
      assert.equal(result.a1A, "wR");
      assert.equal(result.e5E, "bR");
   });

   QUnit.test("fenToObj() Tetrachess", function(assert)
   {
      // Setup.

      // Run.
      var result = window.ChessBoard3.fenToObj(fenTetrachess);

      // Verify.
      assert.ok(result);
      console.log("result = " + JSON.stringify(result));
      assert.equal(Object.keys(result).length, 32);
      assert.equal(result.a1A, "wR");
      assert.equal(result.d4D, "bR");
   });

   QUnit.test("fileCount() Chess", function(assert)
   {
      // Setup.

      // Run.
      var result = window.ChessBoard3.fileCount(fenChess);

      // Verify.
      assert.ok(result);
      assert.equal(result, 8);
   });

   QUnit.test("fileCount() 6x10x1", function(assert)
   {
      // Setup.

      // Run.
      var result = window.ChessBoard3.fileCount(fen_6x10x1);

      // Verify.
      assert.ok(result);
      assert.equal(result, 6);
   });

   QUnit.test("fileCount() 10x6x1", function(assert)
   {
      // Setup.

      // Run.
      var result = window.ChessBoard3.fileCount(fen_10x6x1);

      // Verify.
      assert.ok(result);
      assert.equal(result, 10);
   });

   QUnit.test("fileCount() Alice Chess", function(assert)
   {
      // Setup.

      // Run.
      var result = window.ChessBoard3.fileCount(fenAliceChess);

      // Verify.
      assert.ok(result);
      assert.equal(result, 8);
   });

   QUnit.test("fileCount() Raumschach", function(assert)
   {
      // Setup.

      // Run.
      var result = window.ChessBoard3.fileCount(fenRaumschach);

      // Verify.
      assert.ok(result);
      assert.equal(result, 5);
   });

   QUnit.test("fileCount() Tetrachess", function(assert)
   {
      // Setup.

      // Run.
      var result = window.ChessBoard3.fileCount(fenTetrachess);

      // Verify.
      assert.ok(result);
      assert.equal(result, 4);
   });

   QUnit.test("levelCount() Chess", function(assert)
   {
      // Setup.

      // Run.
      var result = window.ChessBoard3.levelCount(fenChess);

      // Verify.
      assert.ok(result);
      assert.equal(result, 1);
   });

   QUnit.test("levelCount() 6x10x1", function(assert)
   {
      // Setup.

      // Run.
      var result = window.ChessBoard3.levelCount(fen_6x10x1);

      // Verify.
      assert.ok(result);
      assert.equal(result, 1);
   });

   QUnit.test("levelCount() 10x6x1", function(assert)
   {
      // Setup.

      // Run.
      var result = window.ChessBoard3.levelCount(fen_10x6x1);

      // Verify.
      assert.ok(result);
      assert.equal(result, 1);
   });

   QUnit.test("levelCount() Alice Chess", function(assert)
   {
      // Setup.

      // Run.
      var result = window.ChessBoard3.levelCount(fenAliceChess);

      // Verify.
      assert.ok(result);
      assert.equal(result, 2);
   });

   QUnit.test("levelCount() Raumschach", function(assert)
   {
      // Setup.

      // Run.
      var result = window.ChessBoard3.levelCount(fenRaumschach);

      // Verify.
      assert.ok(result);
      assert.equal(result, 5);
   });

   QUnit.test("levelCount() Tetrachess", function(assert)
   {
      // Setup.

      // Run.
      var result = window.ChessBoard3.levelCount(fenTetrachess);

      // Verify.
      assert.ok(result);
      assert.equal(result, 4);
   });

   QUnit.test("objToFen() Chess", function(assert)
   {
      // Setup.
      var obj = window.ChessBoard3.fenToObj(fenChess);

      // Run.
      var result = window.ChessBoard3.objToFen(obj);

      // Verify.
      assert.ok(result);
      console.log("result = " + result);
      assert.equal(result, fenChess);
   });

   QUnit.test("objToFen() 6x10x1", function(assert)
   {
      // Setup.
      var obj = window.ChessBoard3.fenToObj(fen_6x10x1);

      // Run.
      var result = window.ChessBoard3.objToFen(obj);

      // Verify.
      assert.ok(result);
      console.log("result = " + result);
      assert.equal(result, fen_6x10x1);
   });

   QUnit.test("objToFen() 10x6x1", function(assert)
   {
      // Setup.
      var obj = window.ChessBoard3.fenToObj(fen_10x6x1);

      // Run.
      var result = window.ChessBoard3.objToFen(obj);

      // Verify.
      assert.ok(result);
      console.log("result = " + result);
      assert.equal(result, fen_10x6x1);
   });

   QUnit.test("objToFen() Alice Chess", function(assert)
   {
      // Setup.
      var obj = window.ChessBoard3.fenToObj(fenAliceChess);

      // Run.
      var result = window.ChessBoard3.objToFen(obj);

      // Verify.
      assert.ok(result);
      console.log("result = " + result);
      assert.equal(result, fenAliceChess);
   });

   QUnit.test("objToFen() Raumschach", function(assert)
   {
      // Setup.
      var obj = window.ChessBoard3.fenToObj(fenRaumschach);

      // Run.
      var result = window.ChessBoard3.objToFen(obj);

      // Verify.
      assert.ok(result);
      console.log("result = " + result);
      assert.equal(result, fenRaumschach);
   });

   QUnit.test("objToFen() Tetrachess", function(assert)
   {
      // Setup.
      var obj = window.ChessBoard3.fenToObj(fenTetrachess);

      // Run.
      var result = window.ChessBoard3.objToFen(obj);

      // Verify.
      assert.ok(result);
      console.log("result = " + result);
      assert.equal(result, fenTetrachess);
   });

   QUnit.test("rankCount() Chess", function(assert)
   {
      // Setup.

      // Run.
      var result = window.ChessBoard3.rankCount(fenChess);

      // Verify.
      assert.ok(result);
      assert.equal(result, 8);
   });

   QUnit.test("rankCount() 6x10x1", function(assert)
   {
      // Setup.

      // Run.
      var result = window.ChessBoard3.rankCount(fen_6x10x1);

      // Verify.
      assert.ok(result);
      assert.equal(result, 10);
   });

   QUnit.test("rankCount() 10x6x1", function(assert)
   {
      // Setup.

      // Run.
      var result = window.ChessBoard3.rankCount(fen_10x6x1);

      // Verify.
      assert.ok(result);
      assert.equal(result, 6);
   });

   QUnit.test("rankCount() Alice Chess", function(assert)
   {
      // Setup.

      // Run.
      var result = window.ChessBoard3.rankCount(fenAliceChess);

      // Verify.
      assert.ok(result);
      assert.equal(result, 8);
   });

   QUnit.test("rankCount() Raumschach", function(assert)
   {
      // Setup.

      // Run.
      var result = window.ChessBoard3.rankCount(fenRaumschach);

      // Verify.
      assert.ok(result);
      assert.equal(result, 5);
   });

   QUnit.test("rankCount() Tetrachess", function(assert)
   {
      // Setup.

      // Run.
      var result = window.ChessBoard3.rankCount(fenTetrachess);

      // Verify.
      assert.ok(result);
      assert.equal(result, 4);
   });

   QUnit.test("squareDistance() 2D", function(assert)
   {
      // Setup.

      // Run / Verify.
      assert.equal(window.ChessBoard3.squareDistance("a1", "a2"), 1);
      assert.equal(window.ChessBoard3.squareDistance("a1", "b1"), 1);
      assert.equal(window.ChessBoard3.squareDistance("a1", "b2"), 1);

      assert.equal(window.ChessBoard3.squareDistance("e4", "e8"), 4);
      assert.equal(window.ChessBoard3.squareDistance("d4", "h4"), 4);
      assert.equal(window.ChessBoard3.squareDistance("e4", "h8"), 4);

      assert.equal(window.ChessBoard3.squareDistance("h8", "h4"), 4);
      assert.equal(window.ChessBoard3.squareDistance("h8", "d8"), 4);
      assert.equal(window.ChessBoard3.squareDistance("h8", "e4"), 4);

      assert.equal(window.ChessBoard3.squareDistance("a1", "a8"), 7);
      assert.equal(window.ChessBoard3.squareDistance("a1", "h1"), 7);
      assert.equal(window.ChessBoard3.squareDistance("a1", "h8"), 7);
   });

   QUnit.test("squareDistance() 3D", function(assert)
   {
      // Setup.
      window.ChessBoard3.fenToObj(fenRaumschach);

      // Run / Verify.
      assert.equal(window.ChessBoard3.squareDistance("a1A", "a2A"), 1);
      assert.equal(window.ChessBoard3.squareDistance("a1A", "b1A"), 1);
      assert.equal(window.ChessBoard3.squareDistance("a1A", "b2A"), 1);
      assert.equal(window.ChessBoard3.squareDistance("a1A", "a1B"), 1);

      assert.equal(window.ChessBoard3.squareDistance("e4A", "e8A"), 4);
      assert.equal(window.ChessBoard3.squareDistance("d4A", "h4A"), 4);
      assert.equal(window.ChessBoard3.squareDistance("e4A", "h8A"), 4);
      assert.equal(window.ChessBoard3.squareDistance("e4A", "e4E"), 4);

      assert.equal(window.ChessBoard3.squareDistance("h8A", "h4A"), 4);
      assert.equal(window.ChessBoard3.squareDistance("h8A", "d8A"), 4);
      assert.equal(window.ChessBoard3.squareDistance("h8A", "e4A"), 4);
      assert.equal(window.ChessBoard3.squareDistance("h8A", "h8E"), 4);

      assert.equal(window.ChessBoard3.squareDistance("a1A", "a5A"), 4);
      assert.equal(window.ChessBoard3.squareDistance("a1A", "e1A"), 4);
      assert.equal(window.ChessBoard3.squareDistance("a1A", "e5A"), 4);
      assert.equal(window.ChessBoard3.squareDistance("a1A", "a5E"), 4);
   });

   QUnit.test("squareName() 2D", function(assert)
   {
      // Setup.

      // Run / Verify.
      assert.equal(window.ChessBoard3.squareName(0, 0), "a1");
      assert.equal(window.ChessBoard3.squareName(1, 0), "b1");
      assert.equal(window.ChessBoard3.squareName(0, 1), "a2");
      assert.equal(window.ChessBoard3.squareName(7, 7), "h8");
   });

   QUnit.test("squareName() 3D", function(assert)
   {
      // Setup.
      window.ChessBoard3.fenToObj(fenRaumschach);

      // Run / Verify.
      assert.equal(window.ChessBoard3.squareName(0, 0, 0), "a1A");
      assert.equal(window.ChessBoard3.squareName(1, 0, 0), "b1A");
      assert.equal(window.ChessBoard3.squareName(0, 1, 0), "a2A");
      assert.equal(window.ChessBoard3.squareName(0, 0, 1), "a1B");
      assert.equal(window.ChessBoard3.squareName(3, 3, 3), "d4D");
      assert.equal(window.ChessBoard3.squareName(4, 4, 4), "e5E");
   });
});
