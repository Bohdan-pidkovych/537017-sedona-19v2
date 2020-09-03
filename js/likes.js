let likeWrapper = document.querySelectorAll('.photo__likes-wrapper');
for (let i = 0; i < likeWrapper.length; i++) {
  let likeButton = likeWrapper[i].querySelector('.photo__likes-button');
  let likeNumber = likeWrapper[i].querySelector('.photo__likes-number');
  likeButton.onclick = function () {
    if (likeButton.classList.contains('photo__likes-button--added')) {
      likeNumber.textContent--;
    } else {
      likeNumber.textContent++;
    }
    likeButton.classList.toggle('photo__likes-button--added');
  };
}
