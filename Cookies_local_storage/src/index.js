function setCookies() {
    let firstname = document.getElementById("firstname").value;
    let email = document.getElementById("email").value;
    let date = new Date();
    date.setTime(fecha.getTime() + (240 * 60 * 60 * 1000));
    document.cookie = `firstname=${firstname}; email=${email}; expires=${date.toUTCString()}`;
    document.getElementById("firstname").value = ""
    document.getElementById("email").value = ""
}

function showCookies() {
    let cookies = document.cookie;
    let p = document.createElement("p")
    p.innerHTML = `Email: - firstname: ${cookies}`;
    document.body.appendChild(p);
}

function getCookie(name) {
    cookies = document.cookie;
    let p = document.createElement('p');
    p.innerHTML = cookies;
    document.body.appendChild(p)
}