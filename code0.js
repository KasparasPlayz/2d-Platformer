gdjs.Level_321Code = {};
gdjs.Level_321Code.localVariables = [];
gdjs.Level_321Code.GDKnightHitBoxObjects4_1final = [];

gdjs.Level_321Code.GDLeftArrowObjects4_1final = [];

gdjs.Level_321Code.GDRightArrowObjects4_1final = [];

gdjs.Level_321Code.GDTopArrowObjects4_1final = [];

gdjs.Level_321Code.GDKnightHitBoxObjects1= [];
gdjs.Level_321Code.GDKnightHitBoxObjects2= [];
gdjs.Level_321Code.GDKnightHitBoxObjects3= [];
gdjs.Level_321Code.GDKnightHitBoxObjects4= [];
gdjs.Level_321Code.GDKnightHitBoxObjects5= [];
gdjs.Level_321Code.GDKeyObjects1= [];
gdjs.Level_321Code.GDKeyObjects2= [];
gdjs.Level_321Code.GDKeyObjects3= [];
gdjs.Level_321Code.GDKeyObjects4= [];
gdjs.Level_321Code.GDKeyObjects5= [];
gdjs.Level_321Code.GDDoorObjects1= [];
gdjs.Level_321Code.GDDoorObjects2= [];
gdjs.Level_321Code.GDDoorObjects3= [];
gdjs.Level_321Code.GDDoorObjects4= [];
gdjs.Level_321Code.GDDoorObjects5= [];
gdjs.Level_321Code.GDSparkleParticleObjects1= [];
gdjs.Level_321Code.GDSparkleParticleObjects2= [];
gdjs.Level_321Code.GDSparkleParticleObjects3= [];
gdjs.Level_321Code.GDSparkleParticleObjects4= [];
gdjs.Level_321Code.GDSparkleParticleObjects5= [];
gdjs.Level_321Code.GDRightArrowObjects1= [];
gdjs.Level_321Code.GDRightArrowObjects2= [];
gdjs.Level_321Code.GDRightArrowObjects3= [];
gdjs.Level_321Code.GDRightArrowObjects4= [];
gdjs.Level_321Code.GDRightArrowObjects5= [];
gdjs.Level_321Code.GDLeftArrowObjects1= [];
gdjs.Level_321Code.GDLeftArrowObjects2= [];
gdjs.Level_321Code.GDLeftArrowObjects3= [];
gdjs.Level_321Code.GDLeftArrowObjects4= [];
gdjs.Level_321Code.GDLeftArrowObjects5= [];
gdjs.Level_321Code.GDTopArrowObjects1= [];
gdjs.Level_321Code.GDTopArrowObjects2= [];
gdjs.Level_321Code.GDTopArrowObjects3= [];
gdjs.Level_321Code.GDTopArrowObjects4= [];
gdjs.Level_321Code.GDTopArrowObjects5= [];
gdjs.Level_321Code.GDTilesObjects1= [];
gdjs.Level_321Code.GDTilesObjects2= [];
gdjs.Level_321Code.GDTilesObjects3= [];
gdjs.Level_321Code.GDTilesObjects4= [];
gdjs.Level_321Code.GDTilesObjects5= [];
gdjs.Level_321Code.GDKnightArtworkObjects1= [];
gdjs.Level_321Code.GDKnightArtworkObjects2= [];
gdjs.Level_321Code.GDKnightArtworkObjects3= [];
gdjs.Level_321Code.GDKnightArtworkObjects4= [];
gdjs.Level_321Code.GDKnightArtworkObjects5= [];
gdjs.Level_321Code.GDFloorcapsObjects1= [];
gdjs.Level_321Code.GDFloorcapsObjects2= [];
gdjs.Level_321Code.GDFloorcapsObjects3= [];
gdjs.Level_321Code.GDFloorcapsObjects4= [];
gdjs.Level_321Code.GDFloorcapsObjects5= [];
gdjs.Level_321Code.GDBackgroundTiledObjects1= [];
gdjs.Level_321Code.GDBackgroundTiledObjects2= [];
gdjs.Level_321Code.GDBackgroundTiledObjects3= [];
gdjs.Level_321Code.GDBackgroundTiledObjects4= [];
gdjs.Level_321Code.GDBackgroundTiledObjects5= [];


