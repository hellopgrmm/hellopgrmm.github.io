var version = '1.4.2';
//This is a JavaScript Tools of making HTML system
//Official Website:https://hellopgrmm.github.io/
//Version 1.4.2
//Welcome to use.
//Copyright(C)Hellopgrmm 2023-2024
function ver()
{
    return version;
}
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
function savefile(Name,Content)
{
    localStorage.setItem(Name,Content);
}
function hasElementWithId(id) {
    return document.getElementById(id) !== null;
}
function listall()
{
    if(hasElementWithId('file-container') && hasElementWithId('cont') && hasElementWithId('lastpage'))
    {
        //alert('元素存在');
        var giegie = document.getElementById('file-container');
        //var gie = document.getElementById('cont').value;
        for(var i = 0;i < localStorage.length;i++){
            var fuck = localStorage.key(i);
            giegie.innerHTML+=`<a onclick="document.getElementById('lastpage').style.display='';cont.style.display='';document.getElementById('file-container').style.display='none';cont.value=localStorage.getItem('${fuck}');"><img src="https://hellopgrmm.github.io/simul/kunpics/KunICON/TXT.png">${fuck}</a><br>`;
        }
    }
    else{
        alert('缺失名为file-container的div元素,缺失名为cont的textarea元素,缺失名为lastpage的button元素，请添加缺少的元素。(请注意，lastpage需要添加一个点击事件代码在属性里:onclick="lastpage()")');
    }
}
function newApp(name,iconfrom){
    if(hasElementWithId('AppMain'))
    {
        if(iconfrom == 'default'){
            document.getElementById('AppMain').innerHTML+=`<div onclick='${name}.style.display="";'>&nbsp;<img style='height:50px;width:50px' src='https://hellopgrmm.github.io/simul/kunpics/KunICON/BLUE.png'/><br><a>${name}</a></div>`
        }
        else{
            document.getElementById('AppMain').innerHTML+=`<div onclick='${name}.style.display="";'>&nbsp;<img style='height:50px;width:50px' src='${iconfrom}'/><br><a>${name}</a></div>`;
        }
    }
    else{
        alert('没有名为AppMain的div元素，无法执行newApp函数。');
    }
}
function lastpage()
{
    document.getElementById("lastpage").style.display="none";document.getElementById("file-container").style.display="";cont.style.display="none";
}
function newFwindow(idname,IframeFrom)
{
    AppMain.innerHTML+=`<div draggable="true" style='height:50%;width:50%;position:absolute;border:1px solid black;background:white;cursor:move;' id='${idname}'><button onclick="${idname}.style.display='none'" style="height:25px;width:50px;border:1px solid black;background:red;color:white;font-family:ht;">关闭</button><button onclick="${idname}.style.height='95%';${idname}.style.width='100%';${idname}.style.left='0%';${idname}.style.top='5%'" style="height:25px;width:75px;border:1px solid black;background:#ccc;color:black;font-family:ht;">最大化</button><button onclick="${idname}.style.height='50%';${idname}.style.width='30%'" style="height:25px;width:75px;border:1px solid black;background:#ccc;color:black;font-family:ht;">最小化</button><a>&nbsp;${idname}</a><hr><!--Main-->
    <iframe style='overflow:auto;' src="${IframeFrom}" width="100%" height="87%" scrolling="" frameborder="0"></iframe>
</div>`;
}
function drager(dragdivname){
var dragDiv = document.getElementById(dragdivname); // 获取需要拖动的div元素
        
        function handleMouseDown(event) {
            event.preventDefault(); // 防止选中文本时也会开始拖动
            
            var offsetX = event.clientX - dragDiv.offsetLeft; // 计算鼠标点击位置与div左边界之间的水平偏移量
            var offsetY = event.clientY - dragDiv.offsetTop; // 计算鼠标点击位置与div上边界之间的垂直偏移量
            
            function handleMouseMove(event) {
                dragDiv.style.left = (event.clientX - offsetX) + "px"; // 更新div的left值
                dragDiv.style.top = (event.clientY - offsetY) + "px"; // 更新div的top值
            }
            
            function handleMouseUp() {
                window.removeEventListener('mousemove', handleMouseMove); // 松开鼠标按钮时停止移动
                window.removeEventListener('mouseup', handleMouseUp); // 松开鼠标按钮时停止移动
            }
            
            window.addEventListener('mousemove', handleMouseMove); // 当鼠标移动时调用handleMouseMove函数
            window.addEventListener('mouseup', handleMouseUp); // 当释放鼠标按钮时调用handleMouseUp函数
        }
        
        dragDiv.addEventListener('mousedown', handleMouseDown); // 当鼠标按下时调用handleMouseDown函数
}
function newTxt(idname2,Info)
{
    AppMain.innerHTML+=`<div draggable="true" style='height:50%;width:50%;position:absolute;border:1px solid black;background:white;cursor:move;' id='${idname2}'><button onclick="${idname2}.style.display='none'" style="height:25px;width:50px;border:1px solid black;background:red;color:white;font-family:ht;">关闭</button><button onclick="${idname2}.style.height='95%';${idname2}.style.width='100%';${idname2}.style.left='0%';${idname2}.style.top='5%'" style="height:25px;width:75px;border:1px solid black;background:#ccc;color:black;font-family:ht;">最大化</button><button onclick="${idname2}.style.height='50%';${idname2}.style.width='30%'" style="height:25px;width:75px;border:1px solid black;background:#ccc;color:black;font-family:ht;">最小化</button><a>&nbsp;${idname2}</a><hr><!--Main-->
    <a>${Info}</a>
</div>`;
}
function PasswordVerify(titleOfVerify,CorrectPassWord){
    if(hasElementWithId('PassWord-Container')){
        document.getElementById('PassWord-Container').innerHTML=`<center><div draggable="true" style='height:100%;width:100%;position:absolute;border:1px solid black;background:white;cursor:move;' id='verify'>
<h2>${titleOfVerify}</h2><a>请输入用户口令:</a><br><input style='font-size:20;outline:none;border-radius:0px;height:35px;width:50%;' type='password' id='your'/><br><br><button style='border-radius:5px;height:30px;width:20%;border:1px solid black;background:#ccc;color:black;font-family:ht;' onclick="if(document.getElementById('your').value == ${CorrectPassWord}){verify.style.display='none';}else{info.innerHTML='口令不对,请再次输入。';throw new Error('Error Password!');}">确定口令</button><br><br><button style='border-radius:5px;height:30px;width:20%;border:1px solid black;background:red;color:white;font-family:ht;' onclick="document.getElementById('your').value='';">清空输入</button><br><a id='info' style='color:red'></a>
</div></center>`;
    }else{
        alert('缺少id为PassWord-Container的dov元素！');
    }
}
function chback(FromSource)
{
    if(document.querySelector(".bg")!==null){
        var cnm = document.querySelector(".bg");
        cnm.style.backgroundImage=`url("${FromSource}")`;
    }
    else{
        alert('缺少class为bg的body元素，请设置！');
    }
}
function defnewcoin(Coin)
{
    localStorage.setItem(`${Coin}.VirtualCoinFile`,'0');
}
function setCoin(Coins,Quantity)
{
    localStorage.setItem(`${Coins}.VirtualCoinFile`,`${Quantity}`);
}
function getCoin(Coins2)
{
    var what = localStorage.getItem(`${Coins2}.VirtualCoinFile`);
    return what;
}
function AddCoin(CoName,Q)
{
    for(var i = 0;i < Q;i++)
    {
        var bi = localStorage.getItem(`${CoName}.VirtualCoinFile`);
        bi++;
        localStorage.setItem(`${CoName}.VirtualCoinFile`,bi);
    }
}
function LessCoin(Coinname,Qu)
{
    var kun = localStorage.getItem(`${Coinname}.VirtualCoinFile`);
    kun = kun - Qu;
    localStorage.setItem(`${Coinname}.VirtualCoinFile`,kun);
}
//alert('no');
