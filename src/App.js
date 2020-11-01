import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const background = <img className="background" alt="ocean" src="/images/ocean.jpg"/>
const title = '';
let images = [];

for (const animal in animals) {
images.push(<img onClick={displayFact} key={animal} className='animal' alt={animal} src={animals[animal].image} aria-label={animal} role='button'/>
);
}
const showBackground = true;

function displayFact(e) {
 // alert('Make myFunc the pFunc... omg that was horrible i am so sorry');
 //e.target
 //console.log(e);
 let aim = e.target.alt;
 console.log(e.target);
  e.target.style.visibility = 'hidden';
 const optionIndex = Math.floor(Math.random() * animals[aim].facts.length);
 console.log(animals[aim]);
  document.getElementById('fact').innerHTML = animals[aim].facts[optionIndex];
  
}

//document.getElementById('fact').innerHTML = 'dsfdf';

console.log(images);

const animalFacts = (
  <div>
    {showBackground && background}
    <p id='fact'></p>
    <div className='animals'>{images[2]}{images[1]}{images[0]}</div>

    <h1>{title === '' ?'Click an animal for a fun fact' : title}</h1>
  </div>
);

ReactDOM.render(animalFacts, document.getElementById('root'));
