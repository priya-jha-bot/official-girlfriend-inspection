function startInspection() {

    alert("Inspection Started");

    document.getElementById("startButton").style.display = "none";

    document.getElementById("title").innerHTML = "Question 1 💖";

    document.getElementById("question").innerHTML =
        "Do you find your girlfriend cute 🤭 or annoying 😔?";

    document.getElementById("buttons").innerHTML = "";

    // Cute Button
    let cuteButton = document.createElement("button");
    cuteButton.innerHTML = "💖 She is cute";

    cuteButton.onclick = function () {

        document.getElementById("buttons").innerHTML = "";

        document.getElementById("title").innerHTML = "Inspection Result ✅";

        document.getElementById("question").innerHTML =
            "Excellent observation skills, sir 👀<br><br>" +
            "Obviously, your girlfriend is adorable 💖<br><br>" +
            "Next inspection level unlocked 🔓";

        let nextButton = document.createElement("button");
        nextButton.innerHTML = "➡ Next Question";

        nextButton.onclick = function () {
            question2();
        };

        document.getElementById("buttons").appendChild(nextButton);
    };

    // Annoying Button
    let annoyingButton = document.createElement("button");
    annoyingButton.innerHTML = "😡 She is annoying";

    annoyingButton.onclick = function () {
        alert("🚨 Wrong answer detected!\n\nPlease reconsider your decision, sir.");
    };

    // Display Question 1 buttons
    document.getElementById("buttons").appendChild(cuteButton);
    document.getElementById("buttons").appendChild(annoyingButton);
}


// ===========================
// Question 2
// ===========================

function question2() {

    document.getElementById("title").innerHTML = "Question 2 💖";

    document.getElementById("question").innerHTML =
        "Why do you love me? 🤨❤️";

    document.getElementById("buttons").innerHTML = "";

    let option1 = document.createElement("button");
    option1.innerHTML = "🌸 She has long ahh dihhhh😌";

    let option2 = document.createElement("button");
    option2.innerHTML = "💪 Massive biceps 😤";

    let option3 = document.createElement("button");
    option3.innerHTML = "🍒 Boobies 👀";

    let option4 = document.createElement("button");
    option4.innerHTML = "✨ All three. Obviously.";

    option1.onclick = function () {
        showResult(
            "📏 Height appreciation detected!<br><br>" +
            "The inspection suspects you're hiding a few more reasons. 🤨"
        );
    };

    option2.onclick = function () {
        showResult(
            "💪 Biceps appreciation acknowledged.<br><br>" +
            "Gym membership verified. 😎"
        );
    };

    option3.onclick = function () {
        showResult(
            "🚨 Honesty Level: 100%<br><br>" +
            "The inspection appreciates your honesty. 😂"
        );
    };

    option4.onclick = function () {
        showResult(
            "🏆 PERFECT ANSWER!<br><br>" +
            "Exceptional observational skills detected. 💖<br><br>" +
            "Bonus points awarded. ✨"
        );
    };

    document.getElementById("buttons").appendChild(option1);
    document.getElementById("buttons").appendChild(option2);
    document.getElementById("buttons").appendChild(option3);
    document.getElementById("buttons").appendChild(option4);
}


// ===========================
// Result Function
// ===========================

function showResult(message) {

    document.getElementById("title").innerHTML = "Inspection Result ✅";

    document.getElementById("question").innerHTML = message;

    document.getElementById("buttons").innerHTML = "";

    let nextButton = document.createElement("button");
    nextButton.innerHTML = "Next Question";

    nextButton.onclick = function () {
        question3();
    };

    document.getElementById("buttons").appendChild(nextButton);
}

