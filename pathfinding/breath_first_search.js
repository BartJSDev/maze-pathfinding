function BreadthFirstSearch() {

    if (current === undefined) {

        current = end
        path.push(current)

    }

    var next = GetnextCell(current.row, current.col, grid)

    if (next) {

        path.push(GetCell(next.row, next.col, grid))
        current = next

    }else{

        console.log("path is found")
        return
    }

    setTimeout(BreadthFirstSearch, 5)

}

function floodfill(row, col, array) {

    start.value = 1

    if (GetCell(row, col, array) === end) {

        console.log("floodfill done")
        flood = false
        BreadthFirstSearch()
        return
    }

    function run() {

        if (GetCell(row + 1, col, array)) {

            if (GetCell(row + 1, col, array).value === 0) {

                GetCell(row + 1, col, array).value = GetCell(row, col, array).value + 1

                if (flood) {

                    floodfill(row + 1, col, array)

                }

            }
        }

        if (GetCell(row - 1, col, array)) {

            if (GetCell(row - 1, col, array).value === 0) {

                GetCell(row - 1, col, array).value = GetCell(row, col, array).value + 1

                if (flood) {

                    floodfill(row - 1, col, array)
                }


            }
        }

        if (GetCell(row, col + 1, array)) {

            if (GetCell(row, col + 1, array).value === 0) {

                GetCell(row, col + 1, array).value = GetCell(row, col, array).value + 1

                if (flood) {

                    floodfill(row, col + 1, array)
                }

            }
        }

        if (GetCell(row, col - 1, array)) {

            if (GetCell(row, col - 1, array).value === 0) {

                GetCell(row, col - 1, array).value = GetCell(row, col, array).value + 1

                if (flood) {

                    floodfill(row, col - 1, array)
                }

            }
        }
    }

    setTimeout(run, 5)
}

function GetnextCell(row, col, array) {

    if (GetCell(row + 1, col, array)) {

        if (GetCell(row + 1, col, array).value === GetCell(row, col, array).value - 1) {

            return GetCell(row + 1, col, array)
        }
    }

    if (GetCell(row - 1, col, array)) {

        if (GetCell(row - 1, col, array).value === GetCell(row, col, array).value - 1) {

            return GetCell(row - 1, col, array)

        }
    }

    if (GetCell(row, col + 1, array)) {

        if (GetCell(row, col + 1, array).value === GetCell(row, col, array).value - 1) {

            return GetCell(row, col + 1, array)
        }
    }

    if (GetCell(row, col - 1, array)) {

        if (GetCell(row, col - 1, array).value === GetCell(row, col, array).value - 1) {

            return GetCell(row, col - 1, array)

        }
    }

}