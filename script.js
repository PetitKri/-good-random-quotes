const button = document.querySelector('#btn');
const par = document.querySelector('#par');

const quotes = ["Be yourself, everyone else is already taken. ― Oscar Wilde", 
        'So many books, so little time.-Frank Zappa',
        'A room without books is like a body without a soul.-Marcus Tullius Cicero',
        `As soon as you trust yourself, you will know how to live.-Goethe`,
        `You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.-William W. Purkey`,
        `Be the change that you wish to see in the world.-Mahatma Gandhi`,
         `A man sees in the world what he carries in his heart.-Goethe`,
        `To live is the rarest thing in the world. Most people exist, that is all.-Oscar Wilde`,
         `Always forgive your enemies; nothing annoys them so much.-Oscar Wilde`,`Live as if you were to die tomorrow. Learn as if you were to live forever.-Mahatma Gandhi`,
       `Insanity is doing the same thing, over and over again, but expecting different results.-Anonymous`,
        `There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.-Albert Einstein`,
         `The fool doth think he is wise, but the wise man knows himself to be a fool.-William Shakespeare`,
         `Quiet the mind, and the soul will speak.-Ma Jaya Sati`,
         `Life is what happens to us while we are making other plans.-Allen Saunders`,
         `Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.-Bill Keane`,
         `It is not a lack of love, but a lack of friendship that makes unhappy marriages.-Friedrich Nietzsche`,
         `I have not failed. I've just found 10,000 ways that won't work.-Thomas A. Edison`,
         `The man who does not read has no advantage over the man who cannot read.-Mark Twain`,
         `Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.-Lao Tzu`,
         `If you can't explain it to a six year old, you don't understand it yourself.-Albert Einstein`,
         `If you only read the books that everyone else is reading, you can only think what everyone else is thinking.-Haruki Murakami,`,
          `Everything you can imagine is real.-Pablo Picasso`,`We don't see things as they are, we see them as we are.-Anaïs Nin`,
          `Nothing shows a man's character more than what he laughs at.-Goethe`,
          `If you want your children to be intelligent, read them fairy tales.-Albert Einstein`,
          `I find television very educating. Every time somebody turns on the set, I go into the other room and read a book.-Groucho`];

          button.addEventListener('click', function(){
            let randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
            par.style.display = 'block';
            par.textContent = randomQuote;
          })