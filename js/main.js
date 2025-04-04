function onError(error) {console.error(error)}
const url = window.location.href;

if (/https:\/\/.*\.mon-ent-occitanie\.fr\/.*/.test(url)) {
    const container = document.getElementsByClassName('text--right cas__wayf-submit')[0];
    const button = document.createElement('button');
    button.type = 'button';

    function set(result) {
        button.innerHTML = 'Se connecter en tant que ' + result.name;
    }
    
    browser.storage.sync.get("name").then(set, onError)
    
    button.className = 'btn btn--primary';
    button.style="margin-right: 5px;"

    button.onclick = function() {
        var now = new Date();
        browser.storage.sync.set({
            Date: now,
        });

        document.getElementById('idp-MONT-EDU_parent_eleve').click();

        document.getElementById('button-submit').click();
    };

    container.prepend(button);
} else if (/https:\/\/.*\.education\.gouv\.fr\/.*/.test(url)) {

    function connect(result) {
        var now = new Date();
        var storedDate = new Date(result.Date);
        if ((now - storedDate) / 1000 < 30) {
            document.getElementById('bouton_eleve').click();
            function set_username(result) {document.getElementById('username').value = result.username}
            function set_password(result) {document.getElementById('password').value = result.password;document.getElementById('bouton_valider').click();}
            
            browser.storage.sync.get("username").then(set_username, onError)
            browser.storage.sync.get("password").then(set_password, onError)
            
            //document.getElementById('bouton_valider').click();
        }
    }
    browser.storage.sync.get("Date").then(connect, onError)

}