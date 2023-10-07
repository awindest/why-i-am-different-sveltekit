gsap.registerPlugin(ScrollTrigger)
function init() {
    const panels = document.querySelectorAll('.panel')

console.log('doin animations')
// const panels = gsap.utils.toArray(".panel")
// panels.forEach(( panel, index ) => {
//     let p = panel.querySelector("p")
//     console.log(p)
// })

    panels.forEach( panel => {
        let tl = gsap.timeline({
        scrollTrigger:{
            trigger: panel,
            start: "top 85%",
            end: "top top",
            markers:false,
            scrub: true
        }})
        tl.fromTo(panel, {
            opacity: 0      
            },
            {
                opacity: 1      
                })
    })
/*
// create an animation for each heading
let animation = gsap.from(panel?, { opacity: 0, stagger: 0.1})
ScrollTrigger.create ({
    trigger: panel,
    start: 'top 30%',
    toggleActions: "play none none reverse",
    animation: animation,
    markers: true,
    scrub: true
})
*/


    timeline = gsap.timeline()

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
    // gsap.fromTo('#panel', {
    //     opacity: 0 }, 
    //     { opacity: 1, scrollTrigger: {
    //         trigger: '#panel',
    //         start: 'top 10%',
    //         end: 'bottom 50%',
    //         scrub: true,
    //         markers: true
    //     }
    // })

}

window.addEventListener('load', function () {
    init()
})
