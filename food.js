(function(){
function Food(){
    'use strict';
    this.width = 20;
    this.height = 20;
    this.color = "green";
    this.num = 3;
    this.ele = [];
}

Food.prototype.render = function(bg){
    this.x = helper.getRandom(0, bg.clientWidth/this.width - 1);
    this.y = helper.getRandom(0, bg.clientHeight/this.height - 1);
    var fo = document.createElement("div");
    this.ele.push(fo);
    fo.style.width = this.width + "px";
    fo.style.height = this.height + "px";
    fo.style.backgroundColor = this.color;
    fo.style.left = this.x * this.width + "px";
    fo.style.top = this.y * this.height + "px"; 
    fo.style.position = "absolute";
    bg.appendChild(fo); 
}

Food.prototype.remove = function(bg, index){
    bg.removeChild(this.ele[index]);
    this.ele.splice(index, 1);
}
    window.Food=Food;
})();