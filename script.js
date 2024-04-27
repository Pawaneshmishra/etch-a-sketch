let i = 0, n = 16;

const button = document.querySelector('.submit');
button.addEventListener("click", () => {
    const input = document.getElementById("myInput");
    n = Number(input.value);
    if(n>100){
        n=100;
        alert("Cant choose above 100 as Box Dimensions!!!!")
    }
    container.innerHTML = `<div class="row">${'<div class="cell"></div>'.repeat(n)}</div>`.repeat(n)

    const box = document.querySelectorAll(".cell");

    box.forEach(function (currentCell) {
        currentCell.style.width = 600 / n + "px";
        currentCell.style.height = 600 / n + "px";
    })

    box.forEach(function (currentCell) {
        currentCell.addEventListener('mouseover', () => {
            currentCell.style.backgroundColor = 'red';
            currentCell.style.opacity = +currentCell.style.opacity + 0.1;
        })
    })
})

container.innerHTML = `<div class="row">${'<div class="cell"></div>'.repeat(n)}</div>`.repeat(n)

const box = document.querySelectorAll(".cell");

box.forEach(function (currentCell) {
    currentCell.style.width = 600 / n + "px";
    currentCell.style.height = 600 / n + "px";
})

box.forEach(function (currentCell) {
    currentCell.addEventListener('mouseover', () => {
        currentCell.style.backgroundColor = 'red';
        currentCell.style.opacity = +currentCell.style.opacity + 0.1;
    })
})

const refresh = document.querySelector('.refresh');
refresh.addEventListener('click',()=>{
    location.reload();
})