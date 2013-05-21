
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

      var makeCell = function (tr, iHasWalls, whichRow, whichColumn ) {
        var td = document.createElement('td');
        td.innerHTML = 'testicles';
        if(  )
        tr.appendChild(td);
      }
      var makeRow = function(whichRow, iHasWalls, isFloor) {
        var tr = document.createElement('tr');
        
        var xi;
        for( xi = 0; xi < x; ++xi ) {
            makeCell( tr, iHasWalls, whichRow, xi );
        }
        board.appendChild(tr);
      }

      var yi;
      for (yi=0; yi<y; ++yi ) {
        makeRow(yi, hasWalls, false);
      }

      makeRow(yi+1, hasWalls, true);

    }

    return {
      set_size: function(X,Y) {

        WellX = X;
        WellY = Y;

        Refresh();

      },

      refresh: function() { Refresh(); },
      generateBoard: function() { GenerateBoard(WellX); }

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
