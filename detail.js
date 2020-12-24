function showDetail(dataChildern) {
    document.getElementById("id").innerHTML = dataChildern.id;
    document.getElementById("name").innerHTML = dataChildern.name;
    document.getElementById("userName").innerHTML = dataChildern.userName;
    document.getElementById("email").innerHTML = dataChildern.email;
    document.getElementById("phone").innerHTML = dataChildern.phone;
}
document.addEventListener("DOMContentLoaded", showDetail)