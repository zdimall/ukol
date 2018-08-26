var seznam = ["Abatyše","Adolf","Angola","Afrika","Almužna",
              "Arcibiskup","Argentina","Atlas", "Audio", "Aurora"];

for (var i = 0; i < seznam.length; i++) {
    $(".datalistclass").append("<option value='" + seznam[i] + "'></option>");
}
