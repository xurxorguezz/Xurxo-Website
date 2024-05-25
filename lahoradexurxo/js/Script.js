console.log("Initiating css animator...");

$(".buton").hover(
  function () {
    $(this).removeClass("flipInX");
    $(this).addClass("swing");
  },
  function () {
    $(this).removeClass("swing");

  }
);

console.log("Initiating particles.js...");

particlesJS.load("particles", "../particlesjs-config.json", function () {
  console.log("particles.js config loaded");
});
var typed = new Typed(".typing", {
  strings: ["YouTuber", "Developer", "Designer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
