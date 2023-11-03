var body = document.querySelector('.build');
console.log(body)
var carts = document.querySelectorAll(".appartement");
var overlay = document.querySelectorAll('.overal');
var p = document.querySelectorAll('i');
count = 0;
var curentid = "";
var varible = false;
var openedclass = '';
var score = 0;
carts.forEach((element, i) => {
    element.addEventListener('click', function() {
        // var current = p[i].id;
            
        if (overlay[i].classList.contains('overr')) {
            varible = false
            overlay[i].style.bottom = "0";
            overlay[i].classList.remove('overr');
            count--;
        } else {
            if ( count === 2 && varible == false) {
                overlay.forEach(overl => {
                    overl.style.bottom = "0";
                    overl.classList.remove('overr');
                    
                });
                count = 0;
            }
            overlay[i].style.bottom = "100%";
            overlay[i].classList.add('overr');
            count++;
            if (curentid == p[i].id){
                console.log("oky")
                varible = true;
                score++
                overlay[i].classList.remove('overal');
                openedclass.classList.remove('overal');
                
                count--;
            }if(score == 10){
                var win = document.createElement('img');
                win.src = "you-win.png";
                body.appendChild(win);
                win.style.position = "absolute";
                win.style.left = "0";
                win.style.zIndex = "4";
                var audio = document.querySelector("audio");
                audio.play();
                
            }
            else{
                console.log("not oky") 
                varible = false
            }
            curentid = p[i].id
            openedclass = overlay[i];
        }
        console.log(openedclass);
        console.log(overlay[i]);
        console.log(score)

    });
    // carts.forEach((check) => {
    //     check.classList.contains('overal')
    //     console.log(check);
    //     if(check.classList.contains('overal')){
    //        alert('you are wine')
    //     }
    // });
    
});