define(["chessboard3"], function(chessboard3d)
{
   "use strict";
   QUnit.module("chessboard3d");

   var fenChess = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";

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
});
