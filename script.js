// input js
let containerForRandomTagalog =[]
let containerForRandomEnglish =[]
let books66 = ['Genesis','Exodus','Leviticus','Numbers','Deuteronomy','Joshua','Judges','Ruth','1samuel','2samuel','1kings','2kings','1chronicles','2chronicles','Ezra','Nehemiah','Esther','Job','Psalms','Proverbs','Ecclesiastes','Songofsongs','Isaiah','Jeremiah','Lamentations','Ezekiel','Daniel','Hosea','Joel','Amos','Obadiah','Jonah','Micah','Nahum','Habakkuk','Zephaniah','Haggai','Zechariah','Malachi','Matthew','Mark','Luke','John','Acts','Romans','1corinthians','2corinthians','Galatians','Ephesians','Philippians','Colossians','1thessalonians','2thessalonians','1timothy','2timothy','Titus','Philemon','Hebrews','James','1peter','2peter','1john','2john','3john','Jude','Revelation']
let showComplete=['Genesis','Exodus','Leviticus','Numbers','Deuteronomy','Joshua','Judges','Ruth','1 Samuel','2 Samuel','1 Kings','2 Kings','1 Chronicles','2 Chronicles','Ezra','Nehemiah','Esther','Job','Psalms','Proverbs','Ecclesiastes','Song of Songs','Isaiah','Jeremiah','Lamentations','Ezekiel','Daniel','Hosea','Joel','Amos','Obadiah','Jonah','Micah','Nahum','Habakkuk','Zephaniah','Haggai','Zechariah','Malachi','Matthew','Mark','Luke','John','Acts','Romans','1 Corinthians','2 Corinthians','Galatians','Ephesians','Philippians','Colossians','1 Thessalonians','2 Thessalonians','1 Timothy','2 Timothy','Titus','Philemon','Hebrews','James','1 Peter','2 Peter','1 John','2 John','3 John','Jude','Revelation']
let nextBook =0
let scores=0
let sComplete=0

typeBooks.onkeyup=()=>{
    let typeBooksValue=typeBooks.value.charAt(0).toUpperCase()+typeBooks.value.slice(1).toLowerCase().replace(/\s/g, "")
    console.log(typeBooksValue)
    if(typeBooksValue==books66[nextBook]){
        console.log('pray')
        nextBook += 1
        scores+= 1
        sComplete+=1
        typeBooks.value='';
        complete.textContent=showComplete[sComplete-1]
        scoreoutput.innerText=scores
    }
    if(scores==67){
        complete.textContent='complete'
        }
}

// EGLISH sECTION

languageEnglish.onclick=()=>{
    showET.style.display='none'
    complete.textContent='you type'
    scoreoutput.textContent=0
    typeBooks.value=''
    header1.textContent=' (66 Books English version)'
    let books66 = ['Genesis','Exodus','Leviticus','Numbers','Deuteronomy','Joshua','Judges','Ruth','1samuel','2samuel','1kings','2kings','1chronicles','2chronicles','Ezra','Nehemiah','Esther','Job','Psalms','Proverbs','Ecclesiastes','Songofsongs','Isaiah','Jeremiah','Lamentations','Ezekiel','Daniel','Hosea','Joel','Amos','Obadiah','Jonah','Micah','Nahum','Habakkuk','Zephaniah','Haggai','Zechariah','Malachi','Matthew','Mark','Luke','John','Acts','Romans','1corinthians','2corinthians','Galatians','Ephesians','Philippians','Colossians','1thessalonians','2thessalonians','1timothy','2timothy','Titus','Philemon','Hebrews','James','1peter','2peter','1john','2john','3john','Jude','Revelation']
    let showComplete=['Genesis','Exodus','Leviticus','Numbers','Deuteronomy','Joshua','Judges','Ruth','1 Samuel','2 Samuel','1 Kings','2 Kings','1 Chronicles','2 Chronicles','Ezra','Nehemiah','Esther','Job','Psalms','Proverbs','Ecclesiastes','Song of Songs','Isaiah','Jeremiah','Lamentations','Ezekiel','Daniel','Hosea','Joel','Amos','Obadiah','Jonah','Micah','Nahum','Habakkuk','Zephaniah','Haggai','Zechariah','Malachi','Matthew','Mark','Luke','John','Acts','Romans','1 Corinthians','2 Corinthians','Galatians','Ephesians','Philippians','Colossians','1 Thessalonians','2 Thessalonians','1 Timothy','2 Timothy','Titus','Philemon','Hebrews','James','1 Peter','2 Peter','1 John','2 John','3 John','Jude','Revelation']
let nextBook1 =0
let scores=0
let sComplete=0

typeBooks.onkeyup=()=>{
    
    let typeBooksValue=typeBooks.value.charAt(0).toUpperCase()+typeBooks.value.slice(1).toLowerCase().replace(/\s/g, "")
    if(typeBooksValue==books66[nextBook1]){
        console.log('pray')
        nextBook1 += 1
        scores+= 1
        sComplete+=1
        typeBooks.value='';
        scoreoutput.innerText=scores
        complete.textContent=showComplete[sComplete-1]
    }
    if(scores==67){
            complete.textContent='complete'
        }
}
}

