var animatedElements=[];function animateElement(e,t){if(-1==animatedElements.indexOf(t))switch(animatedElements.push(t),e){case 0:anime.timeline({loop:!1}).add({targets:t,translateY:[-100,0],easing:"easeOutExpo",duration:1400,delay:(e,t)=>50*t});break;case 1:anime.timeline({loop:!1}).add({targets:t,scale:[0,1],duration:1500,elasticity:600,delay:(e,t)=>65*(t+1)});break;default:anime.timeline({loop:!1}).add({targets:t,opacity:[0,1],easing:"easeInOutQuad",duration:800,delay:(e,t)=>150*(t+1)})}}const isElementInViewport=e=>{"function"==typeof jQuery&&e instanceof jQuery&&(e=e[0]);var t=e.getBoundingClientRect();return t.top<=0&&t.bottom>=0||t.bottom>=(window.innerHeight||document.documentElement.clientHeight)&&t.top<=(window.innerHeight||document.documentElement.clientHeight)||t.top>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)},viewportCheckLooper=window.requestAnimationFrame||function(e){window.setTimeout(e,1e3/60)};$("#copy-year").text(new Date().getFullYear());