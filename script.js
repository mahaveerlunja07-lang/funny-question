const kareleBtn = document.getElementById("kareleBtn");
const aapBtn = document.getElementById("aapBtn");

// Make Karele button "jump" when clicked
kareleBtn.addEventListener("click", () => {
  kareleBtn.style.position = "absolute";
  kareleBtn.style.top = Math.random() * 300 + "px";
  kareleBtn.style.left = Math.random() * 300 + "px";
  kareleBtn.disabled = true; // non-clickable after jump
});

// Redirect to thankyou page when "Aap" is clicked
aapBtn.addEventListener("click", () => {
  window.location.href = "thankyou.html";
});
