const cancer = document.getElementById("cancer")
const bubble_ = document.getElementById("bubble_")

cancer.addEventListener("click",() => {
    if (myChart) {
        myChart.destroy();
    }
    if (myChart2) {
        myChart2.destroy();
    }
    document.getElementById("cancer_deaths").style.display = "block";
    document.getElementById("bubble").style.display = "none";
    document.getElementsByClassName("up")[0].style.display = "block";
    document.getElementsByClassName("down")[0].style.display = "block";
    document.getElementsByClassName("up")[1].style.display = "none";
    document.getElementsByClassName("down")[1].style.display = "none";
    document.getElementsByClassName("analysis")[0].style.display = "none";
    document.getElementsByClassName("analysis")[1].style.display = "none";
    document.getElementsByClassName("analysis")[2].style.display = "block";
    document.getElementsByClassName("analysis")[3].style.display = "none";
    document.getElementsByTagName("canvas")[0].style.display = "none";
    document.getElementsByTagName("canvas")[1].style.display = "none";
    document.getElementsByClassName("analysis")[2].innerHTML = "The world map shows the Global Burden of Disease estimates of the share of cancer deaths that can be attributed to smoking.<br>Globally more than one in five cancer deaths (22% in 2016) are attributed to smoking – switch to the chart tab to see the global estimate.<br><br>In most richer countries the share is higher – the average in high income countries is 28% in 2016.<br><br>In poor countries, where fewer people were smoking in the past, tobacco is responsible for a much smaller faction of cancer deaths."
})

bubble_.addEventListener("click",() => {
    if (myChart) {
        myChart.destroy();
    }
    if (myChart2) {
        myChart2.destroy();
    }
    document.getElementById("bubble").style.display = "block";
    document.getElementById("cancer_deaths").style.display = "none";
    document.getElementsByClassName("up")[1].style.display = "block";
    document.getElementsByClassName("down")[1].style.display = "block";
    document.getElementsByClassName("up")[0].style.display = "none";
    document.getElementsByClassName("down")[0].style.display = "none";
    document.getElementsByClassName("analysis")[0].style.display = "none";
    document.getElementsByClassName("analysis")[1].style.display = "none";
    document.getElementsByClassName("analysis")[2].style.display = "none";
    document.getElementsByClassName("analysis")[3].style.display = "block";
    document.getElementsByTagName("canvas")[0].style.display = "none";
    document.getElementsByTagName("canvas")[1].style.display = "none";
    document.getElementsByClassName("analysis")[3].innerHTML = "Smoking by gender :<br><br>Every 5th adult in the world smokes tobacco. But there are large differences between men and women.<br>More than one-third (35%) of men in the world smoke. Just over 6% of women do. Here is the data for men; here for women.<br><br>In almost all countries it is true that more men smoke. In the visualization we see the share of men who smoke (plotted on the y-axis) compared with the same metric for women women (plotted on the x-axis).<br><br>The grey line in the plot represents equality in the prevalence: countries where smoking is more common in men will lie above this line; and countries where more women smoke lie below.<br><br>We see that almost all countries lie above the grey line, meaning a higher share of men smoke. But there are a few exceptions: in the Pacific island-state of Nauru 43% of women smoke compared to 37% of men; and smoking rates in Denmark and Sweden show almost no sex difference.<br><br>In many countries – particularly across Asia and Africa – the differences are very large. We see these countries clustered on the far left, where smoking rates for women are very low – typically less than 5%. In Indonesia, 76% of men smoke but only 3% of women; in China it’s 48% of men versus 2% of women; and in Egypt half of men smoke whilst almost no women (0.2%) do.<br><br>We also see this when we look at a map of smoking among women across the world: across much of Africa and Asia, rates are very low. You can find the world map of smoking rates in men here.<br><br>The fact that men are more likely than women to smoke is reflected health statistics: particularly lung cancer, for which smoking is a primary risk factor. We see that in every country in the world, men are more likely to die from lung cancer."
})