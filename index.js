let btn=document.querySelector("#new-quote")
let quote=document.querySelector('.qoute');
let person=document.querySelector('.person');

const quotes=[{
    quote: `"The journey of a thousand miles begins with a single step" `,
    person:`Lao Tzu`
},
{
    quote: `“Don't cry because it's over, smile because it happened.” `,
     person: `Aristotel`
},
{
    quote: `“The only thing we have to fear is fear itself.” `,
     person: `Franklin D. Roosevelt`
},
{
    quote: `“The more that you read, the more things you will know. The more that you learn, the more places you'll go.” `,
     person: `Dr. Seuss`
},
{
    quote: `“The most important thing is to enjoy your life - to be happy - it's all that matters.” `,
     person: ` Audrey Hepburn`
},
]

btn.addEventListener('click', function(){
    let random=Math.floor(Math.random()*quotes.length);
    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;

})