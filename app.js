let people = [
  {name: 'joey'},
  {name: 'danielle'},
  {name:'hugo'}
]

const peopleList = document.getElementById('people-list');
// const peopleHeader = document.getElementById('h2');
// peopleHeader.textContent = 'People';
// peopleList.appendChild(peopleHeader);
// // appendChild puts peopleHeader INSIDE peopleList 
for(let person of people){
  const peopleHeader = document.createElement('h2');
  peopleHeader.textContent = person.name;
  peopleList.appendChild(peopleHeader);
}