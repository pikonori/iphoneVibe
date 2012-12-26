<p>
iphoneでアイコンを移動するときや削除するときにグラグラする動作するJavascriptです。<br />
マウスオーバーで動作します。
</p>

<pre>
$("img").iphoneVibe({
  max: 10,
  min: -10,
  speed: 5,
});
</pre>

オプション
max minは揺れ幅
speedは揺れの速度です。
