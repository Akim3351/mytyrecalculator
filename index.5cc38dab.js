var e=[{id:1,width:145},{id:2,width:155},{id:3,width:165},{id:4,width:175},{id:5,width:185},{id:6,width:195},{id:7,width:205},{id:8,width:215},{id:9,width:225},{id:10,width:235},{id:11,width:245},{id:12,width:255},{id:13,width:265},{id:14,width:275},{id:15,width:285},{id:16,width:295},{id:17,width:305},{id:18,width:315},{id:19,width:325},{id:20,width:335},{id:21,width:345},{id:22,width:355},{id:23,width:365}];const t=document.getElementById("lefttyreswidth"),d=document.getElementById("righttyreswidth"),i=e.map((e=>`        <option \n        key=${e.id} \n        value=${e.width}>\n        ${e.width}\n        </option>        `)).join("");t.innerHTML=i,d.innerHTML=i;var n=[{id:1,height:25},{id:2,height:30},{id:3,height:35},{id:4,height:40},{id:5,height:45},{id:6,height:50},{id:7,height:55},{id:8,height:60},{id:9,height:65},{id:10,height:70},{id:11,height:75},{id:12,height:80},{id:13,height:85},{id:14,height:90}];const r=document.getElementById("lefttyresheight"),m=document.getElementById("righttyresheight"),s=n.map((e=>`        <option \n        key=${e.id} \n        value=${e.height}>\n        ${e.height}\n        </option>        `)).join("");r.innerHTML=s,m.innerHTML=s;var h=[{id:1,diameter:12},{id:2,diameter:13},{id:3,diameter:14},{id:4,diameter:15},{id:5,diameter:16},{id:6,diameter:17},{id:7,diameter:18},{id:8,diameter:19},{id:9,diameter:20},{id:10,diameter:21},{id:11,diameter:22},{id:12,diameter:23},{id:13,diameter:24}];const a=document.getElementById("lefttyresdiameter"),o=document.getElementById("righttyresdiameter"),l=document.getElementById("leftdisksdiameter"),u=document.getElementById("rightdisksdiameter"),c=h.map((e=>`        <option \n        key=${e.id} \n        value=${e.diameter}>\n        ${e.diameter}\n        </option>        `)).join("");a.innerHTML=c,o.innerHTML=c,l.innerHTML=c,u.innerHTML=c;var g=[{id:1,width:3.5},{id:2,width:4},{id:3,width:4.5},{id:4,width:5},{id:5,width:5.5},{id:6,width:6},{id:7,width:6.5},{id:8,width:7},{id:9,width:7.5},{id:10,width:8},{id:11,width:8.5},{id:12,width:9},{id:13,width:9.5},{id:14,width:10},{id:15,width:10.5},{id:16,width:11},{id:17,width:11.5},{id:18,width:12},{id:19,width:12.5},{id:20,width:13}];const y=document.getElementById("leftdiskswidth"),w=document.getElementById("rightdiskswidth"),b=g.map((e=>`<option \n        key=${e.id} \n        value=${e.width}>\n        ${e.width}\n        </option>`)).join("");y.innerHTML=b,w.innerHTML=b;let T=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce(((e,t)=>e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"),"");const f=[];for(let e=150;e>=-150;e-=.5)f.push({id:T(),et:e});var E=f;const p=document.getElementById("leftdiskset"),B=document.getElementById("rightdiskset"),I=E.map((e=>`<option \n        key=${e.id} \n        value=${e.et}>\n        ${e.et}\n        </option>`)).join("");p.innerHTML=I,B.innerHTML=I;function N(e){const t=document.getElementById("leftdisksdiameter"),d=document.getElementById("rightdisksdiameter"),i=document.getElementById("leftdiskswidth"),n=document.getElementById("rightdiskswidth"),r=document.getElementById("leftdiskset"),m=document.getElementById("rightdiskset"),s=document.getElementById("tyresform");!0===t.disabled&&!0===d.disabled&&!0===i.disabled&&!0===n.disabled&&!0===r.disabled&&!0===m.disabled?(t.disabled=!1,d.disabled=!1,i.disabled=!1,n.disabled=!1,r.disabled=!1,m.disabled=!1,s.classList.remove("without__disks"),s.classList.add("with__disks")):(t.disabled=!0,d.disabled=!0,i.disabled=!0,n.disabled=!0,r.disabled=!0,m.disabled=!0,s.classList.remove("with__disks"),s.classList.add("without__disks"))}document.getElementById("disksswitch").addEventListener("input",N);document.getElementById("tyresform").addEventListener("change",(function(e){e.preventDefault;const t=document.getElementById("lefttyreswidth").value,d=document.getElementById("righttyreswidth").value,i=document.getElementById("lefttyresheight").value,n=document.getElementById("righttyresheight").value,r=document.getElementById("lefttyresdiameter").value,m=document.getElementById("righttyresdiameter").value,s=document.getElementById("leftdisksdiameter").value,h=document.getElementById("rightdisksdiameter").value,a=document.getElementById("lefttyresdiameter"),o=document.getElementById("righttyresdiameter"),l=document.getElementById("leftdisksdiameter"),u=document.getElementById("rightdisksdiameter"),c=document.getElementById("leftdiskswidth").value,g=document.getElementById("rightdiskswidth").value,y=document.getElementById("leftdiskset").value,w=document.getElementById("rightdiskset").value,b=document.getElementById("disksswitch"),T=document.getElementById("oldtyreswidth"),f=document.getElementById("newtyreswidth"),E=document.getElementById("oldtyresheight"),p=document.getElementById("newtyresheight"),B=document.getElementById("oldtyresdiameter"),I=document.getElementById("newdtyresiameter"),N=document.getElementById("olddiskswidth"),x=document.getElementById("newddiskswidth"),k=document.getElementById("oldwheelset"),L=document.getElementById("newdwheelset"),v=document.getElementById("tyreswidthdifference"),$=document.getElementById("tyresheightdifference"),H=document.getElementById("tyresdiameterdifference"),M=document.getElementById("disksdifference"),j=document.getElementById("etdifference"),A=document.getElementById("difftext");if(e.target===b)return;e.target===a?l.value=r:e.target===o?u.value=m:e.target===l?a.value=s:e.target===u&&(o.value=h);if(T.innerText=t,f.innerText=d,E.innerText=Number(t)*Number(i)/100,p.innerText=Number(d)*Number(n)/100,B.innerText=Number(Number(t)*Number(i)/1e3*2)+Number(2.5*r),I.innerText=Number(Number(d)*Number(n)/1e3*2)+Number(2.5*m),A.innerHTML="",A.insertAdjacentHTML("beforeend","\n    <p>The comparison result is:</p>"),t>d){const e=Number(t-d);v.innerText=`${e} mm`,A.insertAdjacentHTML("beforeend",`<span>The new tire is narrower than the old one by ${e} mm. </span>`)}else if(t<d){const e=Number(d-t);v.innerText=`${e} mm`,A.insertAdjacentHTML("beforeend",`<span>The new tire is wider than the old one by ${e} mm. </span>`)}else t===d&&(v.innerText="The same",A.insertAdjacentHTML("beforeend","<span>Tire width is the same. </span>"));const _=Number(t)*Number(i)/100,F=Number(d)*Number(n)/100;if(_>F){const e=Number(_-F);$.innerText=`${e} mm`,A.insertAdjacentHTML("beforeend",`<span>The profile height of the new tire is lower than the old one by ${e} mm. </span>`)}else if(F>_){const e=Number(F-_);$.innerText=`${e} mm`,A.insertAdjacentHTML("beforeend",`<span>The profile height of the new tire is higher than the old one by ${e} mm. </span>`)}else F===_&&($.innerText="The same",A.insertAdjacentHTML("beforeend","<span>The profile height is the same. </span>"));const S=Number(Number(t)*Number(i)/1e3*2)+Number(2.5*r),U=Number(Number(d)*Number(n)/1e3*2)+Number(2.5*m);if(S>U){const e=Number(S-U).toFixed(2);H.innerText=`${e} mm`,A.insertAdjacentHTML("beforeend",`<span>New wheel will be lower than the old one by ${e} mm. The clearance of the car will decrease by ${Number(e/2).toFixed(2)} mm. </span>`)}else if(U>S){const e=Number(U-S).toFixed(2);H.innerText=`${e} mm`,A.insertAdjacentHTML("beforeend",`<span>New wheel will be higher than the old one by ${e} mm. The clearance of the car will increase by ${Number(e/2).toFixed(2)} mm. </span>`)}else U===S&&(H.innerText="The same",A.insertAdjacentHTML("beforeend","<span>Wheel height is the same. The clearance of the car will not change. </span>"));if(!0===b.checked){N.innerText=Number(25*c),x.innerText=Number(25*g),k.innerText=y,L.innerText=w,c>g?M.innerText=Number(c-g):g>c?M.innerText=Number(g-c):g===c&&(M.innerText="The same"),y>w?j.innerText=Number(y-w):w>y?j.innerText=Number(w-y):w===y&&(j.innerText="The same");const e=Number(2.5*c/2)-Number(y),t=Number(2.5*g/2)-Number(w);if(e>t){const d=Number(e-t).toFixed(2);A.insertAdjacentHTML("beforeend",`<span>The wheel is closer to the suspension and body elements by ${d} mm. </span>`)}else if(e<t){const d=Number(t-e).toFixed(2);A.insertAdjacentHTML("beforeend",`<span>The wheel is further from the suspension and body elements by ${d} mm. </span>`)}else A.insertAdjacentHTML("beforeend","<span>The gap between wheel and the suspension and body elements is the same. </span>")}else N.innerText="",x.innerText="",k.innerText="",L.innerText="",M.innerText="",j.innerText=""}));
//# sourceMappingURL=index.5cc38dab.js.map
