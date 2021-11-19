class GraphBackGround {

    draw(){
            for(let i=0; i<height;i++){
                if(i%20 == 0){
                    if(i%100 == 0){
                        context.lineWidth = "10";
                    } else {
                        context.lineWidth = "5"
                    }
                    context.strokeStyle = "rgb(0,64,123)";
                    context.beginPath();
                    context.moveTo(0,i);
                    context.lineTo(width,i);
                    context.closePath();
                    context.stroke();
                }
        }
    }
}