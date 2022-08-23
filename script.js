// input js

let books66 = ['Genesis','Exodus','Leviticus','Numbers','Deuteronomy','Joshua','Judges','Ruth','1 Samual','2 Samuel','1 Kings','2 Kings','1 Chronicles','2 Chronicles','Ezra','Nehemiah','Esther','Job','Psalms','Proverbs','Ecclesiastes','Song of Songs','Isaiah','Jeremiah','Lamentations','Ezekiel','Daniel','Hosea','Joel','Amos','Obadiah','Jonah','Micah','Nahum','Habakkuk','Zephaniah','Haggai','Zechariah','Malachi','Matthew','Mark','Luke','John','Acts','Romans','1 Corinthians','2 Corinthians','Galatians','Ephesians','Philippians','Colossians','1 Thessalonians','2 Thessalonians','1 Timothy','2 Timothy','Titus','Philemon','Hebrews','James','1 Peter','2 Peter','1 John','2 John','3 John','Jude','Revelation']
let nextBook =0
let scores=0

typeBooks.onkeyup=()=>{
    let typeBooksValue=typeBooks.value
    if(typeBooksValue==books66[nextBook]){
        console.log('pray')
        nextBook += 1
        scores+= 1
        typeBooks.value='';
        complete.textContent=books66[nextBook-1]
        scoreoutput.innerText=scores
    }
    if(scores==67){
            complete.textContent='comlete'
        }
}

languageEnglish.onclick=()=>{
    complete.textContent='you type'
    scoreoutput.textContent=0
    header1.textContent=' (English version)'
    let books66 = ['Genesis','Exodus','Leviticus','Numbers','Deuteronomy','Joshua','Judges','Ruth','1 Samual','2 Samuel','1 Kings','2 Kings','1 Chronicles','2 Chronicles','Ezra','Nehemiah','Esther','Job','Psalms','Proverbs','Ecclesiastes','Song of Songs','Isaiah','Jeremiah','Lamentations','Ezekiel','Daniel','Hosea','Joel','Amos','Obadiah','Jonah','Micah','Nahum','Habakkuk','Zephaniah','Haggai','Zechariah','Malachi','Matthew','Mark','Luke','John','Acts','Romans','1 Corinthians','2 Corinthians','Galatians','Ephesians','Philippians','Colossians','1 Thessalonians','2 Thessalonians','1 Timothy','2 Timothy','Titus','Philemon','Hebrews','James','1 Peter','2 Peter','1 John','2 John','3 John','Jude','Revelation']
let nextBook1 =0
let scores=0

typeBooks.onkeyup=()=>{
    
    let typeBooksValue=typeBooks.value
    if(typeBooksValue==books66[nextBook1]){
        console.log('pray')
        nextBook1 += 1
        scores+= 1
        typeBooks.value='';
        scoreoutput.innerText=scores
        complete.textContent=books66[nextBook1-1]
    }
    if(scores==67){
            complete.textContent='complete'
        }
}
}


languageTagalog.onclick=()=>{
    complete.textContent='you type'
    scoreoutput.textContent=0
    header1.textContent=' (Tagalog version)'
    let libro66=['Genesis','Exodo','Levitico','Mga Bilang','Deuteronomio','Josue','Mga Hukom','Ruth','1 Samuel','2 Samuel','1 Mga Hari','2 Mga Hari','1 Cronica','2 Cronica','Ezra','Nehemias','Ester','Job','Awit','Kawikaan','Mangangaral','Awit ng mga Awit','Isaias','Jeremias','Panaghoy','Ezekiel','Daniel','Hosea','Joel','Amos','Obadias','Jonas','Mikas','Nahum','Habacuc','Sofonias','Hagai','Zacarias','Malakias','Mateo','Marcos','Lucas','Juan','Mga Gawa','Roma','1 Corinto','2 Corinto','Galacia','Efeso','Filipos','Colosas','1 Tesalonica','2 Tesalonica','1 Timoteo','2 Timoteo','Tito','Filemon','Mga Hebreo','Santiago','1 Pedro','2 Pedro','1 Juan','2 Juan','3 Juan','Judas','Pahayag']
    let nextBook2 =0
    let scores=0

    typeBooks.onkeyup=()=>{
        
        let typeBooksValue=typeBooks.value
        if(typeBooksValue==libro66[nextBook2]){
    
            nextBook2 += 1
            scores+=  1
            typeBooks.value='';
            scoreoutput.innerText=scores
            complete.textContent=libro66[nextBook2-1]
        }if(scores==67){
            complete.textContent='complete'
        }
}
}

