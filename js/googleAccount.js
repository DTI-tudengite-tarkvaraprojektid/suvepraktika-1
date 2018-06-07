window.onload = function() {
    onLoad();
}

function onLoad() {
    gapi.load('auth2', function () {
        console.log("Success");
        gapi.auth2.init();
    });
}

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();

    if (profile.getEmail().includes("@tlu.ee")) {
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
        window.location = "./main.html";
    } else {
        alert("Palun logi sisse kasutades enda TLÜ kontot.");
        signOut();
        console.log('User signed out.');
        window.location.reload(true)
    }
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        
        console.log('User signed out.');
        window.location = "./index.html";
    });
}