

for(i = 0; i < 100; i++){
    let squares = document.createElement("div")
    document.body.append(squares) 
    squares.style.width = "20px"
    squares.style.height = "20px"
    squares.style.float = "left"
    squares.style.margin = "3px"
    squares.style.backgroundColor = "#" + "ffff0" + [i]
}

