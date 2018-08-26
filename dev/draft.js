(w=>{
	if(w.ListImagesResult!==true){
		(w.ListImages||(w.ListImages=(w=>{
			const once=(w,s,f)=>{let e=w.document;if(e.readyState!=='complete'){w.addEventListener(s,e=o=>{w.removeEventListener(s,e);f(o)})}else{f({target:e})}},T=' \uD83D\uDDBC';
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
									once(i=opened=w.open(),'DOMContentLoaded',o=>{
										const d=o.target;
									});
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
													s=e.w;
													if(s && s.closed!==true){
														s.focus()
													}else{
														once(s=e.w=w.open(e.src||''),'DOMContentLoaded',o=>{
															const d=o.target,b=d.body;
														});
														s.addEventListener('beforeunload',()=>{e.w=null})
													}
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
