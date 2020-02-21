let mousePosition = {x: 0, y: 0};

let drawID;

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min + 1)) + min;
};


window.addEventListener('mousemove', function(mouseMoveEvent){
    mousePosition.x = mouseMoveEvent.pageX;
    mousePosition.y = mouseMoveEvent.pageY;

    console.log('X', mousePosition.x)
    console.log('Y', mousePosition.y)
});

function draw(){
    return setInterval(function(){
        const container = document.getElementById('wrap');

        const color = `background:rgb(${getRandomNumber(
            0,
            255
        )},${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)});`;
        const ballSize = getRandomNumber(10, 80);
        const size = `height:${ballSize}px; width:${ballSize}px;`;
        const left = `left:${getRandomNumber(
            mousePosition.x - ballSize,
            mousePosition.x
        )}px;`;
        const top = `top:${getRandomNumber(
            mousePosition.y - ballSize,
            mousePosition.y
        )}px; `;
        const style = `${left}${top}${color}${size}`;

        const ball = document.createElement('div');
        ball.classList.add('ball');
        ball.style = style;

        ball.addEventListener('animationend', function(e){
            e.target.remove()
        })

        container.appendChild(ball);
        
    }, 50);  
}


window.addEventListener('mouseover', function(){
    drawID = draw();
});

window.addEventListener('mouseout', function(){
    clearInterval(drawID);
});