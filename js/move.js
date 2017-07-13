function Player(blood,speed){
    this.blood=blood;
    this.speed=speed;
}
/*敌人*/
function Enner(blood,speed,w,h) {
    this.blood = blood;
    this.speed = speed;
    this.w = w;
    this.h = h;
    this.enner_move = function () {
        let speed = this.speed;
        this.style.top = this.offsetTop + speed + "px";
        return this.offsetTop;
        /*let bg=document.getElementsByClassName("bg")[0];
         let timer=setInterval(
         function(){
         let obj=document.createElement("div");
         obj.setAttribute("class","enner");
         obj.style.left=parseInt(Math.random()*bg.clientWidth)+"px";
         bg.appendChild(obj);
         let time_4=setInterval(function(){
         obj.style.top=obj.offsetTop+speed+"px";
         if(obj.offsetTop>bg.clientHeight){
         bg.removeChild(obj);
         //clearInterval(timer);
         }
         },200);
         //console.log(time_1);
         /!*let player=document.getElementById("player");
         if(obj.offsetTop+obj.clientHeight>=player.offsetTop&&obj.offsetTop+obj.clientHeight<=player.offsetTop+player.clientHeight &&obj.offsetLeft<=player.offsetLeft+player.clientWidth&&obj.offsetLeft+obj.clientWidth>=player.offsetLeft){
         bg.removeChild(obj);
         bg.removeChild(player);
         clearInterval(timer);
         }*!/

         // console.log(enner[i].offsetTop);

         },200);
         }*/
    }
}
/*子弹*/
function Bullet(speed){
    this.speed=speed;
    this.bullet_move=function(){
        let speed=this.speed;
        this.style.top=this.offsetTop+speed+"px";
        return this.offsetTop;
    }

}

