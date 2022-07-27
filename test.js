
function changeTxt(){
    const testTxt = document.getElementById('original_text').value;
    const arr1 = testTxt.split(' ');
    const englishReg = /^[A-Za-z][A-Za-z0-9]*$/;
    let standardNum = document.getElementById('random_value').value;
    let arr2 = [];
    let word;
    for(let i=0; i<arr1.length; i++){
        if(i%standardNum === 0 && englishReg.test(arr1[i])){
            word = `_________`
        }else{
            word = arr1[i];
        }
        arr2.push(word);
    }

    let result = ''
    for(let j=0; j<arr2.length; j++){
        result = result + arr2[j] + ' '
    }
    console.log(result);
    const blankedDiv = document.getElementById('blanked_text');
    blankedDiv.innerText = result;
}



