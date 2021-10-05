function shadowizard(options) {
    let images = document.querySelectorAll('.shadowizard');

    if (options.shadow_type === 'hard') {
        options.shadow_type = "0"
    } else {
        options.shadow_type = "15px"
    }


    images.forEach(image => {
        image.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,0.12)`;
        if (options.padding) {
            images.style.padding = "1em";
        }


        if (options.border) {
            images.style.border = "3px solid blue";
        }
    })


}

module.exports.shadowizard = shadowizard;