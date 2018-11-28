((d) => {
    let app = d.getElementById('root');
    let container = d.createElement('div');
    let svg = d.createElement('svg');
    let rect = d.createElement('rect');

    container.classList.add('container');
    
    
    app.appendChild(container);
    container.appendChild(svg);
    svg.appendChild(rect);

    
    svg.setAttribute('width', '500');
    svg.setAttribute('height', '500');

    rect.setAttribute('x', '0');
    rect.setAttribute('y', '0');
    rect.setAttribute('width', '500');
    rect.setAttribute('height', '500');
    rect.classList.add('bg');

    let rectFactory = (xcord, y, width, height) => {
        //set x-cord
        rect.setAttribute('x', 'xcord');

        //set y-cord

        //set width

        //set height

    }



})(document);