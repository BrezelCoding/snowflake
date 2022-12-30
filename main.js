'use strict';

const body = document.querySelector('body');
const MIN_DURATION = 10;

function makeSnowflake() {
  const snowflake = document.createElement('div');
  const delay = Math.random() * 10;
  const initialOpacity = Math.random();
  const duration = Math.random() * 20 + MIN_DURATION;

  body.appendChild(snowflake);

  snowflake.classList.add('snowflake');
  snowflake.style.left = `${Math.random() * window.screen.width}px`;
  snowflake.style.animationDelay = `${delay}s`;
  snowflake.style.opacity = initialOpacity;
  snowflake.style.animation = `fall ${duration}s linear`;

  setTimeout(() => {
    body.removeChild(snowflake);
    makeSnowflake();
  }, (duration + delay) * 1000);
}

for (let index = 0; index < 100; index++) {
  setTimeout(makeSnowflake, 200 * index);
}

/*
1. Math.random()를 호출해서, 화면의 너비를 곱하고 (window.screen.width)
눈송이를 왼쪽으로 이동시키기 위해 사용함

2. 자연스러운 눈 효과를 위해
0과 10 사이의 임의의 값을 뽑아서 delay 변수에 넣어줌 

3. 깊이감을 얻기 위해
불투명도를 랜덤으로 뽑아, initialOpacity 변수에 넣워줌
불투명도의 최소값은 0, 최대값은 1 

4. 애니메이션 최소 지속 시간 10(초)을
MIN_DURATION에 저장
0과 20 사이의 임의의 값에 10을 더해보기

5. setTimeout함수를 이용해서
애니메이션이 끝나면 페이지에서 눈송이를 제거

6. 여러번 호출하기 위해 for loop 을 만들고 안에 setTimeout 만들어서
자연스럽게 눈내리는 효과 주기
*/
