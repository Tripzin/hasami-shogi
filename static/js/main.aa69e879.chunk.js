(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAACJCAYAAAAIaJdQAAAC3HpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHja7ZdbstsgDIbfWUWXYEkIieVgLjPdQZffH0xyknPSzvTyGDMxtpB/gT4ZT0L/8X2EbzjIUwpRzVNO6cARc8xccOHHdVw9HXGd12F5j9GzPfhtgGES9HLdpr79C+z6IBS3/Xy2B6tbx7fQHrgJyozMuNh+voWELzvt+3CbUIkPy9m/s22bXt3n+2hIRlPoCQfuQnLg7DOKXL+y+oIRmk4iy6I4q9jr3IXOr5N3v/qUu6NsuzynIhxpO6RPOdp20te5Wxl6nBF9RH4aELmH+JK7MZqP0a/VlZiQqRT2om5LWVdwPJFKWY8lNMNPcW2rZTTHEiuINdA80WqgTIxsD4rUqNCgvvpKFVOM3NnQM1eWZXMxzlyRepI4Gw02ydKCOKhUUBOY+T4XWnHzilfJEbkRPJkgRnjiSwuvjH/T7kJjzNIlOvzKE8oC8+JZHJjGJDfP8AIQGjunuvK7Wniom+MBrICgrjQ7FliO85I4lT5qSxZngZ8eMRzXq0HWtgBShNiKyaCuIx2JRCnRYcxGhDw6+BTMnCXyCQKkyo3CABuRBDjOMzaeMVq+rHyZsbUAhEoSA5osBbBiVNSPRUcNFRWNQVWTmrpmLUlSTJpSsjT3qGJi0dSSmbllKy4eXT25uXv2kjkLtjDNKVvInnMuBUELpAueLvAo5eRTznjqmU47/cxnqSifGqvWVK16zbU0btLw+rfULDRvuZVOHaXUY9eeunXvuZeBWhsy4tCRhg0feZQ7Ndqv7RM1+kTu99RoU5vE4vKzD2owm90kaG4nOpmBGEcCcZsEUNA8mR1OMfIkN5kdeW5XyqBGOuE0msRAMHZiHXRn90Hut9yCxj/ixr8iFya6/0EuTHSb3FduL6i1sr4osgDNt3Dm9JCBjQ0O3Qt7md+kv+7Dvwq8hd5Cb6G30FvoLfQWuvUDn2780Qs/ActrcpomrbPUAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5AILDgYBxwOdTwAAAFdJREFUeNrtwTEBAAAAwqD1T20ND6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuDEDnAABqX4bEgAAAABJRU5ErkJggg=="},function(e,t,r){e.exports=r.p+"static/media/fuhyou.117c19e7.png"},function(e,t,r){e.exports=r.p+"static/media/tokin.d7d942ac.png"},function(e,t,r){e.exports=r(19)},,,,,function(e,t,r){},function(e,t,r){},,function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),l=r(7),u=r.n(l),i=(r(16),r(1)),s=r(2),c=r(4),d=r(3),o=r(5),h=(r(17),r(18),function(){function e(){Object(i.a)(this,e),this.BLANK=0,this.PLAYER1=1,this.PLAYER2=2,this.boardInfo=[],this.initBoardInfo()}return Object(s.a)(e,[{key:"initBoardInfo",value:function(){for(var e=new Array(11).fill(null),t=0;t<e.length;t++)if(0===t){var r=new Array(11).fill(-1);e[t]=r}else if(1===t){var a=new Array(11).fill(this.PLAYER2);a[0]=-1,a[e.length-1]=-1,e[t]=a}else if(t===e.length-2){var n=new Array(11).fill(this.PLAYER1);n[0]=-1,n[e.length-1]=-1,e[t]=n}else if(t===e.length-1){var l=new Array(11).fill(-1);e[t]=l}else{var u=new Array(11).fill(this.BLANK);u[0]=-1,u[e.length-1]=-1,e[t]=u}this.boardInfo=e}},{key:"debugInitBoardInfo",value:function(){this.boardInfo=[[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,2,2,2,2,2,2,2,2,2,-1],[-1,0,0,0,0,0,0,0,0,0,-1],[-1,0,0,0,2,0,0,0,0,0,-1],[-1,0,0,0,1,0,0,0,0,0,-1],[-1,0,2,1,0,1,2,0,0,0,-1],[-1,0,0,0,0,0,0,0,0,0,-1],[-1,0,0,0,2,0,0,0,0,0,-1],[-1,0,0,0,0,0,0,0,0,0,-1],[-1,1,1,1,1,1,1,1,1,1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]]}},{key:"movePiece",value:function(e,t){var r=this.boardInfo,a=e[0],n=e[1],l=t[0],u=t[1],i=0,s=r[n][a];console.log(e),console.log(t);for(var c=-1;c<=1;c++)for(var d=-1;d<=1;d++)if(c+d!==0&&Math.abs(c)+Math.abs(d)!==2){i=this.countCatchPiece(t,c,d,s),console.log("count: "+i);for(var o=1;o<=i;o++)r[u+d*o][l+c*o]=0}r[n][a]=0,r[u][l]=s,this.boardInfo=r}},{key:"countCatchPiece",value:function(e,t,r,a){var n,l=this.boardInfo,u=e[0],i=e[1];for(n=1;l[i+n*r][u+n*t]===this.oppose(a);n++);return l[i+n*r][u+n*t]===a?n-1:0}},{key:"searchBlankPosition",value:function(e,t,r){var a,n=this.boardInfo,l=e[0],u=e[1];for(a=1;n[u+a*r][l+a*t]===this.BLANK;a++);return a-1}},{key:"searchLigalMove",value:function(e){this.boardInfo;for(var t,r,a=e[0],n=e[1],l=0,u=[],i=-1;i<=1;i++)for(var s=-1;s<=1;s++)if(i+s!==0&&Math.abs(i)+Math.abs(s)!==2){l=this.searchBlankPosition(e,i,s),console.log("count: "+l);for(var c=1;c<=l;c++)t=a+i*c,r=n+s*c,u.push([t,r])}return u}},{key:"oppose",value:function(e){return 1===e?this.PLAYER2:this.PLAYER1}}]),e}()),A=r(8),m=r.n(A),E=r(9),q=r.n(E),S=r(10),f=r.n(S);function v(e){var t=e.number;return 0===t?n.a.createElement("img",{className:"img-fluid piece",src:m.a,alt:"0"}):1===t?n.a.createElement("img",{className:"img-fluid piece",src:q.a,alt:"1"}):n.a.createElement("img",{className:"img-fluid piece",src:f.a,alt:"2"})}function b(e){return n.a.createElement("div",{className:"btn btn-light content",onClick:e.onClick,id:e.xKey+"-"+e.yKey},n.a.createElement(v,{number:e.value}))}var g=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(s.a)(t,[{key:"reunderSquare",value:function(e,t){var r=this;return n.a.createElement(b,{xKey:e,yKey:t,value:this.props.squares[e][t],onClick:function(){return r.props.onClick(t,e)}})}},{key:"render",value:function(){return n.a.createElement("table",{className:"table table-bordered"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,this.reunderSquare(1,1)),n.a.createElement("td",null,this.reunderSquare(1,2)),n.a.createElement("td",null,this.reunderSquare(1,3)),n.a.createElement("td",null,this.reunderSquare(1,4)),n.a.createElement("td",null,this.reunderSquare(1,5)),n.a.createElement("td",null,this.reunderSquare(1,6)),n.a.createElement("td",null,this.reunderSquare(1,7)),n.a.createElement("td",null,this.reunderSquare(1,8)),n.a.createElement("td",null,this.reunderSquare(1,9))),n.a.createElement("tr",null,n.a.createElement("td",null,this.reunderSquare(2,1)),n.a.createElement("td",null,this.reunderSquare(2,2)),n.a.createElement("td",null,this.reunderSquare(2,3)),n.a.createElement("td",null,this.reunderSquare(2,4)),n.a.createElement("td",null,this.reunderSquare(2,5)),n.a.createElement("td",null,this.reunderSquare(2,6)),n.a.createElement("td",null,this.reunderSquare(2,7)),n.a.createElement("td",null,this.reunderSquare(2,8)),n.a.createElement("td",null,this.reunderSquare(2,9))),n.a.createElement("tr",null,n.a.createElement("td",null,this.reunderSquare(3,1)),n.a.createElement("td",null,this.reunderSquare(3,2)),n.a.createElement("td",null,this.reunderSquare(3,3)),n.a.createElement("td",null,this.reunderSquare(3,4)),n.a.createElement("td",null,this.reunderSquare(3,5)),n.a.createElement("td",null,this.reunderSquare(3,6)),n.a.createElement("td",null,this.reunderSquare(3,7)),n.a.createElement("td",null,this.reunderSquare(3,8)),n.a.createElement("td",null,this.reunderSquare(3,9))),n.a.createElement("tr",null,n.a.createElement("td",null,this.reunderSquare(4,1)),n.a.createElement("td",null,this.reunderSquare(4,2)),n.a.createElement("td",null,this.reunderSquare(4,3)),n.a.createElement("td",null,this.reunderSquare(4,4)),n.a.createElement("td",null,this.reunderSquare(4,5)),n.a.createElement("td",null,this.reunderSquare(4,6)),n.a.createElement("td",null,this.reunderSquare(4,7)),n.a.createElement("td",null,this.reunderSquare(4,8)),n.a.createElement("td",null,this.reunderSquare(4,9))),n.a.createElement("tr",null,n.a.createElement("td",null,this.reunderSquare(5,1)),n.a.createElement("td",null,this.reunderSquare(5,2)),n.a.createElement("td",null,this.reunderSquare(5,3)),n.a.createElement("td",null,this.reunderSquare(5,4)),n.a.createElement("td",null,this.reunderSquare(5,5)),n.a.createElement("td",null,this.reunderSquare(5,6)),n.a.createElement("td",null,this.reunderSquare(5,7)),n.a.createElement("td",null,this.reunderSquare(5,8)),n.a.createElement("td",null,this.reunderSquare(5,9))),n.a.createElement("tr",null,n.a.createElement("td",null,this.reunderSquare(6,1)),n.a.createElement("td",null,this.reunderSquare(6,2)),n.a.createElement("td",null,this.reunderSquare(6,3)),n.a.createElement("td",null,this.reunderSquare(6,4)),n.a.createElement("td",null,this.reunderSquare(6,5)),n.a.createElement("td",null,this.reunderSquare(6,6)),n.a.createElement("td",null,this.reunderSquare(6,7)),n.a.createElement("td",null,this.reunderSquare(6,8)),n.a.createElement("td",null,this.reunderSquare(6,9))),n.a.createElement("tr",null,n.a.createElement("td",null,this.reunderSquare(7,1)),n.a.createElement("td",null,this.reunderSquare(7,2)),n.a.createElement("td",null,this.reunderSquare(7,3)),n.a.createElement("td",null,this.reunderSquare(7,4)),n.a.createElement("td",null,this.reunderSquare(7,5)),n.a.createElement("td",null,this.reunderSquare(7,6)),n.a.createElement("td",null,this.reunderSquare(7,7)),n.a.createElement("td",null,this.reunderSquare(7,8)),n.a.createElement("td",null,this.reunderSquare(7,9))),n.a.createElement("tr",null,n.a.createElement("td",null,this.reunderSquare(8,1)),n.a.createElement("td",null,this.reunderSquare(8,2)),n.a.createElement("td",null,this.reunderSquare(8,3)),n.a.createElement("td",null,this.reunderSquare(8,4)),n.a.createElement("td",null,this.reunderSquare(8,5)),n.a.createElement("td",null,this.reunderSquare(8,6)),n.a.createElement("td",null,this.reunderSquare(8,7)),n.a.createElement("td",null,this.reunderSquare(8,8)),n.a.createElement("td",null,this.reunderSquare(8,9))),n.a.createElement("tr",null,n.a.createElement("td",null,this.reunderSquare(9,1)),n.a.createElement("td",null,this.reunderSquare(9,2)),n.a.createElement("td",null,this.reunderSquare(9,3)),n.a.createElement("td",null,this.reunderSquare(9,4)),n.a.createElement("td",null,this.reunderSquare(9,5)),n.a.createElement("td",null,this.reunderSquare(9,6)),n.a.createElement("td",null,this.reunderSquare(9,7)),n.a.createElement("td",null,this.reunderSquare(9,8)),n.a.createElement("td",null,this.reunderSquare(9,9)))))}}]),t}(n.a.Component),y=function(e){function t(e){var r;Object(i.a)(this,t);var a=(new h).boardInfo;return(r=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={squares:a,fromSquare:[],toSquare:[],BLANK:0,PLAYER1:1,PLAYER2:2},r}return Object(o.a)(t,e),Object(s.a)(t,[{key:"onClickPiece",value:function(e,t){var r,a=this.state.fromSquare,n=this.state.toSquare,l=this.state.squares;if(0===a.length?this.setState({fromSquare:[e,t]}):(n=[e,t],this.setState({toSquare:n})),a.length>0&&n.length>0){r=this.searchLigalMove(a);for(var u=0;u<r.length;u++){if(r[u][0]===n[0]&&r[u][1]===n[1]){l=this.movePiece(l,a,n);break}console.log("please select correct square!")}this.setState({fromSquare:[],toSquare:[],squares:l})}}},{key:"movePiece",value:function(e,t,r){for(var a=t[0],n=t[1],l=r[0],u=r[1],i=0,s=e[n][a],c=-1;c<=1;c++)for(var d=-1;d<=1;d++)if(c+d!==0&&Math.abs(c)+Math.abs(d)!==2){i=this.countCatchPiece(e,r,c,d,s);for(var o=1;o<=i;o++)e[u+d*o][l+c*o]=0}return e[n][a]=0,e[u][l]=s,e}},{key:"countCatchPiece",value:function(e,t,r,a,n){var l,u=t[0],i=t[1];for(l=1;e[i+l*a][u+l*r]===this.oppose(n);l++);return e[i+l*a][u+l*r]===n?l-1:0}},{key:"oppose",value:function(e){return 1===e?this.state.PLAYER2:this.state.PLAYER1}},{key:"searchLigalMove",value:function(e){for(var t,r,a=e[0],n=e[1],l=0,u=[],i=-1;i<=1;i++)for(var s=-1;s<=1;s++)if(i+s!==0&&Math.abs(i)+Math.abs(s)!==2){l=this.searchBlankPosition(e,i,s);for(var c=1;c<=l;c++)t=a+i*c,r=n+s*c,u.push([t,r])}return u}},{key:"searchBlankPosition",value:function(e,t,r){var a,n=this.state.squares,l=e[0],u=e[1];for(a=1;n[u+a*r][l+a*t]===this.state.BLANK;a++);return a-1}},{key:"render",value:function(){var e=this,t=this.state.squares;return n.a.createElement("div",{className:"game"},n.a.createElement("div",{className:"game-board"},n.a.createElement(g,{squares:t,onClick:function(t,r){return e.onClickPiece(t,r)}})),n.a.createElement("div",{className:"game-info"}))}}]),t}(n.a.Component);var p=function(){return n.a.createElement("div",null,n.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(n.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[11,1,2]]]);
//# sourceMappingURL=main.aa69e879.chunk.js.map