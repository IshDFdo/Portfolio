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
