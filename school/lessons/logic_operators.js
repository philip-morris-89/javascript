const surname = 'Scelfo';
const isHero = true;

if (surname === 'Scelfo' || surname === 'Ortis' || isHero) {
  console.log('Qualcuno è un eroe');
}

let result = surname || isHero;

result = isHero || console.log('Non sei un eroe!');
console.log(result);

if (surname === 'Scelfo' && isHero) {
  console.log('Filo sei un eroe!');
}

result = isHero && null & surname;
console.log(result);

result = !isHero;
console.log(result);

if (!surname) {
  console.log('Non hai un cognome');
}

result = !!surname;
console.log(result);