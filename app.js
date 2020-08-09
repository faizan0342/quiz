function quiz(){
    var temp=0
    var right_answer1=document.getElementById('q1_1')
    var wrong_q1_2=document.getElementById("q1_2")
    var wrong_q1_3=document.getElementById("q1_3")
    var wrong_q1_4=document.getElementById("q1_4")
    if(right_answer1.checked == true){
        temp++
        alert("Q1 Answer Is Right")
        }
    else{
        alert("Q1 Answer Wrong")
        }
 
        


        var right_answer2=document.getElementById('q2_2')
        var wrong_q2_2=document.getElementById("q2_1")
        var wrong_q2_3=document.getElementById("q2_3")
        var wrong_q2_4=document.getElementById("q2_4")
        if(right_answer2.checked == true){
            temp++
            alert("Q2 Answer Is Right")
            }
        else{
            alert("Q2 Answer Wrong")
            }
     



        var right_answer3=document.getElementById('q3_1')
        var wrong_q3_2=document.getElementById("q3_2")
        var wrong_q3_3=document.getElementById("q3_3")
        var wrong_q3_4=document.getElementById("q3_4")
        if(right_answer3.checked == true){
            temp++
            alert("Q2 Answer Is Right")
            }
        else{
            alert("Q2 Answer Wrong")
            }

}