

// Globale variables

let btn = document.querySelector('#new-quote');

let quote = document.querySelector('.quote');

let person = document.querySelector('.person');

const quotes = [
                    {
                        quote: "The only thing we have to fear is fear itself.",
                        person: "~ Franklin D. Roosevelt"
                    },
                    {
                        quote: "In three words I can sum up everything I've learned about life: it goes on.",
                        person: "~ Robert Frost"
                    },
                    {
                        quote: "Be the change that you wish to see in the world." ,
                        person: "~ Mahatma Gandhi"
                    },
                    {
                        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe." ,
                        person: "~ Albert Einstein"
                    },
                    {
                        quote: "The only way to do great work is to love what you do.",
                        person: "~ Steve Jobs"
                    },
                    {
                        quote: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that." ,
                        person: "~ Martin Luther King Jr."
                    },
                    {
                        quote: "The future belongs to those who believe in the beauty of their dreams.",
                        person: "~ Eleanor Roosevelt"
                    },
                    {
                        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
                        person: "~ Ralph Waldo Emerson"
                    },
                    {
                        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
                        person: "~ Winston Churchill"
                    },
                    {
                        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
                        person: "~ Nelson Mandela"
                    }

                ]




btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})