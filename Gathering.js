// toggle
function toggle_on(){
    var tog= document.getElementsByClassName("toggle-opt")[0];
    tog.style.right="0";    
}

function toggle_off(){
    var tog= document.getElementsByClassName("toggle-opt")[0];
    tog.style.right="-40vw";
}
var ct = document.getElementById('myChart');
let months=['jan' ,'feb','march','april','may','june','july','aug','set','oct','nov','dec'];
let sampledate=[12,23,23,22,43,34,23,12,53,54,6,56,100];
let loss=[6,40,36,27,53,24,53,32,43,24,19,46,80];
let chart =new Chart(ct , {
    type: 'bar',
    data: {
        labels: months,
        datasets: [{
            label: 'salary',
            data:sampledate,
            borderWidth: 1 
        },
        {
            label: 'loss',
            data:loss,
            borderWidth: 1 
        }
    ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


///pie
let catagary=['Food','Travel', 'Bill' ,'Movie']
let Pie_months =[
    [23,54,12,56],
    [43,84,52,16],
    [33,74,12,46],
    [43,64,72,26],
    [53,24,32,96],
    [43,24,72,86],
    [53,74,82,66],
    [73,54,92,56],
    [83,24,72,46],
    [23,64,62,36],
    [93,34,72,26],
    [13,44,92,16]
]

let chart2;
var ct2 = document.getElementById('myChart2');
function fun(value){

    chart2 = new Chart(ct2 , {
    type: 'doughnut',
    data: {
        labels: catagary,
        datasets: [{
            label: 'salary',
            pointLabelFontColor:"red",
            Color:"red",
            data:value,
            borderWidth: 1 ,
            color:'red',
        }
    ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}

function change_pie(value){
    chart2.destroy();
    console.log(value)
    fun(Pie_months[value-1]);
}
fun(Pie_months[0]);
