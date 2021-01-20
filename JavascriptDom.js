function jsStyle(){
    text.style.fontSize = '24px';
    text.style.color = 'green';
    text.style.backgroundColor = 'red';
}
//------------------

var myJSON = '{"name":"dato","city":"kutaisi"}';
console.log(typeof(myJSON));
var myObj = JSON.parse(myJSON);
console.log(typeof(myObj));