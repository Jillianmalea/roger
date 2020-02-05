//builds h3's adds click event
// Write a function that captures the value of i in the for loop.
$(document).ready(function () {
    for (i = 1; i < 11; i++) {
        var h3 = $('<h3></h3>');
        h3.text('Thank You ' + i)
        $(h3).click(Accusations(i));
        $('.h3Container').append(h3);
    }

    function Accusations(index) {
        return function () {
            alert(Roger[index % 1] + " I can't thank you enough for " + thankfuls[index % 10]);
        }
    }
});
//create arrays for friends, locations, weapons
var Roger = ['Roger ,'];
var thankfuls = ['giving me the opportunity to finish this program.', 'supporting me when I thought no one in the world would help me.', 'being so generous.', 'believing in me.', 'giving me a break from pulling 65 hour weeks.', 'being so incredible.', 'providing me with the assistance to be able to focus and forge a future for myself.', 'being my guardian angel.', 'being so selfless.', 'being my newest friend I haven`t met yet.'];
console.log(thankfuls.length);