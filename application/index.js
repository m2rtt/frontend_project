import Counter from './Counter';

const counter = new Counter();
let count = counter.getCount();

document.body.innerHTML = (
                            '<div class="container"></div>'
                          );

const btn = document.createElement('button');
const text = document.createTextNode('Clicked ' + count + ' times');
btn.appendChild(text);

const container = document.querySelector('.container');
container.appendChild(btn);

//  const title = document.querySelector('h1');

btn.onclick = function() {
    counter.increase();
    btn.innerHTML = 'Clicked ' + counter.getCount() + ' times';
};
