((d) => {
    let app = d.getElementById('root');
    let canvas = d.createElement('canvas');
    let ctx = canvas.getContext('2d');

    app.appendChild(canvas);

    ctx.rect(20,20,150,100);
    ctx.stroke();


})(document);