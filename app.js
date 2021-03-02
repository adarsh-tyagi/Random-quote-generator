var colors = [
  '#fc2c03',
  '#696969',
  '#7fe5f0',
  '#ff0000',
  '#407294',
  '#420420',
  '#ff80ed',
  '#133337',
  '#065535',
  '#f7347a',
  '#008080',
  '#ffa500',
  '#00ffff',
  '#ff7373',
  '#40e0d0',
  '#0000ff',
  '#003366',
  '#800000',
  '#7fffd4',
  '#800080',
  '#20b2aa',
  '#ff6666',
  '#4ca3dd',
  '#f6546a',
  '#0e2f44',
  '#8b0000',
  '#66cccc',
  '#daa520',
  '#000080',
  '#FF7F50'
]

let quote = '';
let author = '';
let quotesList;

function getQuotes(){
  return $.ajax({
    header: {
      Accept: 'application/json'
    },
    url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
    success: function(jsonQuotes){
      if(typeof jsonQuotes === 'string'){
        quotesList = JSON.parse(jsonQuotes);
        console.log('success');
      }
    }
  });
}

function getRandomQuote(){
  return quotesList.quotes[Math.floor(Math.random() * quotesList.quotes.length)];
}

function getQuote(){
  let randomQuote = getRandomQuote();
  
  quote = randomQuote.quote;
  author = randomQuote.author;
  
  $('#text').text(" "+quote);
  $('#author').text(author);
  
  var color = Math.floor(Math.random() * colors.length);
  $('html body').animate(
    {
      backgroundColor: colors[color],
      color: colors[color]
    },
    1000
  )
  
  $('.button').animate(
    {
      backgroundColor: colors[color],
    }, 
    1000
  )
  
  $('#separate').animate(
  {
    backgroundColor: colors[color],
  },
  1000
  )
}

$(document).ready(function(){
  getQuotes().then(() => {
    getQuote();
  })
  
  $("#new-quote").on('click', getQuote);
})