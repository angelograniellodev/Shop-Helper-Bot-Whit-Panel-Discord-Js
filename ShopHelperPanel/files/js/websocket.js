const socket = new WebSocket('ws://localhost:8080');

socket.onopen = function(event) {
    console.log('Conexión establecida');
};

function SendNormalMessage() {
    if (socket.readyState === WebSocket.OPEN) {
        const msgnormal = document.getElementById('normal-msg').value;
        const channelid = document.getElementById('channelid').value;

        const data = JSON.stringify({
            message: msgnormal,
            channelId: channelid
        });

        socket.send(data);
    } else {
        console.log('La conexión no está abierta');
    }
}

document.getElementById('sendNormalMessage').addEventListener('click', function() {
    if (document.getElementById('normal-msg').checkValidity()) {
        console.log("MESSAGE READY SEND");
        SendNormalMessage();
    } else {
        alert("PLEASE TYPE A MESSAGE AND PUT CHANNEL ID");
    }
});

document.getElementById('changueEmbedMessage').addEventListener('click', function() {
    alert("NOT AVALIBLE FOR MOMENT, NEW IN NEW VERSION!");
});