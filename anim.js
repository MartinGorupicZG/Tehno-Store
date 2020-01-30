import {TimelineLite} from 'gsap';

const startAnimation=()=> {
    const imgOver=document.querySelector('.img__overlay');
    const txtOver=document.querySelector('.text__container__overlay');
    const txt=document.querySelector('.n');
    const txt1=document.querySelector('.style');
    const imgCont=document.querySelector('.img__container')
    const loader=document.querySelector('.loader');
    const loaUp=document.querySelector('.up');
    const loaDown=document.querySelector('.down');
    const loaTxt=document.querySelector('.loader__text')
    const icons=document.querySelectorAll('.a__svg')
    const line=document.querySelector('.line2')
    const nar=document.querySelector('.enarudzbe')
    const contact=document.querySelector('.contact')
    const year=document.querySelector('.year')
    const lfTxt=document.querySelector('.text__left')
    const gold=document.querySelectorAll('.gold')
    const tl=new TimelineLite({delay:1.5});
    tl.fromTo(loaTxt,1,{opacity:0},{opacity:1,ease:"power2.out"})
    .staggerTo(gold,1,{y:0,opacity:1},.1)
    .to(loaTxt,1,{opacity:0})
    .to(loaUp,.7,{y:"-100%"})
    .to(loaDown,.7,{y:"100%"},"-=.7")
    .set(loader,{display:"none"})
    .staggerFromTo(icons,.5,{opacity:0,y:50},{opacity:1,y:0},0.1)
    .fromTo(imgOver,1,{x:"-100%"},{x:"0%",ease:"power2.out"})
    .set(imgCont,{opacity:1})
    .to(imgOver,1,{x:"100%",ease:"power3.out"})
    .fromTo(txtOver,.8,{x:"-100%"},{x:"0%",ease:"power2.out"},'-=1.5')
    .set(txt,{opacity:1})
    .set(txt1,{opacity:1})
    .to(txtOver,.8,{x:"110%",ease:"power3.out"})
    .fromTo(line,.4,{width:"0%"},{width:"100%"})
    .to(nar,.1,{opacity:1,y:0})
    .to(contact,.1,{opacity:1,y:0})
    .to(year,.1,{opacity:1,y:0})
    .fromTo(lfTxt,.5,{x:-100,opacity:0},{x:0,opacity:1})
    
   
}
export default startAnimation;