gdjs.Level_321Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LeftArrow"), gdjs.Level_321Code.GDLeftArrowObjects2);
gdjs.copyArray(runtimeScene.getObjects("RightArrow"), gdjs.Level_321Code.GDRightArrowObjects2);
gdjs.copyArray(runtimeScene.getObjects("TopArrow"), gdjs.Level_321Code.GDTopArrowObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDRightArrowObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDRightArrowObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level_321Code.GDLeftArrowObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDLeftArrowObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level_321Code.GDTopArrowObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDTopArrowObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Level_321Code.eventsList1 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("KnightHitBox"), gdjs.Level_321Code.GDKnightHitBoxObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDKnightHitBoxObjects4.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDKnightHitBoxObjects4[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDKnightHitBoxObjects4[k] = gdjs.Level_321Code.GDKnightHitBoxObjects4[i];
        ++k;
    }
}
gdjs.Level_321Code.GDKnightHitBoxObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDKnightHitBoxObjects4.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDKnightHitBoxObjects4[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDKnightHitBoxObjects4[k] = gdjs.Level_321Code.GDKnightHitBoxObjects4[i];
        ++k;
    }
}
gdjs.Level_321Code.GDKnightHitBoxObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16860724);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("KnightArtwork"), gdjs.Level_321Code.GDKnightArtworkObjects4);
{for(var i = 0, len = gdjs.Level_321Code.GDKnightArtworkObjects4.length ;i < len;++i) {
    gdjs.Level_321Code.GDKnightArtworkObjects4[i].getBehavior("Animation").setAnimationName("Walk");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("KnightHitBox"), gdjs.Level_321Code.GDKnightHitBoxObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDKnightHitBoxObjects4.length;i<l;++i) {
    if ( !(gdjs.Level_321Code.GDKnightHitBoxObjects4[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDKnightHitBoxObjects4[k] = gdjs.Level_321Code.GDKnightHitBoxObjects4[i];
        ++k;
    }
}
gdjs.Level_321Code.GDKnightHitBoxObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16862596);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("KnightArtwork"), gdjs.Level_321Code.GDKnightArtworkObjects4);
{for(var i = 0, len = gdjs.Level_321Code.GDKnightArtworkObjects4.length ;i < len;++i) {
    gdjs.Level_321Code.GDKnightArtworkObjects4[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("KnightArtwork"), gdjs.Level_321Code.GDKnightArtworkObjects3);
gdjs.copyArray(runtimeScene.getObjects("KnightHitBox"), gdjs.Level_321Code.GDKnightHitBoxObjects3);
{for(var i = 0, len = gdjs.Level_321Code.GDKnightArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDKnightArtworkObjects3[i].setPosition((( gdjs.Level_321Code.GDKnightHitBoxObjects3.length === 0 ) ? 0 :gdjs.Level_321Code.GDKnightHitBoxObjects3[0].getPointX("")),(( gdjs.Level_321Code.GDKnightHitBoxObjects3.length === 0 ) ? 0 :gdjs.Level_321Code.GDKnightHitBoxObjects3[0].getPointY("")));
}
}}

}


};gdjs.Level_321Code.eventsList2 = function(runtimeScene) {

{



}


{

gdjs.Level_321Code.GDTopArrowObjects4.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Level_321Code.GDTopArrowObjects4_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("TopArrow"), gdjs.Level_321Code.GDTopArrowObjects5);
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDTopArrowObjects5.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDTopArrowObjects5[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Level_321Code.GDTopArrowObjects5[k] = gdjs.Level_321Code.GDTopArrowObjects5[i];
        ++k;
    }
}
gdjs.Level_321Code.GDTopArrowObjects5.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Level_321Code.GDTopArrowObjects5.length; j < jLen ; ++j) {
        if ( gdjs.Level_321Code.GDTopArrowObjects4_1final.indexOf(gdjs.Level_321Code.GDTopArrowObjects5[j]) === -1 )
            gdjs.Level_321Code.GDTopArrowObjects4_1final.push(gdjs.Level_321Code.GDTopArrowObjects5[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level_321Code.GDTopArrowObjects4_1final, gdjs.Level_321Code.GDTopArrowObjects4);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16877732);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("KnightArtwork"), gdjs.Level_321Code.GDKnightArtworkObjects4);
