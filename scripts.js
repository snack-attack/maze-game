((d) => {
    let app = d.getElementById('root');
    let svg = d.createElement('svg');
    let rect = d.createElement('rect');
    let button = d.createElement('button');

    app.classList.add('container');
    app.appendChild(svg);
    svg.appendChild(rect);
    app.appendChild(button);

    
    svg.setAttribute('width', '500');
    svg.setAttribute('height', '500');

    button.textContent = 'Play!';

    rect.setAttribute('x', '0');
    rect.setAttribute('y', '0');
    rect.setAttribute('width', '500');
    rect.setAttribute('height', '500');
    rect.classList.add('bg');


    //create a rectangle and set x, y, width, height
    let rectFactory = (xcord, ycord, w, h) => {
        let rect = d.createElement('rect');
        svg.appendChild(rect);
        rect.classList.add('path');

        //set x-cord
        rect.setAttribute('x', 'xcord');

        //set y-cord
        rect.setAttribute('y', 'xcord');

        //set width
        rect.setAttribute('width', 'w');

        //set height
        rect.setAttribute('height', 'h');

    }

    //create a test rect

    rectFactory(0, 50, 290, 30);





})(document);