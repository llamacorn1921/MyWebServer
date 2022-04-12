define(['jquery'], function ($) {
    $(function () {
        let audio = new Audio('lib/thomas.mp3');
        

        var promise = document.querySelector('audio').play();

        if (promise !== undefined) {
            promise
                .catch((error) => {
                    // Auto-play was prevented
                    // Show a UI element to let the user manually start playback
                    console.log(error)
                })
                .then(() => {
                    // Auto-play started

                });
        }
    });
});
