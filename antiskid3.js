document.onkeydown = function (e) {
    e = e || window.event;//Get event
    if (e.ctrlKey) {
        var c = e.which || e.keyCode;//Get key code
        switch (c) {
            case 83://Block Ctrl+S --Disable skidding.
            case 87://Block Ctrl+W --Not work in Chrome
			case 85://Block Ctrl+U --View source control.
                e.preventDefault();     
                e.stopPropagation();
            break;
        }
    }
};