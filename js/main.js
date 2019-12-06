
(function() {
    window.onload = initUserActions;   

    function initUserActions() {
        
        var submit = $('#submit');
        var input = $('#email');
        var info = $('#infomess');

        input.on('focus', function(e) {
            e.preventDefault();e.stopImmediatePropagation();
            hideInfo();
        });

        submit.on('click', function(e) {
            e.preventDefault();e.stopImmediatePropagation();
            postEmail();
        });

        function postEmail() {
            submit.hide();
            input.hide();
            hideInfo();

            if(input && input.val() && input.val().match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) ) {
                $.post({
                    url: 'https://onxz3sa6zd.execute-api.us-east-1.amazonaws.com/dev/competitors',
                    data: {
                        email: input.val()
                    },
                    success: function(data) {
                        if(data && data.code) {
                            info.html('See you at WebSummit 2019!<br/>Your code is: <span id="code">'+ data.code +'</span>').addClass('isolated').show();
                        } else {
                            info.html('Something went wrong<br/>Please try again later').removeClass('isolated').show();
                            showInput();
                        }
                    },
                    error: function(e) {
                        info.html('Something went wrong<br/>Please try again later').removeClass('isolated').show();
                        showInput();
                    }
                });
            } else {
                info.html('Please enter a valid email').removeClass('isolated').show();
                showInput();
            }
        }

        function showInput() {
            submit.show();
            input.show();
        }

        function hideInfo() {
            info.empty().hide();
        }
    }
})();
