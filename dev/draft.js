(w=>{
	if(w.ListImagesResult!==true){
		(w.ListImages||(w.ListImages=(w=>{
			const once=(w,s,f)=>{let e=w.document;if(e.readyState!=='complete'){w.addEventListener(s,e=o=>{w.removeEventListener(s,e);f(o)})}else{f({target:e})}},
			S='img,html{padding:0}body,html{margin:0;color:#7b7b7b}html{background:#f6f6f6 url(https:bit.ly/2nPgsph)}body{background:transparent;font:11px/13px sans-serif;text-align:center;padding:8px;user-select:none;}section:not(:first-child){margin-top:22px;border-top:2px dashed #e8e5e5}p{text-align:right;margin:4px 0}big{font-size:1.2em;vertical-align:text-bottom;color:#525252}b,img{cursor:pointer;color:#7c7b7b}img{transition:outline-color .2s ease-out,filter .5s ease-in;outline:2px outset #6a6a6a17}img{box-sizing:border-box;max-width:calc(100% - 16px);vertical-align:top;margin:8px;border:8px solid #fff;box-shadow:1px 1px 1px #d6d6d6,1px 1px 4px #d4d4d4;background:url(https://bit.ly/2vWcLT4)}img:hover{transition-timing-function:linear,linear;transition-duration:.1s;outline:2px solid #593db0;filter:brightness(1.05)}',
			T=' \uD83D\uDDBC';
			let opened,allowed=true;
			return w=>{
				if(allowed){
					allowed=false;
					once(w,'load',o=>{
						const d=o.target;
						let m=d.images,i=m.length;
						if(i!==0){
							m=[...m];
							let a=[],b=[];
							while(i!==0){const e=m[--i],w=e.naturalWidth,h=e.naturalHeight;if(w!==0 && h!==0){const x=(w<128||h<240)?b:a;x[x.length]=[w,h,e.src]}};
							//svg?
							i=a.length+b.length;
							if(i!==0){
								const zip=o=>{
									let e=o.target;
									e=e.ownerDocument.defaultView;
									e.alert('zip2do')
								},
								c=(e,s)=>e.appendChild(d.createElement(s)),
								m=c(d.createDocumentFragment(),'main');
								m.total=i;
								i=(x,f=false)=>{
									let l=x.length;
									if(l!==0){
										if(f){f(l,x)};
										let s=c(m,'section'),e=c(c(s,'p'),'b');
										e.innerText='\uD83D\uDCBE:\u2009';
										e.addEventListener('click',zip);
										s=c(s,'span');
										e=s.label=c(e,'big');
										e.innerText=s.items=l;
										do{e=c(s,'img');t=x[--l];x.length=l;e.title=t[0]+'\u00D7'+t[1];e.src=t[2]}while(l!==0)
									}
								};
								i(a);
								a=d=>{
									let e=d.body;
									d.title=(e.main=e.appendChild(m)).total+T;
									e.style.display='block';
									e=d.defaultView;
									e.ListImagesResult=allowed=true;
									e.focus()
								};
								i(b,(i,x)=>{if(i>1){x.sort((a,b)=>a[0]<b[0]);x.sort((a,b)=>a[1]>b[1])}});
								//..
								i=opened;
								if(i && i.closed!==true){
									b=i.document.body;b.style.display='none';while(i=b.lastChild){i.remove()};
									i=o=>{a(o.target)}
								}else{
									once(i=opened=w.open(),'DOMContentLoaded',o=>{c(o.target.head,'style').innerText=S});
									i.addEventListener('beforeunload',()=>{opened=null});
									i.ListImagesResult=true;
									i=o=>{
										const d=o.target,b=d.body;
										b.style.display='none';
										m.addEventListener('click',o=>{
											let e=o.target,s=e.tagName;
											const d=e.ownerDocument;
											if(s==='IMG'||s==='SVG'){
												if(o.ctrlKey){
													const p=e.parentElement;
													let j=--p.items;
													(j!==0?(p.label.innerText=j,e):p.parentElement).remove();
													j=--d.body.main.total;
													d.title=(j!==0?j+T:'');
												}else{
													s=e.w;if(s && s.closed!==true){s.focus()}else{once(e.w=w.open(e.src),'DOMContentLoaded',o=>{o.target.defaultView.addEventListener('beforeunload',()=>{e.w=null})})}
												}
											}
										});
										a(d)
									}
								};
								b=null;
								once(opened,'load',i)
							}
						}else{
							allowed=true
						}
			})}}
		})(w)))(w)
	}
})(window);
