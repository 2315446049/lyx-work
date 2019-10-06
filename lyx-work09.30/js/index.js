var img=document.getElementById('middle-top');
var opact=document.getElementById('img-opact');
img.onmouseenter=function(){
	opact.style.display='block';
}
img.onmouseleave=function(){
	opact.style.display='none';
}

 window.onscroll=function(){
        var topScroll =document.documentElement.scrollTop
        var bignav = document.getElementById("return");
        if(topScroll <=1){
           bignav.style.display ='none';
        }else if(topScroll >1){ 
			bignav.style.display = 'block';
        }
    }