/* Reuse gdjs.Level_321Code.GDKnightHitBoxObjects4 */
{for(var i = 0, len = gdjs.Level_321Code.GDKnightHitBoxObjects4.length ;i < len;++i) {
    gdjs.Level_321Code.GDKnightHitBoxObjects4[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}{for(var i = 0, len = gdjs.Level_321Code.GDKnightArtworkObjects4.length ;i < len;++i) {
    gdjs.Level_321Code.GDKnightArtworkObjects4[i].getBehavior("Resizable").setHeight(55);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDKnightArtworkObjects4.length ;i < len;++i) {
    gdjs.Level_321Code.GDKnightArtworkObjects4[i].getBehavior("Resizable").setWidth(70);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDKnightArtworkObjects4.length ;i < len;++i) {
    gdjs.Level_321Code.GDKnightArtworkObjects4[i].getBehavior("Tween").addObjectWidthTween2("Squash Jump", 64, "linear", 0.08, false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDKnightArtworkObjects4.length ;i < len;++i) {
    gdjs.Level_321Code.GDKnightArtworkObjects4[i].getBehavior("Tween").addObjectHeightTween2("Stretch Jump", 64, "linear", 0.08, false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDKnightHitBoxObjects4.length ;i < len;++i) {
    gdjs.Level_321Code.GDKnightHitBoxObjects4[i].getBehavior("PlatformerObject").setCanJump();
}
}}

}


};gdjs.Level_321Code.eventsList3 = function(runtimeScene) {

{



}


{

gdjs.Level_321Code.GDLeftArrowObjects4.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Level_321Code.GDLeftArrowObjects4_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("LeftArrow"), gdjs.Level_321Code.GDLeftArrowObjects5);
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDLeftArrowObjects5.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDLeftArrowObjects5[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Level_321Code.GDLeftArrowObjects5[k] = gdjs.Level_321Code.GDLeftArrowObjects5[i];
        ++k;
    }
}
gdjs.Level_321Code.GDLeftArrowObjects5.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Level_321Code.GDLeftArrowObjects5.length; j < jLen ; ++j) {
        if ( gdjs.Level_321Code.GDLeftArrowObjects4_1final.indexOf(gdjs.Level_321Code.GDLeftArrowObjects5[j]) === -1 )
            gdjs.Level_321Code.GDLeftArrowObjects4_1final.push(gdjs.Level_321Code.GDLeftArrowObjects5[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level_321Code.GDLeftArrowObjects4_1final, gdjs.Level_321Code.GDLeftArrowObjects4);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("KnightArtwork"), gdjs.Level_321Code.GDKnightArtworkObjects4);
gdjs.copyArray(runtimeScene.getObjects("KnightHitBox"), gdjs.Level_321Code.GDKnightHitBoxObjects4);
{for(var i = 0, len = gdjs.Level_321Code.GDKnightArtworkObjects4.length ;i < len;++i) {
    gdjs.Level_321Code.GDKnightArtworkObjects4[i].getBehavior("Flippable").flipX(true);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDKnightHitBoxObjects4.length ;i < len;++i) {
    gdjs.Level_321Code.GDKnightHitBoxObjects4[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{



}


{

gdjs.Level_321Code.GDRightArrowObjects4.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Level_321Code.GDRightArrowObjects4_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("RightArrow"), gdjs.Level_321Code.GDRightArrowObjects5);
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDRightArrowObjects5.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDRightArrowObjects5[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Level_321Code.GDRightArrowObjects5[k] = gdjs.Level_321Code.GDRightArrowObjects5[i];
        ++k;
    }
}
gdjs.Level_321Code.GDRightArrowObjects5.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Level_321Code.GDRightArrowObjects5.length; j < jLen ; ++j) {
        if ( gdjs.Level_321Code.GDRightArrowObjects4_1final.indexOf(gdjs.Level_321Code.GDRightArrowObjects5[j]) === -1 )
            gdjs.Level_321Code.GDRightArrowObjects4_1final.push(gdjs.Level_321Code.GDRightArrowObjects5[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level_321Code.GDRightArrowObjects4_1final, gdjs.Level_321Code.GDRightArrowObjects4);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("KnightArtwork"), gdjs.Level_321Code.GDKnightArtworkObjects4);
gdjs.copyArray(runtimeScene.getObjects("KnightHitBox"), gdjs.Level_321Code.GDKnightHitBoxObjects4);
{for(var i = 0, len = gdjs.Level_321Code.GDKnightArtworkObjects4.length ;i < len;++i) {
    gdjs.Level_321Code.GDKnightArtworkObjects4[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDKnightHitBoxObjects4.length ;i < len;++i) {
    gdjs.Level_321Code.GDKnightHitBoxObjects4[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{



}


{

gdjs.Level_321Code.GDKnightHitBoxObjects4.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Level_321Code.GDKnightHitBoxObjects4_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("KnightHitBox"), gdjs.Level_321Code.GDKnightHitBoxObjects5);
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDKnightHitBoxObjects5.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDKnightHitBoxObjects5[i].getBehavior("PlatformerObject").canJump() ) {
        isConditionTrue_1 = true;
        gdjs.Level_321Code.GDKnightHitBoxObjects5[k] = gdjs.Level_321Code.GDKnightHitBoxObjects5[i];
        ++k;
    }
}
gdjs.Level_321Code.GDKnightHitBoxObjects5.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Level_321Code.GDKnightHitBoxObjects5.length; j < jLen ; ++j) {
        if ( gdjs.Level_321Code.GDKnightHitBoxObjects4_1final.indexOf(gdjs.Level_321Code.GDKnightHitBoxObjects5[j]) === -1 )
            gdjs.Level_321Code.GDKnightHitBoxObjects4_1final.push(gdjs.Level_321Code.GDKnightHitBoxObjects5[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("KnightHitBox"), gdjs.Level_321Code.GDKnightHitBoxObjects5);
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDKnightHitBoxObjects5.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDKnightHitBoxObjects5[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_1 = true;
        gdjs.Level_321Code.GDKnightHitBoxObjects5[k] = gdjs.Level_321Code.GDKnightHitBoxObjects5[i];
        ++k;
    }
}
gdjs.Level_321Code.GDKnightHitBoxObjects5.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Level_321Code.GDKnightHitBoxObjects5.length; j < jLen ; ++j) {
        if ( gdjs.Level_321Code.GDKnightHitBoxObjects4_1final.indexOf(gdjs.Level_321Code.GDKnightHitBoxObjects5[j]) === -1 )
            gdjs.Level_321Code.GDKnightHitBoxObjects4_1final.push(gdjs.Level_321Code.GDKnightHitBoxObjects5[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level_321Code.GDKnightHitBoxObjects4_1final, gdjs.Level_321Code.GDKnightHitBoxObjects4);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) > 0;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Level_321Code.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("KnightHitBox"), gdjs.Level_321Code.GDKnightHitBoxObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDKnightHitBoxObjects3.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDKnightHitBoxObjects3[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDKnightHitBoxObjects3[k] = gdjs.Level_321Code.GDKnightHitBoxObjects3[i];
        ++k;
    }
}
gdjs.Level_321Code.GDKnightHitBoxObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != 1;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}}

}


};gdjs.Level_321Code.eventsList4 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("KnightHitBox"), gdjs.Level_321Code.GDKnightHitBoxObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDKnightHitBoxObjects3.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDKnightHitBoxObjects3[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDKnightHitBoxObjects3[k] = gdjs.Level_321Code.GDKnightHitBoxObjects3[i];
        ++k;
    }
}
gdjs.Level_321Code.GDKnightHitBoxObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16885852);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("KnightArtwork"), gdjs.Level_321Code.GDKnightArtworkObjects3);
{for(var i = 0, len = gdjs.Level_321Code.GDKnightArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDKnightArtworkObjects3[i].getBehavior("Resizable").setHeight(50);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDKnightArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDKnightArtworkObjects3[i].getBehavior("Resizable").setWidth(100);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDKnightArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDKnightArtworkObjects3[i].getBehavior("Tween").addObjectHeightTween2("Stretch", 76, "linear", 0.1, false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDKnightArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDKnightArtworkObjects3[i].getBehavior("Tween").addObjectWidthTween2("Squash", 76, "linear", 0.1, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("KnightHitBox"), gdjs.Level_321Code.GDKnightHitBoxObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDKnightHitBoxObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDKnightHitBoxObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDKnightHitBoxObjects2[k] = gdjs.Level_321Code.GDKnightHitBoxObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDKnightHitBoxObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16889900);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("KnightArtwork"), gdjs.Level_321Code.GDKnightArtworkObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDKnightArtworkObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDKnightArtworkObjects2[i].getBehavior("Tween").addObjectHeightTween2("Stretch Air", 86, "linear", 0.08, false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDKnightArtworkObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDKnightArtworkObjects2[i].getBehavior("Tween").addObjectWidthTween2("Squash Air", 65, "linear", 0.08, false);
}
}}

}


};gdjs.Level_321Code.eventsList5 = function(runtimeScene) {

{


gdjs.Level_321Code.eventsList1(runtimeScene);
}


{


gdjs.Level_321Code.eventsList3(runtimeScene);
}


{


gdjs.Level_321Code.eventsList4(runtimeScene);
}


};gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDKnightHitBoxObjects2Objects = Hashtable.newFrom({"KnightHitBox": gdjs.Level_321Code.GDKnightHitBoxObjects2});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDKeyObjects2Objects = Hashtable.newFrom({"Key": gdjs.Level_321Code.GDKeyObjects2});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDSparkleParticleObjects2Objects = Hashtable.newFrom({"SparkleParticle": gdjs.Level_321Code.GDSparkleParticleObjects2});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDKnightHitBoxObjects2Objects = Hashtable.newFrom({"KnightHitBox": gdjs.Level_321Code.GDKnightHitBoxObjects2});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDDoorObjects2Objects = Hashtable.newFrom({"Door": gdjs.Level_321Code.GDDoorObjects2});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDKnightHitBoxObjects2Objects = Hashtable.newFrom({"KnightHitBox": gdjs.Level_321Code.GDKnightHitBoxObjects2});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDDoorObjects2Objects = Hashtable.newFrom({"Door": gdjs.Level_321Code.GDDoorObjects2});
gdjs.Level_321Code.asyncCallback16898156 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level_321Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game End", false);
}gdjs.Level_321Code.localVariables.length = 0;
}
gdjs.Level_321Code.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level_321Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Level_321Code.asyncCallback16898156(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDKnightHitBoxObjects1Objects = Hashtable.newFrom({"KnightHitBox": gdjs.Level_321Code.GDKnightHitBoxObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.Level_321Code.GDDoorObjects1});
gdjs.Level_321Code.eventsList7 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Key"), gdjs.Level_321Code.GDKeyObjects2);
gdjs.copyArray(runtimeScene.getObjects("KnightHitBox"), gdjs.Level_321Code.GDKnightHitBoxObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDKnightHitBoxObjects2Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDKeyObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDKeyObjects2 */
gdjs.Level_321Code.GDSparkleParticleObjects2.length = 0;

{runtimeScene.getScene().getVariables().get("Key").setNumber(1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDSparkleParticleObjects2Objects, (( gdjs.Level_321Code.GDKeyObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDKeyObjects2[0].getPointX("Center")), (( gdjs.Level_321Code.GDKeyObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDKeyObjects2[0].getPointY("Center")), "Player");
}{gdjs.evtTools.sound.playSound(runtimeScene, "Key.wav", false, 50, 1);
}{for(var i = 0, len = gdjs.Level_321Code.GDKeyObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDKeyObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Level_321Code.GDDoorObjects2);
gdjs.copyArray(runtimeScene.getObjects("KnightHitBox"), gdjs.Level_321Code.GDKnightHitBoxObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDKnightHitBoxObjects2Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDDoorObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Key")) > 0;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDDoorObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDDoorObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDDoorObjects2[i].getBehavior("Animation").setAnimationIndex(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Unlock.wav", false, 50, 1);
}{runtimeScene.getScene().getVariables().get("Key").setNumber(0);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Level_321Code.GDDoorObjects2);
gdjs.copyArray(runtimeScene.getObjects("KnightHitBox"), gdjs.Level_321Code.GDKnightHitBoxObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDKnightHitBoxObjects2Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDDoorObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDDoorObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDDoorObjects2[i].getBehavior("Animation").getAnimationName() == "Unlocked" ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDDoorObjects2[k] = gdjs.Level_321Code.GDDoorObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDDoorObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16897956);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Level_321Code.eventsList6(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Level_321Code.GDDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("KnightHitBox"), gdjs.Level_321Code.GDKnightHitBoxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDKnightHitBoxObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDDoorObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16899196);
}
}
if (isConditionTrue_0) {
}

}


};gdjs.Level_321Code.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("KnightHitBox"), gdjs.Level_321Code.GDKnightHitBoxObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDKnightHitBoxObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDKnightHitBoxObjects2[i].hide();
}
}}

}


