import './index.css';

const dynamicList = document.getElementById('score-conatiner');
const listItems = document.createElement('li');
const playerName = document.createElement('span');
playerName.textContent = 'Name';
const playerScore = document.createElement('span');
playerScore.textContent = '100';
const seperator = document.createElement('span');
seperator.textContent = ': ';
listItems.appendChild(playerName);
listItems.appendChild(seperator);
listItems.appendChild(playerScore);
dynamicList.appendChild(listItems);
dynamicList.innerHTML += ' <li><span>Name:</span><span>20</span></li>';