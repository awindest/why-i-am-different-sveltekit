
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger.js"

gsap.registerPlugin(ScrollTrigger)
function init() {
    const panels = document.querySelectorAll('.panel')

console.log('doin animations')

    panels.forEach( panel => {
        let tl = gsap.timeline({
        scrollTrigger:{
            trigger: panel,
            start: "top 85%",
            end: "top top",
            markers:false,
            scrub: true
        }})
        tl.fromTo(panel, { opacity: 0 },
            { opacity: 1 })
    })

    let timeline = gsap.timeline()

    timeline
        .from('body', {
            background: "#ffffff",
            delay: 1,
            duration: 1,
            ease: 'none'
        })
        .fromTo(
            ['h1', '.scroll-wrapper'], {
            opacity: 0,
            y: -200
        },
            {
                opacity: 1, y: 0,
                duration: 0.6,
                ease: 'power1.out',
                delay: 2.0,
                stagger: .02
            }
            ,
            '-=1'
        )
        //start (el position, screen position)
    gsap.to('#title-container', {
        opacity: 0, scrollTrigger: {
            trigger: '#title-container',
            start: 'top top',
            end: 'bottom 50%',
            scrub: true,
            markers: false
        }
    })
}

window.addEventListener('load', function () {
    init()
})
