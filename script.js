document.getElementById('addTime').addEventListener('click', function() {
    var hours = document.getElementById('hoursInput').value || '0';
    var minutes = document.getElementById('minutesInput').value || '0';
    var timeText = hours + " hours and " + minutes + " minutes";
    var node = document.createElement("LI");
    node.className = "list-group-item";
    var textnode = document.createTextNode(timeText);
    node.appendChild(textnode);
    document.getElementById("timeList").appendChild(node);
});

document.getElementById('calculateSum').addEventListener('click', function() {
    var times = document.getElementById("timeList").getElementsByTagName("LI");
    var totalMinutes = 0;
    for (var i = 0; i < times.length; i++) {
        var timeParts = times[i].innerText.split(' ');
        totalMinutes += parseInt(timeParts[0]) * 60 + parseInt(timeParts[3]);
    }
    var hours = Math.floor(totalMinutes / 60);
    var minutes = totalMinutes % 60;
    document.getElementById("totalTime").innerText = hours + " hours and " + minutes + " minutes";
});
