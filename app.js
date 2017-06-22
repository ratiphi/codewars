'use strict';

function greet(language) {
	var greetings = [
    {lang: 'english', say: 'Welcome'},
    {lang: 'czech', say: 'Vitejte'},
    {lang: 'danish', say: 'Velkomst'},
    {lang: 'dutch', say: 'Welkom'},
    {lang: 'estonian', say: 'Tere tulemast'},
    {lang: 'finnish', say: 'Tervetuloa'},
    {lang: 'flemish', say: 'Welgekomen'},
    {lang: 'french', say: 'Bienvenue'},
    {lang: 'german', say: 'Willkommen'},
    {lang: 'irish', say: 'Failte'},
    {lang: 'italian', say: 'Benvenuto'},
    {lang: 'latvian', say: 'Gaidits'},
    {lang: 'lithuanian', say: 'Laukiamas'},
    {lang: 'polish', say: 'Witamy'},
    {lang: 'spanish', say: 'Bienvenido'},
    {lang: 'swedish', say: 'Valkommen'},
    {lang: 'welsh', say: 'Croeso'}
  ];
  console.log(greetings.length);

  for (var i = 0; i < greetings.length; i++) {
    if (greetings[i].lang === 'german') {
      console.log('lang: ' + greetings[i].lang + ' say: ' + greetings[i].say);
      return 'Willkommen';
      //return greetings[i].say;
    } else {
      return 'Welcome';
    }
  }
}

// (language === 'IP_ADDRESS_INVALID' || language === 'IP_ADDRESS_NOT_FOUND' || language === 'IP_ADDRESS_REQUIRED')
