//  Partendo dal markup in allegato, rifare lo slider usando Vuejs.

var app = new Vue(
    {
        el:'#root',
        data: {
            currentActiveElement: 0,
            slides: [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum.',
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
                }
            ]
        },
        methods: {
            showNextElement() {
                // Mostro l'immagine successiva solo se non sono nell'ultima immagine
                // altrimenti se sono a fine array torno all'inizio
                if(this.currentActiveElement < this.slides.length - 1) {
                    // Incrementa di 1 currentActiveElement
                    this.currentActiveElement++;
                } else {
                    this.currentActiveElement = 0;
                }
            },
            showPreviousElement() {
                // Mostro l'immagine precedente solo se non sono nella prima immagine
                // altrimenti se sono all'inizio dell'array ricomincio dalla fine
                if(this.currentActiveElement > 0) {
                    // Decremento di 1 currentActiveElement
                    this.currentActiveElement--;
                } else {
                    this.currentActiveElement = this.slides.length - 1;
                }
            }
        }              
    }
);
