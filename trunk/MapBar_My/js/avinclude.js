var strImgsvrUrl = "http://sharesh.cn/labs/MapBar_My/";
document.writeln('<div id="myalert" style="position:absolute;z-index:100;filter:alpha(opacity=90);-moz-opacity:0.9;visibility:hidden;"></div>');
function W2Usr(x,y,Llg9)
{
    document.getElementById("myalert").style.top=parseInt(y)-60;
    document.getElementById("myalert").style.left=parseInt(x)-100;
    document.getElementById("myalert").innerHTML='<table width="196" border="0" cellpadding="0" cellspacing="0" style="border:1px solid #CCCCCC;"><tr><td height="19" bgcolor="#8888FF"></td></tr><tr><td height="100" align="center" valign="middle" bgcolor="#FFFFFF"><table width="167" height="79" border="0" cellpadding="0" cellspacing="0"><tr><td height="55" align="center" valign="middle" style="font-size: 12px;color: #0065AD;">'+Llg9+'</td></tr><tr><td height="24" align="center" valign="middle"><input type="button" value="�ر�" onClick="document.getElementById(\'myalert\').style.visibility = \'hidden\'"onMouseOver="style.background=\'#DEE7EF\';style.cursor=\'hand\'"onMouseOut="this.style.background=\'FDFAF3\'" style="font-size: 9pt; width: 38; height:18; border: 1px solid #4A799C;background-color: #FDFAF3"></td></tr></table></td></tr></table>';
    document.getElementById("myalert").style.visibility="visible"
};
document.write('<iframe src="'+strImgsvrUrl+'images/mask.gif" width=0 height=0></iframe>');
var F4E9=document.all?1:0;
var sijd=document.it3?1:0;
var OuO1=(F4E9)?"document.all.":"document.";
var ac052=(F4E9)?".style":"";
var fk5$K=0;
function CreateToolTip(Xt3G,rP4,Llg9)
{
    var PT9='<table border="0" width="150" cellspacing="0" cellpadding="0">'+'<tr><td width="100%" bgcolor="#000000">'+'<table border="0" width="100%" cellspacing="1" cellpadding="0">'+'<tr><td width="100%" bgcolor='+topColor+'>'+'<table border="0" width="90%" cellspacing="0" cellpadding="0" align="center">'+'<tr><td id="mytooltiptitle"width="100%" class="tooltiptitle">&nbsp;'+rP4+'</td>'+'<td style="cursor:hand" valign="top">'+'<a href="javascript:hideToolTipMenu();"><font color=#ffffff size=2 face=arial style="text-decoration:none">x</font></a>'+'</td>'+'</tr>'+'</table>'+'</td></tr>'+'<tr><td width="100%" bgcolor='+subColor+'>'+'<table border="0" width="100%" cellpadding="0" cellspacing="1" align="center">'+'<tr><td id="mytooltipcontent" width="100%" class="tooltipcontent">'+Llg9+'</td></tr>'+'</table>'+'</td></tr>'+'</table>'+'</td></tr>'+'</table>';
    document.getElementById(Xt3G).innerHTML=PT9
};
function MoveToolTip(Xt3G,N$lQ2,Q735,H694)
{
    if(F4E9)
    {
        document.getElementById(Xt3G).style.top=(eval(N$lQ2)+document.body.scrollTop)
    }
    else
    {
        document.getElementById(Xt3G).style.top=eval(N$lQ2)
    }
    document.getElementById(Xt3G).style.left=eval(Q735)
};
function UpdateContent(Xt3G,rP4,Llg9)
{
    if(fk5$K==0)
    {
        CreateToolTip(Xt3G,rP4,Llg9);
        fk5$K=1
    }
    else
    {
        if(document.getElementById("mytooltiptitle"))document.getElementById("mytooltiptitle").innerHTML='&nbsp;'+rP4;
        if(document.getElementById("mytooltipcontent"))document.getElementById("mytooltipcontent").innerHTML=Llg9
    }
};
function setToolTipMenu(x,y,rP4,Llg9)
{
    UpdateContent("ToolTip",rP4,Llg9);
    var AP8=document.getElementById("ToolTip").clientWidth;
    var Qy$03=document.getElementById("ToolTip").clientHeight;
    if(x>mapwidth-AP8)
    {
        x=x-AP8
    };
    if(y>mapheight-Qy$03)
    {
        y=y-Qy$03
    };
    MoveToolTip("ToolTip",y+yoffset,x+xoffset);
    document.getElementById("ToolTip").style.visibility='visible'
};
function hideToolTipMenu()
{
    document.getElementById("ToolTip").style.visibility="hidden";
    MoveToolTip("ToolTip",0,0)
};
document.write('<div id="ToolTip" style="visibility:hidden"></div>');
function VA8(name,left,top,width,height,m18,vKt2_,content,v4gN0)
{
    this.h6yM=content;
    this.v4gN0=v4gN0;
    this.name=name;
    this.N06=1;
    this.hide=function()
    {
        this.style.visibility="hidden"
    };
    this.show=function()
    {
        this.style.visibility="visible"
    };
    this.moveTo=function(x,y)
    {
        this.style.left=x;
        this.style.top=y
    };
    this.resize=function(rF24,n65D)
    {
        if(parseInt(rF24)>=0&&parseInt(n65D)>=0)
        {
            this.style.width=rF24;
            this.style.height=n65D
        }
    };
    this.t544t=function(x,y)
    {
        if(x>parseInt(this.style.left)&&x<(parseInt(this.style.left)+parseInt(this.style.width))&&y>parseInt(this.style.top)&&y<(parseInt(this.style.top)+parseInt(this.style.height)))
        {
            return true
        }
        return false
    };
    this.appendChild=function(aL8B)
    {
        try
        {
            this.c77d.appendChild(aL8B)
        }
        catch(H694)
        {
        }
    };
    this.clear=function()
    {
        while(this.c77d.hasChildNodes())
        {
            this.c77d.removeChild(this.c77d.lastChild)
        }
    };
    this.clean=this.clear;
    this.getName=function()
    {
        return this.name
    };
    try
    {
        this.c77d=Hey(this.name,left,top,width,height,m18,vKt2_,content);
        this.c77d.unselectable="on";
        if(this.v4gN0)this.v4gN0.appendChild(this.c77d);
        this.style=this.c77d.style;
        this.graphics=(F4E9)?new G50WI():new jsGraphics(this.name)
    }
    catch(H694)
    {
    }
};
function G50WI()
{
    this.clear=function()
    {
    };
    this.paint=function()
    {
    };
    this.gAA2=function()
    {
    };
    this.Y9FT6=function()
    {
    };
    this.setColor=function()
    {
    }
};
function Qkw0(name)
{
    if(document.getElementById(name)!=null)
    {
        OEi$=document.getElementById(name);
        return OEi$
    }
    return null
};
function p1om(name)
{
    if(document.getElementById(name)!=null)
    {
        t5Ex=document.getElementById(name).style
    }
    return null
};
function Eq560(name,left,top,width,height,m18,vKt2_,content)
{
    document.writeln('<div unselectable="on" id="'+name+'" style="position:absolute; overflow:none; left:'+left+'px; top:'+top+'px; width:'+width+'px; height:'+height+'px;'+' visibility:'+(m18?'visible;':'hidden;')+'zIndex='+vKt2_+';">');
    document.writeln(content);
    document.writeln('</div>')
};
function Hey(name,left,top,width,height,m18,vKt2_,content)
{
    var n65D=document.createElement("div");
    n65D.unselectable="on";
    n65D.id=name;
    n65D.style.position="absolute";
    n65D.style.top=top;
    n65D.style.left=left;
    n65D.style.zIndex=vKt2_;
    n65D.style.width=width;
    n65D.style.height=height;
    n65D.style.visibility=(m18)?'visible':'hidden';
    n65D.innerHTML=content;
    return n65D
};
function I4i2(cbv,left,top,width,height)
{
    var n65D=new Image();
    n65D.unselectable="on";
    n65D.style.position="absolute";
    n65D.style.top=top;
    n65D.style.left=left;
    n65D.style.width=width;
    n65D.style.height=height;
    if(cbv!="undefined")n65D.src=cbv;
    n65D.onerror=function()
    {
        this.onerror=null;
        if(this.parentNode)this.parentNode.removeChild(this)
    };
    return n65D
};
function KIx4(cbv,left,top,width,height,v4gN0)
{
    this.n0Y=I4i2(cbv,left,top,width,height);
    this.KAOc=0;
    this.q4D4=0;
    this.name=name;
    v4gN0.appendChild(this.n0Y);
    this.hide=function()
    {
        this.n0Y.style.visibility="hidden"
    };
    this.show=function()
    {
        this.n0Y.style.visibility="visible"
    };
    this.moveTo=function(x,y)
    {
        this.n0Y.style.left=x;
        this.n0Y.style.top=y
    };
    this.resize=function(rF24,n65D)
    {
        this.n0Y.style.width=rF24;
        this.n0Y.style.height=n65D
    };
    this.getName=function()
    {
        return this.name
    };
    this.P260=function(v4gN0)
    {
        v4gN0.appendChild(this.n0Y)
    }
};
function Oc2(rK2U2,x,y,color)
{
    var n65D='<div unselectable="on" style="position:absolute;z-index=0;white-space:nowrap;filter=alpha(opacity=30);'+'border:1px solid '+color+';'+'left:'+(x+2)+'px;'+'top:'+(y+2)+'px;'+'background-color:'+color+';'+'color:'+this.color+';">'+'<table border="1" cellspacing="0" cellpadding="0" bordercolor="'+color+'">'+'<tr><td width="100%">'+'<font class="ptlabel" color="'+color+'">'+rK2U2+'</font>'+'</td></tr>'+'</table>'+'<\/div>';
    n65D+='<div unselectable="on" style="position:absolute;z-index=0;white-space:nowrap;'+'border:1px solid '+color+';'+'left:'+x+'px;'+'top:'+y+'px;'+'background-color:#FFFFCC;'+'color:'+this.color+';">'+'<table border="1" cellspacing="0" cellpadding="0" bordercolor=#FFFFCC>'+'<tr><td width="100%">'+'<font class="ptlabel" color="'+color+'" title="'+rK2U2+'">'+rK2U2+'</font>'+'</td></tr>'+'</table>'+'<\/div>';
    return n65D
};
function g27Pn(title,left,top,_29)
{
    hideBubble();
    var PT9=AVB0.TrB(title,_29+DirectionInfo);
    var n65D=Hey("bubble",parseInt(left)-AVB0.xoffset,parseInt(top)-AVB0.height,0,0,1,100,PT9);
    return n65D
};
function hideBubble()
{
    hideToolTipMenu();
    var n65D=document.getElementById("bubble");
    if(n65D)n65D.parentNode.removeChild(n65D);
    if(maplet.A3Y7r)
    {
        maplet.A3Y7r=null
    }
};
var AVB0=new M67();
function M67()
{
    this.height=230;
    this.xoffset=90;
    this.width=217;
    this.kWHlL='<div id="Layer1" unselectable="on" style="position:absolute; left:40px; top:102px; width:367px; height:147px; filter=alpha(opacity=50);z-index:0;-moz-opacity:0.5;opacity:0.5;">'+'<img src="'+strImgsvrUrl+'images/shadow50.png" width="100%" height="100%"></div>'+'<div id="Layer2" unselectable="on" style="position:absolute; left:89px; top:122px; width:146px; height:77px; z-index:1">'+'<img src="'+strImgsvrUrl+'images/qqqq.png" width="79" height="102"></div>'+'<div unselectable="on" style="z-index:1">'+'<table width="277" border="0" cellspacing="0" cellpadding="0">'+'<tr>'+' <td width="10"><img src="'+strImgsvrUrl+'images/new_r1_c1.png" width="10" height="10"></td>'+'<td width="257" background="'+strImgsvrUrl+'images/new_r1_c2.gif"></td>'+'<td width="10"><img src="'+strImgsvrUrl+'images/left1_r1_c6.png" width="10" height="10"></td>'+'</tr>'+'<tr>'+' <td height="105" background="'+strImgsvrUrl+'images/new_r2_c1.gif">&nbsp;</td>'+'<td align="right" valign="top" bgcolor="#FFFFFF">'+'<a href="javascript:hideBubble();"><img src="'+strImgsvrUrl+'images/close.gif" width="14" height="13" border="0"></a>'+'</td>'+' <td background="'+strImgsvrUrl+'images/new_r3_c6.gif">&nbsp;</td>'+' </tr>'+'<tr>'+'<td><img src="'+strImgsvrUrl+'images/left1_r5_c1.png" width="10" height="10"></td>'+'<td background="'+strImgsvrUrl+'images/new_r5_c2.gif"></td>'+'<td><img src="'+strImgsvrUrl+'images/left1_r5_c6.png" width="10" height="10"></td>'+'</tr>'+'</table>'+'<img src="'+strImgsvrUrl+'images/qqqq_r1_c2.png" width="1" height="109">'+'</div>';
    this.TrB=function(title,_29)
    {
        return this.kWHlL+this._AXO4(title)+this._AIH1(_29)
    };
    this._AXO4=function(title)
    {
        return '<div class=tooltiptitle unselectable="on" style="position:absolute; left:10px; top:12px; width:217px; height:20px;">'+title+'</div>'
    };
    this._AIH1=function(_29)
    {
        return '<div unselectable="on" style="position:absolute; left:10px; top:32px; width:247px; height:127px;">'+'<table width="247" border="0" cellspacing="0" cellpadding="1"><tr><td width="100%"><font class=tooltipcontent>'+_29+'</font></td></tr></table></div>'
    }
};
function t3h7(_f$,yQ2g,left,top,width,height,m18,vKt2_,v4gN0,o774,$f9)
{
    //�Ķ���ͼƬ·�����ã�Tangf
    //this.hp9h=(_f$==null||_f$=="undefined")?'':_f$+'/';
    this.hp9h='';
    this.t48_=($f9=="1")?true:false;
    this.T365h=(this.t48_==true)?100:254;
    this.E3419='<IMG unselectable="on" style="position:absolute;left:'+(left+10)+';top:10;filter=alpha(opacity=60);" src="'+strImgsvrUrl+'images/'+this.hp9h+'panshadow.png" >';
    this.E3419+='<IMG id="ctrlw" unselectable="on" title="����ƽ��" onmousemove=style.cursor="hand" onclick="javascript:PerformControl(event, this,1);" style="position:absolute;left:'+(left+10)+';top:30;width=17;height=17;" src="'+strImgsvrUrl+'images/'+this.hp9h+'west.png" >';
    this.E3419+='<IMG id="ctrln" unselectable="on" title="��ƽ��" onmousemove=style.cursor="hand" onclick="javascript:PerformControl(event, this,2);" style="position:absolute;left:'+(left+30)+';top:10;width=17;height=17;" src="'+strImgsvrUrl+'images/'+this.hp9h+'north.png" >';
    this.E3419+='<IMG id="ctrle" unselectable="on" title="��ƽ��" onmousemove=style.cursor="hand" onclick="javascript:PerformControl(event, this,3);" style="position:absolute;left:'+(left+50)+';top:30;width=17;height=17;" src="'+strImgsvrUrl+'images/'+this.hp9h+'east.png" >';
    this.E3419+='<IMG id="ctrls" unselectable="on" title="����ƽ��" onmousemove=style.cursor="hand" onclick="javascript:PerformControl(event, this,4);" style="position:absolute;left:'+(left+30)+';top:50;width=17;height=17;" src="'+strImgsvrUrl+'images/'+this.hp9h+'south.png" >';
    this.E3419+='<IMG id="ctrlmeas" unselectable="on" title="��������" onmousemove=style.cursor="hand" onclick="javascript:PerformControl(event, this,7);" style="position:absolute;left:'+(left+30)+';top:30;width=17;height=17;" src="'+strImgsvrUrl+'images/'+this.hp9h+'measure.png" >';
    this.E3419+='<IMG unselectable="on" style="position:absolute;left:'+(left+31)+';top:81;filter=alpha(opacity=60);" src="'+strImgsvrUrl+'images/'+this.hp9h+'gridshadow.png" >';
    this.E3419+='<IMG unselectable="on" style="position:absolute;left:'+(left+31)+';top:'+(this.T365h+1)+';filter=alpha(opacity=60);" src="'+strImgsvrUrl+'images/'+this.hp9h+'gridshadow.png" >';
    if(!this.t48_)
    {
        this.E3419+='<IMG unselectable="on" style="position:absolute;left:'+(left+31)+';top:86;filter=alpha(opacity=60);" src="'+strImgsvrUrl+'images/'+this.hp9h+'zoom-bg2.png" >';
        this.E3419+='<IMG id="ctrlbg" unselectable="on" title="�����������" onmousemove=style.cursor="default" onclick="javascript:PerformControl(event, this, 8);" style="position:absolute;left:'+(left+30)+';top:85;" src="'+strImgsvrUrl+'images/'+this.hp9h+'zoom-bg.png" >'
    }
    this.E3419+='<IMG id="ctrlzmin" unselectable="on" title="�Ŵ�" onmousemove=style.cursor="hand" onclick="javascript:PerformControl(event, this,5);" style="position:absolute;left:'+(left+30)+';top:80;width=17;height=17;" src="'+strImgsvrUrl+'images/'+this.hp9h+'zoom-plus.png" >';
    this.E3419+='<IMG id="ctrlzmout" unselectable="on" title="��С" onmousemove=style.cursor="hand" onclick="javascript:PerformControl(event, this,6);" style="position:absolute;left:'+(left+30)+';top:'+this.T365h+';width=17;height=17;" src="'+strImgsvrUrl+'images/'+this.hp9h+'zoom-minus.png" >';
    this.O6$=new VA8("LayerControl",left,top,width,height,m18,vKt2_,this.E3419,v4gN0);
    this.O6$.c77d.o774=o774;
    if(!this.t48_)
    {
        {
            this.D7T0=new Image();
            this.D7T0.src=strImgsvrUrl+'images/'+this.hp9h+'slider.png';
            this.D7T0.id="ctrlslider";
            this.D7T0.unselectable="on";
            this.D7T0.style.position="absolute";
            this.D7T0.style.top=165;
            this.D7T0.style.left=left+30
        }
        this.D7T0.L71g=0;
        this.O6$.c77d.appendChild(this.D7T0);
        this.O6$.c77d.D7T0=this.D7T0;
        this.D7T0.style.top=(R$1-yQ2g)*(132/(R$1-1))+100;
        this.D7T0.offsetY=parseInt(o774.top);
        this.D7T0.onmousedown=function(H694)
        {
            if(this.L71g==0)
            {
                this.L71g=parseInt((F4E9)?event.clientY:H694.clientY)
            }
            else
            {
                this.L71g=0
            }
        };
        this.D7T0.ondrag=function(H694)
        {
            this.parentNode.style.cursor="default";
            if(this.L71g>0)
            {
                var Xhe_0=parseInt((F4E9)?event.clientY:H694.clientY)-parseInt(this.offsetY);
                if(Xhe_0>=100&&Xhe_0<244)
                {
                    this.style.top=Xhe_0;
                    if(F4E9)
                    {
                        var y=parseInt((F4E9)?event.clientY:H694.clientY)-parseInt(document.body.scrollTop);
                        var yQ2g=R$1-Math.max(0,Math.min(R$1,parseInt(((parseInt(y)-100-this.offsetY)/(R$1+1))*(132/(R$1-1)))/(132/(R$1-1))));
                        this.parentNode.o774.OYos(yQ2g)
                    }
                }
                return true
            }
            return false
        };
        this.D7T0.ondragend=function(H694)
        {
            if(this.L71g>0)
            {
                var y=parseInt((F4E9)?event.clientY:H694.clientY)-parseInt(document.body.scrollTop);
                var yQ2g=R$1-Math.max(0,Math.min(R$1,parseInt((parseInt(y)-100-this.offsetY)/(132/(R$1-1)))));
                this.parentNode.S85(yQ2g);
                this.parentNode.o774.K28.c77d.style.zoom=1;
                this.parentNode.o774.setZoomLevel(parseInt(yQ2g));
                this.L71g=0
            }
            this.L71g=0
        }
    };
    this.onmousedown=function()
    {
        return false
    };
    this.onmousemove=function(H694)
    {
        if(this.D7T0)
        {
            return(F4E9)?this.D7T0.ondrag():this.D7T0.ondrag(H694)
        }
        else
        {
            return false
        }
    };
    this.onmouseup=function(H694)
    {
        return(this.D7T0)?((F4E9)?this.D7T0.ondragend():this.D7T0.ondragend(H694)):false
    };
    this.onmouseout=function()
    {
        return false
    };
    this.O6$.c77d.S85=function(yQ2g)
    {
        if(this.D7T0)
        {
            this.D7T0.style.top=(R$1-yQ2g)*(132/(R$1-1))+100;
            if(this.D7T0.parentNode==null||this.D7T0.parentNode!=this)
            {
                this.appendChild(this.D7T0)
            }
        }
    };
    this.S85=function(yQ2g)
    {
        this.O6$.c77d.S85(yQ2g)
    };
    this.hide=function()
    {
        this.O6$.hide()
    };
    this.show=function()
    {
        this.O6$.show()
    };
    this.WE1iA=function()
    {
        this.O6$.c77d.o774=null;
        if(this.O6$.c77d!=null&&this.O6$.c77d.parentNode!=null)
        {
            this.O6$.c77d.parentNode.removeChild(this.O6$.c77d);
            this.O6$.c77d=null
        }
    }
};
function PerformControl(H694,OEi$,$p3r)
{
    switch($p3r)
    {
        case 1:hideBubble();
        OEi$.parentNode.o774.T$_v(parseInt(maplet.width)/2,0);
        break;
        case 2:hideBubble();
        OEi$.parentNode.o774.T$_v(0,parseInt(maplet.height)/2);
        break;
        case 3:hideBubble();
        OEi$.parentNode.o774.T$_v(-parseInt(maplet.width)/2,0);
        break;
        case 4:hideBubble();
        OEi$.parentNode.o774.T$_v(0,-parseInt(maplet.height)/2);
        break;
        case 5:hideBubble();
        OEi$.parentNode.o774.zoomIn();
        OEi$.parentNode.S85(OEi$.parentNode.o774.getZoomLevel());
        break;
        case 6:hideBubble();
        OEi$.parentNode.o774.zoomOut();
        OEi$.parentNode.S85(OEi$.parentNode.o774.getZoomLevel());
        break;
        case 7:hideBubble();
        OEi$.parentNode.o774.setMode(i9h0.B4w13);
        break;
        case 8:hideBubble();
        var y=parseInt((F4E9)?event.clientY:H694.clientY)-parseInt(document.body.scrollTop);
        var yQ2g=R$1-Math.max(0,Math.min(R$1,parseInt((parseInt(y)-100-OEi$.parentNode.D7T0.offsetY)/(132/(R$1-1)))));
        OEi$.parentNode.S85(yQ2g);
        OEi$.parentNode.o774.setZoomLevel(yQ2g);
        break;
        default:break
    }
};
var s6m8J=null;
function showMouseTipBox(x,y,smpR,v4gN0)
{
    try
    {
        if(s6m8J==null||s6m8J=="undefined")
        {
            var Llg9='<table border="1" cellspacing="0" cellpadding="0" bordercolor=#FF0000>'+'<tr><td width="100%" bgcolor=#FFFFCC>'+'<font class="ptlabel" color="#000000" >'+smpR+'</font>'+'</td></tr>'+'</table>';
            s6m8J=Hey("mousetipbox",parseInt(x)+10,parseInt(y)+18,70,20,1,100,Llg9);
            s6m8J.unselectable="on";
            s6m8J.style.FsD="none"
        }
        else
        {
            s6m8J.style.left=parseInt(x)+10;
            s6m8J.style.top=parseInt(y)+18;
            s6m8J.visibility="visible"
        }
        if(s6m8J!=null&&(s6m8J.parentNode==null||s6m8J.parentNode!=v4gN0))
        {
            v4gN0.appendChild(s6m8J)
        }
    }
    catch(H694)
    {
    }
};
function l2IN5()
{
    if(s6m8J!=null)
    {
        if(s6m8J.parentNode!=null)
        {
            s6m8J.parentNode.removeChild(s6m8J)
        }
        s6m8J=null
    }
};
function b07(H694)
{
    return(F4E9)?event.srcElement.id:H694.target.id
};
function imageTileError(aI9x)
{
    if(aI9x.width==300&&aI9x.ntry=="0")
    {
        aI9x.ntry="1";
        var K34T=aI9x.src;
        var n9Tx=K34T.indexOf("/maplite/");
        aI9x.src=K34T.substring(0,n9Tx)+"/mapimg/"+K34T.substring(n9Tx+9)
    }
    else if(aI9x.width==300&&aI9x.ntry=="1")
    {
        aI9x.ntry="2";
        var K34T=aI9x.src;
        var n9Tx=K34T.indexOf("/mapimg/");
        aI9x.src=K34T.substring(0,n9Tx)+"/mapsvr/"+K34T.substring(n9Tx+8)
    }
    else
    {
        aI9x.ntry="3";
        aI9x.onerror=null;
        aI9x.src=strImgsvrUrl+"images/mask.gif";
        aI9x.style.width=300;
        aI9x.style.height=300
    }
};
function X3R(maplet,yQ2g,left,top,rF24,n65D,m18,v4gN0)
{
    this.maplet=maplet;
    this.left=left;
    this.top=top;
    this.width=rF24;
    this.height=n65D;
    this.mJ18=yQ2g;
    this.s5U=51;
    this.Ajd=18;
    this.y04Eb=16;
    this.mP9=false;
    this.v4gN0=v4gN0;
    this.uO14=0;
    this.HM_=0;
    this.u6R=new VA8("LayerZoomBar",this.left,this.top,this.width,this.height,m18,2,'',this.v4gN0);
    var kjG26=(R$1/2)*(this.height-this.Ajd*2-this.s5U)/R$1+this.Ajd;
    this.X3a=I4i2(strImgsvrUrl+"images/zoombg.gif",0,0,this.y04Eb,this.height);
    this.H6561=I4i2(strImgsvrUrl+"images/zoombg2.gif",0,0,this.y04Eb,kjG26);
    this.my67=I4i2(strImgsvrUrl+"images/zoomin.gif",0,0,this.y04Eb,this.Ajd);
    this.m0E=I4i2(strImgsvrUrl+"images/zoomout.gif",0,this.height-this.Ajd,this.y04Eb,this.Ajd);
    this.lFM=I4i2(strImgsvrUrl+"images/slider.gif",0,kjG26,this.y04Eb,this.s5U);
    this.lFM.id="zoombarSlider";
    this.u6R.c77d.appendChild(this.X3a);
    this.u6R.c77d.appendChild(this.H6561);
    this.u6R.c77d.appendChild(this.my67);
    this.u6R.c77d.appendChild(this.m0E);
    this.u6R.c77d.appendChild(this.lFM);
    this.setZoomLevel=function(yQ2g)
    {
        if(yQ2g<0||yQ2g>R$1)
        {
            return
        }
        if(this.mJ18!=yQ2g)
        {
            this.mJ18=yQ2g;
            this.refresh()
        }
    };
    this.getZoomLevel=function()
    {
        return this.mJ18
    };
    this.show=function()
    {
        this.u6R.show();
        this.lFM.style.visibility="visible"
    };
    this.hide=function()
    {
        this.u6R.hide();
        this.lFM.style.visibility="hidden"
    };
    this.resize=function(n65D)
    {
        this.height=n65D;
        this.u6R.resize(this.width,this.height)
    };
    this.moveTo=function(x,y)
    {
        this.left=x;
        this.top=y;
        this.u6R.moveTo(this.left,this.top)
    };
    this.refresh=function()
    {
        this.paint()
    };
    this.paint=function()
    {
        var kjG26=(R$1-this.mJ18)*(this.height-this.Ajd*2-this.s5U)/R$1+this.Ajd;
        this.H6561.style.height=kjG26;
        if(this.lFM!=null)
        {
            this.lFM.style.top=kjG26;
            if(this.lFM.parentNode==null)
            {
                this.u6R.c77d.appendChild(this.lFM)
            }
        }
    };
    this.zoomIn=function()
    {
        this.setZoomLevel(this.mJ18+1)
    };
    this.zoomOut=function()
    {
        this.setZoomLevel(this.mJ18-1)
    };
    this.t544t=function(x,y)
    {
        if((x>this.left)&&(x<this.left+this.width)&&(y>this.top)&&(y<this.top+this.height))
        {
            return true
        }
        else return false
    };
    this.vCo7Y=function(x,y)
    {
        if(this.u$0)
        {
            y=y-this.s5U/2;
            var yQ2g=R$1*(this.height-y-this.Ajd-this.s5U)/(this.height-this.Ajd*2-this.s5U);
            if(y>this.Ajd&&y<(this.height-this.Ajd-this.s5U))
            {
                this.lFM.style.top=y;
                this.H6561.style.height=y;
                this.maplet.OYos(yQ2g)
            }
            return true
        }
        else
        {
        }
        if(this.t544t(x,y))
        {
            if(y<(this.Ajd)||y>(this.height-this.Ajd))
            {
                this.u6R.style.cursor='hand'
            }
            else if(event.srcElement.id=="zoombarSlider")
            {
                this.u6R.style.cursor='hand'
            }
            else
            {
                this.u6R.style.cursor='default'
            }
            return true
        }
        return false
    };
    this.wH0_I=function(x,y)
    {
        this.uO14=x;
        this.HM_=y;
        this.C6k=event.srcElement.id;
        if(this.t544t(x,y))
        {
            this.u$0=true
        }
        else
        {
            this.u$0=false
        }
        return this.u$0
    };
    this.oHW7=function(x,y)
    {
        var p9a2=false;
        this.maplet.K28.c77d.style.zoom=1;
        if(this.u$0)
        {
            if(y<this.Ajd)
            {
                this.zoomIn()
            }
            else if(y>(this.height-this.Ajd))
            {
                this.zoomOut()
            }
            else
            {
                y=y-this.s5U/2;
                y=(y>(this.height-this.Ajd-this.s5U))?(this.height-this.Ajd-this.s5U):((y<this.Ajd)?this.Ajd:y);
                var yQ2g=R$1*(this.height-y-this.Ajd-this.s5U)/(this.height-this.Ajd*2-this.s5U);
                this.setZoomLevel(parseInt(yQ2g+0.5))
            }
            p9a2=true
        }
        this.u$0=false;
        return p9a2
    };
    this.Je9=function(x,y)
    {
    }
};
document.write('<script language="javascript" src="'+strMapsvrUrl+'js/avgraphics.js"></script>');
function scPU()
{
    this._ij2p='1';
    this.hH5q2='2';
    this.mQF3U='3';
    this.W82='5';
    this.H_KX8='6';
    this.V61A7='7';
    this.YU7='8';
    this.Jk__='9';
    this.DpIf='10';
    this.B4w13='11'
};
var i9h0=new scPU();
function I4L(n65D,s24,zIndex)
{
    if(s24!="undefined"&&s24!="")n65D.src=s24;
    n65D.style.zIndex=zIndex
};
var TrH=new Array();
TrH["icon1"]=strImgsvrUrl+'images/'+"number1.gif";
TrH["icon2"]=strImgsvrUrl+'images/'+"number2.gif",TrH["icon3"]=strImgsvrUrl+'images/'+"number3.gif",TrH["icon4"]=strImgsvrUrl+'images/'+"number4.gif",TrH["icon5"]=strImgsvrUrl+'images/'+"number5.gif",TrH["icon6"]=strImgsvrUrl+'images/'+"number6.gif",TrH["icon7"]=strImgsvrUrl+'images/'+"number7.gif",TrH["icon8"]=strImgsvrUrl+'images/'+"number8.gif",TrH["icon9"]=strImgsvrUrl+'images/'+"number9.gif",TrH["icon10"]=strImgsvrUrl+'images/'+"number10.gif";
var $J27f=new Array();
$J27f["icon1"]=strImgsvrUrl+'images/'+"number1-2.gif",$J27f["icon2"]=strImgsvrUrl+'images/'+"number2-2.gif",$J27f["icon3"]=strImgsvrUrl+'images/'+"number3-2.gif",$J27f["icon4"]=strImgsvrUrl+'images/'+"number4-2.gif",$J27f["icon5"]=strImgsvrUrl+'images/'+"number5-2.gif",$J27f["icon6"]=strImgsvrUrl+'images/'+"number6-2.gif",$J27f["icon7"]=strImgsvrUrl+'images/'+"number7-2.gif",$J27f["icon8"]=strImgsvrUrl+'images/'+"number8-2.gif",$J27f["icon9"]=strImgsvrUrl+'images/'+"number9-2.gif",$J27f["icon10"]=strImgsvrUrl+'images/'+"number10-2.gif";
var ocn=new Array();
var $t3L=new Array();
var b=new VV96("undefined");
function VV96(id,op2P3,p9I,e53,B92_,bnI,Llg9,P30)
{
    this.e53=e53;
    this.B92_=B92_;
    if(id!="undefined"&&op2P3!="undefined")
    {
        this.id=id;
        this.bnI=bnI;
        this.Llg9=Llg9;
        this.P30=(P30=="1")?true:false;
        this.I1$W=0;
        this.lt74=16;
        if(this.id!="undefined"&&bnI!="undefined")
        {
            ocn[this.id]=bnI;
            $t3L[this.id]=(Llg9==null||Llg9=="undefined")?'��ϸ��Ϣ':Llg9
        }
        if(op2P3!="undefined"&&op2P3!="")this.op2P3=op2P3;
        if(p9I!="undefined"&&p9I!="")this.p9I=p9I;
        this.t649s=new Image();
        this.t649s.unselectable="on";
        if(p9I!="undefined"&&p9I!="")this.t649s.L1AWp=p9I;
        this.t649s.id=this.id;
        this.t649s.I5b3P=true;
        this.color="#FF0000";
        if(op2P3!="undefined"&&op2P3!="")this.t649s.src=op2P3;
        this.t649s.Qfr=op2P3;
        this.t649s.onerror=function()
        {
            this.src=strImgsvrUrl+'images/marker.gif';
            this.onerror=null
        };
        this.t649s.onload=function()
        {
            this.onerror=null;
            this.onload=null
        };
        this.t649s.onmouseover=function()
        {
            if(maplet.F50==i9h0.B4w13)return;
            if(this.L1AWp!="undefined"&&this.L1AWp!="")this.src=this.L1AWp;
            this.style.cursor="hand";
            this.style.zIndex=2;
            if(this.I5b3P&&iToolTipStyle==0)
            {
                var x=parseInt(this.style.left)+parseInt(this.width)/2;
                var y=parseInt(this.style.top)+parseInt(this.height)/2;
                setToolTipMenu(x,y,ocn[this.id],$t3L[this.id])
            }
        };
        this.t649s.onmouseout=function()
        {
            if(this.Qfr!="undefined"&&this.Qfr!="")this.src=this.Qfr;
            this.style.zIndex=1
        };
        this.t649s.onclick=function()
        {
            if(this.I5b3P==false)return;
            if(maplet.F50==i9h0.B4w13)return;
            var x=parseInt(this.style.left)+parseInt(this.width)/2;
            var y=parseInt(this.style.top)+parseInt(this.height)/2;
            if(iToolTipStyle=="undefined"||iToolTipStyle==1)
            {
                if((x>AVB0.xoffset)&&(x<(maplet.width-AVB0.width))&&(y>AVB0.height))
                {
                    maplet.A3Y7r=g27Pn(ocn[this.id],x,y,$t3L[this.id]);
                    this.parentNode.appendChild(maplet.A3Y7r)
                }
                else
                {
                    maplet.A3Y7r=g27Pn(ocn[this.id],maplet.width/2+2,AVB0.height+10,$t3L[this.id]);
                    var $2H=maplet.width/2-x;
                    var etjrI=AVB0.height+10-y;
                    maplet.T$_v($2H,etjrI)
                }
            }
        }
    }
    this.dI$59=function(g)
    {
        var width=(this.t649s!=null)?this.t649s.width:16;
        var height=(this.t649s!=null)?this.t649s.height:16;
        var left=maplet.B7l(this.B92_)-width/2;
        var top=maplet.P58(this.e53)-height;
        if(this.bnI&&this.P30)
        {
            g.setColor(this.color);
            g.CCh6(this.bnI,maplet.B7l(this.B92_)+width/2,maplet.P58(this.e53)-12)
        }
        if(this.op2P3)
        {
            g.gAA2(this.op2P3,left,top,width,height)
        }
    };
    this.paint=function(v4gN0)
    {
        var width=(this.t649s!=null)?this.t649s.width:16;
        var height=(this.t649s!=null)?this.t649s.height:16;
        var left=maplet.B7l(this.B92_)-width/2;
        var top=maplet.P58(this.e53)-height;
        if(left.toString()==Number.NaN.toString()||top.toString()==Number.NaN.toString())return;
        if(this.op2P3)
        {
            this.t649s.style.position="absolute";
            this.t649s.style.top=top;
            this.t649s.style.left=left;
            if(top>=0&&left>=0&&top<=maplet.height&&left<=maplet.width)
            {
                if(this.t649s.parentNode!=v4gN0)v4gN0.appendChild(this.t649s)
            }
        }
    };
    this._pS8=function(v4gN0)
    {
        var width=(this.t649s!=null)?this.t649s.width:16;
        var height=(this.t649s!=null)?this.t649s.height:16;
        var left=maplet.B7l(this.B92_)-width/2;
        var top=maplet.P58(this.e53)-height;
        if(left.toString()==Number.NaN.toString()||top.toString()==Number.NaN.toString())return;
        if(this.bnI&&this.P30)
        {
            if(top>=0&&left>=0&&top<=maplet.height&&left<=maplet.width)
            {
                var n65D=Oc2(this.bnI,left+width,top,this.color);
                v4gN0.innerHTML+=n65D;
                n65D=null
            }
        }
    };
    this.label=function()
    {
        if(this.Llg9)
        {
        }
    };
    this.p=function(meT)
    {
        var W7pj=-1;
        var I524S=0;
        var qk_X='';
        for(var i=0;i<meT.length;i++)
        {
            var j86T=parseInt(meT.charAt(i),36)-10;
            if(j86T>=10)j86T=j86T-7;
            qk_X+=(j86T).toString(36);
            if(j86T>I524S)
            {
                W7pj=i;
                I524S=j86T
            }
        }
        var U8T=parseInt(qk_X.substring(0,W7pj),16);
        var f9v8D=parseInt(qk_X.substring(W7pj+1),16);
        var H1433=new Array();
        H1433[0]=(U8T+f9v8D-parseInt(strLicenseKey))/2;
        H1433[1]=(f9v8D-H1433[0])/100000.0;
        H1433[0]/=100000.0;
        return H1433
    };
    this.toLine=function()
    {
        var WVd94=parseInt(parseFloat(this.e53)*100000);
        var j7_2=parseInt(parseFloat(this.B92_)*100000);
        var rpB=(j7_2-WVd94+parseInt(strLicenseKey)).toString(16);
        var ie9=(j7_2+WVd94).toString(16);
        var H1433='';
        for(var i=0;i<rpB.length;i++)
        {
            var k6A36=parseInt(rpB.charAt(i),16);
            H1433+=(((k6A36>=10)?(k6A36+7):k6A36)+10).toString(36)
        }
        H1433+='z';
        for(var i=0;i<ie9.length;i++)
        {
            var k6A36=parseInt(ie9.charAt(i),16);
            H1433+=(((k6A36>=10)?(k6A36+7):k6A36)+10).toString(36)
        }
        return H1433.toUpperCase()
    }
};
function KC96(Kh07,c_77n,O4i,v_b7,q1H8)
{
    this.Kh07=(Kh07==null)?new Array():Kh07;
    this.c_77n=(c_77n==null)?new Array():c_77n;
    this.color=(O4i==null)?"#FF0000":O4i;
    this.K904=(v_b7==0)?1:v_b7;
    this.style=q1H8;
    this.p=function(meT)
    {
        var $43=meT.split(',');
        var Nh72=0;
        for(var i=0;i<$43.length;i++)
        {
            if($43[i]!=null&&$43[i].length>0)
            {
                var w21Rp=b.p($43[i]);
                this.c_77n[Nh72]=parseFloat(w21Rp[0]);
                this.Kh07[Nh72]=parseFloat(w21Rp[1]);
                Nh72++
            }
        }
    };
    this.toLine=function()
    {
        var meT=this.K904+","+this.style+","+this.color+":";
        for(var i=0;i<this.Kh07.length;i++)
        {
            b.e53=parseFloat(this.Kh07[i]);
            b.B92_=parseFloat(this.c_77n[i]);
            meT+=b.toLine()+","
        }
        return meT
    };
    this.dI$59=function(g)
    {
        var i604=new Array();
        var M88=new Array();
        var H012=0;
        for(var i=0;i<this.Kh07.length;i+=1)
        {
            if(this.Kh07[i].toString()!=Number.NaN.toString())M88[H012]=maplet.P58(this.Kh07[i]);
            if(this.c_77n[i].toString()!=Number.NaN.toString())i604[H012]=maplet.B7l(this.c_77n[i]);
            if(H012>0&&(Math.abs(i604[H012]-i604[H012-1])+Math.abs(M88[H012]-M88[H012-1]))>10)
            {
                H012++
            }
            if(H012==0)H012++
        }
        if(this.color)g.setColor(this.color);
        if(this.K904)g.setStroke(this.K904);
        g.drawPolyline(i604,M88,this.style);
        g.paint()
    };
    this.paint=function(v4gN0)
    {
        this.tS2=document.createElement("div");
        this.tS2.unselectable="on";
        this.tS2.style.zIndex=10;
        this.G19=document.createElement("v:polyline");
        this.G19.unselectable="on";
        this.G19.strokecolor=this.color;
        this.G19.strokeweight=this.K904+'pt';
        this.G19.fill=false;
        this.G19.filled=false;
        this.R27VP=document.createElement("v:stroke");
        this.R27VP.opacity=(transparencyLevel/100);
        this.R27VP.joinstyle="round";
        this.R27VP.endcap="round";
        this.R27VP.fill="false";
        this.G19.appendChild(this.R27VP);
        this.tS2.appendChild(this.G19);
        this.S85();
        this.tS2.style.visibility="visible";
        if(v4gN0!=null)
        {
            v4gN0.appendChild(this.tS2)
        }
    };
    this.S85=function()
    {
        var i604=new Array();
        var M88=new Array();
        var H012=0;
        if(this.Kh07==null||this.Kh07.length<2)return;
        for(var i=0;i<this.Kh07.length;i+=1)
        {
            if(this.Kh07[i].toString()!=Number.NaN.toString())M88[H012]=maplet.P58(this.Kh07[i]);
            if(this.c_77n[i].toString()!=Number.NaN.toString())i604[H012]=maplet.B7l(this.c_77n[i]);
            if(H012>0&&(Math.abs(i604[H012]-i604[H012-1])+Math.abs(M88[H012]-M88[H012-1]))>10)
            {
                H012++
            }
            if(H012==0)H012++
        }
        var uMD='';
        for(var i=0;i<i604.length;i++)
        {
            if(i>0)uMD+=',';
            uMD+=(parseInt(i604[i])+','+parseInt(M88[i]))
        }
        if(this.G19.points)
        {
            this.G19.points.value=uMD
        }
        else
        {
            this.G19.points=uMD
        }
    }
};
var H57JK=null;
var _P6=new Array();
function WCO37()
{
    this.lXvG8=null;
    this.Ht633=null;
    this.WoG=function()
    {
    };
    this.setOrigin=function(C1Vs,i3fj3)
    {
        this.lXvG8=new VV96("orig",strImgsvrUrl+'images/icon_orig.gif',strImgsvrUrl+'images/icon_orig.gif',C1Vs,i3fj3,'���','');
        this.WoG()
    };
    this.setDestination=function(C1Vs,i3fj3)
    {
        this.Ht633=new VV96("dest",strImgsvrUrl+'images/icon_dest.gif',strImgsvrUrl+'images/icon_dest.gif',C1Vs,i3fj3,'�յ�','');
        this.WoG()
    };
    this.dI$59=function(g)
    {
        if(this.lXvG8)
        {
            this.lXvG8.dI$59(g)
        }
        if(this.Ht633)
        {
            this.Ht633.dI$59(g)
        }
        if(H57JK&&_P6.length>0)
        {
            var i604=new Array();
            var M88=new Array();
            var vXH3e=this.lXvG8.e53;
            var oTO=this.lXvG8.B92_;
            i604[0]=maplet.B7l(oTO);
            M88[0]=maplet.P58(vXH3e);
            var H012=1;
            for(var i=0;i<_P6.length;i+=2)
            {
                vXH3e+=parseFloat(_P6[i])*0.01/250.0;
                oTO+=parseFloat(_P6[i+1])*0.01/250.0;
                if(oTO.toString()!=Number.NaN.toString())i604[H012]=maplet.B7l(oTO);
                if(vXH3e.toString()!=Number.NaN.toString())M88[H012]=maplet.P58(vXH3e);
                if((Math.abs(i604[H012]-i604[H012-1])+Math.abs(M88[H012]-M88[H012-1]))>3)H012++
            }
            i604[H012]=maplet.B7l(this.Ht633.B92_);
            M88[H012]=maplet.P58(this.Ht633.e53);
            g.setColor("#CC00CC");
            g.setStroke(6);
            g.drawPolyline(i604,M88,0)
        }
    };
    this.clean=function()
    {
        this.lXvG8=null;
        this.Ht633=null;
        H57JK=null
    }
};
var f12=new WCO37();
var Y8802=new Array('W','0','1','2','3','4','5','6','7','8','9','10','11','12');
var Ud0=new Array(90,40,20,10,5,2,1,0.5,0.2,0.1,0.05,0.02,0.01,0.005);
var e3I=new Array(90*0.8,40*0.8,20*0.8,10*0.8,5*0.8,2*0.8,1*0.8,0.5*0.8,0.2*0.8,0.1*0.8,0.05*0.8,0.02*0.8,0.01*0.8,0.005*0.8);
var e7DU4=new Array(10,10,10,10,10,10,10,10,10,10,50,50,50,50);
var uGE$=new Array(0,0,0,0,0,0,0,0,75,0,0,-150,0,0);
var R$1=13;
var X7kNs=100000;
var IP5=105;
var P3$1_=35;
var ph90=new Array(0,55);
var o8$=new Array(-75,135);
var F4E9=(document.all);
function M99(lS0YQ,_Drjg)
{
    this.color=lS0YQ;
    this.K904=_Drjg
};
function AVMaplet(AUF5_,xh53v,yQ2g,rF24,n65D,$3n5,UdL,Dfk5V,hp9h)
{
    this.uO14=0;
    this.HM_=0;
    this.GB5e=0;
    this.TMJ=0;
    this.cq75=0;
    this.vE2r3=0;
    this.X3v=300;
    this.T5$=300;
    this.F50=i9h0.mQF3U;
    this.xh53v=xh53v;
    this.AUF5_=AUF5_;
    this.mJ18=yQ2g;
    this.left=$3n5;
    this.top=UdL;
    this.width=rF24;
    this.height=n65D;
    this.Dfk5V=Dfk5V;
    this.i001=new Array();
    this.p5TU="std";
    this.t$D3="png";
    this.$mR5=hp9h;
    this.wW1=true;
    this.u41=false;
    this.v2a2=true;
    this.Q1E=true;
    this.pt76L=null;
    this.lC8O6=true;
    this.xDx=false;
    this._t4=Math.ceil((this.width)/(this.X3v)/2);
    this.XKO=Math.ceil((this.height)/(this.T5$)/2);
    this.v8I=new Array();
    this.sCXJ=new Array();
    this.FK2=new Array();
    this.A3Y7r=null;
    this.i001=new Array();
    this.e3953=new Array();
    this.i4or=null;
    this.xW7_=null;
    this.Y7v6=null;
    this.d27=null;
    this.af5=null;
    this.G0E94=new M99("#FF0000",2);
    this.toString=function()
    {
        return "com.mapbar.avmaplet.AVMaplet"
    };
    this.resize=function(rF24,n65D)
    {
        this.width=rF24;
        this.height=n65D;
        this._t4=Math.ceil((this.width)/(this.X3v)/2);
        this.XKO=Math.ceil((this.height)/(this.T5$)/2);
        this.LhGY.style.width=rF24;
        this.LhGY.style.n65D=n65D;
        this.LhGY.style.clip='rect(0 '+this.width+' '+this.height+' 0)';
        this.K28.resize(rF24,n65D);
        this.h1V.resize(rF24,n65D);
        this.mB07.resize(rF24,n65D);
        if(this.u41)
        {
            this.u9$$().resize(n65D);
            this.u9$$().moveTo(this.width-16,0)
        }
        if(this.Q1E)this.xwk5.moveTo(0,this.height-24);
        if(this.v2a2)this.T551.moveTo(this.width-97-15,this.height-23);
        this.N0A.resize(rF24,n65D);
        this.bnx.resize(rF24,n65D);
        this.setZoomLevel(this.mJ18)
    };
    this.u9$$=function()
    {
        if(!this.u41)return null;
        if(this.u6R==null)
        {
            this.u6R=new X3R(this,-1,this.width-16,0,16,this.height,this.u41,this.LhGY)
        }
        return this.u6R
    };
    this.showMap=function()
    {
        document.writeln('<div id="mapbar" unselectable="on" ><div unselectable="on" id="layClip" style="position:absolute;overflow:hidden; width:'+this.width+'px; height:'+this.height+'px; left:'+this.left+'px; top:'+this.top+'px; clip: rect(0 '+this.width+' '+this.height+' 0);background-color:'+MapBackgroundColor+'; layer-background-color:'+MapBackgroundColor+';"></div></div>');
        this.map=Qkw0("mapbar");
        this.LhGY=Qkw0("layClip");
        this.K28=new VA8("MapContainer",0,0,this.width,this.height,true,2,'',this.LhGY);
        this.h1V=new VA8("LayerMap",0,0,this.width,this.height,true,2,'��ͼװ����...',this.K28);
        this.mB07=new VA8("LayerPoiMap",0,0,this.width,this.height,true,3,'',this.K28);
        this.u9$$();
        {
        }
        if(this.lC8O6)
        {
            this.O6$=new t3h7(this.$mR5,this.mJ18,0,0,70,120,true,3,this.LhGY,this)
        }
        {
            this.xwk5=new VA8("LayerScale",1,this.height-24,100,24,this.Q1E,3,'',this.LhGY)
        }
        {
            var rightMargin=(this.u41)?15:0;
            this.T551=new VA8("LayerLogo",this.width-97-rightMargin,this.height-23,97,23,this.v2a2,3,'',this.LhGY);
            this.T551.style.cursor='hand'
        }
        var content='<table bordercolor="red" border="2" width="100%" height="100%"><tr><td></td></tr></table>';
        this.x3JV=new VA8("LayerBorder",1,1,1,1,false,6,content,this.LhGY);
        this.N0A=new VA8("LayerMask",0,0,this.width,this.height,true,2,'',this.K28);
        this.N0A.style.backgroundImage="url("+strImgsvrUrl+"images/mask.gif)";
        this.bnx=new VA8("LayerDrawMap",0,0,this.width,this.height,true,4,'',this.K28);
        this.bnx.style.backgroundImage="url("+strImgsvrUrl+"images/mask.gif)";
        {
            this.map.onmousemove=o91B;
            this.map.onmousedown=k66l9;
            this.map.onmouseup=G69hC;
            this.map.onclick=L23;
            this.map.ondblclick=jlAW;
            this.map.onmouseout=F4b;
            this.map.ondrag=o91B;
            this.map.ondragstart=o91B;
            this.map.ondragend=o91B
        }
        this.f6I06();
        this.setZoomLevel(this.mJ18);
        this.setMode(this.F50)
    };
    this.f6I06=function()
    {
        this.x3JV.hide();
        this.x3JV.resize(1,1);
        this.x3JV.moveTo(-10,-10);
        if(document.all)
        {
            this.h1V.moveTo(0,0);
            this.h1V.show();
            this.mB07.moveTo(0,0);
            this.mB07.show();
            this.bnx.moveTo(0,0);
            this.bnx.show();
            this.N0A.moveTo(0,0);
            this.N0A.show()
        }
    };
    this.setStyle=function(_f$)
    {
        if(this.p5TU!=_f$)
        {
            this.p5TU=_f$;
            if("aerial"==this.p5TU)
            {
                this.t$D3="jpg"
            }
            else
            {
                this.t$D3="png"
            }
            this.h1V.graphics.clear();
            this.mB07.graphics.clear();
            this.bnx.graphics.clear();
            this.N0A.graphics.clear();
            this.refresh()
        }
    };
    this.getZoomLevel=function()
    {
        return this.mJ18
    };
    this.setZoomLevel=function(yQ2g)
    {
        if(yQ2g<0)
        {
            return
        }
        if(yQ2g>R$1)
        {
            return
        }
        if(this.mJ18!=yQ2g)
        {
            if(iToolTipStyle==0)hideToolTipMenu();
            hideBubble();
            this.h1V.graphics.clear();
            this.mB07.graphics.clear();
            this.bnx.graphics.clear();
            this.N0A.graphics.clear()
        }
        if(this.O6$!=null)
        {
            this.O6$.S85(yQ2g)
        }
        if(this.u41)this.u9$$().setZoomLevel(yQ2g);
        this.mJ18=yQ2g;
        this.v7CX=Ud0[this.mJ18];
        this.m308=e3I[this.mJ18];
        this.B14=Y8802[this.mJ18]+"/";
        {
            {
            }
        }
        {
            this.fh1=Math.floor((this.xh53v+this.v7CX/X7kNs)/this.v7CX);
            this.P6Bw1=Math.floor((this.AUF5_+this.m308/X7kNs)/this.m308);
            if(this.fh1<0)this.fh1+=1;
            this.SU4=this.width/2-Math.round(((this.xh53v*X7kNs)%(this.v7CX*X7kNs))*this.X3v/(this.v7CX*X7kNs));
            if(this.AUF5_>=0)
            {
                this.EH857=this.height/2-this.T5$+Math.round(((this.AUF5_*X7kNs)%(this.m308*X7kNs))*this.T5$/(this.m308*X7kNs))
            }
            else
            {
                this.EH857=this.height/2+Math.round(((this.AUF5_*X7kNs)%(this.m308*X7kNs))*this.T5$/(this.m308*X7kNs))
            }
        }
        this.refresh()
    };
    this.refresh=function()
    {
        this.__2$();
        this.m02()
    };
    this.__2$=function()
    {
        this.K28.moveTo(0,0);
        this.h1V.moveTo(0,0);
        this.mB07.moveTo(0,0);
        if(this.wW1==false||this.wW1=="false")
        {
            this.mB07.graphics.clear()
        }
        this.bnx.moveTo(0,0);
        this.bnx.graphics.clear();
        this.bnx.clear();
        this.N0A.moveTo(0,0);
        this.N0A.graphics.clear();
        this.h1V.clean();
        this.h1V.c77d.innerHTML='';
        this.mB07.clean();
        var Ilq88='';
        NY3NB();
        {
        }
        var eTh=0;
        var R6Fj2=this.p5TU;
        if(this.mJ18<=6&&this.p5TU=='std')
        {
        }
        //����Ķ���һ�£������ط�û�иĶ���Tangf
        R6Fj2='mymap';
        for(CbB2m=-this._t4-1;CbB2m<=this._t4;CbB2m++)
        {
            for(mgy=-this.XKO-1;mgy<=this.XKO;mgy++)
            {
                var INdL=strImgsvrUrl+"mapbank/"+R6Fj2+"/"+this.B14;
                var i5$=strImgsvrUrl+"mapbank/poi/"+this.B14;
                if(true||this.mJ18>=1)
                {
                    var iw0B=e7DU4[this.mJ18];
                    var rATt=parseInt(Math.floor((this.fh1+CbB2m)/iw0B));
                    var Q7666=parseInt(Math.floor((this.P6Bw1+mgy)/iw0B));
                    {
                        if(rATt<0)rATt+=1;
                        if(Q7666<0)Q7666+=1
                    }
                    var OLU=(this.fh1+CbB2m)-rATt*iw0B;
                    var E09=(this.P6Bw1+mgy)-Q7666*iw0B;
                    i5$+=rATt+"_"+Q7666+"/";
                    INdL+=rATt+"_"+Q7666+"/"
                }
                else
                {
                    var OLU=(this.fh1+CbB2m);
                    var E09=(this.P6Bw1+mgy)
                }
                i5$+=OLU+"_"+E09+".png";
                INdL+=OLU+"_"+E09+"."+this.t$D3;
                if(this.mJ18<3||this.wW1==false||this.wW1=="false")
                {
                    i5$=null
                }
                {
                }
                var C7Cv1=(CbB2m*this.X3v)+this.SU4;
                var C1x=(-(mgy*this.T5$)+this.EH857);
                if(this.p5TU=="std")
                {
                    C1x=C1x+uGE$[this.mJ18]
                }
                if(C7Cv1<-this.X3v||C7Cv1>this.width||C1x>this.height||C1x<-this.T5$)continue;
                var rqr8$=((this.mJ18).toString(16)+(this.fh1+CbB2m).toString(16)+'l'+(this.P6Bw1+mgy).toString(16)).toLowerCase();
                if(eTh==0)
                {
                    eTh=1
                }
                if(INdL&&INdL.indexOf("NaN")<0)
                {
                    {
                        Ilq88+='<img id='+rqr8$+' name='+rqr8$+' src="'+INdL+'" ntry="0" unselectable=on onerror="javascript:imageTileError(this);" style="position:absolute;top:'+C1x+';left:'+C7Cv1+';">'
                    }
                }
                else
                {
                }
                if(i5$&&i5$.indexOf("NaN")<0)
                {
                }
                INdL=null;
                i5$=null
            }
        }
        this.h1V.c77d.innerHTML=Ilq88;
        Ilq88=null;
        if(this.h1V.c77d.parentNode!=this.K28.c77d)
        {
            this.K28.c77d.appendChild(this.h1V.c77d)
        }
        if(this.sCXJ.length>0)
        {
            for(g20pq=0;g20pq<this.sCXJ.length;g20pq++)
            {
                if(F4E9)
                {
                    this.sCXJ[g20pq].paint(this.bnx.c77d)
                }
                else
                {
                    this.sCXJ[g20pq].dI$59(this.bnx.graphics)
                }
            }
        }
        if(this.d27!=null)
        {
            if(F4E9)
            {
                this.d27.paint(this.bnx.c77d);
                this.af5.paint(this.bnx.c77d)
            }
            else
            {
                this.d27.dI$59(this.bnx.graphics);
                this.af5.dI$59(this.bnx.graphics)
            }
        }
        if(this.v8I.length>0)
        {
            for(g20pq=0;g20pq<this.v8I.length;g20pq++)
            {
                this.v8I[g20pq]._pS8(this.mB07.c77d);
                this.v8I[g20pq].paint(this.bnx.c77d)
            }
        }
        if(this.FK2.length>0)
        {
            this.FK2[this.FK2.length-1].label(this.bnx.graphics)
        }
        else
        {
            if(iToolTipStyle==0)hideToolTipMenu()
        }
        if(this.bnx.c77d.parentNode!=this.K28.c77d)
        {
            this.K28.c77d.appendChild(this.bnx.c77d)
        }
        this.h1V.graphics.paint();
        this.mB07.graphics.paint();
        this.N0A.graphics.paint();
        this.bnx.graphics.paint();
        if(this.e3953.length>0)
        {
            this.xW7_=null;
            this.Y7v6=null;
            this.i4or=null;
            for(g20pq=0;g20pq<this.e3953.length;g20pq++)
            {
                if(this.mJ18>=this.e3953[g20pq].I1$W&&this.mJ18<=this.e3953[g20pq].lt74)
                {
                    var fOY92=this.B7l(this.e3953[g20pq].B92_);
                    var Bv1=this.P58(this.e3953[g20pq].e53);
                    if(fOY92>=0&&fOY92<=this.width&&Bv1>=0&&Bv1<=this.height)
                    {
                        if(this.xW7_==null)
                        {
                            this.xW7_=new Array();
                            this.Y7v6=new Array();
                            this.i4or=new Array()
                        }
                        this.xW7_[this.xW7_.length]=fOY92;
                        this.Y7v6[this.Y7v6.length]=Bv1;
                        this.i4or[this.i4or.length]=g20pq
                    }
                }
            }
        }
    };
    this.m02=function()
    {
        if(this.Q1E)
        {
            var H8507=(this.v7CX*100*81/parseInt(this.X3v));
            var qUUe='';
            var r37g="#FFFFBB";
            var u4FN=6;
            if(this.$mR5!="undefined"&&this.$mR5!=null)
            {
                H8507=(this.v7CX*100*60/parseInt(this.X3v));
                qUUe=this.$mR5+"/";
                r37g="#000000";
                u4FN=0
            }
            H8507=(H8507<10)?(H8507).toPrecision(1):parseInt(H8507);
            //var _Ot='<div unselectable="on" style="position:absolute;top=2;left=1;z-Index=0"><IMG src="'+strImgsvrUrl+'images/'+qUUe+'scale.gif" ></div>';
            var _Ot='<div unselectable="on" style="position:absolute;top=2;left=1;z-Index=0"><IMG src="'+strImgsvrUrl+'images/scale.gif" ></div>';
            _Ot+='<div unselectable="on" style="position:absolute;top='+u4FN+';left=1;z-Index=1"><TABLE cellSpacing=0 cellPadding=0 border=0><TBODY><TR><TD unselectable="on" style="z-Index:1;FONT-SIZE: 12px; COLOR='+r37g+';FONT-WEIGHT: bold;" width="100%">&nbsp;'+H8507+' ����</TD></TR></TBODY></TABLE></div>';
            this.xwk5.c77d.innerHTML=_Ot
        }
        else
        {
            this.xwk5.c77d.innerHTML=''
        }
        if(this.v2a2)
        {
            var WY9Xv='<u>&copy;Rover Map</u>&nbsp;';
            var QE5='<div unselectable="on" style="position:absolute;top=0;left=0;width=97;height=23;z-Index=1"><TABLE cellSpacing=0 cellPadding=0 border=0 align=right><TBODY><TR><TD unselectable="on" style="z-Index:1;top:8;left:1;FONT-SIZE: 12px; font-family: arial;COLOR=#0000FF;" width="100%" >'+WY9Xv+'</TD></TR></TBODY></TABLE></div>';
            this.T551.c77d.innerHTML=QE5
        }
        else
        {
            if(this.T551)this.T551.c77d.innerHTML=''
        }
    };
    this.zoomIn=function()
    {
        this.setZoomLevel(this.mJ18+1)
    };
    this.zoomOut=function()
    {
        this.setZoomLevel(this.mJ18-1)
    };
    this.setCenter=function(e53,B92_)
    {
        this.AUF5_=Math.min(ph90[1],Math.max(ph90[0],parseFloat(e53)));
        this.xh53v=Math.min(o8$[1],Math.max(o8$[0],parseFloat(B92_)));
        this.setZoomLevel(this.mJ18)
    };
    this.O2q=20.0;
    this.Js4n1=null;
    this.T$_v=function(x,y)
    {
        this.xoffset=x;
        this.yoffset=y;
        this.wNR0=0;
        this.r0mA=0;
        this.CW1=this.AUF5_+this.yoffset*this.m308/this.T5$;
        this.qJgT=this.xh53v-this.xoffset*this.v7CX/this.X3v;
        this.$O62a=parseInt(Math.sqrt(this.xoffset*this.xoffset+this.yoffset*this.yoffset));
        if(!this.xDx)
        {
            this.doPan()
        }
    };
    this.doPan=function()
    {
        this.xDx=true;
        var X90rQ=parseInt(Math.sqrt(this.wNR0*this.wNR0+this.r0mA*this.r0mA));
        if(Math.abs(this.$O62a-X90rQ)<=(1.2*this.O2q))
        {
            this.K28.moveTo(this.xoffset,this.yoffset);
            this.wNR0=this.xoffset;
            this.r0mA=this.yoffset;
            this.Js4n1=null;
            this.Js4n1=setTimeout("maplet.finishupPan()",10)
        }
        else
        {
            this.wNR0+=this.xoffset*this.O2q/this.$O62a;
            this.r0mA+=this.yoffset*this.O2q/this.$O62a;
            this.K28.moveTo(this.wNR0,this.r0mA);
            this.Js4n1=null;
            this.Js4n1=setTimeout("maplet.doPan()",10)
        }
    };
    this.finishupPan=function()
    {
        this.setCenter(this.CW1,this.qJgT);
        if(this.A3Y7r)
        {
            this.LhGY.appendChild(this.A3Y7r)
        }
        this.xDx=false;
        this.Js4n1=null
    };
    this.OYos=function(w7N)
    {
        var m6A=Math.pow(2,parseFloat(w7N))/Math.pow(2,this.mJ18);
        this.K28.c77d.style.zoom=m6A;
        this.K28.c77d.style.left=this.width/2-this.width*m6A/2;
        this.K28.c77d.style.top=this.height/2-this.height*m6A/2
    };
    this.addLabel=function(op2P3,e53,B92_,bnI,oMJ0,P30)
    {
        if(!oMJ0)oMJ0='';
        this.FK2[this.FK2.length]=new VV96("label"+this.FK2.length,op2P3,op2P3,parseFloat(e53),parseFloat(B92_),bnI,oMJ0,P30)
    };
    this.addPoint=function(op2P3,e53,B92_,bnI,Llg9,P30)
    {
        if(!Llg9)Llg9='';
        this.v8I[this.v8I.length]=new VV96("point"+this.v8I.length,op2P3,op2P3,parseFloat(e53),parseFloat(B92_),bnI,Llg9,P30)
    };
    this.addHotspot=function(e53,B92_,bnI,dN2,$2q)
    {
        var xt2o=new VV96("hotspot"+this.e3953.length,'','',parseFloat(e53),parseFloat(B92_),bnI,'','0');
        xt2o.I5b3P=false;
        xt2o.I1$W=dN2;
        xt2o.lt74=$2q;
        this.e3953[this.e3953.length]=xt2o
    };
    this.addPointWithSwapImage=function(op2P3,p9I,e53,B92_,bnI,Llg9,P30)
    {
        this.v8I[this.v8I.length]=new VV96("point"+this.v8I.length,op2P3,p9I,parseFloat(e53),parseFloat(B92_),bnI,Llg9,P30)
    };
    this.addPointWithId=function(id,e53,B92_,bnI,Llg9,P30)
    {
        this.v8I[this.v8I.length]=new VV96(id,TrH[id],$J27f[id],parseFloat(e53),parseFloat(B92_),bnI,Llg9,P30)
    };
    this.addIcon=function(op2P3,b4Y87,bnI,oMJ0,P30)
    {
        var l10=b.p(b4Y87);
        this.addPoint(op2P3,l10[1],l10[0],bnI,oMJ0,P30)
    };
    this.B7l=function(B92_)
    {
        if(false&&this.mJ18==0)
        {
            return Math.round(this.width/2+(parseFloat(B92_)-IP5)/Ud0[this.mJ18]*this.X3v)
        }
        else
        {
            return Math.round(this.width/2+(parseFloat(B92_)-this.xh53v)/Ud0[this.mJ18]*this.X3v)
        }
    };
    this.P58=function(e53)
    {
        if(false&&this.mJ18==0)
        {
            return Math.round(this.height/2-(parseFloat(e53)-P3$1_)/Math.cos(40.0/180*3.1415926)/e3I[this.mJ18]*this.T5$)
        }
        else
        {
            return Math.round(this.height/2-(parseFloat(e53)-this.AUF5_)/e3I[this.mJ18]*this.T5$)
        }
    };
    this.setMode=function(xa373)
    {
        this.F50=parseInt(xa373);
        this.rM9=false;
        this.xhx53=false;
        switch(xa373)
        {
            case '1':case 1:this.rM9=true;
            this.map.style.cursor='crosshair';
            break;
            case '2':case 2:this.rM9=true;
            this.map.style.cursor='crosshair';
            break;
            case '3':case 3:this.xhx53=true;
            this.map.style.cursor="default";
            break;
            case '5':case 5:this.rM9=true;
            this.map.style.cursor="default";
            break;
            case '6':case 6:this.map.style.cursor="default";
            break;
            case '7':case 7:this.map.style.cursor="default";
            break;
            case '8':case 8:this.map.style.cursor="default";
            break;
            case '9':case 9:this.map.style.cursor="default";
            break;
            case '10':case 10:this.map.style.cursor="default";
            break;
            case '11':case 11:this.map.style.cursor="default";
            break;
            default:break
        }
    };
    this.setCursorStyle=function(L3eC)
    {
        this.map.style.cursor=L3eC
    };
    this.m20F=function()
    {
        if((this.GB5e>0)&&(this.GB5e<this.width)&&(this.TMJ>0)&&(this.TMJ<this.height)&&(this.uO14>0)&&(this.uO14<this.width)&&(this.HM_>0)&&(this.HM_<this.height))return true;
        else return false
    };
    this.J68M=function()
    {
        if(this.GB5e<this.uO14&&this.TMJ<this.HM_)
        {
            this.x3JV.resize(this.uO14-this.GB5e,this.HM_-this.TMJ);
            this.x3JV.moveTo(this.GB5e,this.TMJ)
        }
        else if(this.GB5e>this.uO14&&this.TMJ<this.HM_)
        {
            this.x3JV.resize(this.GB5e-this.uO14,this.HM_-this.TMJ);
            this.x3JV.moveTo(this.uO14,this.TMJ)
        }
        else if(this.GB5e<this.uO14&&this.TMJ>this.HM_)
        {
            this.x3JV.resize(this.uO14-this.GB5e,this.TMJ-this.HM_);
            this.x3JV.moveTo(this.GB5e,this.HM_)
        }
        else if(this.GB5e>this.uO14&&this.TMJ>this.HM_)
        {
            this.x3JV.resize(parseInt(this.GB5e)-this.uO14,parseInt(this.TMJ)-this.HM_);
            this.x3JV.moveTo(this.uO14,this.HM_)
        }
        else
        {
            this.x3JV.resize(this.GB5e-this.uO14,this.TMJ-this.HM_);
            this.x3JV.moveTo(this.uO14,this.HM_)
        }
    };
    this.o91B=function(H694)
    {
        this.C6k=(F4E9)?event.srcElement.id:H694.target.id;
        var M9797=parseInt((F4E9)?event.clientX:H694.clientX);
        var ea93=parseInt((F4E9)?event.clientY:H694.clientY);
        var q7T9$=this.GB5e;
        var P2k=this.TMJ;
        this.GB5e=(M9797)-this.left;
        this.TMJ=(ea93)-this.top;
        if(this.O6$!=null)
        {
            if(this.O6$.onmousemove(H694))
            {
                return
            }
        }
        if(this.F50==i9h0.B4w13||this.F50==i9h0.Jk__||this.F50==i9h0.DpIf)
        {
            if(F4E9||this.F50==i9h0.B4w13)
            {
                showMouseTipBox((M9797),(ea93),"��˫������",this.map)
            }
        }
        else
        {
            l2IN5()
        }
        if(this.u41&&this.u9$$().vCo7Y(this.GB5e,this.TMJ))return;
        if(this.F50==i9h0.mQF3U)
        {
            var NveW=false;
            if(this.xW7_!=null&&this.Y7v6!=null)
            {
                for(g20pq=0;g20pq<this.xW7_.length;g20pq++)
                {
                    if(Math.abs(this.xW7_[g20pq]-this.GB5e)<8&&Math.abs(this.Y7v6[g20pq]-this.TMJ)<8)
                    {
                        NveW=true;
                        break
                    }
                }
            }
            if(NveW)
            {
                this.map.style.cursor="hand"
            }
            else
            {
                this.map.style.cursor="default"
            }
        }
        if(this.xhx53&&this.u$0)
        {
            this.map.style.cursor="move";
            if(iToolTipStyle==0)hideToolTipMenu();
            {
            }
            if(this.A3Y7r!=null)
            {
                hideBubble()
            }
            if(iToolTipStyle==0)hideToolTipMenu();
            {
                this.K28.moveTo(this.GB5e-this.uO14,this.TMJ-this.HM_)
            }
            this.MoJ=true
        }
        else if(this.rM9&&this.u$0)
        {
            if(this.m20F())
            {
                this.M772=true;
                this.J68M()
            }
        }
        else if(this.F50==i9h0.B4w13||this.F50==i9h0.Jk__||this.F50==i9h0.DpIf)
        {
            var Nv2lX=this.xh53v+(this.GB5e-this.width/2)*this.v7CX/this.X3v;
            var M5n=this.AUF5_-(this.TMJ-this.height/2)*this.m308/this.T5$;
            if(this.d27!=null)
            {
                this.af5.Kh07[0]=this.d27.Kh07[this.d27.Kh07.length-1];
                this.af5.c_77n[0]=this.d27.c_77n[this.d27.c_77n.length-1];
                this.af5.Kh07[1]=M5n;
                this.af5.c_77n[1]=Nv2lX;
                if(F4E9)
                {
                    this.af5.S85()
                }
                else
                {
                    this.mB07.graphics.clear();
                    this.d27.dI$59(this.mB07.graphics);
                    this.af5.dI$59(this.mB07.graphics)
                }
            }
        }
        else
        {
            if(this.C6k=="LayerDrawMap"&&iToolTipStyle==0)
            {
                hideToolTipMenu()
            }
        }
    };
    this.k66l9=function(H694)
    {
        var M9797=parseInt((F4E9)?event.clientX:H694.clientX);
        var ea93=parseInt((F4E9)?event.clientY:H694.clientY);
        this.C6k=(F4E9)?event.srcElement.id:H694.target.id;
        this.uO14=M9797-this.left;
        this.HM_=ea93-this.top;
        if(this.C6k!=null&&this.C6k.indexOf("ctrl")>=0&&this.O6$!=null)
        {
            this.O6$.onmousedown(H694);
            return
        }
        this.Ew2$='';
        if(this.u41&&this.u9$$().t544t(this.uO14,this.HM_))
        {
            this.u6R.wH0_I(this.uO14,this.HM_);
            return
        }
        else
        {
            {
                this.u$0=true
            }
            {
            }
            if(this.m20F()&&this.rM9)
            {
                this.x3JV.resize(1,1);
                this.x3JV.show()
            }
            else if(this.F50==i9h0.mQF3U)
            {
                this.map.style.cursor="move"
            }
        }
    };
    this.G69hC=function(H694,C6k,M9797,ea93)
    {
        this.C6k=C6k;
        this.L5r6=M9797-this.left;
        this.cOj3=ea93-this.top;
        this.u$0=false;
        if(this.O6$!=null)
        {
            (this.O6$.onmouseup(H694))
        }
        if(this.C6k!=null&&this.C6k.indexOf("ctrl")>=0)
        {
            this.x3JV.hide();
            return false
        }
        if(this.F50==i9h0.mQF3U)
        {
            this.map.style.cursor="default"
        }
        if(this.u41&&this.u9$$().oHW7(this.L5r6,this.cOj3))
        {
            this.setZoomLevel(parseInt(this.u6R.getZoomLevel()));
            return
        }
        if((this.MoJ||this.M772)&&(this.rM9||this.xhx53))
        {
            this.SU4=this.SU4+(this.L5r6-this.uO14);
            this.EH857=this.EH857+(this.cOj3-this.HM_);
            this.MoJ=false;
            this.M772=false;
            if(this.xhx53)
            {
                if(true||this.mJ18>0)
                {
                    var wg7G=-(this.L5r6-this.uO14);
                    var _N8$=(this.cOj3-this.HM_);
                    this.xh53v=this.xh53v+wg7G*this.v7CX/this.X3v;
                    this.AUF5_=this.AUF5_+_N8$*this.m308/this.T5$;
                    this.xh53v=Math.min(o8$[1],Math.max(o8$[0],this.xh53v));
                    this.AUF5_=Math.min(ph90[1],Math.max(ph90[0],this.AUF5_))
                }
                this.setZoomLevel(this.mJ18)
            }
            else
            {
                var BN3=1;
                var j0x3=Math.max(1,Math.abs(this.L5r6-this.uO14));
                if(this.F50==1)
                {
                    {
                        var wg7G=(this.L5r6+this.uO14)/2-this.width/2;
                        var _N8$=(this.cOj3+this.HM_)/2-this.height/2;
                        this.xh53v=this.xh53v+wg7G*this.v7CX/this.X3v;
                        this.AUF5_=this.AUF5_-_N8$*this.m308/this.T5$;
                        this.xh53v=Math.min(o8$[1],Math.max(o8$[0],this.xh53v));
                        this.AUF5_=Math.min(ph90[1],Math.max(ph90[0],this.AUF5_))
                    }
                    if(j0x3<this.X3v)
                    {
                        BN3=Math.min(R$1-this.mJ18,Math.max(1,parseInt(Math.log(this.X3v/j0x3)/Math.log(2))))
                    }
                    this.setZoomLevel(this.mJ18+BN3)
                }
                else if(this.F50==2)
                {
                    var wg7G=(this.L5r6+this.uO14)/2-this.width/2;
                    var _N8$=(this.cOj3+this.HM_)/2-this.height/2;
                    this.xh53v=this.xh53v+wg7G*this.v7CX/this.X3v;
                    this.AUF5_=this.AUF5_-_N8$*this.m308/this.T5$;
                    this.xh53v=Math.min(o8$[1],Math.max(o8$[0],this.xh53v));
                    this.AUF5_=Math.min(ph90[1],Math.max(ph90[0],this.AUF5_));
                    if(j0x3<this.X3v)
                    {
                        BN3=Math.min(this.mJ18,Math.max(1,parseInt(Math.log(this.X3v/j0x3)/Math.log(2))))
                    }
                    this.setZoomLevel(this.mJ18-BN3)
                }
                else if(this.F50==5)
                {
                    b.e53=this.AUF5_;
                    b.B92_=this.xh53v;
                    var u7R=b.toLine();
                    callback("&act=lookup&ctr="+u7R+"&size="+this.width+","+this.height+"&range="+this.uO14+","+this.HM_+","+this.L5r6+","+this.cOj3+"&zm="+this.mJ18)
                }
                {
                    this.x3JV.hide();
                    this.x3JV.resize(1,1);
                    this.x3JV.moveTo(-10,-10)
                }
            }
        }
    };
    this.L23=function(C6k,M9797,ea93)
    {
        this.C6k=C6k;
        if(C6k==null||C6k=='')
        {
            hideBubble()
        }
        this.cq75=M9797-this.left;
        this.vE2r3=ea93-this.top;
        if(this.C6k!=null&&this.C6k.indexOf("ctrl")>=0)return false;
        if(this.v2a2&&this.T551!=null&&this.T551.t544t(this.cq75,this.vE2r3))
        {
            window.open("http://Tangf.CNblogs.Com");
            return
        }
        if(this.u41&&this.u9$$().t544t(this.cq75,this.vE2r3))
        {
            this.u6R.Je9(this.cq75,this.vE2r3);
            return
        }
        if(this.m20F())
        {
            var wg7G=this.cq75-this.width/2;
            var _N8$=this.vE2r3-this.height/2;
            var s4Oa=this.xh53v+wg7G*this.v7CX/this.X3v;
            var hJxmO=this.AUF5_-_N8$*this.m308/this.T5$;
            if((this.F50==7))
            {
                this.addOrigin(hJxmO,s4Oa)
            }
            else if((this.F50==8))
            {
                this.addDestination(hJxmO,s4Oa)
            }
            else if((this.F50==6))
            {
                b.e53=hJxmO;
                b.B92_=s4Oa;
                var y90=b.toLine();
                callback("&act=add&latlon="+y90+"&zm="+this.mJ18)
            }
            else if(this.F50==i9h0.B4w13||this.F50==i9h0.Jk__||this.F50==i9h0.DpIf)
            {
                if(this.C6k!=null&&this.C6k.indexOf("ctrl")>=0)return false;
                {
                    if(this.d27==null)
                    {
                        this.d27=new KC96(null,null,this.G0E94.color,this.G0E94.K904,0);
                        this.d27.Kh07[this.d27.Kh07.length]=hJxmO;
                        this.d27.c_77n[this.d27.c_77n.length]=s4Oa;
                        this.af5=new KC96(null,null,this.G0E94.color,this.G0E94.K904,0);
                        this.af5.Kh07[0]=hJxmO;
                        this.af5.c_77n[0]=s4Oa;
                        if(this.d27!=null)
                        {
                            if(F4E9)
                            {
                                this.d27.paint(this.bnx.c77d);
                                this.af5.paint(this.bnx.c77d)
                            }
                            else
                            {
                                this.d27.dI$59(this.mB07.graphics);
                                this.af5.dI$59(this.mB07.graphics)
                            }
                        }
                    }
                    else
                    {
                        this.d27.Kh07[this.d27.Kh07.length]=hJxmO;
                        this.d27.c_77n[this.d27.c_77n.length]=s4Oa;
                        this.af5.Kh07[0]=hJxmO;
                        this.af5.c_77n[0]=s4Oa;
                        if(F4E9)
                        {
                            this.d27.S85();
                            this.af5.S85()
                        }
                        else
                        {
                            if(this.F50==i9h0.B4w13)
                            {
                                this.d27.dI$59(this.mB07.graphics);
                                this.af5.dI$59(this.mB07.graphics)
                            }
                            else
                            {
                                this.jlAW(C6k,M9797,ea93)
                            }
                        }
                    }
                }
            }
            else if(C6k=="LayerDrawMap")
            {
                if(this.xW7_!=null&&this.Y7v6!=null)
                {
                    for(g20pq=0;g20pq<this.xW7_.length;g20pq++)
                    {
                        if(Math.abs(this.xW7_[g20pq]-this.cq75)<8&&Math.abs(this.Y7v6[g20pq]-this.vE2r3)<8)
                        {
                            callback("&hotspot="+this.e3953[this.i4or[g20pq]].bnI);
                            this.setCenter(this.e3953[this.i4or[g20pq]].e53,this.e3953[this.i4or[g20pq]].B92_);
                            this.setZoomLevel(8);
                            break
                        }
                    }
                }
            }
        }
    };
    this.jlAW=function(C6k,M9797,ea93)
    {
        this.C6k=C6k;
        l2IN5();
        if(this.C6k!=null&&this.C6k.toString().indexOf("ctrl")>=0)return false;
        if(this.m20F())
        {
            this.map.style.cursor="default";
            if(this.F50==i9h0.B4w13)
            {
                if(!F4E9)
                {
                    this.mB07.graphics.clear()
                }
                var A101b=0;
                if(this.d27)
                {
                    for(var i=1;i<this.d27.Kh07.length;i++)
                    {
                        var e53=this.d27.Kh07[i]-this.d27.Kh07[i-1];
                        var B92_=this.d27.c_77n[i]-this.d27.c_77n[i-1];
                        A101b+=Math.sqrt(e53*e53+B92_*B92_)
                    }
                    var e53=this.af5.Kh07[1]-this.d27.Kh07[i-1];
                    var B92_=this.af5.c_77n[1]-this.d27.c_77n[i-1];
                    A101b+=Math.sqrt(e53*e53+B92_*B92_);
                    if(F4E9&&this.d27.tS2.parentNode==this.bnx.c77d)this.bnx.c77d.removeChild(this.d27.tS2)
                }
                if(F4E9&&this.af5&&this.af5.tS2.parentNode==this.bnx.c77d)
                {
                    this.bnx.c77d.removeChild(this.af5.tS2)
                }
                this.d27=null;
                this.af5=null;
                this.setMode(i9h0.mQF3U);
                if(A101b.toString()==Number.NaN.toString())A101b=0;
                W2Usr(this.width/2,this.height/2,"�ܾ���:"+(parseInt(A101b*1000)/10)+"����")
            }
            else if(this.F50==i9h0.Jk__||this.F50==i9h0.DpIf)
            {
                if(this.d27!=null)
                {
                    this.cq75=M9797-this.left;
                    this.vE2r3=ea93-this.top;
                    var wg7G=this.cq75-this.width/2;
                    var _N8$=this.vE2r3-this.height/2;
                    var s4Oa=this.xh53v+wg7G*this.v7CX/this.X3v;
                    var hJxmO=this.AUF5_-_N8$*this.m308/this.T5$;
                    this.d27.Kh07[this.d27.Kh07.length]=hJxmO;
                    this.d27.c_77n[this.d27.c_77n.length]=s4Oa;
                    this.sCXJ[this.sCXJ.length]=this.d27
                }
                if(this.af5)this.bnx.c77d.removeChild(this.af5.tS2);
                if(!F4E9)this.mB07.graphics.clear();
                this.d27=null;
                this.af5=null;
                this.setMode(i9h0.mQF3U)
            }
            else if(this.F50==i9h0.mQF3U)
            {
                this.cq75=M9797-this.left;
                this.vE2r3=ea93-this.top;
                if(this.A3Y7r!=null)
                {
                    hideBubble()
                }
                if(iToolTipStyle==0)hideToolTipMenu();
                this.T$_v(this.width/2-this.cq75,-this.vE2r3+this.height/2)
            }
        }
    };
    this.F4b=function(H694,C6k,M9797,ea93)
    {
        this.C6k=C6k;
        this.GB5e=M9797-this.left;
        this.TMJ=ea93-this.top;
        if(!this.m20F())
        {
            if(this.O6$!=null)
            {
                this.O6$.onmouseout(H694)
            }
            this.G69hC((F4E9)?event:H694,C6k,M9797,ea93)
        }
    };
    this.addPolyline=function(Kh07,c_77n,O4i,v_b7,q1H8)
    {
        this.sCXJ[this.sCXJ.length]=new KC96(Kh07,c_77n,O4i,v_b7,q1H8)
    };
    this.addPolylineString=function(hp9h,meT)
    {
        var F2nH=hp9h.split(',');
        var q54j5=new KC96(null,null,(F2nH.length>2)?F2nH[2]:null,(F2nH.length>0)?parseInt(F2nH[0]):0,(F2nH.length>1)?F2nH[1]:1);
        q54j5.p(meT);
        this.sCXJ[this.sCXJ.length]=q54j5
    };
    this.addLabelString=function(type,_$uO,kyM3_)
    {
        var Dpv=b.p(_$uO);
        this.addLabel((type==null)?"../images/marker.gif":type,Dpv[1],Dpv[0],kyM3_)
    };
    this.addOrigin=function(e53,B92_)
    {
        f12.setOrigin(parseFloat(e53),parseFloat(B92_))
    };
    this.addDestination=function(e53,B92_)
    {
        f12.setDestination(parseFloat(e53,B92_))
    };
    this.clean=function()
    {
        hideBubble();
        this.v8I=new Array();
        this.sCXJ=new Array();
        this.FK2=new Array();
        mTE=new Array();
        $t3L=new Array();
        f12.clean();
        this.refresh()
    };
    this.showBasePois=function(Qo8oD)
    {
        this.wW1=Qo8oD;
        this.refresh()
    };
    this.showZoomBar=function(Qo8oD)
    {
        this.u41=Qo8oD;
        if(this.u41)
        {
            this.u9$$().show()
        }
        else if(this.u6R!=null)
        {
            this.u6R.hide()
        }
    };
    this.showLogo=function(Qo8oD)
    {
        this.v2a2=Qo8oD;
        if(this.v2a2)
        {
            if(this.T551!=null)this.T551.show()
        }
        else
        {
            if(this.T551!=null)this.T551.hide()
        }
    };
    this.showScale=function(Qo8oD)
    {
        this.Q1E=Qo8oD;
        if(this.Q1E)
        {
            this.xwk5.show()
        }
        else
        {
            this.xwk5.hide()
        }
    };
    this.showControl=function(Qo8oD)
    {
        this.lC8O6=Qo8oD;
        if(this.lC8O6)
        {
            if(this.O6$)this.O6$.show()
        }
        else
        {
            if(this.O6$)this.O6$.hide()
        }
    };
    this.addControl=function(xHO,t48_,H8M)
    {
        if(this.O6$)
        {
            this.O6$.WE1iA();
            this.O6$=null
        }
        if(H8M==null||H8M=="undefined")
        {
            H8M=0
        }
        this.O6$=new t3h7(xHO,this.mJ18,H8M,0,70,120,true,3,this.LhGY,this,t48_)
    };
    this.setScaleBarValue=function(N5D64)
    {
    };
    this.getCurrentMap=function()
    {
        var l12y=this.width*Ud0[this.mJ18]/this.X3v;
        b.e53=this.AUF5_;
        b.B92_=this.xh53v;
        var u7R=b.toLine();
        var qKI93="&pois="+this.v8I.length+",";
        for(var i=0;i<this.v8I.length;i++)
        {
            qKI93+=this.v8I[i].toLine()+","+this.v8I[i].bnI+","
        }
        var K7_d2="&plines="+this.sCXJ.length+",";
        for(var i=0;i<this.sCXJ.length;i++)
        {
            K7_d2+=this.sCXJ[i].toLine()+";"
        }
        return "&zm="+(parseFloat(l12y)*100)+"&width="+this.width+"&height="+this.height+"&ctr="+u7R+qKI93+K7_d2
    };
    this.UvJGu=function(op2P3)
    {
    };
    this.Yu7=function()
    {
    };
    this.setBgColor=function(O4i)
    {
        this.LhGY.style.backgroundColor=O4i
    };
    this.setAutoZoom=function(M267,$05,jt7,$8818)
    {
        this.setCenter((jt7+M267)/2,($8818+$05)/2);
        var W74=1.1*(jt7-M267)*this.X3v/this.height;
        var M12=1.1*($8818-$05)*this.X3v/this.width;
        var h4415=this.getFitZoomLevel(W74,e3I);
        var VA1u=this.getFitZoomLevel(M12,Ud0);
        var Id8=Math.min(h4415,VA1u);
        this.setZoomLevel(Id8);
        if(this.O6$!=null)
        {
            this.O6$.O6$.c77d.S85(Id8)
        }
    };
    this.getFitZoomLevel=function(cNoU,j7xy)
    {
        var h5i0B=1;
        while(cNoU<=j7xy[h5i0B]&&h5i0B<(j7xy.length))
        {
            h5i0B++
        }
        return(h5i0B-1)
    };
    this.setBrushStyle=function(lS0YQ,_Drjg)
    {
        this.G0E94.color=lS0YQ;
        this.G0E94.K904=_Drjg
    }
};
function E6q25()
{
    document.onmousemove=o91B;
    document.onmousedown=k66l9;
    document.onmouseup=G69hC;
    document.ondblclick=jlAW;
    document.onclick=L23;
    document.onmouseout=F4b
};
function jlAW(H694)
{
    var C6k=(F4E9)?event.srcElement.id:H694.target.id;
    var M9797=parseInt((F4E9)?event.clientX:H694.clientX);
    var ea93=parseInt((F4E9)?event.clientY:H694.clientY);
    maplet.jlAW(C6k,M9797,ea93)
};
function o91B(H694)
{
    maplet.o91B(H694)
};
function k66l9(H694)
{
    maplet.k66l9(H694)
};
function G69hC(H694)
{
    var C6k=(F4E9)?event.srcElement.id:H694.target.id;
    var M9797=parseInt((F4E9)?event.clientX:H694.clientX);
    var ea93=parseInt((F4E9)?event.clientY:H694.clientY);
    maplet.G69hC((F4E9)?event:H694,C6k,M9797,ea93)
};
function F4b(H694)
{
    var C6k=(F4E9)?event.srcElement.id:H694.target.id;
    var M9797=parseInt((F4E9)?event.clientX:H694.clientX);
    var ea93=parseInt((F4E9)?event.clientY:H694.clientY);
    maplet.F4b((F4E9)?event:H694,C6k,M9797,ea93)
};
function L23(H694)
{
    var C6k=(F4E9)?event.srcElement.id:H694.target.id;
    var M9797=parseInt((F4E9)?event.clientX:H694.clientX);
    var ea93=parseInt((F4E9)?event.clientY:H694.clientY);
    maplet.L23(C6k,M9797,ea93)
};
if(typeof window.attachEvent!='undefined')
{
    window.attachEvent('onunload',A6691)
};
function A6691()
{
    if(document.all)
    {
        for(var i=0,Jg2f=document.all.length;i<Jg2f;i++)
        {
            document.all[i]['onmouseover']=null;
            document.all[i]['onmouseout']=null;
            document.all[i]['onmouseup']=null;
            document.all[i]['onmousedown']=null;
            document.all[i]['onclick']=null;
            document.all[i]['ondbclick']=null;
            document.all[i]['onmousemove']=null;
            document.all[i]['ondragstart']=null;
            document.all[i]['onfocus']=null;
            document.all[i]['onblur']=null;
            document.all[i]['onerror']=null
        }
    }
    document.onmouseover=null;
    document.onmouseout=null;
    document.onmouseup=null;
    document.onmousedown=null;
    document.onclick=null;
    document.U96D=null;
    document.onmousemove=null;
    document.ondragstart=null;
    document.onfocus=null;
    document.onblur=null;
    if(typeof req=="object")
    {
        req=null
    }
};
function NY3NB()
{
    if(document.all)
    {
        for(var i=0,Jg2f=document.all.length;i<Jg2f;i++)
        {
            document.all[i]['onerror']=null
        }
    }
};
