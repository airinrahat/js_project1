

const MyBtn = document.querySelector(".MyBtn button");
const rulesBox = document.querySelector(".rulesBox");
const ExitButton = document.querySelector(".Buttons .ExitButton");
const ContinueButton = document.querySelector(".Buttons .ContinueButton");
const Questions =document.querySelector(".Questions")
const timeCount = document.querySelector(".timecount .secend"); 
const TimeLine =document.querySelector(".questionHeder .timeLine");


MyBtn.onclick = () => {
   
    rulesBox.classList.add("activeInfo");
}
ExitButton.onclick = () => {
    rulesBox.classList.remove("activeInfo");
}
ContinueButton.onclick = ()=>{
    rulesBox.classList.remove("activeInfo");
    Questions.classList.add("activeQuiz");
    showQuestions(0)
    startTimer(15)
    startTimerLine(0);

}
const nextque=document.querySelector(".nextque");
//  const resultBox=document.querySelector(".result_box");
//  const restart_quiz=document.querySelector(".buttons .restart1")
//  const quit_quiz=document.querySelector(".buttons .quit")
let que_count =0;
let counter;
let timeValue = 15;
let counterLine;
let widthValue =0;
nextque.onclick = () => {
    if( que_count <questions.length -1){
        que_count ++
        showQuestions(que_count);
        clearInterval(counter);
        startTimer(timeValue);
        clearInterval(counterLine);
        startTimerLine(widthValue);
        nextque.style.display = "none";
    }
    else{
        console.log("You Have Completd Your Task");
        // showResultBox()
    }
}
 function showQuestions(index){
    const que_text = document.querySelector('.text');
    const option_list = document.querySelector('.myoption');
    let option_tag =' <div class="option"><span>'+questions[index].options[0]+'</span></div>'
                    +' <div class="option"><span>'+questions[index].options[1]+'</span></div>'
                    +' <div class="option"><span>'+questions[index].options[2]+'</span></div>'
                    +' <div class="option"><span>'+questions[index].options[3]+'</span></div>'
    let que_tag ="<span>"+questions[index].numb+"."+questions[index].question +"  </span>";
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const total_que=document.querySelector(".total-que");
    let total_quetag='<p>'+questions[index].numb +' Of 5 Question</p>';
    total_que.innerHTML=total_quetag;
    const option = option_list.querySelectorAll(".option");
    for(let i=0; i<option.length; i++){
        option[i].setAttribute("onclick","optionSelected(this)");
    }

 }
 let tickIcon='<div class="tick icon"> <i class="fas fa-check"></i></div>';
 let crossIcon='<div class="cross icon"> <i class="fas fa-times"></i></div>';
 function optionSelected(answer){
    const option_list = document.querySelector('.myoption');
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns=answer.textContent;
    let corretAns = questions[que_count]. answer;
    let alloptions = option_list.children.length;

   
    if(userAns == corretAns){
        answer.classList.add("correct")
        console.log("Answer is Correct");
        answer.insertAdjacentHTML("beforeend", tickIcon);

    }else{
        answer.classList.add("Incorrect")
        console.log("Answer is Wrong");
        answer.insertAdjacentHTML("beforeend", crossIcon);

        for(let i=0; i<alloptions; i++){
            if(option_list.children[i].textContent == corretAns){
                option_list.children[i].setAttribute("class","option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
                
            }
        }
    }
    for(let i=0; i<alloptions; i++ ){
        option_list.children[i].classList.add("disabled");
    }
    nextque.style.display = "block";
 }

//  function showResultBox(){
//     rulesBox.classList.remove("activeInfo");
//     Questions.classList.remove("activeQuiz");
//     result_box.classList.add("activeResult")
//  }




 function startTimer(time){
    counter = setInterval(timer,1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time<9){
            let addzero=timeCount.textContent;
            timeCount.textContent= 0 + addzero;
        }
        if(time <0){
            clearInterval(counter)
            timeCount.textContent ="00";
        }

    }
 }
 function startTimerLine(time){
    counterLine = setInterval(timer,50);
    function timer(){
        time +=1;
        TimeLine.style.width = time +"px";
        if(time >319){
            clearInterval(counterLine);
        }
    }
 }