

<html>

<head>
<title>VODOBOX HLS Player</title>

<style type="text/css">
html { height: 100%; }
body { height: 100%; margin: 0px; padding: 0px; overflow: hidden; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;}
#table_player { height: 100%; width: 100%; border-collapse: collapse; text-align: center; background-color:#000000; }
#table_td { height: 100%; padding: 0px; vertical-align: middle; }
#div_player { border: 0px solid yellow; }
#html5_osx { border: 0px solid green; }
#table_thumbnail { height: 100%; width: 100%; border-collapse: collapse; text-align: center; background-image: url('img/thumbnail.png'); background-size: 100%; background-repeat: no-repeat; background-attachment: fixed; background-position: center; }
#table_ad { height: 100%; width: 100%; border-collapse: collapse; text-align: center; background-image: url('img/thumbnail.png'); background-size: 100%; background-repeat: no-repeat; background-attachment: fixed; background-position: center; }
#div_countdown { height: 50px; width: 100px; top: 0px; right: 0px; z-index: 3; position: absolute; text-align: center; vertical-align: middle; line-height: 50px; font-family: helvetica; color: #FFFFFF; font-weight: bold;	-webkit-text-stroke-width: 1px black; text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; }
#div_adclose { height: 20px; width: 20px; top: 5px; right: 5px; z-index: 3; position: absolute; cursor: pointer; }

a.lien:link
{
	color: #FFFFFF;
	text-decoration: none;
	font-family: helvetica;
	font-weight: bold;
	-webkit-text-stroke-width: 1px black;
	text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}
a.lien:visited
{
	color: #FFFFFF;
	text-decoration: none;
	font-family: helvetica;
	font-weight: bold;
	-webkit-text-stroke-width: 1px black;
	text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}
a.lien:hover
{
	color: #F7FD6E;
	font-family: helvetica;
	font-weight: bold;
	-webkit-text-stroke-width: 1px black;
	text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}
a.lien:active
{
	color: #53A75F;
	font-family: helvetica;
	font-weight: bold;
	-webkit-text-stroke-width: 1px black;
	text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}

</style>

<script type="text/javascript">
var s_Plugin = null;
var s_StreamType = null;
var s_StreamURL = '';
var s_ThumbnailURL = 'img/thumbnail.png';
var s_AutoPlay = '';
var s_Token = '7hRdshLE';
var i_Countdown = 25;

include_lib('vdbhlsplayer/swfobject.min.js');
include_lib('vdbhlsplayer/vdbhlsplayer.php?&cfg=1mHIT6FeRJSlnXaM@85253156202');

window.onload = function()
{
	if(document.getElementById('table_ad') == null)
	{
		init_player();
		clear_player();
	}
	else
	{
		//setTimeout('play_countdown()', 1000);
		clear_player();
	}
}

window.onresize = function()
{ resize_player(); }

function init_player()
{
	try
	{
		if(s_Plugin == null)
		{ set_player(); }
		build_player();
	}
	catch(e)
	{ setTimeout('init_player()', 1000); }
}

function clear_player()
{
	var ie_version = get_ie_version();
	if(ie_version != 7 && ie_version != 8 && ie_version != 9)
	{
		exclude_lib('vdbhlsplayer/swfobject.min.js');
		exclude_lib('vdbhlsplayer/vdbhlsplayer.php?&cfg=1mHIT6FeRJSlnXaM@85253156202');
	}
}

function include_lib(sURL)
{
	var oHead = document.getElementsByTagName('head')[0];
	var oScript = document.createElement('script');
	oScript.setAttribute('src', sURL);
	oScript.setAttribute('type', 'text/javascript');
	try
	{ oHead.appendChild(oScript); }
	catch(e)
	{}
}

function exclude_lib(sURL)
{
	var aScripts = document.getElementsByTagName('script');
	for (var i=aScripts.length; i>=0; i--)
	{
		if (aScripts[i] && aScripts[i].getAttribute('src') != null && aScripts[i].getAttribute('src').indexOf(sURL) != -1)
		{ aScripts[i].parentNode.removeChild(aScripts[i]); }
	}
}

function get_ie_version()
{
	var sUSerAgent = navigator.userAgent.toLowerCase();
	return (sUSerAgent.indexOf('msie') != -1) ? parseInt(sUSerAgent.split('msie')[1]) : false;
}
</script>
</head>

<body style="margin:0px;background-color:#000000;" oncontextmenu="return false;">
			<!--<div id="div_countdown">&nbsp;</div>-->
			<table id="table_ad">
				<tr>
					<td>
						<br />
							<script type="text/javascript" src="//eclkspbn.com/adServe/banners?tid=25536_36047_3"></script>
						<br />
					</td>
				</tr>
			</table>
		</body>
</html>
