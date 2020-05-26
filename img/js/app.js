
const glide = new Glide('.glide', {
  type: 'carousel',
  perView: 2,
  focusAt: 'center',
  gap: 50,
  breakpoints: {
    480: {
      perView: 1
    }
  }
})

glide.mount()