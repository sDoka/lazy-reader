var scrollId;
var yOffsetStep = 1;
var timedelay = 10;
var stateEnabled = false;
var currentHeight = 0;

document.addEventListener('keypress', (event) => {
    if (event.code === 'Space') {
        event.preventDefault();
        if (!stateEnabled) {
            stateEnabled = true;
            scrollId = setInterval(function() {
                currentHeight = window.pageYOffset + window.innerHeight;
                if (document.body.scrollHeight - currentHeight > 1) {
                    window.scrollBy(0, yOffsetStep);
                } else {
                    clearInterval(scrollId);
                    stateEnabled = false;
                    console.log('Current height: ' + currentHeight + ' reached the document.body.scrollHeight: ' + document.body.scrollHeight);
                }
            }, timedelay);
        } else {
            clearInterval(scrollId);
            stateEnabled = false;
        }
        console.log('Space key pressed. State is ' + stateEnabled);
    }
}, false);

document.addEventListener('keypress', (event) => {
    console.log("Key pressed: " + event.code);
    if (!stateEnabled) { return; }

    if (event.code === 'Digit1') {
        yOffsetStep = 1;
    } else if (event.code === 'Digit2') {
        yOffsetStep = 2;
    } else if (event.code === 'Digit3') {
        yOffsetStep = 3;
    }

    console.log("Scroll speed set to " + yOffsetStep);
}, false);


