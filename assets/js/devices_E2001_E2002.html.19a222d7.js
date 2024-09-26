"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[88408],{34705:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>o,data:()=>d});var i=a(23785);const n={},o=(0,a(86670).A)(n,[["render",function(e,t){const a=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[11]||(t[11]=(0,i.Lk)("h1",{id:"ikea-e2001-e2002",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#ikea-e2001-e2002"},[(0,i.Lk)("span",null,"IKEA E2001/E2002")])],-1)),(0,i.Lk)("table",null,[t[6]||(t[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"E2001/E2002")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(a,{to:"/supported-devices/#v=IKEA"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("IKEA")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"STYRBAR remote control")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"identify, battery, action, linkquality")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/E2001-E2002.png",alt:"IKEA E2001/E2002"})])],-1))])]),t[12]||(t[12]=(0,i.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Pair the switch to Zigbee2MQTT by pressing the pair button (found under the back cover next to the battery) 4 times in a row within 5 seconds. If this doesn&#39;t work, try pressing the pair button up to 10 times in very quick succession. The red light on the side should flash a few times and then turn off. After a few seconds it turns back on and pulsate. When connected, the light turns off.</p><h3 id="button-action-mapping" tabindex="-1"><a class="header-anchor" href="#button-action-mapping"><span>Button -&gt; <code>action</code> mapping</span></a></h3><table><thead><tr><th>Icon</th><th>Action</th><th>Exposed Action</th></tr></thead><tbody><tr><td>Light large ( top )</td><td>push</td><td>on</td></tr><tr><td>Light large ( top )</td><td>hold</td><td>brightness_move_up</td></tr><tr><td>Light large ( top )</td><td>release</td><td>brightness_stop</td></tr><tr><td>-----</td><td>-----</td><td>-----</td></tr><tr><td>Light small ( bottom )</td><td>push</td><td>off</td></tr><tr><td>Light small ( bottom )</td><td>hold</td><td>brightness_move_down</td></tr><tr><td>Light small ( bottom )</td><td>release</td><td>brightness_stop</td></tr><tr><td>-----</td><td>-----</td><td>-----</td></tr><tr><td>Arrow left</td><td>push</td><td>arrow_left_click</td></tr><tr><td>Arrow left</td><td>hold</td><td>arrow_left_hold</td></tr><tr><td>Arrow left</td><td>release</td><td>arrow_left_release</td></tr><tr><td>-----</td><td>-----</td><td>-----</td></tr><tr><td>Arrow right</td><td>push</td><td>arrow_right_click</td></tr><tr><td>Arrow right</td><td>hold</td><td>arrow_right_hold</td></tr><tr><td>Arrow right</td><td>release</td><td>arrow_right_release</td></tr></tbody></table><p>For the arrow buttons it seems that the hold/move action takes a bit longer to be send.</p><h3 id="latest-firmware" tabindex="-1"><a class="header-anchor" href="#latest-firmware"><span>Latest firmware</span></a></h3><p>IKEA has changed their firmware versioning after the original 1.0.0.24 leading to a notification &quot;Firmware on ... is newer than latest firmware online&quot;, despite the online firmware being actually newer. Follow the instructions in <a href="https://github.com/Koenkk/zigbee2mqtt/issues/18515#issuecomment-1692857032" target="_blank" rel="noopener noreferrer">this issue</a> to force update the firmware. Note that the remote loses the capability to bind to a group in the latest firmware.</p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',9)),(0,i.Lk)("p",null,[t[8]||(t[8]=(0,i.eW)("This device supports OTA updates, for more information see ")),(0,i.bF)(a,{to:"/guide/usage/ota_updates.html"},{default:(0,i.k6)((()=>t[7]||(t[7]=[(0,i.eW)("OTA updates")]))),_:1}),t[9]||(t[9]=(0,i.eW)("."))]),t[13]||(t[13]=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>t[10]||(t[10]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),t[14]||(t[14]=(0,i.Fv)('<ul><li><p><code>identify_timeout</code>: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of <code>1</code> and with a with a maximum value of <code>30</code></p></li><li><p><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</p></li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span></span>\n<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="identify-enum" tabindex="-1"><a class="header-anchor" href="#identify-enum"><span>Identify (enum)</span></a></h3><p>Initiate device identification. This device is asleep by default.You may need to wake it up first before sending the identify command.. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;identify&quot;: NEW_VALUE}</code>. The possible values are: <code>identify</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>brightness_stop</code>, <code>arrow_left_click</code>, <code>arrow_left_hold</code>, <code>arrow_left_release</code>, <code>arrow_right_click</code>, <code>arrow_right_hold</code>, <code>arrow_right_release</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',12))])}]]),d=JSON.parse('{"path":"/devices/E2001_E2002.html","title":"IKEA E2001/E2002 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"IKEA E2001/E2002 control via MQTT","description":"Integrate your IKEA E2001/E2002 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-07-01T18:17:29.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Button -> action mapping","slug":"button-action-mapping","link":"#button-action-mapping","children":[]},{"level":3,"title":"Latest firmware","slug":"latest-firmware","link":"#latest-firmware","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Identify (enum)","slug":"identify-enum","link":"#identify-enum","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1727309238000},"filePathRelative":"devices/E2001_E2002.md"}')}}]);