//This script written by Hello Programming 
var script = document.createElement('script');
script.src = 'tools2.js';
document.head.appendChild(script);
function strHx(str) {
    var result = '';
    for (var i = 0; i < str.length; i++) {
        result += str.charCodeAt(i).toString(16);
    }
    return result.toUpperCase();
}
 
function hxStr(hex) {
    var result = '';
    for (var i = 0; i < hex.length; i += 2) {
        result += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return result;
}
function getCPos(element) {
  //This function written by ChatGPT;
  var position = 0;
  if (element.selectionStart) { // W3C standard
    position = element.selectionStart;
  } else if (document.selection) { // IE < 9
    element.focus();
    var range = document.selection.createRange();
    range.moveStart('character', -element.value.length);
    position = range.text.length;
  }
  return position;
}
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
async function KtvEffect(Element_Name,Color,Text,Druation){
    var el = document.getElementById(Element_Name);
    var n = Text.split('');
    for(var i=0;i<n.length;i++){
        await sleep(Druation/Text.length*1000);
        n[i] = '<font color="'+Color+'">'+n[i]+'</font>';
        el.innerHTML = '';
        for(var j = 0;j < n.length;j++)
        {
            el.innerHTML += n[j];
        }
        //el.innerHTML = n;
    }
}
function convertTimeCodeToSecond(Time_Code){
    var cd = Time_Code.split(':');
    if(cd.length == 2)
    {
        let minute = cd[0]*60;
        let second = cd[1];
        var al = eval(`${minute}+${second}`);
        return al;
    }else if(cd.length == 3){
        var hour = cd[0]*3600;
        var mn = cd[1]*60;
        var sec = cd[2];
        var pl = eval(`${hour}+${mn}+${sec}`);
        return pl;
    }else{
        alert('Not formatted Timecode.Please input correct timecode.Such as"1:26" or "1:23:45".');
    }
}
function pinyin(characters){
    const {pinyin}=window.pinyinPro;
    const hans=characters;
    const plainPinyin=pinyin(hans, { toneType: 'none' });
    return plainPinyin;
}
async function ptw(elm,chars,seconds){
    var a = '';
    for(var i = 0;i < chars.length;i++){
        var x = pinyin(chars[i]);
        for(var b = 0;b < x.length;b++){
            await sleep(seconds);
            document.getElementById(elm).innerHTML+=x[b];
        }
        await sleep(seconds);
        a+=chars[i];
        document.getElementById(elm).innerHTML = a;
        if(eval(`${i}%2`)==0){
            await sleep(seconds);
        }else if(eval(`${i}%5`)==0){
            await sleep(1000);
        }else{
            //todo,.
        }
    }
}
async function cur(elem,c,se){
    document.getElementById(elem).innerHTML = c;
    await sleep(se);
    document.getElementById(elem).innerHTML = '';
    await sleep(se);
    cur(elem,c,se);
}
async function typewriter(el,chchch,sach){
    var m = '';
    for(var i = 0;i < chchch.length;i++){
        m+=chchch[i];
        await sleep(sach);
        document.getElementById(el).innerHTML=m;
    }
}