{


gdjs.Level_321Code.eventsList0(runtimeScene);
}


{


gdjs.Level_321Code.eventsList5(runtimeScene);
}


{


gdjs.Level_321Code.eventsList7(runtimeScene);
}


};gdjs.Level_321Code.eventsList9 = function(runtimeScene) {

{


gdjs.Level_321Code.eventsList8(runtimeScene);
}


};

gdjs.Level_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321Code.GDKnightHitBoxObjects1.length = 0;
gdjs.Level_321Code.GDKnightHitBoxObjects2.length = 0;
gdjs.Level_321Code.GDKnightHitBoxObjects3.length = 0;
gdjs.Level_321Code.GDKnightHitBoxObjects4.length = 0;
gdjs.Level_321Code.GDKnightHitBoxObjects5.length = 0;
gdjs.Level_321Code.GDKeyObjects1.length = 0;
gdjs.Level_321Code.GDKeyObjects2.length = 0;
gdjs.Level_321Code.GDKeyObjects3.length = 0;
gdjs.Level_321Code.GDKeyObjects4.length = 0;
gdjs.Level_321Code.GDKeyObjects5.length = 0;
gdjs.Level_321Code.GDDoorObjects1.length = 0;
gdjs.Level_321Code.GDDoorObjects2.length = 0;
gdjs.Level_321Code.GDDoorObjects3.length = 0;
gdjs.Level_321Code.GDDoorObjects4.length = 0;
gdjs.Level_321Code.GDDoorObjects5.length = 0;
gdjs.Level_321Code.GDSparkleParticleObjects1.length = 0;
gdjs.Level_321Code.GDSparkleParticleObjects2.length = 0;
gdjs.Level_321Code.GDSparkleParticleObjects3.length = 0;
gdjs.Level_321Code.GDSparkleParticleObjects4.length = 0;
gdjs.Level_321Code.GDSparkleParticleObjects5.length = 0;
gdjs.Level_321Code.GDRightArrowObjects1.length = 0;
gdjs.Level_321Code.GDRightArrowObjects2.length = 0;
gdjs.Level_321Code.GDRightArrowObjects3.length = 0;
gdjs.Level_321Code.GDRightArrowObjects4.length = 0;
gdjs.Level_321Code.GDRightArrowObjects5.length = 0;
gdjs.Level_321Code.GDLeftArrowObjects1.length = 0;
gdjs.Level_321Code.GDLeftArrowObjects2.length = 0;
gdjs.Level_321Code.GDLeftArrowObjects3.length = 0;
gdjs.Level_321Code.GDLeftArrowObjects4.length = 0;
gdjs.Level_321Code.GDLeftArrowObjects5.length = 0;
gdjs.Level_321Code.GDTopArrowObjects1.length = 0;
gdjs.Level_321Code.GDTopArrowObjects2.length = 0;
gdjs.Level_321Code.GDTopArrowObjects3.length = 0;
gdjs.Level_321Code.GDTopArrowObjects4.length = 0;
gdjs.Level_321Code.GDTopArrowObjects5.length = 0;
gdjs.Level_321Code.GDTilesObjects1.length = 0;
gdjs.Level_321Code.GDTilesObjects2.length = 0;
gdjs.Level_321Code.GDTilesObjects3.length = 0;
gdjs.Level_321Code.GDTilesObjects4.length = 0;
gdjs.Level_321Code.GDTilesObjects5.length = 0;
gdjs.Level_321Code.GDKnightArtworkObjects1.length = 0;
gdjs.Level_321Code.GDKnightArtworkObjects2.length = 0;
gdjs.Level_321Code.GDKnightArtworkObjects3.length = 0;
gdjs.Level_321Code.GDKnightArtworkObjects4.length = 0;
gdjs.Level_321Code.GDKnightArtworkObjects5.length = 0;
gdjs.Level_321Code.GDFloorcapsObjects1.length = 0;
gdjs.Level_321Code.GDFloorcapsObjects2.length = 0;
gdjs.Level_321Code.GDFloorcapsObjects3.length = 0;
gdjs.Level_321Code.GDFloorcapsObjects4.length = 0;
gdjs.Level_321Code.GDFloorcapsObjects5.length = 0;
gdjs.Level_321Code.GDBackgroundTiledObjects1.length = 0;
gdjs.Level_321Code.GDBackgroundTiledObjects2.length = 0;
gdjs.Level_321Code.GDBackgroundTiledObjects3.length = 0;
gdjs.Level_321Code.GDBackgroundTiledObjects4.length = 0;
gdjs.Level_321Code.GDBackgroundTiledObjects5.length = 0;

