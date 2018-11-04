var windowWidth = self.innerWidth - 80;
var windowHeight = self.innerHeight - 80;
function abc(){
    var divs = document.getElementsByTagName('div');
    var l = divs.length;
    for(i=0;i<l;i++){
        var x = Math.round(Math.random()*windowWidth);
        var y = Math.round(Math.random()*windowHeight);
        divs[i].style.top=y+'px';
        divs[i].style.left=x+'px';
    }
    
}
abc();
for(var i=0;i<500;i++){
    setInterval(abc,i*1000);
}