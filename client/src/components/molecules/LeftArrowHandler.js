const LeftArrowHandler = (setShowContent) => {
    const Arrow = document.getElementById("arrow");

    Arrow.animate([
        {left: '0'},
        {left: '10px'},
        {left: '0'}
    ], {
        duration: 700,
        iterations: Infinity
    });

    setTimeout(() => { setShowContent(false) }, 1000 );
    
};

export default LeftArrowHandler;
