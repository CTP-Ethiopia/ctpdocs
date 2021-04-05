$(document).ready(function () {
});

function onEmailSubscription() {
    let emailElem = document.getElementById("recipient-email");
    let button = document.getElementById("btn-subscribe");
    let errorMessage = document.getElementById("subscription-error");
    let successMessage = document.getElementById("subscription-success");

    errorMessage.innerText = "";
    successMessage.innerText = "";

    emailElem.disabled = true;
    button.disabled = true;
    button.innerText = "Subscribing...";

    postAjax('https://admin.venthere.net/api/users/addSubscription',
        {
            email: emailElem.value
        }, data => {
            var json = JSON.parse(data);

            errorMessage.innerText = "";
            successMessage.innerText = "Subscribed. You will be the first to know when we go live.";

            emailElem.disabled = false;
            button.disabled = false;
            button.innerText = "Subscribed";
        }, error => {
            var json = JSON.parse(error);

            errorMessage.innerText = json.message;
            successMessage.innerText = "";

            emailElem.disabled = false;
            button.disabled = false;
            button.innerText = "Subscribe";
        });

    return false;
}

function postAjax(url, data, success, error) {
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open('POST', url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState > 3 && xhr.status == 200)
            success(xhr.responseText);
        else
            error(xhr.responseText);
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
    return xhr;
}
