const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitButton = contactForm.querySelector("button[type='submit']");
    const originalButtonText = submitButton.textContent;

    submitButton.textContent = "Sending...";
    submitButton.disabled = true;

    try {
      const formData = new FormData(contactForm);
      formData.set("_replyto", formData.get("email"));
      formData.set("_subject", "New portfolio contact message");

      const response = await fetch(contactForm.action, {
        method: contactForm.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        Swal.fire({
          title: "Email sent successfully!",
          icon: "success",
          draggable: true,
        });
        contactForm.reset();
      } else {
        Swal.fire({
          title: "Email was not sent",
          text: "Please check your Formspree setup and try again.",
          icon: "error",
          draggable: true,
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Email was not sent",
        text: "Please check your internet connection and try again.",
        icon: "error",
        draggable: true,
      });
    } finally {
      submitButton.textContent = originalButtonText;
      submitButton.disabled = false;
    }
  });
}

// Cursor Follower Animation
const createCursorFollower = () => {
  const follower = document.createElement("div");
  follower.className = "cursor-follower";
  follower.style.width = "28px";
  follower.style.height = "28px";
  document.body.appendChild(follower);

  let mouseX = 0;
  let mouseY = 0;
  let followerX = 0;
  let followerY = 0;

  const speed = 0.15;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const animate = () => {
    followerX += (mouseX - followerX) * speed;
    followerY += (mouseY - followerY) * speed;

    follower.style.left = followerX - 14 + "px";
    follower.style.top = followerY - 14 + "px";

    requestAnimationFrame(animate);
  };

  animate();
};

document.addEventListener("DOMContentLoaded", createCursorFollower);
