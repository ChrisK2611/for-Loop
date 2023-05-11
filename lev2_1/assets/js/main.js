
    let imageArray = [];

    for(let i = 1; i <= 100; i++) {
        if (i < 10) {
        imageArray.push(`image_00${i}.jpg`);
    } else if (i < 100) {
        imageArray.push(`image_0${i}`);
    } else {
        imageArray.push(`image_${i}`);
    }

};


console.log(imageArray);
console.log({imageArray});



  