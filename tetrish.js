function Well() {

    var WellData   = [];

    var WellX      = 10;
    var WellY      = 20;

    var Refresh  = function() {

    }

    function id_for(x,y) {
      return 'cell_' + x.toString() + '_' + y.toString();
    }

    function GenerateBoard(x,y,hasWalls) {

      var board = document.getElementById('well');
      board.innerHTML = '';

      var isLeftWall = function(xi, yi ) {
          //console.log(")
          return xi == 0;
      }

      var isRightWall = function(xi, yi ) {
        return xi == x-1;
      }

      var isBottomWall = function(xi, yi ) {
        return yi == y-1;
      }

      var makeCell = function (tr, whichRow, whichColumn, iHasWalls, iIsTopWall) {
        var td = document.createElement('td');
        td.innerHTML = '';
        td.id = id_for(whichColumn, whichRow);

        if( iHasWalls ) {
            td.className = "wall";
        } else if( iIsTopWall ) {
            td.className = "topwall";
        }
        tr.appendChild(td);
      }

      var makeRow = function(whichRow, iHasWalls, isFloor) {
        var tr = document.createElement('tr');

        var xi;
        for( xi = 0; xi < x; ++xi ) {
            makeCell( tr, whichRow, xi,
                ( isLeftWall(xi,whichRow) || isRightWall(xi,whichRow) || isBottomWall(xi,whichRow)),
                ( whichRow == 0 ) ? true : false);
        }
        board.appendChild(tr);
      }

      var yi;
      for (yi = 0; yi < y-1; ++yi ) {
        makeRow(yi, hasWalls, false);
      }

      makeRow(yi, hasWalls, true);

    }

    return {
      set_size: function(X,Y) {

        WellX = X;
        WellY = Y;

        Refresh();

      },

      refresh: function() { Refresh(); },
      generateBoard: function() { GenerateBoard(WellX, WellY, true); }

    };
}

(function() {
  var requestAnimationFrame    = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();





var clockTicks = 0;

function handleFrame() {
  document.getElementById('timer').innerHTML = (++clockTicks).toString();
  return true;
}




function RAF() {
    if (handleFrame()) {
       window.requestAnimationFrame(function() { RAF(); });
    }
}

var well = new Well();

function startup() {

    well.generateBoard();
    well.refresh();
    RAF();

}
