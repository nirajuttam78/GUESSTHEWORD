player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
document.getElementById("player1_name").innerHTML = player1_name + ": ";
document.getElementById("player2_name").innerHTML = player2_name + ": ";

player1_score = 0;
player2_score = 0;

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn -" + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn -" + player2_name;

question_turn = "player1";
answer_turn = "player2";

function send() {
    get_word = document.getElementById("word").value;
    console.log(get_word);
    word = get_word.toLowerCase();
    console.log(word);
    length_word = word.length;
    middle_letter = length_word / 2;
    char1 = word.charAt(1);
    console.log(char1);
    char2 = word.charAt(middle_letter);
    console.log(char2);
    char3 = word.charAt(length_word - 1);
    console.log(char3);
    remove_char1 = word.replace(char1, "_");
    remove_char2 = remove_char1.replace(char2, "_");
    remove_char3 = remove_char2.replace(char3, "_");
    console.log(remove_char3);
    question_line = "<h4 id='word_display'> Q. " + remove_char3 + "</h4>";
    input_line = "<br> Answer : <input type='text' id='input_check_box'>";
    button_line = "<br> <br> <button class='btn btn-info' onclick='check()'> Submit your answer </button>";
    row = question_line + input_line + button_line;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

function check() {
    answer = document.getElementById("input_check_box").value;
    answer_word = answer.toLowerCase();
    console.log(answer_word);
    if (word == answer_word) {
        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn -" + player2_name;
    }
    else {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn -" + player1_name;
    }
    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn -" + player2_name;
    }
    else {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn -" + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}