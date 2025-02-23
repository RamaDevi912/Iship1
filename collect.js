
let debit_data=[];
let cradit_data=[]; 

let  iter=0;
History_default_arr = [{
    catagary: "Bill",
    desc: "Shopping",
    amount: "12312",
},
{
    catagary: "Other",
    desc: "shopping",
    amount: "112",
},
{
    catagary: "Food",
    desc: "Party",
    amount: "1312",
},
{
    catagary: "shopping",
    desc: "Cloths",
    amount: "2312",
},
{
    catagary: "Food",
    desc: "Treat",
    amount: "312",
},{
    catagary: "Travel",
    desc: "Trip",
    amount: "1312",
},{
    catagary: "Shopping",
    desc: "Cloths",
    amount: "412",
},{
    catagary: "Food",
    desc: "Restarant",
    amount: "12312",
},{
    catagary: "Travel",
    desc: "Friends",
    amount: "1312",
},{
    catagary: "Food",
    desc: "Party",
    amount: "5312",
},{
    catagary: "Food",
    desc: "Family",
    amount: "12312",
},{
    catagary: "Travel",
    desc: "Friends",
    amount: "812",
},{
    catagary: "Food",
    desc: "Shopping",
    amount: "2312",
},  
]
deault_add();

var total= 0;

function deault_add() {
    for (let k = 0; k < History_default_arr.length; k++) {
        let li = document.createElement("li");
        let cata = document.createElement("b");
        cata.innerHTML = History_default_arr[k].catagary;
        let cata2 = document.createElement("b");
        cata2.innerHTML = History_default_arr[k].desc;

        let cata3 = document.createElement("b");
        cata3.innerHTML = History_default_arr[k].amount
        total+=parseInt(cata3.value);
        li.appendChild(cata);
        li.appendChild(cata2);
        li.appendChild(cata3);
        history_list.appendChild(li);
    }

    //    dabit_data
    let debit_data =JSON.parse(localStorage.getItem("debit_data"));
    console.log(debit_data)
    debit_data.map(function(one_contact){
        let li = document.createElement("li");
        let cata = document.createElement("b");
        cata.innerHTML = one_contact.catagory;
        let cata2 = document.createElement("b");
        cata2.innerHTML = one_contact.description;

        let cata3 = document.createElement("b");
        cata3.innerHTML = one_contact.amount;
        total= parseInt(cata3.value);
        document.getElementsByClassName("credit_bal")[0].innerHTML=one_contact.amount;
        li.appendChild(cata);
        li.appendChild(cata2);
        li.appendChild(cata3);
        // li.style.backgroundColor="rgb(218, 97, 97)";
        history_list.appendChild(li);
        console.log(total)
    });

    let cradit_data =JSON.parse(localStorage.getItem("cradit_data"));
    console.log(cradit_data )
    cradit_data.map(function(one_contact){
        let li = document.createElement("li");
        let cata = document.createElement("b");
        cata.innerHTML = one_contact.catagory;
        let cata2 = document.createElement("b");
        cata2.innerHTML = one_contact.description;
        let cata3 = document.createElement("b");
        cata3.innerHTML = one_contact.amount

        
        total+= parseInt(cata3.value);
        li.appendChild(cata);
        li.appendChild(cata2);
        li.appendChild(cata3);
        // li.style.backgroundColor="rgb(106, 182, 106)";
        history_list.appendChild(li);
        
    });

    
};



let kk =JSON.parse(localStorage.getItem("dabit_data"));
    console.log("arr or nit " + typeof kk )


document.getElementById('user-form').addEventListener('submit', function (event) {
    event.preventDefault(); 
    var amount = document.getElementById('amount').value;
    var description = document.getElementById('description').value;
    var catagory = document.getElementById('catagory').value;

    var formData = {
        amount: amount,
        description: description,
        catagory: catagory,
        
    };

    debit_data = JSON.parse(localStorage.getItem("debit_data"));
    console.log("arr or nit " + typeof debit_data)
    debit_data.push(formData);
    localStorage.setItem("debit_data", JSON.stringify(debit_data));

        let li = document.createElement("li");
        let cata = document.createElement("b");
        cata.innerHTML = catagory;
        let cata2 = document.createElement("b");
        cata2.innerHTML =description ;
        let cata3 = document.createElement("b");

        
        total-= parseInt(cata3.value);
        cata3.innerHTML ="+" + amount ;
        li.appendChild(cata);
        li.appendChild(cata2);
        li.appendChild(cata3);
        // li.style.backgroundColor="rgb(106, 182, 106)";
        history_list.appendChild(li);
    document.getElementById('amount').value = '';
    document.getElementById('description').value = '';
    document.getElementById('catagory').value = '';
    console.log(typeof total)
});

//history2 
document.getElementById('user-form2').addEventListener('submit', function (event) {
    event.preventDefault(); 
    var amount = document.getElementById('amount2').value;
    var description = document.getElementById('description2').value;
    var catagory = document.getElementById('catagory2').value;

    var formData = {
        amount: amount,
        description: description,
        catagory: catagory,
        
    };
    cradit_data= JSON.parse(localStorage.getItem('cradit_data'));
    cradit_data.push(formData);
    localStorage.setItem("cradit_data", JSON.stringify(cradit_data));

        let li = document.createElement("li");
        let cata = document.createElement("b");
        cata.innerHTML = catagory;
        let cata2 = document.createElement("b");
        cata2.innerHTML =description ;
        let cata3 = document.createElement("b");
        total+= parseInt(cata3.value);
        cata3.innerHTML ="-" + amount ;
        li.appendChild(cata);
        li.appendChild(cata2);
        li.appendChild(cata3);
        // li.style.backgroundColor="rgb(218, 97, 97)";
        history_list.appendChild(li);

    
    
    document.getElementById('amount2').value = '';
    document.getElementById('description2').value = '';
    document.getElementById('catagory2').value = '';
    console.log( total)
});
// toggle
function toggle_on(){
    var tog= document.getElementsByClassName("toggle-opt")[0];
    tog.style.right="0";    
}

function toggle_off(){
    var tog= document.getElementsByClassName("toggle-opt")[0];
    tog.style.right="-40vw";
}
localStorage.setItem("debit_data",JSON.stringify([]));
localStorage.setItem("cradit_data",JSON.stringify([]));