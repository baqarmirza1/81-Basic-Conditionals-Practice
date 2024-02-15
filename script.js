let password = "Open Sesame";

$(".submit-word").click(function() {
let passwordInput = $(".password").val();
 if (passwordInput === "Open Sesame") {
     alert("Password accepted");
} else {
    alert("Incorrect password");
}});