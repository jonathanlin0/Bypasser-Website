var resultsContainer = document.getElementById("results");
var btn = document.getElementById("submit_btn");
var ip = "";

function callback (response) {
    console.log(response);

}

function ip2int(ip) {
    return ip.split('.').reduce(function(ipInt, octet) { return (ipInt<<8) + parseInt(octet, 10)}, 0) >>> 0;
}


  

$.ajax({
    type: 'GET',
    dataType:'json',
    async:false,
    url:'https://httpbin.org/ip',
    success: function(responseData) {
        ip = ip2int(responseData.origin);
    },
    error: function(XMLHttpRequest, textStatus, errorThrown){
        console.log('Error');
    }
    
})

window.onload = function() {

    var url = 'https://Bypasser-API.glasstea.repl.co/' + ip;

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET',url)
    ourRequest.onload = function() {
        console.log('hello!')
        console.log(ourRequest.responseText);
    };
    ourRequest.send();
    return 'hi'
};

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
    if (input_url.includes('dynamic')) {
        add_error('That is a dynamic link. Please enter a static link.');
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
    
    var url = 'https://Bypasser-API.glasstea.repl.co/' + input_url + '/' + ip;

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET',url)
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        add_link(ourData);
    };
    ourRequest.send();
});

function add_error(error_code) {
    resultsContainer.insertAdjacentHTML('afterbegin','<p>' + error_code+ '</p>');
    console.log(error_code)
}

function add_link(data) {
    resultsContainer.insertAdjacentHTML('afterbegin','<p>' + data.new_link + '</p>');
    console.log(data)
}