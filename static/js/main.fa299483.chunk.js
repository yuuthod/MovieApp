(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(25)},17:function(e,t,n){},18:function(e,t,n){},21:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),i=n.n(o),s=(n(17),n(18),n(6)),c=n.n(s),m=n(9),l=n(1),u=n(2),p=n(4),v=n(3),h=n(5),d=(n(21),n(10)),f=n.n(d);n(24);function _(e){var t=e.poster;return r.a.createElement("img",{src:t,alt:"Movie Poster"})}function g(e){var t=e.genre;return r.a.createElement("span",{className:"movie__genre"},t)}var E=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"movie__box"},r.a.createElement("div",{className:"movie__colum"},r.a.createElement("div",{className:"movie__img"},r.a.createElement(_,{poster:this.props.poster})),r.a.createElement("div",{className:"movie__content"},r.a.createElement("h1",null,this.props.title),this.props.genres.map(function(e,t){return r.a.createElement(g,{genre:e,key:t})}),r.a.createElement("p",{className:"movie__rating"},this.props.rating),r.a.createElement("div",{className:"movie__summary"},r.a.createElement(f.a,{text:this.props.summary,maxLine:"3",ellipsis:"...",trimRight:!0,basedOn:"letters"}))),r.a.createElement("div",{className:"clear"})))}}]),t}(a.Component),b=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).state={},n._renderMovies=function(){return n.state.movies.map(function(e){return r.a.createElement(E,{title:e.title_long,poster:e.medium_cover_image,genres:e.genres,rating:e.rating,summary:e.summary,key:e.id})})},n._getMovies=Object(m.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._callApi();case 2:t=e.sent,n.setState({movies:t});case 4:case"end":return e.stop()}},e)})),n._callApi=function(){return fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count").then(function(e){return e.json()}).then(function(e){return e.data.movies}).catch(function(e){return console.log(e)})},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this._getMovies()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},this.state.movies?this._renderMovies():"Loading...")}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.fa299483.chunk.js.map