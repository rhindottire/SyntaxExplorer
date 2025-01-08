const box = document.querySelector('.box');
box.addEventListener('click', function() {
  let size = 'size';
  let caption = 'caption';
  if (this.classList.contains(size)) {
    [size, caption] = [caption, size];
  }
  this.classList.toggle(size);
  setTimeout(() => {
    this.classList.toggle(caption);
  }, 500);
});