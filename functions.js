// JAVASCRIPT Functions 

//REVERSE NUMBERS

function reversenumb(num){
    var ans = num + "";
    var ans = ans.split(""); // ans => array
    ans = ans.reverse();  // ans => yarra
    ans = ans.join(""); // ans => string 
    console.log(ans); 
    return ans;
}

// Palindrome or not

function palindrome(str) {
    str = str.toLowerCase();
    str = str.replace(/[^a-z0-9]+/g,'');
    console.log(str);
    var ans = str.split("");
    ans = ans.reverse();
    ans = ans.join("");
    console.log (ans === str ? true:false);
    return ans === str ? true:false;
}

//palindrome ("-19?oda==+ad>O91")

// All combinations 

function combinations(str) {
    var ansArr = [], ans, dr = [];
    ans = str.split("");
    for (var i = 0; i < ans.length; i++){
        for (var j = i; j < ans.length; j++){
            dr = [...ans];
            dr.length = j+1;
            ansArr.push(dr.join(""));               
        }
        ans[i] = ''; 
    }
    console.log(ansArr.join('\n'));
    return (ansArr.join('\n'));
}

//combinations("dog");

function alphabet(str){
    var ans = str.split("");
    ans = ans.sort(); // alphabet sorting is true
    ans = ans.join("");
    console.log(ans);
    return(ans);
}

//alphabet('ertiorisami');

function uppercase(str){
    var dr=[], ans = str.split(' ');
    for (let i in ans){
        var char = ans[i][0].toUpperCase();
        dr = ans[i].split("");
        dr.splice(0, 1, char);
        ans[i]=dr.join('');    
    }
    console.log(ans.join(' '));
    return ans.join(' ');
}

//uppercase('me mivdivar geiget axvreboo nanachi')

function longestWord(str){
    var ans = str.split(' '), aNSWER='';
    for (let i in ans){
        if (ans[i].length > aNSWER.length){
            aNSWER = ans[i];
        }
    }
    console.log(aNSWER);
}

//longestWord('the development tuttorial');

function vowels(str){
    var count=0;
    str = str.toLowerCase();
    for (let i in str){
        if (str[i] == 'a' || str[i] == 'e' ||
        str[i] == 'i' || str[i] == 'o' || str[i] == 'u' ){
            count++;
        }
    }
    console.log(count);
}

//vowels('dAoet sa xarr');

function primeNumber(num){
    if (num == 1){
        return false;
    } else 
    if (num == 2){
        return true;
    } else 
    for (let i=2; i<num; i++ ){
        if (num % 2 == 0){
            return false;
        }
    }  
    return true;
}

//primeNumber(2);

function argTypes(arg){
    console.log( typeof(arg) );
    return typeof(arg);
}

//argTypes(false)

function matrix(n){   //identity matrix
    var ansArr = [];
    for (let i=0; i<n; i++){
        var arr = [];
        for (let j=0; j<n; j++){
            arr.push(0);
        }
        arr[i] = 1;
        ansArr.push(arr);
    }
    console.log(ansArr);
}

//matrix(5);

function lowerAndGreater(arr){
    arr = arr.sort();
    console.log(arr[1]+' '+arr[arr.length-2]);
}

//lowerAndGreater([3,2,1,6,5,4,3,2,1])

function perfectNumeber(num){
    var a, sum=0;
    if (num % 2 ==1 ){
        return false;
    } 
    a = num / 2;
    for (let i=1; i<=a; i++){
        if (num % i == 0){
            sum += i;
        }
    }
    if (sum == num) {
        return true;
    }else {
        return false;
    }
}
//_____________________________________________________

function fact(num){
    if (num == 0){
        return 1;
    } 
    num *= fact(num-1); 
    return num;
}

//console.log(fact(0));
//__________________________________________________

function fibonacci(num){
    if (num == 0){
        return 0;
    }
    if (num == 1){
        return 1;
    }
    return (fibonacci(num-2)+fibonacci(num-1));
}

//console.log(fibonacci(6))