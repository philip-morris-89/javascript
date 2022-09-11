// -------------------------------------------------------------------------- Function Declaration
function getHero() {
  return 'Batman';
}

getHero(); // Batman

// -------------------------------------------------------------------------- Function Declaration

function getAnotherHero(hero = 'Spiderman') {
  return `The ${hero}`;
}

getAnotherHero('Batman'); // The Batman
getAnotherHero(); // The Spiderman

// -------------------------------------------------------------------------- Function Declaration

let alterEgo = 'Bruce Wayne';

function getAlterEgo() {
  return `Batman is ${alterEgo}`;
}

// -------------------------------------------------------------------------- Function Declaration

getAlterEgo(); // Batman is Bruce Wayne

function getRealAlterEgo() {
  let alterEgo = 'Filippo Scelfo';
  return `Batman is ${alterEgo}`;
}

getRealAlterEgo(); // Batman is Filippo Scelfo

// -------------------------------------------------------------------------- Function Expressions

const getHeroPartner = function() {
  return 'Robin';
};

getHeroPartner(); // Robin
getHeroPartner; // Function() { ...ect... }

// -------------------------------------------------------------------------- Function Callbacks

function sayHelp(hero) {
  console.log(`Help ${hero}`);
}

function callBestHero(caller) {
  const hero = 'Batman';
  caller(hero);
}

callBestHero(sayHelp); // Help Batman

// Another example

const button = document.querySelector('button');

function toggle() {
  button.classList.toggle('altColor');
}