//to upper case
document.getElementById("upper-case").addEventListener("click", function() {
    let text = document.getElementById("textarea").value;
    document.getElementById("textarea").value = text.toUpperCase();
});

//to lower case
document.getElementById("lower-case").addEventListener("click", function() {
    let text = document.getElementById("textarea").value;
    document.getElementById("textarea").value = text.toLowerCase();
});

// proper case
document.getElementById("proper-case").addEventListener("click", function (){

    let properCase = document.getElementById("textarea").value;
    let textArr = properCase.toLowerCase().split(" ");
    properCase="";
    for (let i = 0; i < textArr.length; i++) {
        let word = textArr[i];
        let First = word.substring(0, 1).toUpperCase();
        let Leftovers = word.substring(1, word.length);
        properCase += First + Leftovers + " ";
    }
    document.getElementById("textarea").value = properCase.trim();
});

// sentence case
document.getElementById("sentence-case").addEventListener("click", function sentenceCase() {
    let sentenceCase = document.getElementById("textarea").value.toLowerCase();
    let string = sentenceCase.split ('. ')
    for (let i = 0; i < string.length; i++) {
        string[i] = string[i].charAt(0).toUpperCase() + string[i].substring(1);
    }
    sentenceCase = string.join('. ')
    document.getElementById("textarea").value = sentenceCase;
});
