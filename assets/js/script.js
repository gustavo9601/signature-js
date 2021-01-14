$(document).ready(function () {
    $("#signature").jSignature();


});

function downloadsignature() {
    const data = $("#signature").jSignature("getData");
    download(data, "firma.png", "image/png" )
}

function clearsignature() {
    $("#signature").jSignature("clear");
}

