$(document).ready(function () {
    $("#signature").jSignature({
        height: 400,
        width: '100%',
    });
});
function downloadsignature() {
    const data = $("#signature").jSignature("getData");
    download(data, "firma.png", "image/png" )
}
function clearsignature() {
    $("#signature").jSignature("clear");
}

