$(document).ready(function() {
    /* STEP 6a: Capture the keydown event for moving the sprite */
    document.addEventListener('keydown', (event) => {
        var keyCode = event.code;
        console.log(keyCode);

        /* STEP 8a: Build out the cases for each of the arrow keys */
        switch(keyCode) {
            case 'ArrowUp':
                document.getElementById('dude').className = "up";
                break;
            case 'ArrowDown':
                document.getElementById('dude').className = "down";
                break;
            case 'ArrowLeft':
                document.getElementById('dude').className = "left";
                break;
            case 'ArrowRight':
                document.getElementById('dude').className = "right";
                break;
        }

        /* STEP 8b: Return false so keys don't return anything */
        return false;
    });

    document.addEventListener('keyup', () => {
        // Reset the class back to "go" when key is released
        document.getElementById('dude').className = 'go';
    });

    /* STEP 6b: Close out the keydown event anonymous function */
    /* STEP 7a: Capture the keyup event to stop the sprite */
    /* STEP 7b: Close out the keyup event anonymous function */
});