gdjs.Level_321Code.eventsList9(runtimeScene);
gdjs.Level_321Code.GDKnightHitBoxObjects1.length = 0;
gdjs.Level_321Code.GDKnightHitBoxObjects2.length = 0;
gdjs.Level_321Code.GDKnightHitBoxObjects3.length = 0;
gdjs.Level_321Code.GDKnightHitBoxObjects4.length = 0;
gdjs.Level_321Code.GDKnightHitBoxObjects5.length = 0;
gdjs.Level_321Code.GDKeyObjects1.length = 0;
gdjs.Level_321Code.GDKeyObjects2.length = 0;
gdjs.Level_321Code.GDKeyObjects3.length = 0;
gdjs.Level_321Code.GDKeyObjects4.length = 0;
gdjs.Level_321Code.GDKeyObjects5.length = 0;
gdjs.Level_321Code.GDDoorObjects1.length = 0;
gdjs.Level_321Code.GDDoorObjects2.length = 0;
gdjs.Level_321Code.GDDoorObjects3.length = 0;
gdjs.Level_321Code.GDDoorObjects4.length = 0;
gdjs.Level_321Code.GDDoorObjects5.length = 0;
gdjs.Level_321Code.GDSparkleParticleObjects1.length = 0;
gdjs.Level_321Code.GDSparkleParticleObjects2.length = 0;
gdjs.Level_321Code.GDSparkleParticleObjects3.length = 0;
gdjs.Level_321Code.GDSparkleParticleObjects4.length = 0;
gdjs.Level_321Code.GDSparkleParticleObjects5.length = 0;
gdjs.Level_321Code.GDRightArrowObjects1.length = 0;
gdjs.Level_321Code.GDRightArrowObjects2.length = 0;
gdjs.Level_321Code.GDRightArrowObjects3.length = 0;
gdjs.Level_321Code.GDRightArrowObjects4.length = 0;
gdjs.Level_321Code.GDRightArrowObjects5.length = 0;
gdjs.Level_321Code.GDLeftArrowObjects1.length = 0;
gdjs.Level_321Code.GDLeftArrowObjects2.length = 0;
gdjs.Level_321Code.GDLeftArrowObjects3.length = 0;
gdjs.Level_321Code.GDLeftArrowObjects4.length = 0;
gdjs.Level_321Code.GDLeftArrowObjects5.length = 0;
gdjs.Level_321Code.GDTopArrowObjects1.length = 0;
gdjs.Level_321Code.GDTopArrowObjects2.length = 0;
gdjs.Level_321Code.GDTopArrowObjects3.length = 0;
gdjs.Level_321Code.GDTopArrowObjects4.length = 0;
gdjs.Level_321Code.GDTopArrowObjects5.length = 0;
gdjs.Level_321Code.GDTilesObjects1.length = 0;
gdjs.Level_321Code.GDTilesObjects2.length = 0;
gdjs.Level_321Code.GDTilesObjects3.length = 0;
gdjs.Level_321Code.GDTilesObjects4.length = 0;
gdjs.Level_321Code.GDTilesObjects5.length = 0;
gdjs.Level_321Code.GDKnightArtworkObjects1.length = 0;
gdjs.Level_321Code.GDKnightArtworkObjects2.length = 0;
gdjs.Level_321Code.GDKnightArtworkObjects3.length = 0;
gdjs.Level_321Code.GDKnightArtworkObjects4.length = 0;
gdjs.Level_321Code.GDKnightArtworkObjects5.length = 0;
gdjs.Level_321Code.GDFloorcapsObjects1.length = 0;
gdjs.Level_321Code.GDFloorcapsObjects2.length = 0;
gdjs.Level_321Code.GDFloorcapsObjects3.length = 0;
gdjs.Level_321Code.GDFloorcapsObjects4.length = 0;
gdjs.Level_321Code.GDFloorcapsObjects5.length = 0;
gdjs.Level_321Code.GDBackgroundTiledObjects1.length = 0;
gdjs.Level_321Code.GDBackgroundTiledObjects2.length = 0;
gdjs.Level_321Code.GDBackgroundTiledObjects3.length = 0;
gdjs.Level_321Code.GDBackgroundTiledObjects4.length = 0;
gdjs.Level_321Code.GDBackgroundTiledObjects5.length = 0;


return;

}

gdjs['Level_321Code'] = gdjs.Level_321Code;
