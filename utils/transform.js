const transform = (text) => {
    let bionicText = '';
    let textArray = text.split(" ")
    let outputArray = [];
    for (let i = 0; i < textArray.length; i++) {
        let len = Math.ceil(textArray[i].length/2)
        bionicText += textArray[i].slice(0, len).bold() + textArray[i].slice(len) + " ";
        if(bionicText.length >= 4000)
        {
            outputArray.push(bionicText);
            bionicText = '';
        }
    }
    outputArray.push(bionicText);
    return outputArray;
}

export default transform;