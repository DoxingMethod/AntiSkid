$(document).keydown(function(event){
    if(event.keyCode==123){
        return false;
    }
    else if (event.ctrlKey && event.shiftKey && event.keyCode==73){        
             return false;
    }
});

$(document).on("contextmenu",function(e){        
   e.preventDefault();
});