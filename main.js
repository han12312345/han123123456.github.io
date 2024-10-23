const spiderTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
];

const spiderTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
};

const spider1 = document.querySelector("#spider1");
const spider2 = document.querySelector("#spider2");
const spider3 = document.querySelector("#spider3");

// 设置动画延迟
spider1.animate(spiderTumbling, { ...spiderTiming, delay: 0 });
spider2.animate(spiderTumbling, { ...spiderTiming, delay: 2000 });
spider3.animate(spiderTumbling, { ...spiderTiming, delay: 4000 });
