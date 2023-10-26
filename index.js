// locomotive used for smooth scrolling with cdn

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// gsap to animate

gsap.from('.nLink', {
    stagger: .2,
    y:10,
    duration:1,
    ease:Power3,
    opacity:0
})


Shery.textAnimate("#heading h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

  gsap.from(".anim2",{
    y:50,
    opacity:0,
    ease:Power2,
    duration:1,
    stagger:.4,
  })

  Shery.imageEffect("#imgText img",{
    style: 3,
    config:{"uFrequencyX":{"value":11.57,"range":[0,100]},"uFrequencyY":{"value":6.61,"range":[0,100]},"uFrequencyZ":{"value":47.11,"range":[0,100]},"geoVertex":{"range":[1,64],"value":5.69},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.5625},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.53,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},

    // debug:true,
  })

  

  Shery.imageEffect(".imgEFF img",{
style:5,    
config: {"a":{"value":3.47,"range":[0,30]},"b":{"value":-0.54,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666666666666},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.46,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},

    // debug:true,
  })

  Shery.imageEffect("#bimg",{
  style:5,
  gooey:true,
 config:{"a":{"value":1.49,"range":[0,30]},"b":{"value":-0.02,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.912375},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":6.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.02,"range":[0,0.1]},"noise_height":{"value":0.23,"range":[0,2]},"noise_scale":{"value":25.62,"range":[0,100]}},
  })

  


  document.querySelector("#future button ").addEventListener("mouseover", function(){

    gsap.to("#future video",{
        opacity:1,
        duration: 1.5,
        ease:Power4,

    })
  })

  document.querySelector("#future button ").addEventListener("mouseleave", function(){
    gsap.to("#future video",{
        opacity:0,
        duration: 1.5,
        ease:Power4,

    })
  })

