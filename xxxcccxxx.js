if(abdtitle==undefined)
	{
	var abdtitle='Thank you for visiting our site. We noticed that you have an ad blocker enabled. Please disable it, or whitelist our site.'
}
if(abdbtn==undefined)
	{
	var abdbtn='Verify'
}
if(abddesc==undefined)
	{
	var abddesc='To enter our site. After Disabling/Whitelisting, click verify to continue...'
}
(function()
	{
	var AdBlkDetect=document.createElement('div');
	AdBlkDetect.innerHTML='&nbsp;
	';
	AdBlkDetect.className='adframe';
	document.body.appendChild(AdBlkDetect);
	window.setTimeout(function()
		{
		if(AdBlkDetect.offsetHeight===0)
			{
			var AdBlkmsg=document.createElement('div');
			var adcont='<div class="abd-cont" style="background: rgba(0,0,0, .9);
			 bottom: 0;
			 color: #fff;
			 font-family: Century Gothic, arial, sans-serif;
			 left: 0;
			 line-height: normal;
			 overflow: auto;
			 padding: 0 10%;
			 position: fixed;
			 right: 0;
			 text-align: center;
			 top: 0;
			 z-index: 9999;
			">';
			adcont+='<div class="abd-title" style="font-size: 50px;
			 padding-top: 5%;
			">'+abdtitle+'</div>';
			adcont+='<div class="abd-btn" style="background: #333;
			 border-radius: 5px;
			 cursor: pointer;
			 display: inline-block;
			 font-size: 40px;
			 margin: 30px 0;
			 padding: 10px 20px;
			 text-transform: uppercase;
			" onclick="window.location.reload();
			">'+abdbtn+'</div>';
			adcont+='<div class="abd-desc" style="font-size: 30px;
			 padding-bottom: 30px;
			">'+abddesc+'</div>';
			adcont+='<div style="font-size: 12px;
			 padding-bottom: 5%;
			">Powered by <a style="color: #ae2525;
			 font-size: 18px;
			" href="http://www.blogtipsntricks.com/2016/03/showmyads-adblock-detector.html">MaroFaro</a></div>';
			adcont+='</div>';
			AdBlkmsg.className='blkmsg';
			AdBlkmsg.innerHTML=adcont;
			document.body.appendChild(AdBlkmsg);
			document.body.style.overflow="hidden"
		}
		AdBlkDetect.remove()
	}
	,2000)
}
)();
 