/*创建player*/
window.onload=function(){
    let Obj=new Player(30,10);
    let Obj_1=document.createElement("div");
    Obj_1.setAttribute("id","player");
    let bg=document.getElementsByClassName("bg")[0];
    bg.appendChild(Obj_1);
}
/*控制player移动*/
window.onkeydown=function(event){
    // console.log(event);
    let speed=10;
    let speed_1=10;
    let e=event || window.event || document.event;
    let y=document.getElementById("player");
    let x=document.getElementsByClassName("bg")[0];
    let x1=x.clientWidth-y.clientWidth;
    let y1=x.clientHeight-y.clientHeight;
    // console.log(y.offsetLeft)    
    // console.log(x1);
        if(e && e.keyCode==87)
        {  
            if(y.offsetTop >= 0 && y.offsetTop <= y1)
            {
                if (y.offsetTop==0) 
                {
                        y.style.top=y.offsetTop;
                }else{
                    if(y.offsetTop-speed<0){
                        y.style.top=0+"px";
                    }else{
                        y.style.top=y.offsetTop-speed+"px";
                    }
                }         
            }
        }else if(e && e.keyCode==83){
            if(y.offsetTop >= 0 && y.offsetTop <= y1)
            {
                if (y.offsetTop==y1){
                    y.style.top=y.offsetTop;
                }else{
                    if(y.offsetTop+speed>y1){
                        y.style.top=y1+"px";
                    }
                    y.style.top=y.offsetTop+speed+"px";
                }
            }
        }else if(e && e.keyCode==65){
            if(y.offsetLeft>=0 && y.offsetLeft<=x1){
                if(y.offsetLeft==0){
                    y.style.left=y.offsetLeft;
                }else{
                    if(y.offsetLeft-speed_1<0){
                        y.style.left=0+"px";
                    }else{
                        y.style.left=y.offsetLeft-speed_1+"px";
                    }
                }
            }
        }else if(e && e.keyCode==68){
            if(y.offsetLeft>=0 && y.offsetLeft<=x1){
                if(y.offsetLeft==x1){
                    y.style.left=y.offsetLeft;
                }else{
                    if(y.offsetLeft+speed_1>x1){
                        y.style.left=x1+"px";
                    }else{
                        y.style.left=y.offsetLeft+speed_1+"px";
                    }
                }
            }
        }
}
/*enner的移动*/
/*
function enner_move(){
    let speed=5;
    let bg=document.getElementsByClassName("bg")[0];
    let enner=document.getElementsByClassName("enner");
    // console.log(bg.clientHeight);
        let timer=setInterval(
        function(){
            let obj=document.createElement("div");
            obj.setAttribute("class","enner");
            obj.style.left=parseInt(Math.random()*bg.clientWidth)+"px";
            bg.appendChild(obj);
            let time_4=setInterval(function(){
                obj.style.top=obj.offsetTop+speed+"px";
                if(obj.offsetTop>bg.clientHeight){
                    bg.removeChild(obj);
                    //clearInterval(timer);
                }
            },200);
            //console.log(time_1);
            let player=document.getElementById("player");
            if(obj.offsetTop+obj.clientHeight>=player.offsetTop&&obj.offsetTop+obj.clientHeight<=player.offsetTop+player.clientHeight &&obj.offsetLeft<=player.offsetLeft+player.clientWidth&&obj.offsetLeft+obj.clientWidth>=player.offsetLeft){
                bg.removeChild(obj);
                bg.removeChild(player);
                clearInterval(timer);
            }

       // console.log(enner[i].offsetTop);

        },200);
} 
*/
/*射击*/
function sheji(w,h){
    let sheji_w=w;
    let sheji_h=h;
    let bg=document.getElementsByClassName("bg")[0];
    let time_1=setInterval(function(){
        let player=document.getElementById("player");
        if(player==null){
            clearInterval(time_1);
        }else{
            let x=player.offsetLeft+(player.clientHeight/2)-(sheji_w/2)+"px";
            let y=player.offsetTop-h+"px";
            // let she="<div class='zidan' style='top:"+y+";left:"+x+";'></div>";
            let obj=document.createElement("div");
            obj.setAttribute("class","zidan");
            obj.style.width=w+"px";
            obj.style.height=h+"px";
            obj.style.top=y;
            obj.style.left=x;
            bg.appendChild(obj);
            let time_2=setInterval(function(){
                obj.style.top=obj.offsetTop-10+"px";
                if(obj.offsetTop+h<0){
                    bg.removeChild(obj);
                }
            },200);
            let enner=document.getElementsByClassName("enner");
            /*if(enner==null){}else{
                for(let j=0;j<enner.length;j++){
                    if(obj.offsetTop<=enner[j].offsetTop+enner[j].clientHeight&&obj.offsetLeft+obj.clientWidth<=enner[j].offsetLeft&&obj.offsetLeft<=enner[j].offsetLeft+enner[j].clientWidth){
                        bg.removeChild(obj);
                        bg.removeChild(enner[j]);
                    }
                }
            }*/


        }
    },100);
    //return time_1;
}
/*子弹消失*/
function zidan(){
    let bg=document.getElementsByClassName("bg")[0];
    //let zidan_h=h;
    let time_3=setInterval(
        function(){
            let zidan=document.getElementsByClassName("zidan");
            let enner=document.getElementsByClassName("enner");
            let array=[];
            let array_1=[];
            //console.log(zidan);
            for(let i=0;i<zidan.length;i++){
                let obj={};
                obj.t=zidan[i].offsetTop;
                obj.l=zidan[i].offsetLeft;
                obj.h=zidan[i].clientHeight;
                obj.w=zidan[i].clientWidth;
                array[i]=obj;

            }
            for(let j=0;j<enner.length;j++){
                let obj1={};
                obj1.t=enner[j].offsetTop;
                obj1.l=enner[j].offsetLeft;
                obj1.h=enner[j].clientHeight;
                obj1.w=enner[j].clientWidth;
                array_1[j]=obj1;
                /*if(zidan[i].offsetTop<=enner[j].offsetTop+enner[j].clientHeight&&zidan[i].offsetLeft+zidan[i].clientWidth<=enner[j].offsetLeft&&zidan[i].offsetLeft<=enner[j].offsetLeft+enner[j].clientWidth){
                 bg.removeChild(zidan[i]);
                 bg.removeChild(enner[j]);
                 }*/
            }
            /*for(let k=0;k<array.length;k++){
                for(let )
            }*/
            /*if(zidan!=null){
                for(let i=0;i<zidan.length;){
                    if(zidan[i].offsetTop+h<0){
                        bg.removeChild(zidan[i]);
                    }
                }
            }*/
            
        },1)
}
