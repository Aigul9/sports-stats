(this.webpackJsonpsports_stats=this.webpackJsonpsports_stats||[]).push([[0],{20:function(e,t,n){},31:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(24),c=n.n(a),s=n(10),i=n(11),o=n(16),u=n(15),h=n(8),l=n(2),j=(n(31),n(0)),b=function(){return Object(j.jsxs)("div",{className:"header-block",children:[Object(j.jsx)("h3",{children:Object(j.jsx)(h.b,{to:"/",children:"Sports statistics"})}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(h.b,{to:"/teams",children:"Teams"})}),Object(j.jsx)("li",{children:Object(j.jsx)(h.b,{to:"/leagues",children:"Leagues"})})]})]})},d=n(12),f=(n(20),function(e){var t=e.data,n=e.onRowClicked;return Object(j.jsx)("tr",{onClick:n,className:"row-hover",children:Object.keys(t).slice(1).map((function(e,n){return Object(j.jsx)("td",{children:t[e]},n)}))})}),m=function(e){var t=e.item;return Object.keys(t).slice(1).map((function(e,t){return e=e[0].toUpperCase()+e.slice(1),Object(j.jsx)("th",{children:e},t)}))},p=n.p+"static/media/spinner.c60d8417.svg",O=(n(38),function(){return Object(j.jsx)("img",{src:p,alt:"Loading...",className:"spinner"})}),v=n(9),x=function(e,t){switch(t.type){case"GET_TEAMS":return Object(v.a)(Object(v.a)({},e),{},{teams:t.payload});case"GET_LEAGUES":return Object(v.a)(Object(v.a)({},e),{},{leagues:t.payload});case"GET_SEARCH":return Object(v.a)(Object(v.a)({},e),{},{text:t.payload});case"GET_ERROR":return Object(v.a)(Object(v.a)({},e),{},{error:!0});default:return e}},g={teams:[],leagues:[],text:"",error:!1},A=Object(r.createContext)(g),y=function(e){var t=e.children,n=Object(r.useReducer)(x,g),a=Object(d.a)(n,2),c=a[0],s=a[1];return Object(j.jsx)(A.Provider,{value:[c,s],children:t})};var w=function(e){var t=e.items,n=e.onRowClicked,a=e.type,c=Object(r.useContext)(A),s=Object(d.a)(c,1)[0][a];return 0===s.length?Object(j.jsx)(O,{}):Object(j.jsxs)("table",{id:"table",children:[Object(j.jsx)("thead",{children:Object(j.jsx)("tr",{children:Object(j.jsx)(m,{item:s[0]})})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsx)(f,{data:e,onRowClicked:function(){return n(e.id)}},e.id)}))})]})},T=(n(39),function(){return Object(j.jsxs)("div",{className:"error-indicator",children:[Object(j.jsx)("img",{src:"data:image/png;base64,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",alt:"Error icon"}),Object(j.jsx)("span",{children:"Data can not be fetched. Try again later."})]})}),R=(n(40),function(e){var t=e.input,n=e.onChange,a=Object(l.e)();return Object(r.useEffect)((function(){var e=new URLSearchParams;t?e.append("name",t):e.delete("name"),a.push({search:e.toString()})}),[t,a]),Object(j.jsx)("input",{placeholder:"Search...",className:"form-control search-input",value:t,onChange:function(e){return n(e.target.value)}})}),C=Object(l.f)((function(e){var t=e.history,n=e.getData,a=e.type,c=Object(r.useContext)(A),s=Object(d.a)(c,2),i=s[0],o=s[1],u=Object(r.useState)(""),h=Object(d.a)(u,2),l=h[0],b=h[1],f=i[a],m=Object(r.useState)(f),p=Object(d.a)(m,2),O=p[0],v=p[1],x=window.location.search,g=new URLSearchParams(x),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(b(e),e){var t=f.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}));v(t)}else v(f)};return Object(r.useEffect)((function(){n().then((function(e){o({type:"GET_".concat(a.toUpperCase()),payload:e})})).catch((function(){o({type:"GET_ERROR"})}))}),[n,o]),Object(r.useEffect)((function(){var e=g.get("name")||"";e&&t.push({search:g.toString()}),y(e)}),[f]),i.error?Object(j.jsx)(T,{}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("h1",{id:"title",children:[" List of ",a," "]}),Object(j.jsx)(R,{input:l,onChange:y}),Object(j.jsx)(w,{onRowClicked:function(e){t.push("/".concat(a,"/").concat(e))},items:O,type:a})]})})),k=n(6),N=n.n(k),E=n(14),H=n(26),S=n.n(H),D=function(){function e(){var t=this;Object(s.a)(this,e),this.getTeams=Object(E.a)(N.a.mark((function e(){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/teams");case 2:return n=e.sent,e.abrupt("return",n.teams.map(t._transformTeam));case 4:case"end":return e.stop()}}),e)}))),this.getTeam=function(){var e=Object(E.a)(N.a.mark((function e(n){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/teams/".concat(n));case 2:return r=e.sent,e.abrupt("return",t._transformTeam(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getMatch=function(){var e=Object(E.a)(N.a.mark((function e(n){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/teams/".concat(n,"/matches"));case 2:return r=e.sent,e.abrupt("return",{count:r.count,matches:r.matches.map(t._transformMatch)});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getLeagues=Object(E.a)(N.a.mark((function e(){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/competitions");case 2:return n=e.sent,e.abrupt("return",n.competitions.map(t._transformLeague));case 4:case"end":return e.stop()}}),e)}))),this.getLeague=function(){var e=Object(E.a)(N.a.mark((function e(n){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/competitions/".concat(n));case 2:return r=e.sent,e.abrupt("return",t._transformLeague(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformMatch=function(e){var n=e.id,r=e.utcDate,a=e.status,c=e.score,s=e.homeTeam,i=e.awayTeam;return{id:n,date:t.convertDate(r),status:a,winner:c.winner,homeTeam:s.name,awayTeam:i.name}},this._api="http://api.football-data.org/v2"}return Object(i.a)(e,[{key:"getResource",value:function(){var e=Object(E.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._api).concat(t),{headers:{"X-Auth-Token":"ee9e32655fbb40f887db17ef2d5d3a71"}});case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(n.status));case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_transformTeam",value:function(e){var t=e.id,n=e.name,r=e.area,a=e.founded,c=e.venue,s=e.clubColors;return{id:t,name:n,area:r.name,founded:a,venue:c,colors:s}}},{key:"_transformLeague",value:function(e){return{id:e.id,name:e.name,area:e.area.name}}},{key:"convertDate",value:function(e){return S()(e).format("DD.MM.YYYY HH:mm")}}]),e}(),L=Object(l.f)((function(){var e=new D;return Object(j.jsx)(C,{getData:e.getTeams,type:"teams"})})),U=Object(l.f)((function(){var e=new D;return Object(j.jsx)(C,{getData:e.getLeagues,type:"leagues"})})),B=(n(43),function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).sportService=new D,e.state={matches:[],team:{},loading:!0},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.sportService.getMatch(this.props.teamId).then((function(t){var n=t.matches;console.log(n),e.setState({matches:n})})),this.sportService.getTeam(this.props.teamId).then((function(t){return e.setState({team:t,loading:!1})}))}},{key:"assignMatchResultClass",value:function(e,t){if(null!==e)return"DRAW"===e?"draw":e.substr(0,4).toLowerCase()===t?"win":"lose"}},{key:"renderTableData",value:function(e){var t=this;return e.map((function(e){var n=e.id,r=e.date,a=e.winner,c=e.homeTeam,s=e.awayTeam,i=t.assignMatchResultClass(a,"home"),o=t.assignMatchResultClass(a,"away");return Object(j.jsxs)("tr",{className:"row-hover",children:[Object(j.jsx)("td",{children:r}),Object(j.jsx)("td",{className:"".concat(i),children:c}),Object(j.jsx)("td",{className:"".concat(o),children:s})]},n)}))}},{key:"renderTableHeader",value:function(){return Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Date"}),Object(j.jsx)("th",{children:"Home Team"}),Object(j.jsx)("th",{children:"Away Team"})]})})}},{key:"filterFinished",value:function(){return this.state.matches.filter((function(e){return"FINISHED"===e.status})).reverse()}},{key:"filterScheduled",value:function(){return this.state.matches.filter((function(e){return"SCHEDULED"===e.status}))}},{key:"render",value:function(){var e=this.filterScheduled(),t=this.filterFinished();return this.state.loading?Object(j.jsx)(O,{}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{id:"title",children:this.state.team.name}),Object(j.jsxs)("table",{id:"table",className:"table-fixed",children:[this.renderTableHeader(),Object(j.jsxs)("tbody",{children:[Object(j.jsx)("tr",{children:Object(j.jsx)("td",{colSpan:"3",children:Object(j.jsxs)("span",{className:"split",children:["Scheduled (",e.length,")"]})})}),this.renderTableData(e),Object(j.jsx)("tr",{children:Object(j.jsx)("td",{colSpan:"3",children:Object(j.jsxs)("span",{className:"split",children:["Finished (",t.length,")"]})})}),this.renderTableData(t)]})]})]})}}]),n}(r.Component)),F=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.leagueId;return Object(j.jsx)("h1",{children:e})}}]),n}(r.Component),G=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(j.jsx)(h.a,{children:Object(j.jsxs)(y,{children:[Object(j.jsx)(b,{}),Object(j.jsx)(l.a,{path:"/teams",exact:!0,component:L}),Object(j.jsx)(l.a,{path:"/leagues",exact:!0,component:U}),Object(j.jsx)(l.a,{path:"/teams/:id",render:function(e){var t=e.match;return Object(j.jsx)(B,{teamId:t.params.id})}}),Object(j.jsx)(l.a,{path:"/leagues/:id",render:function(e){var t=e.match;return Object(j.jsx)(F,{leagueId:t.params.id})}})]})})}}]),n}(r.Component);c.a.render(Object(j.jsx)(G,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.7f33bb06.chunk.js.map