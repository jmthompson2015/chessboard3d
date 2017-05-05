define(["chessboard3"], function(chessboard3d)
{
   "use strict";
   QUnit.module("chessboard3d");

   var fenChess = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
   var fen_6x10x1 = "rnbqkb/pppppp/6/6/6/6/6/6/PPPPPP/RNBQKB";
   var fen_10x6x1 = "rnbqkbnrnr/pppppppppp/82/82/PPPPPPPPPP/RNBQKBNRNR";

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

   QUnit.test("fileCount Chess", function(assert)
   {
      // Setup.

      // Run.
      var result = window.ChessBoard3.fileCount(fenChess);

      // Verify.
      assert.ok(result);
      assert.equal(result, 8);
   });

   QUnit.test("fileCount 6x10x1", function(assert)
   {
      // Setup.

      // Run.
      var result = window.ChessBoard3.fileCount(fen_6x10x1);

      // Verify.
      assert.ok(result);
      assert.equal(result, 6);
   });

   QUnit.test("fileCount 10x6x1", function(assert)
   {
      // Setup.

      // Run.
      var result = window.ChessBoard3.fileCount(fen_10x6x1);

      // Verify.
      assert.ok(result);
      assert.equal(result, 10);
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

   QUnit.test("rankCount Chess", function(assert)
   {
      // Setup.

      // Run.
      var result = window.ChessBoard3.rankCount(fenChess);

      // Verify.
      assert.ok(result);
      assert.equal(result, 8);
   });

   QUnit.test("rankCount 6x10x1", function(assert)
   {
      // Setup.

      // Run.
      var result = window.ChessBoard3.rankCount(fen_6x10x1);

      // Verify.
      assert.ok(result);
      assert.equal(result, 10);
   });

   QUnit.test("rankCount 10x6x1", function(assert)
   {
      // Setup.

      // Run.
      var result = window.ChessBoard3.rankCount(fen_10x6x1);

      // Verify.
      assert.ok(result);
      assert.equal(result, 6);
   });
});
