const year = ['1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']
const male = [26.9, 28.2, 28.0, 22.8, 25.6, 22.5, 21.1, 22.7, 22.3, 20.7, 18.9, 18.7, 20.8, 21.1, 20.6, 19.7, 18.7, 20.2, 18.8, 18.4, 18.2, 17.0, 17.5, 17.1, 16.5, 15.8, 14.7, 14.9, 15.5, 15.1, 14.9, 12.9, 14.8, 13.3, 12.1]
const female = [23.0, 25.2, 23.3, 20.1, 19.9, 19.8, 17.9, 15.8, 17.8, 15.8, 14.4, 13.2, 14.8, 13.9, 14.4, 14.6, 13.9, 12.7, 12.8, 12.5, 11.1, 11.1, 9.1, 10.7, 10.6, 10.5, 9.6, 9.3, 10.0, 8.5, 8.4, 8.1, 8.1, 7.0, 7.5]
const decades = ["1980 - 1990","1990 - 2000","2000 - 2010","2010 - Present"]
const male_decades = [23.088455772113946,30.974512743628186,26.716641679160425,19.220389805097458]
const female_decades = [27.618847286495573,32.099284812789215,24.19015565839292,16.09171224232225]

const male_smoking = document.getElementById("male_smoking")
const female_smoking = document.getElementById("female_smoking")
const malevfemale = document.getElementById("malevfemale")

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

male_smoking.addEventListener("click",() => {
    if (myChart) {
        myChart.destroy();
    }
    if (myChart2) {
        myChart2.destroy();
    }
    document.getElementById("cancer_deaths").style.display = "none";
    document.getElementById("bubble").style.display = "none";
    document.getElementsByClassName("up")[0].style.display = "none";
    document.getElementsByClassName("down")[0].style.display = "none";
    document.getElementsByClassName("up")[1].style.display = "none";
    document.getElementsByClassName("down")[1].style.display = "none";
    document.getElementsByClassName("analysis")[0].style.display = "none";
    document.getElementsByClassName("analysis")[1].style.display = "none";
    document.getElementsByClassName("analysis")[2].style.display = "none";
    document.getElementsByClassName("analysis")[3].style.display = "none";
    document.getElementsByTagName("canvas")[0].style.display = "block";
    document.getElementsByTagName("canvas")[1].style.display = "block";
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: year,
            datasets: [{
                label: '# of Votes',
                data: male,
                backgroundColor: [
                    getRandomColor()
                ],
                borderColor: [
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor()
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            responsive: false
        }
    });

    var ctx2 = document.getElementById('myChart2').getContext('2d');
    var myChart2 = new Chart(ctx2, {
        type: 'pie',
        data: {
            labels: decades,
            datasets: [{
                label: '# of Votes',
                data: male_decades,
                backgroundColor: [
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor()
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            responsive: false
        }
    });

    document.getElementsByClassName("analysis")[2].style.display = "block";
    document.getElementsByClassName("analysis")[3].style.display = "block";
})

female_smoking.addEventListener("click",() => {
    if (myChart) {
        myChart.destroy();
    }
    if (myChart2) {
        myChart2.destroy();
    }
    document.getElementById("cancer_deaths").style.display = "none";
    document.getElementById("bubble").style.display = "none";
    document.getElementsByClassName("up")[0].style.display = "none";
    document.getElementsByClassName("down")[0].style.display = "none";
    document.getElementsByClassName("up")[1].style.display = "none";
    document.getElementsByClassName("down")[1].style.display = "none";
    document.getElementsByClassName("analysis")[0].style.display = "none";
    document.getElementsByClassName("analysis")[1].style.display = "none";
    document.getElementsByClassName("analysis")[2].style.display = "none";
    document.getElementsByClassName("analysis")[3].style.display = "none";
    document.getElementsByTagName("canvas")[0].style.display = "block";
    document.getElementsByTagName("canvas")[1].style.display = "block";
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: year,
            datasets: [{
                label: '# of Votes',
                data: female,
                backgroundColor: [
                    getRandomColor()
                ],
                borderColor: [
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor()
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            responsive: false
        }
    });

    var ctx2 = document.getElementById('myChart2').getContext('2d');
    var myChart2 = new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: decades,
            datasets: [{
                label: '# of Votes',
                data: female_decades,
                backgroundColor: [
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor()
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            responsive: false
        }
    });

    document.getElementsByClassName("analysis")[2].style.display = "block";
    document.getElementsByClassName("analysis")[3].style.display = "block";
})

malevfemale.addEventListener("click",() => {
    if (myChart) {
        myChart.destroy();
    }
    if (myChart2) {
        myChart2.destroy();
    }
    document.getElementById("cancer_deaths").style.display = "none";
    document.getElementById("bubble").style.display = "none";
    document.getElementsByClassName("up")[0].style.display = "none";
    document.getElementsByClassName("down")[0].style.display = "none";
    document.getElementsByClassName("up")[1].style.display = "none";
    document.getElementsByClassName("down")[1].style.display = "none";
    document.getElementsByClassName("analysis")[0].style.display = "none";
    document.getElementsByClassName("analysis")[1].style.display = "none";
    document.getElementsByClassName("analysis")[2].style.display = "none";
    document.getElementsByClassName("analysis")[3].style.display = "none";
    document.getElementsByTagName("canvas")[0].style.display = "block";
    document.getElementsByTagName("canvas")[1].style.display = "block";
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: year,
            datasets: [{
                label: '# of Votes',
                data: female,
                backgroundColor: [
                    "transparent"
                ],
                borderColor: [
                    getRandomColor()
                ],
                borderWidth: 2
            },{
                label: '# of Votes',
                data: male,
                backgroundColor: [
                    "transparent"
                ],
                borderColor: [
                    getRandomColor()
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            responsive: false
        }
    });

    var ctx2 = document.getElementById('myChart2').getContext('2d');
    var myChart = new Chart(ctx2, {
        type: 'radar',
        data: {
            labels: year,
            datasets: [{
                label: '# of Votes',
                data: female,
                backgroundColor: [
                    getRandomColor()
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },{
                label: '# of Votes',
                data: male,
                backgroundColor: [
                    getRandomColor()
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            responsive: false
        }
    });

    document.getElementsByClassName("analysis")[2].style.display = "block";
    document.getElementsByClassName("analysis")[3].style.display = "block";
})

