document.$ = require("jquery");  
document.spLoader = require("@microsoft/sp-http"); //MODULE FOR SHAREPOINT REQUESTS

console.log(document.spLoader);

$('#console').keypress(function(e) {
if (e.keyCode == 13) {
        var t = $('#console').val();
        $('#console').val(eval(t)); 
    } 
});
 
 
 
