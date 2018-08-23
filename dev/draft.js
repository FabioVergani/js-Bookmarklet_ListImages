(w=>{
	(w.ListImages||(w.ListImages=(()=>{
		const at=(e,s,x)=>{const i=e.removeEventListener;i(s,x);e.addEventListener(s,x);return i},
		once=(e,s,x)=>{const i=o=>{f(s,x);x(o)},f=at(e,s,i)},
		R=(x,f)=>{const d=x.document;d.readyState!=='complete'?once(x,'load',f):f({target:d})},
		f=o=>{
			const d=o.target,w=d.defaultView;
			if(w.ListImagesResults){
				k=true
			}else{
				let m=d.images;
				if(m.length){
					m=[...m];
					let i,a=[],b=[];
					while(m.length){
						const e=m.pop(),w=e.naturalWidth,h=e.naturalHeight;
						if(w!==0 && h!==0){i=((w<128||h<240)?b:a).push([w,h,e.src])}
					};
					if(i){
						const c=(x,s)=>x.appendChild(d.createElement(s));
						m=c(i=d.createDocumentFragment(),'main');
						m.qt=0;
						(m.s=c(i,'section')).innerHTML='<p>\uD83D\uDCBE:\u2009<b/></p>';

						i=(x,f)=>{
							let n=x.length;
							if(n){
								if(f && n>1){f(x)};
								let e=m;
								e.qt+=n;
								const s=e.appendChild(e.s.cloneNode(true));
								e=s.children[0].children[0];
								e.textContent=n;
								n=c;
								while(e=x.pop()){
									const o=n(s,'img');
									o.alt=e[0]+'&times;'+e[1];
									o.src=e[2]
								}
							}
						};

						i(a);
						a=null;

						i(b,x=>{
							x.sort((a,b)=>a[0]<b[0]);
							x.sort((a,b)=>a[1]>b[1]);
						});

						a=x=>{
							x.title=m.qt.join('\u00A0');
							x.body.style.display='block';
							k=(x=g).ListImagesResults=true;
							x.focus();
						};
						m.qt=[m.qt,'images','from:',w.location];
						i=g;
						if(i && i.closed!==true){
							(b=i.document.body).style.display='none';
							if(i=b.firstElementChild){b.replaceChild(m,i)}else{b.appendChild(m)};
							m.qt[4]='(updated)';
							i=o=>{a(o.target)}
						}else{
							g=w.open();
							i=o=>{
								const d=o.target;
								at(d.defaultView,'beforeunload',()=>{g=null});
								c(d.head,'style').innerHTML='/**/';
								let e=d.body;
								e.style='display:none;font:11px/normal sans-serif;text-align:center;background:#eee';//url(https://bit.ly/2nPgsph)
								e.appendChild(m);
								a(d)
							}
						};
						b=null;
						R(g,i)
					}
				}else{
					k=true
				}
			}
		};
		let g,k=true;
		return w=>{if(k){k=false;R(w,f)}}
	})()))(w)
})(window);
