
$("#phone").mask("+38(999) 999-9999");


$("form#form1").submit(function() {
    //Change
    var th = $(this);
    $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
    }).done(function() {
        setTimeout(function() {

            // Done Functions
            th.trigger("reset");
        }, 1000);
    });
    return false;
});