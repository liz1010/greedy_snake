(function(){
    var helper = {
        getRandom: function(left, right){
            left=Math.ceil(left);
            right=Math.floor(right);
            return Math.floor(Math.random() * (right-left) + left);
        }

    }
    window.helper=helper;
}) ();