function question3(){
    document.getElementById("title").innerHTML="Question 3 💖";
    document.getElementById("question").innerHTML ="Can she annoy you forever? 😌";
    document.getElementById("buttons").innerHTML = "";

    let option1 = document.createElement("button");
    option1.innerHTML = "❌ Nope.";

    let option2 = document.createElement("button");
    option2.innerHTML = "🤔 Maybe.";

    let option3 = document.createElement("button");
    option3.innerHTML = "❤️ Yes, I have signed up for it.";
 // Option 1
    option1.onclick = function(){

        alert("🚨 Incorrect response detected!\n\nPlease reconsider your answer.");

    };

    // Option 2
    option2.onclick = function(){

        alert("🤨 The inspection believes you already know the correct answer.");

    };

    // Option 3
    option3.onclick = function(){

        lifetimeSubscription();

    };

    document.getElementById("buttons").appendChild(option1);
    document.getElementById("buttons").appendChild(option2);
    document.getElementById("buttons").appendChild(option3);

}
function lifetimeSubscription(){

    document.getElementById("title").innerHTML ="🎉 Lifetime Subscription Activated 💖";

    document.getElementById("question").innerHTML =

    "━━━━━━━━━━━━━━━━━━━━━━<br><br>" +

    "<b>Benefits Included:</b><br><br>" +

    "✔ Random teasing<br>" +
    "✔ Unlimited cuddles<br>" +
    "✔ Mood swings<br>" +
    "✔ \"I'm fine.\" investigations<br>" +
    "<b>Refund Policy:</b> ❌ Not applicable";

    document.getElementById("buttons").innerHTML = "";
    let nextButton=document.createElement("button");
    nextButton.innerHTML="Next Question";
    nextButton.onclick=function(){
        question4();
    };
    document.getElementById("buttons").appendChild(nextButton);
}
// Question 4
function question4(){

    document.getElementById("title").innerHTML =
    "Question 4 💖";

    document.getElementById("question").innerHTML =
    "How much do you think your girlfriend loves you? 🤭❤️";

    document.getElementById("buttons").innerHTML = "";

    let option1 = document.createElement("button");
    option1.innerHTML = "🌱 1%";

    let option2 = document.createElement("button");
    option2.innerHTML = "🌼 50%";

    let option3 = document.createElement("button");
    option3.innerHTML = "🌎 100%";

    let option4 = document.createElement("button");
    option4.innerHTML = "🚫 ERROR: This value cannot be calculated";



    option1.onclick = function(){

        alert("🚨 Critical Miscalculation!\n\nThe inspection committee is disappointed.\n\nPlease think again.");

    };



    option2.onclick = function(){

        alert("⚠️ Nice attempt!\n\nUnfortunately, you're only halfway there. 😌");

    };



    option3.onclick = function(){

        alert("⚠️ Good try...\n\nBut push harder. 😏");

    };



    option4.onclick = function(){

        inspectionComplete();
    };



    document.getElementById("buttons").appendChild(option1);
    document.getElementById("buttons").appendChild(option2);
    document.getElementById("buttons").appendChild(option3);
    document.getElementById("buttons").appendChild(option4);

}
function inspectionComplete(){

    document.getElementById("title").innerHTML =
    "✅ Inspection Completed";

    document.getElementById("question").innerHTML =

    "Congratulations! 🎉<br><br>" +

    "You have successfully completed all four inspection rounds.<br><br>" +

    "The inspection committee has now prepared your official report.<br><br>" +

    "<b>Click below to reveal your results.</b>";

    document.getElementById("buttons").innerHTML = "";

    let resultButton = document.createElement("button");

    resultButton.innerHTML = "📊 Check Results";

    resultButton.onclick = function(){

        finalResult();

    };

    document.getElementById("buttons").appendChild(resultButton);

}
        function finalResult(){

    document.getElementById("title").innerHTML =
    "📜 Final Inspection Report";

    document.getElementById("question").innerHTML =

    "Scanning...<br><br>" +

    "██████████████ 100%<br><br>" +

    "<b>Result:</b><br>" +

    "Measurement Failed.<br><br>" +

    "Reason:<br>" +
    "Love level exceeds system capacity. ❤️<br><br>" +

    "Inspection Conclusion:<br><br>" +

    "Your girlfriend is hopelessly,<br>" +
    "madly,<br>" +
    "ridiculously in love with you. 💖<br><br>";

    document.getElementById("buttons").innerHTML = "";

    let noteButton = document.createElement("button");

    noteButton.innerHTML = "💌 Read Confidential Note";

    noteButton.onclick = function(){

    catDelivery();

 };

    document.getElementById("buttons").appendChild(noteButton);
 
}
function catDelivery(){
    
    document.querySelector(".card").style.display = "none";

    document.getElementById("catContainer").style.display = "block";

    document.getElementById("catContainer").style.left = "45%";

    setTimeout(function(){

        let bubble = document.getElementById("speechBubble");

        bubble.style.display = "block";

        setTimeout(function(){
            bubble.style.opacity = "1";
        },100);

        showDeliveryButton();

    },3000);

}
function showDeliveryButton(){

    let button = document.createElement("button");

    button.innerHTML = "💌 Accept Delivery";

    button.style.marginTop = "20px";

    button.onclick = function(){

        finalNote();

    };

    document.getElementById("speechBubble").appendChild(button);

}
function finalNote(){

    document.getElementById("catContainer").style.display = "none";

    document.querySelector(".card").style.display = "block";

    document.getElementById("title").innerHTML = "💌 Confidential Letter";

    document.getElementById("question").innerHTML =

    "<b>Hii bhondu! 🤍</b><br><br>" +

    "Congratulations! You officially passed the Official Girlfriend Inspection. 🎉<br><br>" +

    "Now... before you leave, I wanted to tell you something.<br><br>" +

    "Priya loves irritating the absolute hell out of you... although somehow you're even better at ragebaiting her. 😒😭<br><br>" +

    "She loves every part of you...<br>" +

    "<i>(except when you're busy 😤)</i><br><br>" +

    "<b>I love you for your everything .</b><br><br>" +

    "For the parts of you that I know...<br>" +
    "and for the parts you quietly carry by yourself.<br><br>" +
    "and that biceps works as cherry on top🤭.<br><br>"+


    "<b>but i hope you remember that you never have to face anything alone</b><br>" +

    "<b>Just come to me. ❤️</b><br><br>" +


    "Now just keep showering me with your affection.<br>" +

    "<b>I love you, Aalu Palu. ❤️</b><br><br>" +

    "— Priya 🤍";

    document.getElementById("buttons").innerHTML = "";

    let endButton = document.createElement("button");

    endButton.innerHTML = "🤍 Close Letter";

    endButton.onclick = function(){

        ending();

    };

    document.getElementById("buttons").appendChild(endButton);

}
function ending(){

    document.getElementById("title").innerHTML = "❤️";

    document.getElementById("question").innerHTML =

    "Made with ❤️<br>" +
    "Especially for Kishu.<br><br>" +

    "Love,<br>" +
    "Aapki Priya💋";

    document.getElementById("buttons").innerHTML = "";

}