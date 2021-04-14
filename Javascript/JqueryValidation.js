$(document).ready(function() {
    $('#nameCheck').hide();
    $('#emailCheck').hide();
    $('#commentCheck').hide();
    var fname = true;
    var femail = true;
    var fcomment = true;

    $('#iname').keyup(function() {
        validationForm();
    });

    function validationForm() {
        var name = $('#iname').val();
        var email = $(`#iemail`).val();
        var comment = $('#icomment').val();
        if (name.length == '') {
            $('#nameCheck').show();
            $('#nameCheck').html("fill the name");
            fname = false;
            return false;
        }
        if (email.length == '') {
            $('#emailCheck').show()
            $('#emailCheck').html("Please fill the email address");
            femail = false;
            return false;
        }
        if (email.indexOf('@') <= 0) {
            $('#emailCheck').show()
            $('#emailCheck').html("Please enter correct email");
            femail = false;
            return false;
        }
        if ((y.charAt(y.length - 4) != '.') && (y.charAt(y.length - 3) != '.')) {
            $('#emailCheck').show()
            $('#emailCheck').html("Please enter correct email");
            femail = false;
            return false;
        }
        if (comment.length == '') {
            $('#commentCheck').show();
            $('#commentCheck').html("Your feedback is important to us");
            fcomment = false;
            return false;
        }

    }

});