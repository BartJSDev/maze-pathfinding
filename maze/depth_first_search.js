function Depth_first_search(){

    if(!currentcell){

        currentcell = PickrandomCell()
    }

    var next = GetAdjacentcell(currentcell.row, currentcell.col)

    if(next){

        next.visited = true
        stack.push(next)
        CreateOpening(currentcell , next)
        CreateCellwalls(currentcell.row , currentcell.col)
        CreateCellwalls(next.row , next.col)
        currentcell = next

    }else{

        if(stack.length > 0){

            currentcell = stack.pop()

        }else{

            console.log("we are done")
            currentcell = undefined
            floodfill(start.row,start.col,grid)
            return
        }
    }

    setTimeout(Depth_first_search , 10)
   
}

function CreateOpening(cellA , cellB){

    if(cellB.row === cellA.row - 2 && cellA.col === cellB.col){

        GetCell(cellA.row - 1 , cellB.col , grid).isOpen = true 
        GetCell(cellA.row - 1 , cellB.col , grid).value = 0
    }

    if(cellB.row === cellA.row + 2 && cellA.col === cellB.col){

        GetCell(cellA.row + 1 , cellB.col , grid).isOpen = true 
        GetCell(cellA.row + 1 , cellB.col , grid).value = 0
        
    }

    if(cellB.row === cellA.row && cellB.col === cellA.col + 2){

        GetCell(cellA.row , cellB.col - 1 , grid).isOpen = true 
        GetCell(cellA.row , cellB.col - 1 , grid).value = 0
        
    }

    if(cellB.row === cellA.row && cellB.col === cellA.col - 2){

        GetCell(cellA.row , cellB.col + 1 , grid).isOpen = true 
        GetCell(cellA.row , cellB.col + 1 , grid).value = 0
        
    }
}

function CreateCellwalls(row , col){

    for(var i = -1 ; i < 2 ; i++){

        for(var j = -1 ; j < 2 ; j++){

            if(i !== 0 || j !== 0){

                if(GetCell(row + i , col + j , grid) ){

                    if(!GetCell(row + i , col + j , grid).isOpen){

                         GetCell(row + i , col + j , grid).value = "w"
                    }
                   
                }
            }
        }
    }
}

function GetAdjacentcell(row , col){

    var adjacentcells = []

    for(var i = -2 ; i < 3 ; i+=2){

        for(var j = -2 ; j < 3 ; j+=2){

            if( (i === -2 && j === 0) || (i === 0 && j === -2) || (i === 0 && j === 2) || (i === 2 && j === 0)){

                if(GetCell(row + i , col + j , grid) && !GetCell(row + i , col + j , grid).visited){

                    adjacentcells.push(GetCell(row + i , col + j , grid))
                }
            }
        }
    }

    return adjacentcells[Math.floor(Math.random() * adjacentcells.length)]
}

Depth_first_search()