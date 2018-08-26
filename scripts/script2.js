var seznam = ["Abatyše","Adolf","Angola","Afrika","Almužna",
              "Arcibiskup","Argentina","Atlas", "Audio", "Aurora"];

/* vytvoří tabulku s daty */
for (var i = 0; i < seznam.length; i++) {
    $(".seznam").append("<li value='search'>" + seznam[i] + "</li>");
    $(".seznam").hide();
}
/* vyhledá v tabulce*/
$(".search").on("keyup input", function () {
    if (this.value.length > 0) {
        $(".seznam, .seznam [value='search']").hide().filter(function () {
            return $(this).text().toLowerCase().indexOf($(".search").val().toLowerCase()) != -1;
        }).show();
        highlight(this.value);
        $(".seznam, .seznam [value='search']").show();
    }
    else {
        $(".seznam, .seznam [value='search']").hide();
    }
});

/* po kliknutí na slovo ho přidá do textového pole */
$('.seznam li').click(function() {
    var value = $(this).text();
    var input = $('.search');
    input.val( value );
    $(".seznam").hide();
});

/* schová tabulku po kliknutí kamkoli jinam */
$(document).click(function(e) {
    var target = e.target;

    if (!$(target).is('.search') && !$(target).parents().is('.search')) {
        $('.seznam').hide();
    }
});
