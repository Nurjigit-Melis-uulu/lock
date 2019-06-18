let button_auth = document.querySelector(".auth");
let lock_ring = document.querySelector(".lock .ring");
let lock_hanger = document.querySelector(".hanger");

button_auth.onclick = () => {
  lock_ring.style.animation = "unlock 4s 1 linear";

  let animation = setTimeout(() => {
    clearTimeout(animation);
    lock_hanger.style.transform = "translateY(-100px)";
  }, 4000);

  let cleared = setTimeout(() => {
    lock_ring.style.animation = "none";
    lock_hanger.style.transform = "translateY(0)";
  }, 5000);
};
