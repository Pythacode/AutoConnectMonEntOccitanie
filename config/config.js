const pseudo = document.getElementById('name');
const username = document.getElementById('username');
const password = document.getElementById('password');

function onError(error) {console.error(error)}

function updade_pseudo(value) {pseudo.value = value.name}
function updade_username(value) {username.value = value.username}
function updade_password(value) {password.value = value.password}

browser.storage.sync.get("name").then(updade_pseudo, onError);
browser.storage.sync.get("username").then(updade_username, onError);
browser.storage.sync.get("password").then(updade_password, onError);

function update() {
    browser.storage.sync.set({
        name: pseudo.value,
        username: username.value,
        password: password.value
    });
    alert('Parametres mis à jour !')
}

document.getElementById("updade").addEventListener("click", update);
