var resultsContainer = document.getElementById("results");
var btn = document.getElementById("submit_btn");

btn.addEventListener("click",function() {
    var input_url = document.getElementById('input_link').value;
    if (input_url == ''){
        add_error('Please input a url');
        return;
    }
    if (input_url.includes('.com/') == false && input_url.includes('.net/') ==  false) {
        add_error('Please input a valid url');
        return;
    }

    if (input_url.includes('.com/') == true) {
        if (input_url.includes('?o=')) {
            var start = input_url.indexOf('.com/') + 5;
            input_url = input_url.substring(start, input_url.indexOf('?o='));
        } else {
            input_url = input_url.substring(input_url.indexOf('.com/') + 5, input_url.length)
        }
    }
    if (input_url.includes('.net/') == true) {
        if (input_url.includes('?o=')) {
            var start = input_url.indexOf('.net/') + 5;
            input_url = input_url.substring(static, input_url.indexOf('?o='));
        } else {
            input_url = input_url.substring(input_url.indexOf('.net/') + 5, input_url.length)
        }
    }
    console.log(input_url)
    
    var url = 'https://BypassAPI.jonathanlin04.repl.co/' + input_url;

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET',url)
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        add_link(ourData);
    };
    ourRequest.send();
});

function add_error(error_code) {
    resultsContainer.insertAdjacentHTML('beforeend','<p>' + error_code+ '</p>');
    console.log(error_code)
}

function add_link(data) {
    resultsContainer.insertAdjacentHTML('beforeend','<p>' + data.new_link + '</p>');
    console.log(data)
}