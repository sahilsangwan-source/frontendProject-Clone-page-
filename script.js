const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function firstPageAnim(){
    var tl= gsap.timeline();
    tl.from("#nav",{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease: Expo.easeInOut
    })
    .to(".boundingelem",{
        y: 0,
        duration:2,
        delay:-1,
        stagger:.2,
        ease: Expo.easeInOut,
    })
    .from("#herofooter",{
        y:10,
        opacity:0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut,
    })
}
var timeout;
function circleChaptakaro(){
    var xscale=1;
    var yscale=1;
    var xprev=0;
    var yprev=0;
    window.addEventListener("mousemove",function(dets){
        var xdiff=dets.clientX-xprev;
        xprev=dets.clientX;
        var ydiff=dets.clientY-yprev;
        yprev=dets.clientY;
        xscale=gsap.utils.clamp(.8,1.2,xdiff);
        yscale=gsap.utils.clamp(.8,1.2,ydiff);
        circleMouseFollower(xscale,yscale);
        timeout=this.setTimeout(function(){
            document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`;
        },100)
    })
}
function circleMouseFollower(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
    })
}
document.querySelectorAll('.elem').forEach(function(elem){
    var rotate=0;
    var diff=0;
    elem.addEventListener("mousemove",function(dets){
        let disty=dets.clientY-elem.getBoundingClientRect().top//use to find top distance of div with class elem
        diff=dets.clientX-rotate;
        rotate=dets.clientX;
        gsap.to(elem.querySelector("img"),{
            opacity:1,
            ease:Power3,
            top:10,
            left: dets.clientX,
            rotate:gsap.utils.clamp(-20,20,diff)
        })
    });
    elem.addEventListener("mouseleave",function(dets){
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease: Power3,
            duration:0.5
        })
    })
});
circleChaptakaro();
firstPageAnim();