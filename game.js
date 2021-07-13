(function(){
    function Game(bg){
        this.food = new Food();
        this.snake = new Snake();
        this.bg = bg;
    }

    Game.prototype.start = function(){
        for(let i = 0 ; i< this.food.num; i++){
            this.food.render(this.bg);
        }
        this.snake.render(this.bg);
        this.runSnake();
        this.bindKey();
    }

    Game.prototype.runSnake = function(){
        var that = this;
        var timer = setInterval(function(){
            that.snake.move(that.bg);
            that.snake.remove(that.bg);
            that.snake.render(that.bg);
            //whether snake hit the border
            //判断边界条件
            var max_x = that.bg.offsetWidth/that.snake.width - 1;
            var max_y = that.bg.offsetHeight/that.snake.width - 1;
            var head_x = that.snake.body[0].x;
            var head_y = that.snake.body[0].y;
            if(head_x > max_x || head_x < 0 || head_y > max_y || head_y < 0){
                clearInterval(timer);
                alert("Game over!");
            }
            //判断是否吃到食物, 吃到则增加一节
            for(let i = 0; i < that.food.num; i++){
                if(head_x === that.food.ele[i].offsetLeft/that.food.width && head_y === that.food.ele[i].offsetTop/that.food.height){
                    that.snake.grow();
                    that.food.remove(that.bg, i);
                    that.food.render(that.bg);
                } 
            }
            
        }, 150);
    }

   Game.prototype.bindKey = function(){
        var that = this;
        document.onkeydown = function(e){
            switch(e.keyCode){
                case 37:
                    that.snake.direction = "left"; break;
                case 38:
                    that.snake.direction = "up"; break;
                case 39:
                    that.snake.direction = "right"; break;
                case 40:
                    that.snake.direction = "down";
            }
        }
    }
    window.Game = Game;
})();

