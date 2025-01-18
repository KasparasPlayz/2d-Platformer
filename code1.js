gdjs.Game_32EndCode = {};
gdjs.Game_32EndCode.localVariables = [];
gdjs.Game_32EndCode.GDTheEndObjects1= [];
gdjs.Game_32EndCode.GDTheEndObjects2= [];
gdjs.Game_32EndCode.GDBlackBarsObjects1= [];
gdjs.Game_32EndCode.GDBlackBarsObjects2= [];
gdjs.Game_32EndCode.GDCloudsObjects1= [];
gdjs.Game_32EndCode.GDCloudsObjects2= [];
gdjs.Game_32EndCode.GDTilesObjects1= [];
gdjs.Game_32EndCode.GDTilesObjects2= [];
gdjs.Game_32EndCode.GDFloorcapsObjects1= [];
gdjs.Game_32EndCode.GDFloorcapsObjects2= [];
gdjs.Game_32EndCode.GDKnightArtworkObjects1= [];
gdjs.Game_32EndCode.GDKnightArtworkObjects2= [];
gdjs.Game_32EndCode.GDFireObjects1= [];
gdjs.Game_32EndCode.GDFireObjects2= [];
gdjs.Game_32EndCode.GDDarknessObjects1= [];
gdjs.Game_32EndCode.GDDarknessObjects2= [];


gdjs.Game_32EndCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Fire"), gdjs.Game_32EndCode.GDFireObjects1);
gdjs.copyArray(runtimeScene.getObjects("KnightArtwork"), gdjs.Game_32EndCode.GDKnightArtworkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32EndCode.GDKnightArtworkObjects1.length;i<l;++i) {
    if ( gdjs.Game_32EndCode.GDKnightArtworkObjects1[i].getX() > (( gdjs.Game_32EndCode.GDFireObjects1.length === 0 ) ? 0 :gdjs.Game_32EndCode.GDFireObjects1[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32EndCode.GDKnightArtworkObjects1[k] = gdjs.Game_32EndCode.GDKnightArtworkObjects1[i];
        ++k;
    }
}
gdjs.Game_32EndCode.GDKnightArtworkObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32EndCode.GDKnightArtworkObjects1 */
{for(var i = 0, len = gdjs.Game_32EndCode.GDKnightArtworkObjects1.length ;i < len;++i) {
    gdjs.Game_32EndCode.GDKnightArtworkObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


};gdjs.Game_32EndCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "TheEnd.mp3", true, 100, 1);
}
{ //Subevents
gdjs.Game_32EndCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.Game_32EndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32EndCode.GDTheEndObjects1.length = 0;
gdjs.Game_32EndCode.GDTheEndObjects2.length = 0;
gdjs.Game_32EndCode.GDBlackBarsObjects1.length = 0;
gdjs.Game_32EndCode.GDBlackBarsObjects2.length = 0;
gdjs.Game_32EndCode.GDCloudsObjects1.length = 0;
gdjs.Game_32EndCode.GDCloudsObjects2.length = 0;
gdjs.Game_32EndCode.GDTilesObjects1.length = 0;
gdjs.Game_32EndCode.GDTilesObjects2.length = 0;
gdjs.Game_32EndCode.GDFloorcapsObjects1.length = 0;
gdjs.Game_32EndCode.GDFloorcapsObjects2.length = 0;
gdjs.Game_32EndCode.GDKnightArtworkObjects1.length = 0;
gdjs.Game_32EndCode.GDKnightArtworkObjects2.length = 0;
gdjs.Game_32EndCode.GDFireObjects1.length = 0;
gdjs.Game_32EndCode.GDFireObjects2.length = 0;
gdjs.Game_32EndCode.GDDarknessObjects1.length = 0;
gdjs.Game_32EndCode.GDDarknessObjects2.length = 0;

gdjs.Game_32EndCode.eventsList1(runtimeScene);
gdjs.Game_32EndCode.GDTheEndObjects1.length = 0;
gdjs.Game_32EndCode.GDTheEndObjects2.length = 0;
gdjs.Game_32EndCode.GDBlackBarsObjects1.length = 0;
gdjs.Game_32EndCode.GDBlackBarsObjects2.length = 0;
gdjs.Game_32EndCode.GDCloudsObjects1.length = 0;
gdjs.Game_32EndCode.GDCloudsObjects2.length = 0;
gdjs.Game_32EndCode.GDTilesObjects1.length = 0;
gdjs.Game_32EndCode.GDTilesObjects2.length = 0;
gdjs.Game_32EndCode.GDFloorcapsObjects1.length = 0;
gdjs.Game_32EndCode.GDFloorcapsObjects2.length = 0;
gdjs.Game_32EndCode.GDKnightArtworkObjects1.length = 0;
gdjs.Game_32EndCode.GDKnightArtworkObjects2.length = 0;
gdjs.Game_32EndCode.GDFireObjects1.length = 0;
gdjs.Game_32EndCode.GDFireObjects2.length = 0;
gdjs.Game_32EndCode.GDDarknessObjects1.length = 0;
gdjs.Game_32EndCode.GDDarknessObjects2.length = 0;


return;

}

gdjs['Game_32EndCode'] = gdjs.Game_32EndCode;
