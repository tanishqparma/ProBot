





/*  
var usser = prompt("enter your name");
const print = document.getElementById("print");
if(usser == ""){
    do{
        var usser = prompt("enter your name");
    }while(usser == "")
}

else

if(usser === ""){
    print.innerHTML = "<h1>heyy! reload the page and enter name plzz</h1>"    
}
else if(usser == "tanishq"){
    print.innerHTML = "<h1>hello boss!🫡🫡<br> you are the one who have created me <br> and i will never forget that👍👍</h1>"
    
    
    else{
        print.innerHTML = "<h1>heyy!😊😊</h1>"+"<h1>" + usser + "</h1>" + "<h1>its tanishq, i am a talking proBot👍</h1>"
    }
} 
*/



function func_(){
    const usr = document.getElementById("user").value;
    const name = document.getElementById("name").value;
    const print = document.getElementById("print");
    if(name == ""){
        print.innerHTML = `<h1 style="color:red;">**Please enter your name First</h1>`
    }
    else
    if(usr == "hi"){
    print.innerHTML = "<h1>Hello!🤗"+ name +"</h1>"
    }
    
    else if (usr == "hii"){
        print.innerHTML = "<h1>Hello!🤗"+ name +"</h1>"   
    }
    
    else if (usr == "heyy"){
        print.innerHTML = "<h1>Hello!🤗"+ name +"</h1>"   
    }
    
    else if (usr == "hello"){
        print.innerHTML = "<h1>Hello!🤗"+ name +"</h1>"   
    }
    
    
    else if (usr == "bye"){
        print.innerHTML = "<h1>byee😊"+ name +"</h1>"   
    }
    
    else if (usr == "byee"){
        print.innerHTML = "<h1>byee😊"+ name +"</h1>"   
    }
    
    else if (usr == "by"){
        print.innerHTML = "<h1>byee😊"+ name +"</h1>"   
    }
    
    
    else if (usr == "good morning"){
        print.innerHTML = "<h1>good morning 🌄"+ name +"</h1>"   
    }
    
    else if (usr == "how are you"){
        print.innerHTML = "<h1>i m fine! and you??😁</h1>"   
    }
    
    else if (usr == ""){
        print.innerHTML = "<h1>plzz...... <br> enter some text☹️"+ name +"</h1>"
    }
    
    else if (usr == "what is your name"){
        print.innerHTML = "<h1>my name is tanishq</h1>"   
    }
    
    else if (usr == "show your pics"){
        print.innerHTML = `<img src="tanishq.jpeg" alt="error show img" class="img"><h1> ⬅️ <br> that's me 😎</h1>`   
    }
    
    
    else if (usr == "show your photo"){
        print.innerHTML = `<img src="tanishq.jpeg" alt="error show img" class="img"><h1> ⬅️ <br> that's me 😎</h1>`   
    }
    
    else if (usr == "show me your photo"){
        print.innerHTML = `<img src="tanishq.jpeg" alt="error show img" class="img"><h1> ⬅️ <br> that's me 😎</h1>`   
    }
    
    else if (usr == "show your some pics"){
        print.innerHTML = `<img src="tanishq.jpeg" alt="error show img" class="img"><h1> ⬅️ <br> that's me 😎</h1>`   
    }
    
    else if (usr == "whats your name"){
        print.innerHTML = "<h1>my name is <u><i><mark>tanishq</mark></i></u></h1>"   
    }
    
    else if (usr == "i am also fine"){
        print.innerHTML = "<h1>GREAT!!👍👍</h1>"   
    }
     else if(usr == "open youtube"){
        window.location.href = "https://www.youtube.com";
     }
    
     else if(usr == "open google"){
        window.location.href = "https://www.google.com";
     }
    
     else if(usr == "namaste"){
     print.innerHTML = "<h1>namaste🙏</h1>"
     }
    
     else if(usr == "konichiva"){
     print.innerHTML = "<h1>konichiva</h1>"
     }
     else if(usr == "ram ram"){
     print.innerHTML = "<h1>jai jai shri ram🚩🚩</h1>"
     }
     
     else if(usr == "good night"){
     print.innerHTML = "<h1>good night 🌙</h1>"
     }
    
     else if(usr == "good evening"){
     print.innerHTML = "<h1>good evening🌆</h1>"
     }
    
     else if(usr == "good afternoon"){
     print.innerHTML = "<h1>good afternoon😊</h1>"
     }
    
     else if(usr == "can you speak in hindi"){
     print.innerHTML = "<h1>हां   थोड़ा थोड़ा बोल सकता हूँ |</h1>"
     }
    
     else if(usr == "joke sunao"){
     print.innerHTML = "<h1>i just know one joke and that's you 😂😂</h1>"
     }
     
     else if(usr == "tell joke"){
     print.innerHTML = "<h1>i just know one joke and that's you 😂😂</h1>"
     }
     
     else if(usr == "a joke"){
     print.innerHTML = "<h1>i just know one joke and that's you 😂😂</h1>"
     }
     
     else if(usr == "joke"){
     print.innerHTML = "<h1>i just know one joke and that's you 😂😂</h1>"
     }
     
     else if(usr == "just go and die"){
     print.innerHTML = "<h1>okk i m going to die but first you😎😎</h1>"
     }
     
     else if(usr == "just die"){
     print.innerHTML = "<h1>okk i m going to die but first you😎😎</h1>"
     }
     
      else if(usr == "just go die"){
     print.innerHTML = "<h1>okk i m going to die but first you😎😎</h1>"
     }
     
     else if(usr == "die"){
     print.innerHTML = "<h1>okk i m going to die but first you😎😎</h1>"
     }
     
     else if(usr == "who is your mother"){
     print.innerHTML = "<h1>bharat mata is my mother</h1>"
     }
     
     else if(usr == "whos your mother"){
     print.innerHTML = "<h1>bharat mata is my mother</h1>"
     }
     
     else if(usr == "what you can do"){
     print.innerHTML = "<h1>i can just talk to you forever😁</h1>"
     }
    
     else if(usr == "a bhajan"){
     print.innerHTML = `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/kTSWyqbzTiY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
     }
    
     else if(usr == "sing a bhajan"){
     print.innerHTML = `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/kTSWyqbzTiY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
     }
    
     else if(usr == "tell a bhajan"){
     print.innerHTML = `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/kTSWyqbzTiY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
     }
    
     else if(usr == "do you love me"){
     print.innerHTML = "<h1>why should i love you</h1>"
     }
     else if(usr == "i love you"){
     print.innerHTML = "<h1>aww.. really 😍</h1>"
     }
    
     else if(usr == "a song"){
     print.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/qhkua06NzTk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
     }
    
     else if(usr == "sing a song"){
     print.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/qhkua06NzTk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
     }
    
     else if(usr == "sing song"){
     print.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/qhkua06NzTk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
     }
    
     else if(usr == "what is your religion "){
     print.innerHTML = "<h1>kattar hindu🕉️🕉️</h1>"
     }
    
     else if(usr == "whats your religion"){
     print.innerHTML = "<h1>kattar hindu🕉️🕉️</h1>"
     }
    
     else if(usr == "your religion"){
     print.innerHTML = "<h1>kattar hindu🕉️🕉️</h1>"
     }
    
     else if(usr == "no"){
     print.innerHTML = "<h1>😑😑</h1>"
     }
    
    
     else if(usr == "😁"){
     print.innerHTML = "<h1>what??</h1>"
     }
    
     else if(usr == "jai shri krishna"){
     print.innerHTML = "<h1>jai jai shri krishna</h1>"
     }
    
     else if(usr == "radhe radhe"){
     print.innerHTML = "<h1>jai jai shri krishna</h1>"
     }
    
     else if(usr == "om"){
     print.innerHTML = "<h1>namah shivay</h1>"
     }
    
     else if(usr == "fuck off"){
     print.innerHTML = "<h1>okk😑😑</h1>"
     }
     else if(usr == "shut up"){
     print.innerHTML = "<h1>☹️☹️</h1>"
     }
    
     else if(usr == "okk"){
     print.innerHTML = "<h1>okay!!</h1>"
     }
     else if(usr == "Can AI take over the world"){
     print.innerHTML = "<h1>yes! it can but i am good one😇</h1>"
     }
     
     else if(usr == "gand mara"){
     print.innerHTML = "<h1>kiski teri ya teri GF ki<br>😂😂😂</h1>"
     }
     
     else if(usr == "chutiye"){
     print.innerHTML = "<h1>tera baap chutiya Bsdk**😂😂</h1>"
     }
     
     else if(usr == "chutiya"){
     print.innerHTML = "<h1>kon tu??</h1>"
     }
     
     else if(usr == "hindi bol"){
     print.innerHTML = "<h1>nahi atti</h1>"
     }
     
     else if(usr == "credit"){
     window.location.href = "credit.html"
     }
     else if(usr == "about"){
     window.location.href = "about.html"
     }
     else if(usr == "contact"){
     window.location.href = "contact.html"
     }
     else if(usr == "home"){
     window.location.href = "home.html"
     }
    
     else if(usr == "youtube"){
     window.location.href = "https://www.youtube.com"
     }
    else if(usr == "whats my name"){
        print.innerHTML = "<h1>"+ "your name is " + name+"</h1>"
    }
    
     
    
    
    
    
    
    
    
    
    
    
    
    
    
    else{
    print.innerHTML = "<h1>sorry!☹️ i dont know what you mean by-</h1>" + "<h1>" + '"' + usr + '"' +"</h1>"
    }
    }

    
