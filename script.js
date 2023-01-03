const chartContainer = document.querySelector(".chart-days");
const day = new Date();
const today = day.getDay()-1;

const data = fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
        data.forEach((item, index) => {
        const chart = document.createElement("div");
        chart.classList.add("chart");
        chart.innerHTML = `
            <div class="eachChart" onmouseover="showAmount(event)" onmouseout="hideAmount(event)" style="height: ${
              item.amount * 2.86
            }px">
            <span class="amount hidden">${item.amount}</span>
            </div>
            <p>${item.day}</p>`;

            today === index ? chart.children[0].classList.add("today") : "";
        chartContainer.appendChild(chart);
        
        });

    });

    window.showAmount = (event) => {
        const targetChart = event.target;
        const amountToShow = targetChart.children[0];
        amountToShow.style.display = "flex";
    }

    window.hideAmount = (evemt) => {
        const targetChart = event.target;
        const amountToShow = targetChart.children[0];
        amountToShow.style.display = "none";
    }

