// script for charts
const ctx = document.getElementById("salesChart").getContext("2d");
let salesChart;

function createChart(type) {
    const labels =
        type === "year"
            ? [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ]
            : Array.from({ length: 30 }, (_, i) => i + 1);
    const data =
        type === "year"
            ? [60, 30, 35, 50, 70, 90, 120, 150, 110, 100, 95, 105]
            : Array.from({ length: 30 }, () => Math.floor(Math.random() * 150));

    if (salesChart) salesChart.destroy();
    salesChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Sales",
                    data: data,
                    borderColor: "orange",
                    backgroundColor: "rgba(255, 165, 0, 0.2)",
                    fill: true,
                    tension: 0.3,
                    pointRadius: 0,
                },
            ],
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                    },
                },
                y: {
                    beginAtZero: true,
                    max: 250,
                    grid: {
                        drawBorder: false,
                        color: "rgba(0,0,0,0.1)",
                        borderDash: [5, 5],
                    },
                },
            },
        },
    });
}

document.getElementById("timeFilter").addEventListener("change", (e) => {
    createChart(e.target.value);
});

createChart("year");

// script for circular chart
const circularChart = document
    .getElementById("customersChart")
    .getContext("2d");
new Chart(circularChart, {
    type: "doughnut",
    data: {
        labels: ["Web", "iOS", "Android", "Other"],
        datasets: [
            {
                data: [41, 12, 29, 5],
                backgroundColor: ["#007867", "#5BE49B", "#C8FAD6", "#004B50"],
                borderWidth: 0,
            },
        ],
    },
    options: {
        responsive: true,
        cutout: "70%",
        plugins: {
            legend: { display: false },
            tooltip: { enabled: true },
        },
    },
});



// script for circular chart in Analytics and Reports
