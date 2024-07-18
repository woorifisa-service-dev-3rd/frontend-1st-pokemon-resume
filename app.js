const metaMong = document.getElementById("meta_mong");
const modal = document.getElementById("container_modal");
const bg_shadow = document.getElementById("shadow-container");
const pauseIcon = '<i class="fa-solid fa-volume-high"></i>';
const playIcon = '<i class="fa-solid fa-volume-xmark"></i>';
metaMong.addEventListener("dragover", (event) => {
  event.preventDefault();
});
metaMong.addEventListener("drop", (event) => {
  event.preventDefault();
  metaMong.classList.add("img_bright");
  const meta = document.getElementById("meta_talk");

  const message = "아 아쉽다. 메타몽은 변신을 썼다.";
  let index = 0;

  meta.textContent = "";

  const intervalId = setInterval(() => {
    if (index < message.length) {
      meta.textContent += message[index];
      index++;
    }
  }, 100);

  setTimeout(() => {
    metaMong.classList.remove("img_bright");
    metaMong.style.opacity = "1";

    const newMessage = "순범은 누구를 내보낼까?";
    let newIndex = 0;

    meta.textContent = "";

    // const newIntervalId = setInterval(() => {
    //   if (newIndex < newMessage.length) {
    //     meta.textContent += newMessage[newIndex];
    //     newIndex++;
    //   } else {
    //     clearInterval(newTxt);
    //   }
    // }, 100);
  }, 4000);

  setTimeout(() => {
    showModal();
  }, 3000);
});

bg_shadow.addEventListener("click", () => {
  closeModal();
});

function showModal() {
  modal.style.visibility = "visible";
  bg_shadow.style.visibility = "visible";
}

function closeModal() {
  modal.style.visibility = "hidden";
  bg_shadow.style.visibility = "hidden";
}

const audioBgm = document.getElementById("audio-bgm");
const bgm = document.getElementById("bgm");
audioBgm.addEventListener("click", () => {
  if (bgm.paused) {
    bgm.play();
    audioBgm.innerHTML = pauseIcon;
  } else {
    bgm.pause();
    audioBgm.innerHTML = playIcon;
  }
});
