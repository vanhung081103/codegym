let img = document.querySelector('#tank');
    let boom = document.querySelector('#boom');
    let flower = document.querySelector('#flower');
    let result = document.querySelector('#result');
    function start() {
        random();
        result.innerHTML = ``;
    }
    function random() {
        boom.style.top =  Math.floor(Math.random()*170) + "px";
        boom.style.left = Math.floor(Math.random()*170) + "px";
        img.style.top = Math.floor(Math.random()*170) + "px";
        img.style.left = Math.floor(Math.random()*170) + "px";
        flower.style.top = Math.floor(Math.random()*170) + "px";
        flower.style.left = Math.floor(Math.random()*170) + "px";
        boom.src = "./image/boom.png"
    }
    function moveUp() {
        let top = parseInt(img.style.top);
        img.style.top = (top - 10) +"px";
        explosion();
    }
    function moveDown() {
        let top = parseInt(img.style.top);
        img.style.top = (top + 10) +"px";
        explosion();
    }
    function moveLeft() {
        let left = parseInt(img.style.left);
        img.style.left = (left - 10) +"px";
        explosion();
    }
    function moveRight() {
        let left = parseInt(img.style.left);
        img.style.left = (left + 10) +"px";
        explosion();
    }

    function explosion() {
        let topImg = parseInt(img.style.top);
        let leftImg = parseInt(img.style.left);
        let widthImg = parseInt(img.style.width);
        let heightImg = parseInt(img.style.height);
    
        let topBoom = parseInt(boom.style.top);
        let leftBoom = parseInt(boom.style.left);
        let widthBoom = parseInt(boom.style.width);
        let heightBoom = parseInt(boom.style.height);

        let topFlower = parseInt(flower.style.top);
        let leftFlower = parseInt(flower.style.left);
        let widthFlower = parseInt(flower.style.width);
        let heightFlower = parseInt(flower.style.height);

        let isExplosion = false;
        let isWiner = false;
        // Kiểm tra xem có đụng bom chưa?
        if((topImg + heightImg) > (topBoom) && (topBoom + heightBoom) > topImg ) {
            if((leftImg + widthImg) > leftBoom && (leftBoom + widthBoom) > leftImg ) {
                isExplosion = true;
            }
        }
        // KiểM tra xem có đụng bông hoa chưa?
        if((topImg + heightImg) > (topFlower) && (topFlower + heightFlower) > topImg ) {
            if((leftImg + widthImg) > leftFlower && (leftFlower + widthFlower) > leftImg ) {
                isWiner = true;
            }
        }

        if(isExplosion == true) {
            boom.setAttribute("src", "boom.png")
            setTimeout(function() {
                random();
            },1000)
        }
        if(isWiner == true) {
            result.innerHTML = `<h1>Chúc mừng bạn đã chiến thắng</h1>`
        }
    }