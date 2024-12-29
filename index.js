var canvas = document.querySelector("canvas")
var c = canvas.getContext("2d")

canvas.width = innerWidth * devicePixelRatio
canvas.height = innerHeight * devicePixelRatio

$("canvas").css("width", 100 + "%")
$("canvas").css("height", 100 + "%")
$("body").css("backgroundColor", "black")
$("body").css("margin", 0)
$("body").css("overflow", "hidden")

var rows = 29
var cols = 49
var size = 40
var grid = make2DArray(rows, cols)


//variables recursive division maze generator
var rowcount = 0
var colcount = 0

//variables breadth first search
var current = undefined
var flood = true
var path = []
var start = GetCell(1 , 1 , grid)
var end = GetCell(rows - 2 , cols - 2 , grid)

//variables depth first search maze generator
var currentcell = undefined
var stack = []

Render()


function Render() {

    c.clearRect(0, 0, canvas.width, canvas.height)

    DrawGrid()

    requestAnimationFrame(Render)
}

function DrawGrid() {

    //0     ==> open
    //"W"   ==> wall
    //"p"   ==> path

    //draw path
    for (var i = 0; i < path.length; i++) {

        c.beginPath()
        c.fillStyle = "rgba(30,144,255,1)"
        c.arc(path[i].col * size + size / 2, path[i].row * size + size / 2, size / 2, 0, 2 * Math.PI, true)
        c.fill()
        c.closePath()
    }


    if(currentcell){

        c.beginPath()
        c.fillStyle = "lime"
        c.rect(currentcell.col * size , currentcell.row * size , size , size)
        c.fill()
        c.closePath()
    }

    //draw grid
    for (var i = 0; i < grid.length; i++) {

        c.beginPath()
        c.strokeStyle = "grey"
        c.lineWidth = .2

        if (grid[i].value === 0) {

            //c.fillStyle = "rgba(0,0,0,1)"
            c.rect(grid[i].col * size, grid[i].row * size, size, size)
            c.stroke()
            //c.fill()
        }

        if (grid[i].value === "w") {

            c.fillStyle = "rgba(200,200,200,.3)"
            c.rect(grid[i].col * size, grid[i].row * size, size, size)
            c.stroke()
            c.fill()
        }

        if (grid[i].value > 0) {

            c.fillStyle = "rgba(255,255,255,1)"
            c.font = size / 3 + "px Roboto"
            c.textAlign = "center"
            c.textBaseline = "middle"
            c.fillText(grid[i].value, grid[i].col * size + size / 2, grid[i].row * size + size / 2)
        }

        c.closePath()


    }

 

}


