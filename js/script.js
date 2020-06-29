$().ready(function () {
  $(".btn").attr("title", "Click here to download");
  $(".social a").attr("target", "_blank");

  $(".btn").on("click", function () {
    alert("Your download will begin shortly ...");
  });
});
