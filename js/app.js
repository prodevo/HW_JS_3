class trafficLight{

  //Затичка
  constructor(lights = 3, works = true) {
    this.lights = lights;
    this.works = works;
  }

  changeColor() {

    let element = document.getElementById('button');
    let red = document.getElementById('red');
    let yellow = document.getElementById('yellow');
    let green = document.getElementById('green');

    if (this.works === true) {
      red.style.backgroundColor = 'white';
      yellow.style.background = 'white';
      green.style.background = 'white';

      let i = 0;
      let current = document.getElementsByClassName('circle');

      element.addEventListener('click', (event) => {
        if (i < 3) {
          if (i > 0) {
            current[i - 1].style.background = 'white';
          }
          current[2].style.background = 'white';
          current[i].style.background = '';
          i++;
          if (i >= 3) {
            i = 0;
          }
        }
      });
    }
    else {
      red.style.backgroundColor = 'white';
      yellow.style.background = 'white';
      green.style.background = 'white';
    }
  }
}

t = new trafficLight(3, false);
t.changeColor();
