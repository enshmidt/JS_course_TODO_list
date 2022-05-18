const imgPathes = [];
let currentInterval;
let currentImage;
let containerNodes = document.getElementsByTagName('img');

function removeImage(event) {
  if (window.confirm('Delete this image?')) {
    const deletedPathNum = imgPathes.indexOf(event.target.src)
    if (imgPathes.length == 1) {
      event.target.remove();
      imgPathes.splice(deletedPathNum, 1);
    } else {
      plusSlides(1, false)
      imgPathes.splice(deletedPathNum, 1);
      event.target.remove();
    }
  }
}

function showImage(image) {
  image.id = 'active_slide';
  image.hidden = false;
  currentImage = image;
}

function hideImage(image) {
  image.hidden = true;
  image.id = null;
  currentImage = undefined;
}

function addImage() {
  const image = document.createElement('img');
  image.src = document.getElementById('add_url').value;
  document.getElementById('slideshow_container').appendChild(image);
  imgPathes.push(image.src);
  if (imgPathes.length <= 1) {
    showImage(image);
  } else {
    hideImage(currentImage);
    showImage(image);
  }
  image.ondblclick = removeImage;
}

function resetTimeout() {
  const timer = document.getElementById('add_timer').value * 1000;
  if (timer && imgPathes.length > 1) {
    currentInterval = setInterval(() => plusSlides(1, false), timer);
  }
}

function plusSlides(direction, resetTimeout = true) {
  if (imgPathes.length > 1) {
    //Manual switching of images drops the timer
    if (resetTimeout && currentInterval) {
      clearInterval(currentInterval);
      document.getElementById('add_timer').value = null;
    } else {
      const nextImgNum = imgPathes.indexOf(currentImage.src) + direction;
      //if last
      hideImage(currentImage);
      if (nextImgNum >= imgPathes.length) {
        showImage(containerNodes[0])
        //if first
      } else if (nextImgNum < 0) {
        showImage(containerNodes[containerNodes.length - 1]);
      } else {
        showImage(containerNodes[nextImgNum]);
      }
    }
  }
}
