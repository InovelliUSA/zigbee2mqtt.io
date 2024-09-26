"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[65368],{54547:(e,t,n)=>{n.r(t),n.d(t,{comp:()=>s,data:()=>a});var o=n(23785);const i={},s=(0,n(86670).A)(i,[["render",function(e,t){const n=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[t[11]||(t[11]=(0,o.Lk)("h1",{id:"philips-929002398602",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#philips-929002398602"},[(0,o.Lk)("span",null,"Philips 929002398602")])],-1)),(0,o.Lk)("table",null,[t[6]||(t[6]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[t[2]||(t[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"929002398602")],-1)),(0,o.Lk)("tr",null,[t[1]||(t[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(n,{to:"/supported-devices/#v=Philips"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("Philips")]))),_:1})])]),t[3]||(t[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"Hue dimmer switch")],-1)),t[4]||(t[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"battery, action, linkquality")],-1)),t[5]||(t[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/929002398602.png",alt:"Philips 929002398602"})])],-1))])]),t[12]||(t[12]=(0,o.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="battery-type" tabindex="-1"><a class="header-anchor" href="#battery-type"><span>Battery Type</span></a></h3><p>Uses a CR2032 battery.</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Factory reset the Hue dimmer switch by removing the battery cover and pressing and holding the setup button for 10 seconds. The LED on the front will blink red and the device is ready to pair.</p><p>Restart the Hue dimmer switch by holding all 4 buttons of the Hue dimmer switch. You can let go when the light on the front flashes red/green briefly.</p><h4 id="using-the-dimmer-to-reset-a-hue-light-bulb" tabindex="-1"><a class="header-anchor" href="#using-the-dimmer-to-reset-a-hue-light-bulb"><span>Using the dimmer to reset a Hue light bulb</span></a></h4><p>To use the Hue dimmer switch to factory reset a Hue light bulb see <a href="https://www.youtube.com/watch?v=qvlEAELiJKs" target="_blank" rel="noopener noreferrer">HOWTO: Factory reset a Hue bulb</a>. After resetting the bulb will automatically connect. This method also works for Philips Hue Lightstrips. Hue dimmer switch can also be used to factory reset Ikea Trådfri light bulbs using the same method described above.</p><h3 id="binding" tabindex="-1"><a class="header-anchor" href="#binding"><span>Binding</span></a></h3><p>By default, the device is bound to the coordinator, but it can also be used to directly control other lights and switches in the network (see <a href="https://www.zigbee2mqtt.io/guide/usage/binding.html" target="_blank" rel="noopener noreferrer">guide on binding</a>).</p><p>As the device is sleeping by default, you will need to wake it up after sending the bind/unbind command by pressing any button.</p><p>When endpoint <code>1</code> is bound to a light or a group of lights, the behavior is as follows:</p><table><thead><tr><th>Button</th><th>Click</th><th>Action</th><th>Comment</th></tr></thead><tbody><tr><td>Power</td><td>Single<br>Double</td><td>Toggle state</td><td>The device keeps track of each press, alternating between on and off actions.<br>The on action is using the <code>commandOn</code> command.<br>The off action is using the <code>commandOffWithEffect</code> command with <code>{&quot;effectid&quot;:0,&quot;effectvariant&quot;:0}</code> payload.</td></tr><tr><td>Brightness up</td><td>Single</td><td>Step up the brightness</td><td>In steps of 30 points (around 12%), using the <code>commandStep</code> command with <code>{&quot;stepmode&quot;:0,&quot;stepsize&quot;:30,&quot;transtime&quot;:9}</code> payload.</td></tr><tr><td>Brightness up</td><td>Long</td><td>Smoothly increase the brightness</td><td>In steps of 63 points (around 25%), using the <code>commandStep</code> command with <code>{&quot;stepmode&quot;:0,&quot;stepsize&quot;:63,&quot;transtime&quot;:9}</code> payload.<br>Sends the <code>commandStop</code> command, on button release.</td></tr><tr><td>Brightness down</td><td>Single</td><td>Step down the brightness</td><td>In steps of 30 points (around 12%), using the <code>commandStep</code> command with <code>{&quot;stepmode&quot;:1,&quot;stepsize&quot;:30,&quot;transtime&quot;:9}</code> payload.</td></tr><tr><td>Brightness down</td><td>Long</td><td>Smoothly decrease the brightness</td><td>In steps of 63 points (around 25%), using the <code>commandStep</code> command with <code>{&quot;stepmode&quot;:1,&quot;stepsize&quot;:63,&quot;transtime&quot;:9}</code> payload.<br>Sends the <code>commandStop</code> command, on button release.</td></tr><tr><td>Hue</td><td>Single</td><td>Switch between scenes</td><td>The device keeps track of each press, alternating between two scenes (<code>&quot;sceneid&quot;:1</code> and <code>&quot;sceneid&quot;:2</code>) in a predetermined group with <code>&quot;groupid&quot;:43632</code>, using the <code>commandRecall</code> command.</td></tr></tbody></table><h3 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting"><span>Troubleshooting</span></a></h3><h4 id="resetting-the-device" tabindex="-1"><a class="header-anchor" href="#resetting-the-device"><span>Resetting the device</span></a></h4><ul><li>Method 1: Press all four buttons for 4 seconds. When the light turns green, release the buttons. The device will flash green and red alternatively after which it will reconnect to the network.</li><li>Method 2: Use a needle or paperclip to press the reset button on the back for 10 seconds. The behavior is similar to method 1</li></ul><h4 id="device-refuses-actions" tabindex="-1"><a class="header-anchor" href="#device-refuses-actions"><span>Device refuses actions</span></a></h4><p>If actions (e.g. applying zigbee2mqtt/bridge/request/device/remove to a dimmer) result in timeouts, perform a reset (see above) and apply the action right after the device announced itself in the network.</p><h4 id="device-announces-itself-but-the-buttons-don-t-work" tabindex="-1"><a class="header-anchor" href="#device-announces-itself-but-the-buttons-don-t-work"><span>Device announces itself but the buttons don&#39;t work</span></a></h4><p>The dimmer appears to be working normally and the logs in Zigbee2MQTT look good. However, nothing happens when a button is pressed (no light, no log message in Zigbee2MQTT). In this case:</p><ul><li>Reset the device</li><li>Use zigbee2mqtt/bridge/request/device/remove to remove the device from the network (this should result in a &quot;left the network&quot; log message)</li><li>Allow joining of new devices in Zigbee2MQTT</li><li>Reset the device again</li><li>Wait for it to pair again. The device should now be operational.</li></ul><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',22)),(0,o.Lk)("p",null,[t[8]||(t[8]=(0,o.eW)("This device supports OTA updates, for more information see ")),(0,o.bF)(n,{to:"/guide/usage/ota_updates.html"},{default:(0,o.k6)((()=>t[7]||(t[7]=[(0,o.eW)("OTA updates")]))),_:1}),t[9]||(t[9]=(0,o.eW)("."))]),t[13]||(t[13]=(0,o.Lk)("h2",{id:"options",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#options"},[(0,o.Lk)("span",null,"Options")])],-1)),(0,o.Lk)("p",null,[(0,o.Lk)("em",null,[(0,o.bF)(n,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.k6)((()=>t[10]||(t[10]=[(0,o.eW)("How to use device type specific configuration")]))),_:1})])]),t[14]||(t[14]=(0,o.Fv)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span></span>\n<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on_press</code>, <code>on_hold</code>, <code>on_press_release</code>, <code>on_hold_release</code>, <code>off_press</code>, <code>off_hold</code>, <code>off_press_release</code>, <code>off_hold_release</code>, <code>up_press</code>, <code>up_hold</code>, <code>up_press_release</code>, <code>up_hold_release</code>, <code>down_press</code>, <code>down_hold</code>, <code>down_press_release</code>, <code>down_hold_release</code>, <code>recall_0</code>, <code>recall_1</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9))])}]]),a=JSON.parse('{"path":"/devices/929002398602.html","title":"Philips 929002398602 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Philips 929002398602 control via MQTT","description":"Integrate your Philips 929002398602 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-02-28T13:58:01.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Battery Type","slug":"battery-type","link":"#battery-type","children":[]},{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Binding","slug":"binding","link":"#binding","children":[]},{"level":3,"title":"Troubleshooting","slug":"troubleshooting","link":"#troubleshooting","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1727309238000},"filePathRelative":"devices/929002398602.md"}')}}]);