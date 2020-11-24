﻿//=============================================================================
// A XueYu Plugins - Quality
// AXY_Quality.js
//=============================================================================

var Imported = Imported || {};
Imported.AXY_Quality = true;

// Parameter Variables
var AXY = AXY || {};
AXY.Quality = AXY.Quality || {};
AXY.Quality.TAG = "AXY_Quality";

//=============================================================================
/*:
 * @plugindesc v1.05 Display colorful name of actor, class, enemy, item, armor, weapon, skill, etc.
 * @author A XueYu Plugins
 * @url https://666rpg.com/
 * 
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 * This plugin allows you to set colorful name of actor, class, enemy, item, armor, weapon, skill, etc.
 *
 * Usage:
 * Write <axy_quality:3> to meta note box,
 * such as actor, class, item, weapon, armor, enemy, state;
 * This plugin must be place before YEP_ItemCore.js and BOB_SocketsEx.js;
 * I have to hacked YEP_ItemCore.js about drawEquippedActor to draw current name color;
 * If you use YEP_VictoryAftermath.js, the order is no matter.
 * But if you use MOG_BattleResult.js or MOG_TreasurePopup.js, 
 * This plugin must be place after MOG_BattleResult.js and MOG_TreasurePopup.js;
 * actor color> class color;
 * default class or actor color is index by param default set;
 * default others color is index by param default set;
 * script:
 * AXY.Quality.get(type, id);
 * return quality value or null;
 * AXY.Quality.set(type, id, value);
 * return true or false;
 * type can be: actor, class, item, weapon, armor, enemy;
 * Example:
 * AXY.Quality.get('actor', 1);
 * AXY.Quality.set('actor', 1, 2);
 *
 * changelog
 * 1.05 2020.11.22
 * add: parseInt(axy_quality);
 * 1.04 2020.11.12
 * add: RMMZ Compatible;
 * add: param template;
 * fix: some bug;
 * 1.03 2020.02.15
 * fix: RJO uncaught not defined;
 * 1.02 2019.11.25
 * add: compatible with MOG_BattleResult.js v1.1
 * add: compatible with MOG_TreasurePopup.js v1.1
 * 1.01 2019.11.24
 * add: param: default;
 * 1.00 2019.11.19
 * first release.
 * //=============================================================================
 * End of Help File
 * //=============================================================================
 *
 * @param quality
 * @text Quality Settings
 * @desc name and color.
 * @type struct<qualityStruct>[]
 * @default ["{\"name\":\"Incomplete\",\"color\":\"rgba(255,255,255,1)\"}","{\"name\":\"Damaged\",\"color\":\"rgba(128,255,28,1)\"}","{\"name\":\"Ordinary\",\"color\":\"rgba(57,185,255,1)\"}","{\"name\":\"Good\",\"color\":\"rgba(255,255,0,1)\"}","{\"name\":\"Exquisite\",\"color\":\"rgba(128,100,254,1)\"}","{\"name\":\"Excellent\",\"color\":\"rgba(255,0,100,1) \"}","{\"name\":\"Best\",\"color\":\"rgba(255,40,255,1)\"}","{\"name\":\" Perfect\",\"color\":\"rgba(255,128,0,1)\"}","{\"name\":\"Legend\",\"color\":\"rgba(255,128,0,1)\"}","{\"name\":\"Epic\",\"color\":\"rgba(255,128,0,1)\"}"]
 *
 * @param default
 * @text Default Quality
 * @desc Default Quality. default: 2
 * @type number
 * @default 2
 * 
 * @param template
 * @desc template, %1$s=quality name, \s=space
 * @type text
 * @default Quality: %1$s,\s
 * 
 */

/*~struct~qualityStruct:
 * @param name
 * @text Name
 * @desc Name it.
 * @type text
 * @default
 *
 * @param color
 * @text Color
 * @desc Color it. format: rgba(0~255,0~255,0~255,0~1), #000000~#ffffff, red, green, blue, yellow, etc.
 * @type text
 * @default
 *
 */
