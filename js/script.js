const modal = document.getElementById("contactModal");
const closeButton = document.getElementById("modalClose");
const serviceNote = document.getElementById("serviceNote");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

function openContact(service = "") {
  if (service) {
    serviceNote.textContent = `Interested in ${service}? Message us and tell us what you need.`;
  } else {
    serviceNote.textContent = "Usually the quickest way to reach us is WhatsApp.";
  }
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  closeButton.focus();
}
function closeContact() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
document.querySelectorAll("[data-contact]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    openContact(button.dataset.service || "");
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
closeButton.addEventListener("click", closeContact);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeContact();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("open")) closeContact();
});
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
document.getElementById("year").textContent = new Date().getFullYear();
