(function(w,op,p1,p2){
	var d=w.document;//todo DomLoaded, separare win e doc
	if(!op[p1]){
		var Z=-1,H="hasOwnProperty",s="splice",Listeners={};
		Event.RunListeners=function(x){if(!x){x=w.event};for(var i=0,j=0,V=Listeners[x.type],m=V.Els,l=m.length,o=V.Evs;j<l;j++){if(m[j]===this){for(i;i<o[j].length;i++){o[j][i].call(this,x)};break}}};
		d[p1]=op[p1]=function(E,L){
			var e=this,N=("on"+E),V=Listeners[E],R=Event.RunListeners,p="push";
			if(Listeners[H](E)){
				var b=V.Evs;for(var i=Z,j=0,m=V.Els,l=m.length;j<l;j++){if(m[j]===e){i=j;break}};
				if(i===Z){
					m[p](e);b[p]([L]);e[N]=R;
				}else{
					var a=b[i];if(e[N]!==R){a[s](0);e[N]=R};for(var i=0,l=a.length;i<l;i++){if(a[i]===L){return}};a[p](L);
				};
			}else{
				Listeners[E]={Els:[e],Evs:[[L]]};e[N]=R;
			};
		};
		d[p2]=op[p2]=function(E,L){
			if(!Listeners[H](E)){return};
			var V=Listeners[E];
			for(var i=Z,j=0,m=V.Els,l=m.length;j<l;j++){if(m[j]===this){i=j;break}};
			if(i===Z){return};
			for(var i=0,m=V.Evs[i],l=m.length;i<l;i++){if(m[i]===L){m[s](i,1)}};
		};
	};
})(window,Element.prototype,"addEventListener","removeEventListener");











