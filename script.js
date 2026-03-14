const typedOptions = {
strings: [
"Desenvolvedor Web",
"Desenvolvedor Full Stack",
"JavaScript",
"React.js",
"Node.js",
"Python",
"Django",
"Criador de soluções web modernas",
"Especialista em WordPress e Shopify"
],
typeSpeed:20,
backSpeed:45,
backDelay:1400,
startDelay:400,
loop:true
};

new Typed("#typed-output", typedOptions);


// ANIMAÇÃO AO APARECER NA TELA

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

});

document.querySelectorAll(".reveal").forEach(el => {
observer.observe(el);
});