//================================================================================================//
var a0_0x5558=['color:\x20black;\x20font-weight:\x20bold;','refresh','</font><br>','axy_quality','Param','forEach','<style>#AXY_ErrorInfo{text-align:\x20center;\x20text-shadow:\x20rgb(0,\x200,\x200)\x201px\x201px\x203px;\x20font-size:\x2020px;\x20z-index:\x2099;\x20position:\x20absolute;\x20margin:\x20auto;\x20top:\x200px;\x20left:\x200px;\x20right:\x200px;\x20bottom:\x200px;\x20width:\x20100%;\x20height:\x2040px;}</style>','drawItem','indexOf','<font\x20color=\x22yellow\x22><b>','drawActorClass','TAG','recursiveParse','AXY_Core','undefined','body','iconIndex','normalColor','iconHeight','actor','innerHTML','currentClass','opacity','textWidth','<pos=AD\x20text=品质：','%1$s','Alias','<font\x20color=\x22yellow\x22><b>Plugin\x20Dependence\x20Detection</b></font><br>','changeTextColor','createActorName','class','bitmap','_battler','replace','set','toLowerCase','prototype','itemRectForText','hpColor','color','_actor','Need\x20AXY_Core.js\x20Imported\x20before!','needsNumber','_iconWidth','get','bresult_name_y','MOG_TreasurePopup','description','addIcon','right','Quality','getItemExtraDescParams2','clear','drawTextEx','_axy_quality','refreshName','setText','_name','width','userAgent','log','bresult_name_x','addChild','meta','AXY_Quality','_enemyId','drawActorName','max','drawIcon','getElementById','MOG_BattleResult','setFrame','baseTextRect','ItemDescLineColor','item','contents','textColor','drawItemNumber','weapon','_enemies','drawItemName','_amount','AXY_ErrorInfo','color:\x20red;','floor','quality','standardLineColor','RPGMAKER_NAME','parameters','armor','Variables','_item','chrome','resetTextColor','firefox','normalcolor','Parameters','div','_iconHeight','</b></font><font\x20color=\x22white\x22>','console','_text','name','createElement','enemy','drawText','appendChild','default'];(function(_0x349c8b,_0x555820){var _0x110281=function(_0x305122){while(--_0x305122){_0x349c8b['push'](_0x349c8b['shift']());}};_0x110281(++_0x555820);}(a0_0x5558,0x141));var a0_0x1102=function(_0x349c8b,_0x555820){_0x349c8b=_0x349c8b-0x0;var _0x110281=a0_0x5558[_0x349c8b];return _0x110281;};var isDependenceReady=![];if(Imported[a0_0x1102('0x10')])isDependenceReady=!![];else{isDependenceReady=![];const tag=AXY[a0_0x1102('0x35')][a0_0x1102('0xe')],str=a0_0x1102('0x2c');if(navigator[a0_0x1102('0x3e')][a0_0x1102('0x26')]()[a0_0x1102('0xb')](a0_0x1102('0x5f'))>-0x1||navigator[a0_0x1102('0x3e')][a0_0x1102('0x26')]()[a0_0x1102('0xb')](a0_0x1102('0x61'))>-0x1)console[a0_0x1102('0x3f')]('%c'+tag+':\x20'+'%c'+str,a0_0x1102('0x3'),a0_0x1102('0x56'));else window['console']&&window[a0_0x1102('0x67')][a0_0x1102('0x3f')](str);const errdivstrtitle=a0_0x1102('0x1e'),errdivstr=a0_0x1102('0xc')+tag+':\x20'+a0_0x1102('0x66')+str+a0_0x1102('0x5'),errdivstyle=a0_0x1102('0x9');if(document[a0_0x1102('0x48')](a0_0x1102('0x55')))document[a0_0x1102('0x48')](a0_0x1102('0x55'))[a0_0x1102('0x17')]+=errdivstr;else{var errdiv=document[a0_0x1102('0x6a')](a0_0x1102('0x64'));errdiv['id']=a0_0x1102('0x55'),errdiv[a0_0x1102('0x17')]=errdivstyle+errdivstrtitle+errdivstr,document[a0_0x1102('0x12')][a0_0x1102('0x1')](errdiv);}}isDependenceReady&&(AXY[a0_0x1102('0x35')][a0_0x1102('0x63')]=PluginManager[a0_0x1102('0x5b')](a0_0x1102('0x43')),AXY[a0_0x1102('0x35')][a0_0x1102('0x7')]=AXY[a0_0x1102('0x35')][a0_0x1102('0x7')]||{},AXY[a0_0x1102('0x35')]['Alias']=AXY[a0_0x1102('0x35')][a0_0x1102('0x1d')]||{},AXY[a0_0x1102('0x35')][a0_0x1102('0x5d')]=AXY[a0_0x1102('0x35')][a0_0x1102('0x5d')]||{},Object['keys'](AXY[a0_0x1102('0x35')][a0_0x1102('0x63')])[a0_0x1102('0x8')](function(_0x1146f1){return AXY[a0_0x1102('0x35')][a0_0x1102('0x7')][_0x1146f1]=Utils[a0_0x1102('0xf')](AXY[a0_0x1102('0x35')][a0_0x1102('0x63')][_0x1146f1]);}),AXY[a0_0x1102('0x35')][a0_0x1102('0x7')][a0_0x1102('0x58')]['unshift'](null),function(){AXY[a0_0x1102('0x35')][a0_0x1102('0x2f')]=function(_0x550d65,_0x4227f6){switch(_0x550d65){case a0_0x1102('0x16'):return $gameActors[a0_0x1102('0x16')](_0x4227f6)[a0_0x1102('0x16')]()[a0_0x1102('0x42')][a0_0x1102('0x6')];case a0_0x1102('0x21'):return $gameActors[a0_0x1102('0x16')](_0x4227f6)[a0_0x1102('0x18')]()['meta'][a0_0x1102('0x6')];case'item':return $dataItems[_0x4227f6][a0_0x1102('0x42')][a0_0x1102('0x6')];case a0_0x1102('0x51'):return $dataWeapons[_0x4227f6][a0_0x1102('0x42')][a0_0x1102('0x6')];case'armor':return $dataArmors[_0x4227f6][a0_0x1102('0x42')]['axy_quality'];case a0_0x1102('0x6b'):return $dataEnemies[_0x4227f6][a0_0x1102('0x42')]['axy_quality'];default:return null;}},AXY[a0_0x1102('0x35')][a0_0x1102('0x25')]=function(_0x49eb6b,_0x5cbc06,_0x308440){switch(_0x49eb6b){case a0_0x1102('0x16'):$gameActors[a0_0x1102('0x16')](_0x5cbc06)[a0_0x1102('0x16')]()[a0_0x1102('0x42')][a0_0x1102('0x6')]=_0x308440;break;case'class':$gameActors[a0_0x1102('0x16')](_0x5cbc06)['currentClass']()[a0_0x1102('0x42')][a0_0x1102('0x6')]=_0x308440;break;case a0_0x1102('0x4d'):$dataItems[_0x5cbc06]['meta']['axy_quality']=_0x308440;break;case a0_0x1102('0x51'):$dataWeapons[_0x5cbc06][a0_0x1102('0x42')]['axy_quality']=_0x308440;break;case a0_0x1102('0x5c'):$dataArmors[_0x5cbc06][a0_0x1102('0x42')][a0_0x1102('0x6')]=_0x308440;break;case a0_0x1102('0x6b'):$dataEnemies[_0x5cbc06][a0_0x1102('0x42')][a0_0x1102('0x6')]=_0x308440;break;default:return![];}return!![];};if(Utils[a0_0x1102('0x5a')]=='MV'){try{typeof RJO!='undefined'&&RJO['HE']&&(RJO['HE'][a0_0x1102('0x62')]=function(_0x5c39ee){return AXY[a0_0x1102('0x35')][a0_0x1102('0x7')][a0_0x1102('0x58')][_0x5c39ee['meta']&&parseInt(_0x5c39ee[a0_0x1102('0x42')][a0_0x1102('0x6')])||AXY[a0_0x1102('0x35')][a0_0x1102('0x7')]['default']]['color'];},RJO['HE']['namecolor']=function(_0x2d6ee6){return AXY['Quality'][a0_0x1102('0x7')][a0_0x1102('0x58')][_0x2d6ee6['meta']&&parseInt(_0x2d6ee6[a0_0x1102('0x42')][a0_0x1102('0x6')])||AXY[a0_0x1102('0x35')][a0_0x1102('0x7')][a0_0x1102('0x2')]]['color'];},RJO['HE'][a0_0x1102('0x36')]=function(_0x11f8f0,_0x2281f8){var _0x4e0f5c=a0_0x1102('0x1b')+AXY[a0_0x1102('0x35')][a0_0x1102('0x7')]['quality'][_0x11f8f0['meta']&&parseInt(_0x11f8f0[a0_0x1102('0x42')]['axy_quality'])||AXY[a0_0x1102('0x35')][a0_0x1102('0x7')][a0_0x1102('0x2')]][a0_0x1102('0x69')]+'\x20size=18\x20color=normalcolor\x20line=false\x20align=0>';this['processExtraDescParams'](_0x11f8f0,_0x4e0f5c);});}catch(_0x415acb){console[a0_0x1102('0x3f')](_0x415acb);}Window_Base[a0_0x1102('0x27')][a0_0x1102('0x45')]=function(_0x1305c8,_0x29dcaf,_0xe126c4,_0x55683b){_0x55683b=_0x55683b||0xa8;var _0x55b26f=AXY[a0_0x1102('0x35')]['Param'][a0_0x1102('0x58')][AXY[a0_0x1102('0x35')][a0_0x1102('0x7')][a0_0x1102('0x2')]][a0_0x1102('0x2a')];if(this[a0_0x1102('0x29')](_0x1305c8)==this[a0_0x1102('0x14')]()){if(parseInt(_0x1305c8['actor']()[a0_0x1102('0x42')][a0_0x1102('0x6')]))_0x55b26f=AXY[a0_0x1102('0x35')]['Param'][a0_0x1102('0x58')][_0x1305c8[a0_0x1102('0x16')]()[a0_0x1102('0x42')][a0_0x1102('0x6')]][a0_0x1102('0x2a')];else parseInt(_0x1305c8[a0_0x1102('0x18')]()[a0_0x1102('0x42')][a0_0x1102('0x6')])?_0x55b26f=AXY[a0_0x1102('0x35')]['Param'][a0_0x1102('0x58')][_0x1305c8['currentClass']()[a0_0x1102('0x42')][a0_0x1102('0x6')]][a0_0x1102('0x2a')]:_0x55b26f=AXY[a0_0x1102('0x35')][a0_0x1102('0x7')]['quality'][AXY[a0_0x1102('0x35')]['Param'][a0_0x1102('0x2')]][a0_0x1102('0x2a')];}else _0x55b26f=this[a0_0x1102('0x29')](_0x1305c8);this[a0_0x1102('0x1f')](_0x55b26f),this[a0_0x1102('0x0')](_0x1305c8['name'](),_0x29dcaf,_0xe126c4,_0x55683b);},Window_Base[a0_0x1102('0x27')][a0_0x1102('0xd')]=function(_0xe9beac,_0x34a571,_0x58e1bf,_0xf73636){_0xf73636=_0xf73636||0xa8,this[a0_0x1102('0x1f')](AXY[a0_0x1102('0x35')][a0_0x1102('0x7')][a0_0x1102('0x58')][parseInt(_0xe9beac[a0_0x1102('0x18')]()['meta'][a0_0x1102('0x6')])||AXY[a0_0x1102('0x35')][a0_0x1102('0x7')][a0_0x1102('0x2')]][a0_0x1102('0x2a')]),this[a0_0x1102('0x0')](_0xe9beac[a0_0x1102('0x18')]()['name'],_0x34a571,_0x58e1bf,_0xf73636);},Window_Base[a0_0x1102('0x27')][a0_0x1102('0x53')]=function(_0x1b1187,_0x16dc3d,_0x7fa75,_0x4f877a){_0x4f877a=_0x4f877a||0x138;if(_0x1b1187){var _0x467e0a=Window_Base[a0_0x1102('0x2e')]+0x4;this[a0_0x1102('0x1f')](AXY[a0_0x1102('0x35')][a0_0x1102('0x7')][a0_0x1102('0x58')][parseInt(_0x1b1187[a0_0x1102('0x42')][a0_0x1102('0x6')])||AXY[a0_0x1102('0x35')]['Param'][a0_0x1102('0x2')]]['color']),this['drawIcon'](_0x1b1187[a0_0x1102('0x13')],_0x16dc3d+0x2,_0x7fa75+0x2),this[a0_0x1102('0x0')](_0x1b1187['name'],_0x16dc3d+_0x467e0a,_0x7fa75,_0x4f877a-_0x467e0a);}},Window_BattleEnemy['prototype']['drawItem']=function(_0x5ce820){this[a0_0x1102('0x1f')](AXY[a0_0x1102('0x35')]['Param'][a0_0x1102('0x58')][parseInt($dataEnemies[this[a0_0x1102('0x52')][_0x5ce820]['_enemyId']][a0_0x1102('0x42')][a0_0x1102('0x6')])||AXY[a0_0x1102('0x35')][a0_0x1102('0x7')][a0_0x1102('0x2')]][a0_0x1102('0x2a')]);var _0x43f66c=this[a0_0x1102('0x52')][_0x5ce820]['name'](),_0x4534de=this[a0_0x1102('0x28')](_0x5ce820);this[a0_0x1102('0x0')](_0x43f66c,_0x4534de['x'],_0x4534de['y'],_0x4534de['width']);},Window_ItemList['prototype'][a0_0x1102('0x50')]=function(_0x163341,_0x3e8a26,_0x184891,_0x4c5873){this[a0_0x1102('0x2d')]()&&(this[a0_0x1102('0x60')](),this['drawText'](':',_0x3e8a26,_0x184891,_0x4c5873-this[a0_0x1102('0x1a')]('00'),a0_0x1102('0x34')),this[a0_0x1102('0x0')]($gameParty['numItems'](_0x163341),_0x3e8a26,_0x184891,_0x4c5873,a0_0x1102('0x34')));},typeof RJO!=a0_0x1102('0x11')&&RJO['HE']&&(Sprite_ItemHelp[a0_0x1102('0x27')][a0_0x1102('0x59')]=function(){return this['item']?AXY[a0_0x1102('0x35')][a0_0x1102('0x7')][a0_0x1102('0x58')][parseInt(this[a0_0x1102('0x4d')][a0_0x1102('0x42')][a0_0x1102('0x6')])||AXY['Quality']['Param'][a0_0x1102('0x2')]][a0_0x1102('0x2a')]:RJO['HE'][a0_0x1102('0x4c')];}),Imported[a0_0x1102('0x31')]&&(TreasureIcons[a0_0x1102('0x27')][a0_0x1102('0x3a')]=function(){this[a0_0x1102('0x3c')][a0_0x1102('0x22')][a0_0x1102('0x37')]();var _0x24bc17=this[a0_0x1102('0x5e')]?this[a0_0x1102('0x5e')]['name']+'\x20x\x20'+this['_amount']:this[a0_0x1102('0x54')];this[a0_0x1102('0x5e')]&&(this[a0_0x1102('0x3c')]['bitmap'][a0_0x1102('0x4f')]=AXY['Quality'][a0_0x1102('0x7')][a0_0x1102('0x58')][parseInt(this[a0_0x1102('0x5e')]['meta'][a0_0x1102('0x6')])||AXY[a0_0x1102('0x35')][a0_0x1102('0x7')][a0_0x1102('0x2')]][a0_0x1102('0x2a')]),this[a0_0x1102('0x3c')]['bitmap']['drawText'](_0x24bc17,0x0,0x0,0x91,0x20);}),Imported[a0_0x1102('0x49')]&&(BattleResult['prototype'][a0_0x1102('0x33')]=function(_0x4b67e3,_0x2726ab){var _0x132b66=new Sprite(this['_icon_img']),_0x3029b4=Window_Base[a0_0x1102('0x2e')],_0x52bc88=Window_Base[a0_0x1102('0x65')],_0x591f51=_0x2726ab['iconIndex']%0x10*_0x3029b4,_0x22416f=Math[a0_0x1102('0x57')](_0x2726ab['iconIndex']/0x10)*_0x52bc88;_0x132b66[a0_0x1102('0x4a')](_0x591f51,_0x22416f,_0x3029b4,_0x52bc88),_0x4b67e3[a0_0x1102('0x41')](_0x132b66);var _0x162013=new Sprite(new Bitmap(0xa0,0x20));_0x162013[a0_0x1102('0x22')][a0_0x1102('0x4f')]=AXY[a0_0x1102('0x35')]['Param'][a0_0x1102('0x58')][parseInt(_0x2726ab[a0_0x1102('0x42')]['axy_quality'])||AXY['Quality'][a0_0x1102('0x7')]['default']][a0_0x1102('0x2a')],_0x162013[a0_0x1102('0x22')][a0_0x1102('0x0')](_0x2726ab[a0_0x1102('0x69')],0x0,0x0,0xa0,0x20),_0x162013['x']=_0x3029b4+0x4,_0x4b67e3['addChild'](_0x162013);},BattleResult[a0_0x1102('0x27')][a0_0x1102('0x20')]=function(){this[a0_0x1102('0x3c')]=new Sprite(new Bitmap(0x8c,0x20)),this[a0_0x1102('0x3c')][a0_0x1102('0x19')]=0x0;var _0x381f89=AXY[a0_0x1102('0x35')][a0_0x1102('0x7')]['quality'][AXY['Quality'][a0_0x1102('0x7')][a0_0x1102('0x2')]][a0_0x1102('0x2a')];if(parseInt(this['_actor'][a0_0x1102('0x16')]()[a0_0x1102('0x42')]['axy_quality']))_0x381f89=AXY[a0_0x1102('0x35')][a0_0x1102('0x7')]['quality'][this['_actor'][a0_0x1102('0x16')]()[a0_0x1102('0x42')][a0_0x1102('0x6')]][a0_0x1102('0x2a')];else parseInt(this[a0_0x1102('0x2b')]['currentClass']()[a0_0x1102('0x42')][a0_0x1102('0x6')])?_0x381f89=AXY[a0_0x1102('0x35')][a0_0x1102('0x7')][a0_0x1102('0x58')][this[a0_0x1102('0x2b')][a0_0x1102('0x18')]()[a0_0x1102('0x42')][a0_0x1102('0x6')]][a0_0x1102('0x2a')]:_0x381f89=AXY[a0_0x1102('0x35')][a0_0x1102('0x7')][a0_0x1102('0x58')][AXY[a0_0x1102('0x35')][a0_0x1102('0x7')]['default']]['color'];this[a0_0x1102('0x3c')]['bitmap'][a0_0x1102('0x4f')]=_0x381f89,this[a0_0x1102('0x3c')][a0_0x1102('0x22')][a0_0x1102('0x0')](this[a0_0x1102('0x2b')][a0_0x1102('0x3c')],0x0,0x0,0x8c,0x20),this[a0_0x1102('0x3c')]['x']=Moghunter[a0_0x1102('0x40')],this[a0_0x1102('0x3c')]['y']=Moghunter[a0_0x1102('0x30')],this[a0_0x1102('0x41')](this[a0_0x1102('0x3c')]);});}else Utils[a0_0x1102('0x5a')]=='MZ'&&(Window_StatusBase[a0_0x1102('0x27')][a0_0x1102('0x45')]=function(_0x332d2c,_0x3f3b5e,_0x16b512,_0x35b0a9){_0x35b0a9=_0x35b0a9||0xa8;var _0xe785f4=AXY[a0_0x1102('0x35')]['Param'][a0_0x1102('0x58')][AXY[a0_0x1102('0x35')][a0_0x1102('0x7')][a0_0x1102('0x2')]][a0_0x1102('0x2a')];if(ColorManager[a0_0x1102('0x29')](_0x332d2c)==ColorManager[a0_0x1102('0x14')]()){if(parseInt(_0x332d2c['actor']()['meta'][a0_0x1102('0x6')]))_0xe785f4=AXY[a0_0x1102('0x35')][a0_0x1102('0x7')][a0_0x1102('0x58')][_0x332d2c[a0_0x1102('0x16')]()[a0_0x1102('0x42')][a0_0x1102('0x6')]][a0_0x1102('0x2a')];else parseInt(_0x332d2c[a0_0x1102('0x18')]()[a0_0x1102('0x42')]['axy_quality'])?_0xe785f4=AXY[a0_0x1102('0x35')][a0_0x1102('0x7')][a0_0x1102('0x58')][_0x332d2c['currentClass']()[a0_0x1102('0x42')][a0_0x1102('0x6')]][a0_0x1102('0x2a')]:_0xe785f4=AXY['Quality']['Param'][a0_0x1102('0x58')][AXY[a0_0x1102('0x35')]['Param'][a0_0x1102('0x2')]][a0_0x1102('0x2a')];}else _0xe785f4=ColorManager[a0_0x1102('0x29')](_0x332d2c);this[a0_0x1102('0x1f')](_0xe785f4),this[a0_0x1102('0x0')](_0x332d2c[a0_0x1102('0x69')](),_0x3f3b5e,_0x16b512,_0x35b0a9);},Sprite_Name['prototype'][a0_0x1102('0x4f')]=function(){let _0x1855d1=this[a0_0x1102('0x23')];var _0x4bda6a=AXY[a0_0x1102('0x35')]['Param'][a0_0x1102('0x58')][AXY['Quality'][a0_0x1102('0x7')][a0_0x1102('0x2')]]['color'];if(ColorManager['hpColor'](_0x1855d1)==ColorManager[a0_0x1102('0x14')]()){if(parseInt(_0x1855d1['actor']()[a0_0x1102('0x42')][a0_0x1102('0x6')]))_0x4bda6a=AXY['Quality'][a0_0x1102('0x7')][a0_0x1102('0x58')][_0x1855d1[a0_0x1102('0x16')]()[a0_0x1102('0x42')][a0_0x1102('0x6')]]['color'];else parseInt(_0x1855d1[a0_0x1102('0x18')]()[a0_0x1102('0x42')][a0_0x1102('0x6')])?_0x4bda6a=AXY[a0_0x1102('0x35')][a0_0x1102('0x7')][a0_0x1102('0x58')][_0x1855d1[a0_0x1102('0x18')]()[a0_0x1102('0x42')][a0_0x1102('0x6')]][a0_0x1102('0x2a')]:_0x4bda6a=AXY[a0_0x1102('0x35')][a0_0x1102('0x7')][a0_0x1102('0x58')][AXY[a0_0x1102('0x35')][a0_0x1102('0x7')][a0_0x1102('0x2')]]['color'];}else _0x4bda6a=ColorManager[a0_0x1102('0x29')](_0x1855d1);return _0x4bda6a;},Window_StatusBase[a0_0x1102('0x27')]['drawActorClass']=function(_0x2fda42,_0x245b94,_0x3f44a0,_0x17eeb1){_0x17eeb1=_0x17eeb1||0xa8,this[a0_0x1102('0x1f')](AXY[a0_0x1102('0x35')][a0_0x1102('0x7')][a0_0x1102('0x58')][parseInt(_0x2fda42[a0_0x1102('0x18')]()[a0_0x1102('0x42')][a0_0x1102('0x6')])||AXY[a0_0x1102('0x35')]['Param']['default']][a0_0x1102('0x2a')]),this[a0_0x1102('0x0')](_0x2fda42[a0_0x1102('0x18')]()[a0_0x1102('0x69')],_0x245b94,_0x3f44a0,_0x17eeb1);},Window_Base[a0_0x1102('0x27')][a0_0x1102('0x53')]=function(_0x11af2c,_0x34c0d2,_0x45d11e,_0x1d4614){if(_0x11af2c){const _0x391f64=_0x45d11e+(this['lineHeight']()-ImageManager[a0_0x1102('0x15')])/0x2,_0x2909c3=ImageManager['iconWidth']+0x4,_0x1d83c8=Math[a0_0x1102('0x46')](0x0,_0x1d4614-_0x2909c3);this[a0_0x1102('0x1f')](AXY[a0_0x1102('0x35')]['Param'][a0_0x1102('0x58')][parseInt(_0x11af2c[a0_0x1102('0x42')][a0_0x1102('0x6')])||AXY[a0_0x1102('0x35')][a0_0x1102('0x7')][a0_0x1102('0x2')]]['color']),this[a0_0x1102('0x47')](_0x11af2c['iconIndex'],_0x34c0d2,_0x391f64),this[a0_0x1102('0x0')](_0x11af2c['name'],_0x34c0d2+_0x2909c3,_0x45d11e,_0x1d83c8);}},Window_BattleEnemy[a0_0x1102('0x27')][a0_0x1102('0xa')]=function(_0x190c26){this[a0_0x1102('0x1f')](AXY[a0_0x1102('0x35')][a0_0x1102('0x7')][a0_0x1102('0x58')][parseInt($dataEnemies[this[a0_0x1102('0x52')][_0x190c26][a0_0x1102('0x44')]]['meta'][a0_0x1102('0x6')])||AXY[a0_0x1102('0x35')][a0_0x1102('0x7')][a0_0x1102('0x2')]][a0_0x1102('0x2a')]);const _0x2bc186=this['_enemies'][_0x190c26][a0_0x1102('0x69')](),_0x3a52fc=this['itemLineRect'](_0x190c26);this[a0_0x1102('0x0')](_0x2bc186,_0x3a52fc['x'],_0x3a52fc['y'],_0x3a52fc[a0_0x1102('0x3d')]);},Window_Help[a0_0x1102('0x27')]['setItem']=function(_0x44a472){_0x44a472&&(this[a0_0x1102('0x39')]=AXY[a0_0x1102('0x35')][a0_0x1102('0x7')][a0_0x1102('0x58')][parseInt(_0x44a472[a0_0x1102('0x42')][a0_0x1102('0x6')])||AXY[a0_0x1102('0x35')][a0_0x1102('0x7')][a0_0x1102('0x2')]]),this[a0_0x1102('0x3b')](_0x44a472?_0x44a472[a0_0x1102('0x32')]:'');},Window_Help['prototype'][a0_0x1102('0x4')]=function(){const _0x29b7b6=this[a0_0x1102('0x4b')]();this[a0_0x1102('0x4e')][a0_0x1102('0x37')]();if(this[a0_0x1102('0x39')]){this['changeTextColor'](this[a0_0x1102('0x39')][a0_0x1102('0x2a')]);let _0x3f977a=AXY[a0_0x1102('0x35')][a0_0x1102('0x7')]['template']['replace'](a0_0x1102('0x1c'),this[a0_0x1102('0x39')]['name'])[a0_0x1102('0x24')]('\x5cs','\x20'),_0x4e4724=this[a0_0x1102('0x1a')](_0x3f977a);this[a0_0x1102('0x0')](_0x3f977a,_0x29b7b6['x'],_0x29b7b6['y'],_0x4e4724),this[a0_0x1102('0x38')](this[a0_0x1102('0x68')],_0x29b7b6['x']+_0x4e4724,_0x29b7b6['y'],_0x29b7b6[a0_0x1102('0x3d')]);}else this['drawTextEx'](this[a0_0x1102('0x68')],_0x29b7b6['x'],_0x29b7b6['y'],_0x29b7b6['width']);});}());