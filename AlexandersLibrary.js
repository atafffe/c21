function isTouching(movingRect, fixedRect){
    if(movingRect.x - fixedRect.x <(movingRect.width + fixedRect.width)/2 && fixedRect.x - movingRect.x <(movingRect.width + fixedRect.width)/2
   && movingRect.y - fixedRect.y <(movingRect.height + fixedRect.height)/2 && fixedRect.y - movingRect.y <(movingRect.height + fixedRect.height)/2){
     return true; }
     else {
       return false;
     }
  }
  
  function bounceOff(movingRect, fixedRect){
    if(movingRect.x - fixedRect.x <(movingRect.width + fixedRect.width)/2 && fixedRect.x - movingRect.x <(movingRect.width + fixedRect.width)/2){
      movingRect.velocityX = movingRect.velocityX * (-1);
      fixedRect.velocityX = fixedRect.velocityX * (-1);
    }
  
    if(movingRect.y - fixedRect.y <(movingRect.height + fixedRect.height)/2 && fixedRect.y - movingRect.y <(movingRect.height + fixedRect.height)/2){
      movingRect.velocityY = movingRect.velocityY * (-1);
      fixedRect.velocityY = fixedRect.velocityY * (-1);
    }
  }