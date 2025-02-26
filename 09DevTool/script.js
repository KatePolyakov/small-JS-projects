const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'hugo', age: 8 },
];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string', '🎀');
// Styled
console.log('%c Hello I am a %s string', 'font-style: italic');

// warning!
console.warn('OH NOOOOO');

// Error :|
console.error('OMG this is an ERROR');

// Info
console.info('INFO INFO');

// Testing
console.assert(1 === 2, 'That is wrong!');

// clearing
//console.clear();

// Viewing DOM Elements
//console.dir(p);

// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Wes');

// timing
console.time('fetching some data');
fetch('https://api.github.com/users/KatePolyakov')
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd('fetching some data');
    console.log(data);
  });
