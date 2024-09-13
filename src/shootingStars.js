// shooting lights
const shootingStar = () => {
  let drops = document.getElementById("drops");
  let amount = 10;

  for(i=0; i<= amount; i++) {
    let drop = document.createElement("i");
    let unitWidth = window.innerWidth / 10;
    let posX = i * unitWidth
    let delay = Math.random() * -100

    drop.style.left = posX + 'px';
    drop.style.animationDelay = delay + 's';
    drops.appendChild(drop)
  }
}

shootingStar();
