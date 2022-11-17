const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event) {
 console.log(event.target);

const backgroundColor = event.target.style.backgroundColor;

if (backgroundColor === 'purple') {
event.target.style.backgroundColor = 'black';
} else {
event.target.style.backgroundColor = 'purple';
}
});
