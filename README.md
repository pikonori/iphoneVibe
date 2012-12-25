iphoneでアイコンを移動するときや削除するときにグラグラする処理ができます。

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