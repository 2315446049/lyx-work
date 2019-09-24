 window.onscroll=function(){
        var topScroll =document.documentElement.scrollTop;
        var bignav = document.getElementById("appear");
        if(topScroll <=245){
           bignav.style.display ='none';
        }else if(topScroll >245){ 
		   bignav.style.display = 'block';
        }
    }