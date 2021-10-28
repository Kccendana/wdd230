const images = document.querySelectorAll("[data-src]");

function preloadImage(img){
  const src = img.getAttribute("data-src");
  if(!src){
    return;
  }
  img.src = src;
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = () => {
    img.removeAttribute('data-src');
  };
}

const imageOptions = {
  threshold: 1,
  rootMargin: "0px 0px -10px 0px"
};

const imageObserver = new IntersectionObserver((entries, imageObserver) => {
  entries.forEach(entry =>{
    if (!entry.isIntersecting){
      return;
    }else {
      preloadImage(entry.target);
      imageObserver.unobserve(entry.target);
    }
  })
}, imageOptions);

 images.forEach(image => {
  imageObserver.observe(image);
}) 

/* let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};
imagesToLoad.forEach((img) => {
  loadImages(img);
});

if('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if(item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}

if('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if(item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}*/