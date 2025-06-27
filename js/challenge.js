let counter = document.getElementById('counter');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let heart = document.getElementById('heart');
let pause = document.getElementById('pause');
let likes = document.getElementById('likes');
let commentForm = document.getElementById('comment-form');
let commentList = document.getElementById('list');

let count = 0;
let paused = false;
let likeTracker = {};

let timer = setInterval(incrementCounter, 1000);

function incrementCounter() {
  if (!paused) {
    count++;
    counter.textContent = count;
  }
}

plus.addEventListener('click', () => {
  count++;
  counter.textContent = count;
});

minus.addEventListener('click', () => {
  count--;
  counter.textContent = count;
});

heart.addEventListener('click', () => {
  if (!likeTracker[count]) {
    likeTracker[count] = 1;
    let li = document.createElement('li');
    li.id = `like-${count}`;
    li.textContent = `${count} has been liked 1 time`;
    likes.appendChild(li);
  } else {
    likeTracker[count]++;
    let li = document.getElementById(`like-${count}`);
    li.textContent = `${count} has been liked ${likeTracker[count]} times`;
  }
});

pause.addEventListener('click', () => {
  paused = !paused;

  if (paused) {
    clearInterval(timer);
    pause.textContent = 'Resume';
    plus.disabled = true;
    minus.disabled = true;
    heart.disabled = true;
  } else {
    timer = setInterval(incrementCounter, 1000);
    pause.textContent = 'Pause';
    plus.disabled = false;
    minus.disabled = false;
    heart.disabled = false;
  }
});

commentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('comment-input');
  const p = document.createElement('p');
  p.textContent = input.value;
  commentList.appendChild(p);
  input.value = '';
});
