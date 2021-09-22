let questions = [
    {
      id: 1,
      question: "What will happen if in a C program you assign a value to an array element whose subscript exceeds the size of array?",
      answer: "The program may crash if some important data gets overwritten",
      options: [
        "The element will be set to 0",
        "The compiler would report an error",
        "The program may crash if some important data gets overwritten",
        "The array size would appropriately grow"
      ]
    },
    {
      id: 2,
      question: "In which numbering system can the binary number 1011011111000101 be easily converted to?",
      answer: "Hexadecimal system",
      options: [
        "Decimal system",
        "Hexadecimal system",
        "Octal system",
        "No need to convert"
      ]
    },
    {
      id: 3,
      question: "What is the full form of E-mail",
      answer: "Electronic Mail",
      options: [
        "Electronic Mail",
        "Electric Mail",
        "Engine Mail",
        "None of these"
      ]
    },
    {
      id: 4,
      question: "Which bitwise operator is suitable for turning off a particular bit in a number?",
      answer: "& operator",
      options: [
        "&& operator",
        "& operator",
        "|| operator",
        "! operator"
      ]
    },
    {
      id: 5,
      question: "Which bitwise operator is suitable for turning on a particular bit in a number?",
      answer: "| operator",
      options: [
        "&& operator",
        "& operator",
        "|| operator",
        "| operator"
      ]
    },
    {
      id: 6,
      question: "Which bitwise operator is suitable for checking whether a particular bit is on or off?",
      answer: "& operator",
      options: [
        "&& operator",
        "& operator",
        "|| operator",
        "! operator"
      ]
    },
    {
      id: 7,
      question: "Which of the following function sets first n characters of a string to a given character?",
      answer: "strnset()",
      options: [
        "strinit()",
        "strnset()",
        "strset()",
        "strcset()"
      ]
    },
    {
      id: 8,
      question: "If the two strings are identical, then strcmp() function returns",
      answer: "0",
      options: [
        "-1",
        "1",
        "0",
        "Yes"
      ]
    },
    {
      id: 9,
      question: "The library function used to find the last occurrence of a character in a string is",
      answer: "strrchr()",
      options: [
        "strnstr()",
        "strnstr()",
        "strrchr()",
        "strstr()"
      ]
    },
    {
      id: 10,
      question: "What is the full form of CPU?",
      answer: "Central Processing Unit",
      options: [
        "Central Program Unit",
        "Central Processing Unit",
        "Central Preload Unit",
        "None of these"
      ]
    },
    {
      id: 11,
      question: "Which of the following function is used to find the first occurrence of a given string in another string?",
      answer: "strstr()",
      options: [
        "strchr()",
        "strrchr()",
        "strstr()",
        "strnset()"
      ]
    },
    {
      id: 12,
      question: "Which of the following function is more appropriate for reading in a multi-word string?",
      answer: "gets();",
      options: [
        "printf();",
        "scanf();",
        "gets();",
        "puts();"
      ]
    },
    {
      id: 13,
      question: "The keyword used to transfer control from a function back to the calling function is",
      answer: "return",
      options: [
        "switch",
        "goto",
        "go back",
        "return"
      ]
    }
  ];

  /*****************************************************************Coding Area**************************************************/
  
  let question_count = 0;
  let points = 0;

  let arr=new Array(questions.length).fill(0);
  
  window.onload = function() {
    show(question_count);
  
  };

  function result(){
    var total=0;
    for(let i=0;i<arr.length;i++){
      total+=arr[i];
    }
    window.sessionStorage.setItem("points", total);
  }
  
  function next() {
  
    //let user_answer = fetchIndex();
    // if the question is last then redirect to final page
    if (question_count == questions.length - 1) {
      /*sessionStorage.setItem("time", time);
      clearInterval(mytime);
      location.href = "end.html";*/
      chk();
      question_count--;
      var x=confirm("Do you want to submit it?");
      if(x==true){
        result();
        location.href = "end.html";
      }
    }
    else{
  
      // check if the answer is right or wrong
      chk();
    }
    console.log(arr);
  
    question_count++;
    show(question_count,0);
  }
  

  function prev() {
  
    //let user_answer = fetchIndex();
    // if the question is last then redirect to final page
    if (question_count == 0) {
      ///sessionStorage.setItem("time", time);
      /*clearInterval(mytime);
      location.href = "end.html";*/
      alert("This is the first question");
      chk();
      question_count++;
    }
  
    else{
        // check if the answer is right or wrong
      chk();
    }
    console.log(arr);
  
    question_count--;
    show(question_count,0);
  }

  function colorchng(){
    node=Math.floor(Math.abs(question_count-1)/6);
    child=((question_count)%7)
    console.log(node,child);
    document.getElementById("indx").childNodes[node*2].children[child].style.color="black";
    document.getElementById("indices").childNodes[node*2].children[child].style.color="black";
  }

  function chk(){
    let user_answer = fetchIndex();
    var ans=questions[question_count].options[user_answer];
    console.log(ans);
    console.log(question_count);
    if(typeof(ans)!="undefined"){
      if (ans == questions[question_count].answer) {
        //points += 4;
        arr[question_count]=4;
        //sessionStorage.setItem("points", points);
      }
      else{
        arr[question_count]=0;
      }
      colorchng();
    }
  }
  
  function show(count,inp) {
    if(inp==1){
        chk();
        question_count=count;
    }
    let question = document.getElementById("questions");
    let answer = document.getElementById("answers");
    let [first, second, third, fourth] = questions[count].options;

    question.innerHTML = `
    <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 100%;">
    <img src="https://labs.tadigital.com/wp-content/uploads/2020/03/MicrosoftTeams-image.png" height=300rem class="card-img-top" alt="200x200">
    <div class="card-body">
      <p class="card-text">Q${count + 1}. ${questions[count].question}</p>
    </div>
  </div>
    `;
  
    answer.innerHTML = `
    <div class="card shadow-sm p-3 mb-3 bg-body rounded" name="quest" id="que">
    <!--<img src="https://mma.prnewswire.com/media/1477373/TCS_Logo.jpg?p=facebook" class="card-img-top" alt="200x200">-->
    <div class="card-body">
      <p class="card-text">${first}</p>
    </div>
  </div>
  <div class="card shadow-sm p-3 mb-3 bg-body rounded" name="quest" id="que">
    <!--img src="https://mma.prnewswire.com/media/1477373/TCS_Logo.jpg?p=facebook" class="card-img-top" alt="200x200">-->
    <div class="card-body">
      <p class="card-text">${second}</p>
    </div>
  </div>
  <div class="card shadow-sm p-3 mb-3 bg-body rounded" name="quest" id="que">
    <!--img src="https://mma.prnewswire.com/media/1477373/TCS_Logo.jpg?p=facebook" class="card-img-top" alt="200x200">-->
    <div class="card-body">
      <p class="card-text">${third}</p>
    </div>
  </div>
  <div class="card shadow-sm p-3 mb-3 bg-body rounded" name="quest" id="que">
    <!--img src="https://mma.prnewswire.com/media/1477373/TCS_Logo.jpg?p=facebook" class="card-img-top" alt="200x200">-->
    <div class="card-body">
      <p class="card-text">${fourth}</p>
    </div>
  </div>
    `;
    toggleActive();
  }

  function index(){
      let ind=document.getElementById("indx");
      var i;
      var p;
      var btngr='<div class="container-fluid btn-group me-2" role="group" style="padding: 2px;">';
      var str="";
      for(i=1;i<=questions.length;i++){
          p=leftPad(i,2);
          if(i%7==1){
            str = str+btngr+`
            <button type="button" class="btn btn-secondary" onclick="show(${i-1},1)">${p}</button>
            `;
            console.log(i);
          }
          else if(i%7==0){
            str += `
            <button type="button" class="btn btn-secondary"  onclick="show(${i-1},1)">${p}</button>
            </div>
            `;
          }
          else if(i==questions.length){
            str = str+`
            <button type="button" class="btn btn-secondary"  onclick="show(${i-1},1)">${p}</button>
            </div>
            `;
          }
          else{
            str += `
            <button type="button" class="btn btn-secondary"  onclick="show(${i-1},1)">${p}</button>
            `;
          }
      }
      console.log(str);
      ind.innerHTML=str;
      document.getElementById("indices").innerHTML=str;
      document.getElementById("brand").innerHTML="Welcome! "+window.sessionStorage.getItem("name");
  }

  function leftPad(number, targetLength) {
    var output = number + '';
    while (output.length < targetLength) {
        output = '0' + output;
    }
    console.log(output);
    return output;
}
  
  function toggleActive() {
    let option = document.getElementsByName('quest');
    for (let i = 0; i < option.length; i++) {
      option[i].onclick = function() {
        for (let i = 0; i < option.length; i++) {
          if (option[i].classList.contains("active")) {
            option[i].classList.remove("active");
          }
        }
        option[i].classList.add("active");
      };
    }
  }
  //data-bs-toggle="collapse" data-bs-target="#indx" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" 
  function fetchIndex(){
    var correct;
    let option = document.getElementsByName('quest');
    for (let i = 0; i < option.length; i++) {
      if (option[i].classList.contains("active")) {
        correct=i;
        break;
      }
    }
    return correct;

  }