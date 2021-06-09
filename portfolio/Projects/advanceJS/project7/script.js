function validateForm() {
    var x = document.forms["myForm"]["emailAddress"].value;
    var y = document.forms["myForm"]["password"].value
    if (x == "" || y == "") {
        alert("Please check the fields and make sure they are not blank.");
        return false;
    }
}