
const backendURL = "http://localhost:8080/"

const spinner = document.getElementById("spinner");

document.querySelector("#userButton").addEventListener("click", () => {
    window.location.href = `./signin.html`
})

const loginForm = document.querySelector('.adminLogin');

loginForm.addEventListener('submit', (e) => {
    spinner.removeAttribute('hidden');
    e.preventDefault();

    const adminEmail = document.getElementById('adminLoginEmail').value;
    const adminPassword = document.getElementById('adminLoginPassword').value;


    const adminData = {
        email: adminEmail,
        password: adminPassword,
    };

    fetch(`${backendURL}admin/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(adminData)
    })
        .then(response => response.json())
        .then(data => {
            spinner.setAttribute('hidden', '');
            let token = data.token;
            localStorage.setItem("token", token)
            localStorage.setItem("name", data.name)
            localStorage.setItem("id", data.id)

            adminEmail == ""
            adminPassword == ""
            alert(data.message)
            window.location.href = `./viewadmin.html`
        })
        .catch(error => {
            console.error(error);
        });
});

const adminReg = document.querySelector('.admin');

adminReg.addEventListener('submit', (e) => {
    spinner.removeAttribute('hidden');
    e.preventDefault();

    const adminName = document.getElementById('adminRegName').value;
    const adminEmail = document.getElementById('adminRegEmail').value;
    const adminPassword = document.getElementById('adminRegPassword').value;
    const adminImage = document.getElementById('adminRegImage').value;

    const adminData = {
        name: adminName,
        email: adminEmail,
        password: adminPassword,
        image: adminImage
    };

    fetch(`${backendURL}admin/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(adminData)
    })
        .then(response => response.json())
        .then(data => {
            spinner.setAttribute('hidden', '');
            console.log(data)
            alert(data.message + " " + "Login Now")
            window.location.href = `./admin.html`
        })
        .catch(error => {
            console.error(error);
        });
});
