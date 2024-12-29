function make2DArray(rows, cols) {

    var arr = []

    for(var i = 0 ; i < rows * cols ; i++){

        var r = Math.floor(i / cols) 
        var c = i - (r * cols)
        arr.push({row:r , col:c , value:0 , isOpen:false , visited:false})
    }

    return arr
}

function show2DArray(rows , cols , array){

    var myArray = []

    for(var i = 0 ; i < rows ; i++){

        myArray.push([])

       for(var j = 0; j < cols ; j++){

            myArray[i][j] = GetCell(i , j , array).value
       }

    }

    return myArray
}

function GetCell(row , col , array){

    for(var i = 0 ; i < array.length ; i++){

        if(array[i].row === row && array[i].col === col){

            return array[i]
        }
    }
}

function oddNumber(start , end){

    var numbers = []

    for(var i = start + 1 ; i < end ; i++){

        if(i % 2 > 0){

            numbers.push(i)
        }
    }

    return numbers[Math.floor(Math.random() * numbers.length)]
}

function evenNumber(start , end){

    var numbers = []

    for(var i = start + 1 ; i < end ; i++){

        if(i % 2 === 0){

            numbers.push(i)
        }
    }

    return numbers[Math.floor(Math.random() * numbers.length)]
}

function PickrandomCell(){

    do{

        var r = Math.floor(Math.random() * rows)
        var c = Math.floor(Math.random() * cols)

    }while(r % 2 === 0 || c % 2 === 0)


    return GetCell(r,c,grid)

}



