

var preloader = document.getElementsByClassName("preloader")[0]

window.onload = function(){

    setTimeout(function(){

        preloader.style.transition = "opacity 300ms"
        preloader.style.opacity = 0;


        setTimeout(function(){

            preloader.style.display = "none"

        }, 400)
    }, 1000)

}



var headerContainer = document.getElementsByClassName("header__container")[0];

var offers = document.getElementsByClassName("offer");
var services = document.getElementsByClassName("service");
console.log(services);





window.onscroll = function(){




    if(scrollY > 2050 ){
            services[0].style.animation = "fadeInUp 1s  forwards"
            services[1].style.animation = "fadeInUp 1s .4s forwards"
            services[2].style.animation = "fadeInUp 1s .8s forwards"
            services[3].style.animation = "fadeInUp 1s 1.2s forwards"
    }


    if(scrollY  > 420){
        headerContainer.classList.add("fixed-bar");


        // offers[0].style.animation = "fadeInUp 1.5s  forwards"
        // offers[1].style.animation = "fadeInUp 1.5s .4s forwards"
        // offers[2].style.animation = "fadeInUp 1.5s .8s forwards"


    }

    else{
        headerContainer.classList.remove("fixed-bar")

    }



    
}



var main = document.getElementsByTagName("main")[0];
var info = document.getElementsByClassName("info__content")[0];


var observer = new IntersectionObserver(function(entries){
    // console.log(entries);
    var entry = entries[0];
   

        if(entry.isIntersecting){
       
        offers[0].style.animation = "fadeInUp 1.5s  forwards"
        offers[1].style.animation = "fadeInUp 1.5s .4s forwards"
        offers[2].style.animation = "fadeInUp 1.5s .8s forwards"
        }
    
});

observer.observe(main);













// Trial 
// var observer = new IntersectionObserver(function(entries){
//     // console.log(entries);
//     // var entry = entries[0];
//     entries.forEach(function(entry){

//         if(entry.isIntersecting){
//         if (entry.target.classList.contains("main") ){
//             offers[0].style.animation = "fadeInUp 1.5s  forwards"
//             offers[1].style.animation = "fadeInUp 1.5s .4s forwards"
//             offers[2].style.animation = "fadeInUp 1.5s .8s forwards"
//         }
//         else {
//             services[0].style.animation = "fadeInUp 1.5s  forwards"
//             services[1].style.animation = "fadeInUp 1.5s .4s forwards"
//             services[2].style.animation = "fadeInUp 1.5s .8s forwards"
//             services[3].style.animation = "fadeInUp 1.5s 1.2s forwards"
//         }
            
        
//     }

//     })
    
    

// });




// observer.observe(info);