// TAGALOG SECTION

languageTagalog.onclick=()=>{
    showET.style.display='none'
    complete.textContent='you type'
    scoreoutput.textContent=0
    typeBooks.value=''
    header1.textContent=' (66 Books Tagalog version)'
    let libro66=['Genesis','Exodo','Levitico','Mgabilang','Deuteronomio','Josue','Mgahukom','Ruth','1samuel','2samuel','1mgahari','2mgahari','1cronica','2cronica','Ezra','Nehemias','Ester','Job','Awit','Kawikaan','Mangangaral','Awitngmgaawit','Isaias','Jeremias','Panaghoy','Ezekiel','Daniel','Hosea','Joel','Amos','Obadias','Jonas','Mikas','Nahum','Habacuc','Sofonias','Hagai','Zacarias','Malakias','Mateo','Marcos','Lucas','Juan','Mga Gawa','Roma','1corinto','2corinto','Galacia','Efeso','Filipos','Colosas','1tesalonica','2tesalonica','1timoteo','2timoteo','Tito','Filemon','Mgahebreo','Santiago','1pedro','2pedro','1juan','2juan','3juan','Judas','Pahayag']
    let showComplete=['Genesis','Exodo','Levitico','Mga Bilang','Deuteronomio','Josue','Mga Hukom','Ruth','1 Samuel','2 Samuel','1 Mga Hari','2 Mga Hari','1 Cronica','2 Cronica','Ezra','Nehemias','Ester','Job','Awit','Kawikaan','Mangangaral','Awit ng mga Awit','Isaias','Jeremias','Panaghoy','Ezekiel','Daniel','Hosea','Joel','Amos','Obadias','Jonas','Mikas','Nahum','Habacuc','Sofonias','Hagai','Zacarias','Malakias','Mateo','Marcos','Lucas','Juan','Mga Gawa','Roma','1 Corinto','2 Corinto','Galacia','Efeso','Filipos','Colosas','1 Tesalonica','2 Tesalonica','1 Timoteo','2 Timoteo','Tito','Filemon','Mga Hebreo','Santiago','1 Pedro','2 Pedro','1 Juan','2 Juan','3 Juan','Judas','Pahayag']
    let nextBook2 =0
    let scores=0
    let sComplete=0

    typeBooks.onkeyup=()=>{
        
        let typeBooksValue=typeBooks.value.charAt(0).toUpperCase()+typeBooks.value.slice(1).toLowerCase().replace(/\s/g, "")
        if(typeBooksValue==libro66[nextBook2]){
    
            nextBook2 += 1
            scores+=  1
            sComplete+=1
            typeBooks.value='';
            scoreoutput.innerText=scores
            complete.textContent=showComplete[sComplete-1]
        }if(scores==67){
            complete.textContent='complete'
        }
        
}
}

// RANDOM SECTION

let showET = document.querySelector('.show-english-tagalog-score')
    let englishScore=0
    let tagalogScore=0
