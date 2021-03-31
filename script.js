var tl = gsap.timeline();


tl
.from(".st",{
    stagger:.1,
    duration:1,
    x:30,
    opacity:0,
    ease: "Expo.easeInout"
})
.from(".banner h2", {

     y: 30,
     opacity:0,
     ease: "Expo.easeInOut",
     duration: 1
}, '-=2')