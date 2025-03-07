//   sidebar cross icon
document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    const toggleBtn = document.getElementById('toggle-sidebar');

    // Function to check screen size and adjust sidebar visibility
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            // Small screen - sidebar should be hidden by default
            sidebar.classList.remove('show');
        } else {
            // Large screen - sidebar should always be visible
            sidebar.classList.remove('show'); // Remove any toggle classes
        }
    }

    // Toggle sidebar on button click (only works on small screens)
    toggleBtn.addEventListener('click', function () {
        sidebar.classList.toggle('show');

        // Change icon based on sidebar state
        const icon = toggleBtn.querySelector('i');
        if (sidebar.classList.contains('show')) {
            icon.classList.remove('bi-list');
            icon.classList.add('bi-x-lg');
        } else {
            icon.classList.remove('bi-x-lg');
            icon.classList.add('bi-list');
        }
    });

    // Check screen size on load and resize
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
});




// script for charts 
const ctx = document.getElementById('salesChart').getContext('2d');
let salesChart;

function createChart(type) {
    const labels = type === 'year' ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] : Array.from({ length: 30 }, (_, i) => i + 1);
    const data = type === 'year' ? [60, 30, 35, 50, 70, 90, 120, 150, 110, 100, 95, 105] : Array.from({ length: 30 }, () => Math.floor(Math.random() * 150));

    if (salesChart) salesChart.destroy();
    salesChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Sales',
                data: data,
                borderColor: 'orange',
                backgroundColor: 'rgba(255, 165, 0, 0.2)',
                fill: true,
                tension: 0.3,
                pointRadius: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true,
                    max: 250,
                    grid: {
                        drawBorder: false,
                        color: 'rgba(0,0,0,0.1)',
                        borderDash: [5, 5]
                    }
                }
            }
        }
    });
}

document.getElementById('timeFilter').addEventListener('change', (e) => {
    createChart(e.target.value);
});

createChart('year');



// script for circular chart
const circularChart = document.getElementById('customersChart').getContext('2d');
new Chart(circularChart, {
    type: 'doughnut',
    data: {
        labels: ['Web', 'iOS', 'Android', 'Other'],
        datasets: [{
            data: [41, 12, 29, 5],
            backgroundColor: ['#007867', '#5BE49B', '#C8FAD6', '#004B50'],
            borderWidth: 0,
        }]
    },
    options: {
        responsive: true,
        cutout: '70%',
        plugins: {
            legend: { display: false },
            tooltip: { enabled: true }
        }
    }
});


// script for chart in Analytics and Reports
