//progressive loading of images
const img = document.querySelectorAll("[data-src]");

function preloadImage(img){
  const src = img.getAttribute("data-src");
  if(!src){
    return;
  }
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = () => {
    img.removeAttribute('data-src');
  };
}

const imgOptions = {
  threshold: 1,
  rootMargin: "0px 0px -10px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach(entry =>{
    if (!entry.isIntersecting){
      return;
    }else {
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  })
}, imgOptions);

 img.forEach(img => {
  imgObserver.observe(img);
})