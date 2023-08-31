//get all the reference
//form reference

let form = document.querySelector('.dictform')

//input box
let wordInput = document.querySelector('.wordinput')

//word info div
let wordInfo = document.querySelector('.meaningforward')


let button = document.querySelector('.click')

async function getmeaning(word){
    try{
        let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)

        let data = await response.json()

        let paragraph = document.createElement('p')
        wordInfo.innerHTML=''
        let audioSource = data[0].phonetics[0].audio;

        // set the content of the paragraph element
        paragraph.innerHTML = `
        <span class='fas fa-volume-up audio-icon'></span>
        <audio class='audio'>
            <source src=${audioSource} type='audio/mpeg'>
        </audio>
        Word: <b>${data[0].word}</b>`;

        // append the created paragraph to the wordInfo
        wordInfo.appendChild(paragraph);

        document.querySelector('.audio-icon').addEventListener('click', event => {
            document.querySelector('.audio').play();
        });
       
        let list = document.createElement('ul')
        

        let meanings = data[0].meanings

        for (let meaning of meanings){
        let listItems = document.createElement('li')
        listItems.innerHTML=`${meaning.partOfSpeech}`
        

        let sublist = document.createElement('ul')
        

        let definitions = meaning.definitions
        for(let definition of definitions){
            let subListItems = document.createElement('li')
            subListItems.innerHTML=`${definition.definition}`
            sublist.appendChild(subListItems)
        }
        
            listItems.appendChild(sublist)
            list.appendChild(listItems)
        }
            wordInfo.appendChild(list)
 
        }
    catch(error){
        console.error("error fetching the data")
    }
}

function handleSubmit(event){
    event.preventDefault()
    let word = wordInput.value
    getmeaning(word)
}

form.addEventListener('submit',handleSubmit)
button.addEventListener('click',handleSubmit)