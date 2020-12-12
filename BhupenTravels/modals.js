window.onload = function(){ 

    // Opens modals
    var cityDiv = document.getElementsByClassName('city-div');
    for (var i = 0; i < cityDiv.length; i++) {
        var thisCityDiv = cityDiv[i];
        thisCityDiv.onclick = function() {
            var modal = document.getElementById(this.dataset.modal);
            $(modal).show()
        }, false;

    };
    
    
    // Closes modals when clicking outside of it
    window.onclick = function(event) {
        if (event.target.className == 'modal') {
            $('.modal').hide()
        };
    };

    // Closes modals when clicking on close button
    var closeModal = document.getElementsByClassName('modal-close');
    for (var i = 0; i < closeModal.length; i++) {
        closeModal[i].onclick = function() {
            $('.modal').hide()
        };
    };

    // Closes modals when the contact button is clicked
    var jumpContact = document.getElementsByClassName('modal-btn');
    for (var i = 0; i < jumpContact.length; i++) {
        jumpContact[i].onclick = function() {
            $('.modal').hide()
        };
    };

    // Closes navbar burger icon when an item is clicked. Code kindly provided by fellow student Kitty McDonagh.
    $('.navbar-nav>li>a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

};