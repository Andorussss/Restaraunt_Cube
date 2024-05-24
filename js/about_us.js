window.addEventListener("scroll",e=>{
    document.body.style.cssText+=`--scrollTop:${this.scrollY}px`;
})
gsap.registerPlugin(ScrollTriger,ScrollSmoother)
ScrollSmoother.create({
    wrapper:'.wrapper',
    content:'.container'
})