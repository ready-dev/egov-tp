$(document).ready(function() {
    $("#playBtn").on("click", function() {
        $("#tp_video").trigger("play");
        $("#playBtn").css("display", "none");
        $(".de-btn-play-2").css("display", "none");
    });
    $(".de-btn-play-2").on("click", function() {
        $("#tp_video").trigger("play");
        $("#playBtn").css("display", "none");
        $(".de-btn-play-2").css("display", "none");
    });
});