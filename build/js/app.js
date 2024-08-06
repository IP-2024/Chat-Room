$(document).ready(function () {
  const forms = $("form");
  const joinBtn = $(".join");
  const createBtn = $(".create");
  const sliderBg = $(".slider-bg");
  const passwordToggleIcons = $("img");

  passwordToggleIcons.each(function () {
    $(this).on("click", function () {
      const target = $(this).prev();
      if (target.attr("type") === "password") {
        target.attr("type", "text");
        $(this).attr("src", "./build/img/eye-slash.svg");
      } else {
        target.attr("type", "password");
        $(this).attr("src", "./build/img/eye.svg");
      }
    });
  });

  joinBtn.on("click", function () {
    forms.eq(0).removeClass("flex").addClass("hidden");
    forms.eq(1).removeClass("hidden").addClass("flex");
    sliderBg.removeClass("translate-x-0").addClass("translate-x-full");
  });

  createBtn.on("click", function () {
    forms.eq(1).removeClass("flex").addClass("hidden");
    forms.eq(0).removeClass("hidden").addClass("flex");
    sliderBg.removeClass("translate-x-full").addClass("translate-x-0");
  });
});