randomBook.onclick=()=>{
    orderRandom.textContent='random'
    scoreoutput.style.display='none'
    showET.style.display='block'
    typeBooks.onkeyup=()=>{
        
        let typeBooksValue1 = typeBooks.value.charAt(0).toUpperCase()+typeBooks.value.slice(1).toLowerCase().replace(/\s/g, "")
        let EnglishBook= ['Genesis','Exodus','Leviticus','Numbers','Deuteronomy','Joshua','Judges','Ruth','1samuel','2samuel','1kings','2kings','1chronicles','2chronicles','Ezra','Nehemiah','Esther','Job','Psalms','Proverbs','Ecclesiastes','Songofsongs','Isaiah','Jeremiah','Lamentations','Ezekiel','Daniel','Hosea','Joel','Amos','Obadiah','Jonah','Micah','Nahum','Habakkuk','Zephaniah','Haggai','Zechariah','Malachi','Matthew','Mark','Luke','John','Acts','Romans','1corinthians','2corinthians','Galatians','Ephesians','Philippians','Colossians','1thessalonians','2thessalonians','1timothy','2timothy','Titus','Philemon','Hebrews','James','1peter','2peter','1john','2john','3john','Jude','Revelation']
        let showComplete=['Genesis','Exodus','Leviticus','Numbers','Deuteronomy','Joshua','Judges','Ruth','1 Samuel','2 Samuel','1 Kings','2 Kings','1 Chronicles','2 Chronicles','Ezra','Nehemiah','Esther','Job','Psalms','Proverbs','Ecclesiastes','Song of Songs','Isaiah','Jeremiah','Lamentations','Ezekiel','Daniel','Hosea','Joel','Amos','Obadiah','Jonah','Micah','Nahum','Habakkuk','Zephaniah','Haggai','Zechariah','Malachi','Matthew','Mark','Luke','John','Acts','Romans','1 Corinthians','2 Corinthians','Galatians','Ephesians','Philippians','Colossians','1 Thessalonians','2 Thessalonians','1 Timothy','2 Timothy','Titus','Philemon','Hebrews','James','1 Peter','2 Peter','1 John','2 John','3 John','Jude','Revelation']
        let index1 =EnglishBook.indexOf(typeBooksValue1)
        EnglishBook.forEach(element => {
            if(typeBooksValue1==element){
                if(containerForRandomEnglish.includes(typeBooksValue1)===false){
                englishScore+=1
                complete.textContent=showComplete[EnglishBook.indexOf(typeBooksValue1)]
                typeBooks.value=''
                showEnglishScore.textContent = englishScore
                containerForRandomEnglish.push(typeBooksValue1)
                }else{
                    complete.textContent= showComplete[index1] + ' is typed'
                }
                
            }
        });
        
        let tagalogBook=['Genesis','Exodo','Levitico','Mgabilang','Deuteronomio','Josue','Mgahukom','Ruth','1samuel','2samuel','1mgahari','2mgahari','1cronica','2cronica','Ezra','Nehemias','Ester','Job','Awit','Kawikaan','Mangangaral','Awitngmgaawit','Isaias','Jeremias','Panaghoy','Ezekiel','Daniel','Hosea','Joel','Amos','Obadias','Jonas','Mikas','Nahum','Habacuc','Sofonias','Hagai','Zacarias','Malakias','Mateo','Marcos','Lucas','Juan','Mga Gawa','Roma','1corinto','2corinto','Galacia','Efeso','Filipos','Colosas','1tesalonica','2tesalonica','1timoteo','2timoteo','Tito','Filemon','Mgahebreo','Santiago','1pedro','2pedro','1juan','2juan','3juan','Judas','Pahayag']
        let showComplete1=['Genesis','Exodo','Levitico','Mga Bilang','Deuteronomio','Josue','Mga Hukom','Ruth','1 Samuel','2 Samuel','1 Mga Hari','2 Mga Hari','1 Cronica','2 Cronica','Ezra','Nehemias','Ester','Job','Awit','Kawikaan','Mangangaral','Awit ng mga Awit','Isaias','Jeremias','Panaghoy','Ezekiel','Daniel','Hosea','Joel','Amos','Obadias','Jonas','Mikas','Nahum','Habacuc','Sofonias','Hagai','Zacarias','Malakias','Mateo','Marcos','Lucas','Juan','Mga Gawa','Roma','1 Corinto','2 Corinto','Galacia','Efeso','Filipos','Colosas','1 Tesalonica','2 Tesalonica','1 Timoteo','2 Timoteo','Tito','Filemon','Mga Hebreo','Santiago','1 Pedro','2 Pedro','1 Juan','2 Juan','3 Juan','Judas','Pahayag'] 
        let index =tagalogBook.indexOf(typeBooksValue1)
        tagalogBook.forEach(element=>{
           
            if(typeBooksValue1==element){  
                
                if(containerForRandomTagalog.includes(typeBooksValue1)===false){
                    typeBooks.value=''
                    containerForRandomTagalog.push(typeBooksValue1)
                    tagalogScore+=1

                    showTagalogScore.textContent=tagalogScore
                    complete.textContent=showComplete1[index]
                }else{
                    complete.textContent= showComplete1[index] + ' is typed'
                }
            }
        })
    }
    
}

