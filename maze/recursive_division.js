
function DrawOuterwalls() {


    GetCell(rowcount, colcount, grid).value = "w"

    //top wall
    if (colcount < cols - 1 && rowcount === 0) {

        colcount++

        //right wall
    } else if (colcount === cols - 1 && rowcount < rows - 1) {

        rowcount++

        //bottom wall
    } else if (rowcount === rows - 1 && colcount > 0) {

        colcount--

        //left wall
    } else if (rowcount > 0 && colcount === 0) {

        rowcount--
    }

    //finish on startpoint 
    if (rowcount === 0 && colcount === 0) {

        divide(true, 0, cols, 0, rows)
        return
    }

    setTimeout(DrawOuterwalls, 10)
}

function DrawHorizontalWall(start, end, row) {

    var open = oddNumber(start, end)

    for (var i = start; i < end; i++) {

        if (i !== open) {

            GetCell(row, i, grid).value = "w"
        }
    }
}

function DrawVerticalWall(start, end, col) {

    var open = oddNumber(start, end)

    for (var i = start; i < end; i++) {

        if (i !== open) {

            GetCell(i, col, grid).value = "w"
        }
    }
}

function divide(horizontal, startx, endx, starty, endy) {

    function run() {

        if (horizontal) {

            if (endx - startx < 3) {

                return
            }

            var row = evenNumber(starty, endy)

            DrawHorizontalWall(startx, endx, row)

            divide(!horizontal, startx, endx, starty, row)
            divide(!horizontal, startx, endx, row, endy)

        } else {

            if (endy - starty < 3) {

               
                return
            }


            var col = evenNumber(startx, endx)

            DrawVerticalWall(starty, endy, col)

            divide(!horizontal, col, endx, starty, endy)
            divide(!horizontal, startx, col, starty, endy)

        }

    }

    setTimeout(run, 100)

}

