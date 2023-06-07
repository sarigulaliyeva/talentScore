var formOne = document.getElementById('formOne');
var second = document.querySelector('.second');
var third = document.querySelector('.third');
var btnTwo = document.querySelector('.twoNext');
var formTwo = document.getElementById('formTwo');
var formTwoBack = document.getElementById('formTwoBack');
var m12b = document.getElementById('M1-2B');
var workTwo=document.getElementById('workTwo');
var ifOlym = document.getElementById('ifOlym');
var formTwoBtn = document.getElementById('formTwoBtn');
var threeBtn = document.getElementById('formThreeBack');
var submit = document.getElementById('submit');
ifOlym.style.display = 'none';
workTwo.style.display = 'none';
var first = document.querySelector('.first');
second.style.display = 'none';
third.style.display = 'none';

    formOne.addEventListener('submit', (e) =>{
    event.preventDefault()
});
formOne.addEventListener('submit', (e) =>{
    first.style.display= 'none';
    second.style.display = 'block';
    })
    formTwoBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        second.style.display = 'none';
        third.style.display = 'block';
    });

    formTwoBack.addEventListener('click', (e) => {
        e.preventDefault();
        second.style.display='none';
        third.style.display = 'none';
        first.style.display = 'block';
    });

    threeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        first.style.display='none';
        second.style.display='block';
        third.style.display = 'none';
    });

    (function(){
        var checkNo = document.getElementById('checkNo');
        var checkYes = document.getElementById('checkYes');
        var option1 = document.querySelector("#work option[value='1']");
        var option2 = document.querySelector("#work option[value='2']");
        var option3 = document.querySelector("#work option[value='3']");
        var option4 = document.querySelector("#work option[value='4']");

        checkNo.addEventListener('change', function(e) {
            if(this.checked){
                option1.textContent = "Təhsil alıram";
                option2.textContent = "Təhsil almıram";
                option3.style.display = 'none';
                option4.style.display = 'none';

            }
            else{
                option1.textContent = "A. Təhsil alıram";
                option2.textContent = "B. Çalışıram";
                option3.style.display = 'block';
                option4.style.display = 'block';
            }
        })

    })();


   ( function(){
        var clickYes = document.getElementById('clickYes');

        clickYes.addEventListener('change', function(e) {
            if(this.checked){
                ifOlym.style.display = 'block';
                click
            }else{
                ifOlym.style.display = 'none'
            }
        })
    })();
