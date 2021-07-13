(function(){
    function Snake(){
        this.width = 20;
        this.height = 20;
        this.position = "absolute";
        this.body = [
            {x: 3, y: 2, color: "red"},
            {x: 2, y: 2, color: "blue"},
            {x: 1, y: 2, color: "blue"}
        ];
        this.direction = "right";
        this.body_ele=[];
    }
    Snake.prototype.render = function(bg){
        //默认初始为三个小方块
        let s = this.body_ele;
        for(let i=0;i<this.body.length;i++){
            s[i] = document.createElement("div");
            s[i].style.width = this.width + "px";
            s[i].style.height = this.height + "px";
            s[i].style.backgroundColor = this.body[i].color;
            s[i].style.left = this.body[i].x * this.width + "px";
            s[i].style.top = this.body[i].y * this.height + "px";
            s[i].style.position = this.position;
            bg.appendChild(s[i]);
        }
    }

    Snake.prototype.move = function(bg){
        //后面的身体块满足：下一块占据上一块位置的规律
        for(let i=this.body.length-1;i>0;i--){
            this.body[i].x = this.body[i-1].x;
            this.body[i].y = this.body[i-1].y;
        }

        switch(this.direction){
            case "left": this.body[0].x--; break;
            case "right": this.body[0].x++; break;
            case "up": this.body[0].y--; break;
            case "down": this.body[0].y++;
        }
    }
    
    Snake.prototype.remove = function(bg){
        for(let i = this.body_ele.length-1; i >= 0; i--){
            bg.removeChild(this.body_ele[i]);
        }
        this.body_ele=[];
    }
        
    Snake.prototype.grow = function(){
        //增加一节身子
        var len = this.body.length;
        this.body[len]={};
        this.body[len].x = this.body[len-1].x;
        this.body[len].y = this.body[len-1].y;
        this.body[len].color = this.body[len-1].color;
    }

    window.Snake = Snake;
})();