(this.webpackJsonpsports_stats=this.webpackJsonpsports_stats||[]).push([[0],{135:function(e,t,n){},238:function(e,t,n){},374:function(e,t,n){},375:function(e,t,n){},376:function(e,t,n){},377:function(e,t,n){},387:function(e,t,n){},414:function(e,t,n){},415:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(34),c=n.n(r),s=n(49),i=n(50),o=n(105),u=n(101),l=n(38),h=n(11),j=n(418),d=n(421),f=n(107),b=(n(238),n(3)),m=function(){return Object(b.jsx)(j.a,{children:Object(b.jsx)(j.a.Body,{className:"header",children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)(f.LinkContainer,{to:"/",className:"link-header",children:Object(b.jsx)(d.a.Item,{children:"Sports statistics"})}),Object(b.jsx)(f.LinkContainer,{to:"/teams",children:Object(b.jsx)(d.a.Item,{children:"Teams"})}),Object(b.jsx)(f.LinkContainer,{to:"/leagues",children:Object(b.jsx)(d.a.Item,{children:"Leagues"})})]})})})},p=n(16),O=(n(135),function(e){var t=e.data,n=e.onRowClicked;return Object(b.jsx)("tr",{onClick:n,className:"row-hover",children:Object.keys(t).slice(1).map((function(e,n){return Object(b.jsx)("td",{children:t[e]},n)}))})}),g=function(e){var t=e.item;return Object.keys(t).slice(1).map((function(e,t){return e=e[0].toUpperCase()+e.slice(1),Object(b.jsx)("th",{children:e},t)}))},v=n(28),x=function(e,t){switch(t.type){case"GET_TEAMS":return Object(v.a)(Object(v.a)({},e),{},{teams:t.payload});case"GET_LEAGUES":return Object(v.a)(Object(v.a)({},e),{},{leagues:t.payload});case"GET_SEARCH":return Object(v.a)(Object(v.a)({},e),{},{text:t.payload});case"GET_ERROR":return Object(v.a)(Object(v.a)({},e),{},{error:!0});default:return e}},A={teams:[],leagues:[],text:"",error:!1},y=Object(a.createContext)(A),w=function(e){var t=e.children,n=Object(a.useReducer)(x,A),r=Object(p.a)(n,2),c=r[0],s=r[1];return Object(b.jsx)(y.Provider,{value:[c,s],children:t})};var C=function(e){var t=e.items,n=e.onRowClicked,r=e.type,c=Object(a.useContext)(y),s=Object(p.a)(c,1)[0][r];return Object(b.jsx)("div",{className:"table-wrapper",children:Object(b.jsxs)("table",{className:"fl-table",children:[Object(b.jsx)("thead",{children:Object(b.jsx)("tr",{children:Object(b.jsx)(g,{item:s[0]})})}),Object(b.jsx)("tbody",{children:t.map((function(e){return Object(b.jsx)(O,{data:e,onRowClicked:function(){return n(e.id)}},e.id)}))})]})})},N=(n(374),function(){return Object(b.jsxs)("div",{className:"error-indicator",children:[Object(b.jsx)("img",{src:"data:image/png;base64,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",alt:"Error icon"}),Object(b.jsx)("span",{children:"Data cannot be fetched. Try again later."})]})}),R=n.p+"static/media/spinner.e971a131.svg",T=(n(375),function(){return Object(b.jsx)("img",{src:R,alt:"Loading...",className:"spinner"})}),k=(n(376),function(e){var t=e.input,n=e.onChange,r=Object(h.k)();return Object(a.useEffect)((function(){var e=new URLSearchParams(window.location.hash.split("?")[1]);t?e.set("name",t):e.delete("name"),r.push({search:e.toString()})}),[t,r]),Object(b.jsx)("input",{placeholder:"Search...",className:"form-control search-input",value:t,onChange:function(e){return n(e.target.value)}})}),D=n(227),S=n(226),E=(n(377),function(e){var t=e.items,n=e.optionField,r=e.onChange,c=e.selectedOption,s=Object(a.useState)([]),i=Object(p.a)(s,2),o=i[0],u=i[1];Object(a.useEffect)((function(){!function(){var e=Object(D.a)(new Set(t.map((function(e){return e[n]})).filter((function(e){return e})))).sort();e=e.map((function(e){return{value:e,label:e}})),u(e)}()}),[t]);var l=Object(h.k)();return Object(a.useEffect)((function(){var e=new URLSearchParams(window.location.hash.split("?")[1]);c?e.set("year",c):e.delete("year"),l.push({search:e.toString()})}),[c,l]),Object(b.jsx)(S.a,{value:{value:c,label:c||"Select..."},options:o,className:"select-list",onChange:function(e){e=e?e.value:"",r(e)},isClearable:!0})}),H=Object(h.o)((function(e){var t=e.history,n=e.getData,r=e.type,c=e.optionField,s=Object(a.useContext)(y),i=Object(p.a)(s,2),o=i[0],u=i[1],l=Object(a.useState)(""),h=Object(p.a)(l,2),j=h[0],d=h[1],f=Object(a.useState)(),m=Object(p.a)(f,2),O=m[0],g=m[1],v=new URLSearchParams(window.location.hash.split("?")[1]),x=function(e){return e||""},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";d(e)},w=function(e){g(+e)};if(Object(a.useEffect)((function(){n().then((function(e){u({type:"GET_".concat(r.toUpperCase()),payload:e})})).catch((function(){u({type:"GET_ERROR"})}))}),[]),Object(a.useEffect)((function(){var e=v.get("name")||"",n=v.get("year")||"";t.push({search:v.toString()}),A(e),w(n)}),[o[r]]),o.error)return Object(b.jsx)(N,{});var R,D,S=function(e,t){return t?e.filter((function(e){return e[c]===t})):e}((R=o[r],(D=j)?R.filter((function(e){return Object.values(e).slice(1).some((function(e){return x(e).toString().toLowerCase().includes(D.toLowerCase())}))})):R),O);return 0===o[r].length?Object(b.jsx)(T,{}):Object(b.jsxs)("div",{className:"space",children:[Object(b.jsxs)("h2",{id:"title",children:[" List of ",r," "]}),Object(b.jsxs)("div",{className:"options",children:[Object(b.jsx)(k,{input:j,onChange:A}),Object(b.jsx)(E,{items:o[r],optionField:c,onChange:w,selectedOption:O})]}),Object(b.jsx)(C,{onRowClicked:function(e){t.push("/".concat(r,"/").concat(e))},items:S,type:r})]})})),B=n(24),L=n.n(B),F=n(43),Y=n(99),U=n.n(Y),G=function(){function e(){var t=this;Object(s.a)(this,e),this.getTeams=Object(F.a)(L.a.mark((function e(){var n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/teams");case 2:return n=e.sent,e.abrupt("return",n.teams.map(t._transformTeam));case 4:case"end":return e.stop()}}),e)}))),this.getTeam=function(){var e=Object(F.a)(L.a.mark((function e(n){var a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/teams/".concat(n));case 2:return a=e.sent,e.abrupt("return",t._transformTeam(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getMatch=function(){var e=Object(F.a)(L.a.mark((function e(n,a){var r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/".concat(n,"/").concat(a,"/matches"));case 2:return r=e.sent,e.abrupt("return",{count:r.count,matches:r.matches.map(t._transformMatch)});case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this.getLeagues=Object(F.a)(L.a.mark((function e(){var n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/competitions");case 2:return n=e.sent,e.abrupt("return",n.competitions.map(t._transformLeague));case 4:case"end":return e.stop()}}),e)}))),this.getLeague=function(){var e=Object(F.a)(L.a.mark((function e(n){var a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/competitions/".concat(n));case 2:return a=e.sent,e.abrupt("return",t._transformLeague(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformMatch=function(e){var n=e.id,a=e.utcDate,r=e.status,c=e.score,s=e.homeTeam,i=e.awayTeam;return{id:n,date:t.convertDate(a),status:r,winner:c.winner,homeTeam:s.name,awayTeam:i.name}},this._api="https://api.football-data.org/v2"}return Object(i.a)(e,[{key:"getResource",value:function(){var e=Object(F.a)(L.a.mark((function e(t){var n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._api).concat(t),{mode:"CORS",headers:{"X-Auth-Token":"ee9e32655fbb40f887db17ef2d5d3a71","Access-Control-Allow-Origin":"*"}});case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(n.status));case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_transformTeam",value:function(e){var t=e.id,n=e.name,a=e.area,r=e.founded,c=e.venue,s=e.clubColors;return{id:t,name:n,area:a.name,founded:r,venue:c,colors:s}}},{key:"_transformLeague",value:function(e){return{id:e.id,name:e.name,area:e.area.name}}},{key:"convertDate",value:function(e){return U()(e).format("DD.MM.YYYY HH:mm")}}]),e}(),J=function(){var e=new G;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(H,{getData:e.getTeams,type:"teams",optionField:"founded"})})},W=function(){var e=new G;return Object(b.jsx)(H,{getData:e.getLeagues,type:"leagues"})},Q=n(420),K=(n(386),n(387),function(e){var t=e.onChange;return Object(b.jsx)(Q.a,{showOneCalendar:!0,placeholder:"Choose the range",className:"date-picker",cleanable:!0,onChange:function(e){return t(e)}})}),P=(n(414),function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).sportService=new G,e.state={matches:[],loading:!0,selectedOption:null,startDate:null,endDate:null,error:!1},e.onYearChange=function(t){e.setState({selectedOption:t})},e.updateArray=function(e){return e.map((function(e){return Object(v.a)(Object(v.a)({},e),{},{date:e.date.substr(6,4)})}))},e.onDateChange=function(t){var n=Object(p.a)(t,2),a=n[0],r=n[1];e.setState({startDate:a,endDate:r})},e.filterByDates=function(e,t,n){return t?e.filter((function(e){var a=new Date(U()(e.date,"DD.MM.YYYY")).getTime(),r=new Date(t).getTime(),c=new Date(n).getTime();return r<=a&&a<=c})):e},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.sportService.getMatch(this.props.type,this.props.itemId).then((function(t){var n=t.matches;e.setState({matches:n,loading:!1,error:!1})})).catch((function(t){e.setState({loading:!1,error:!0})}));var t=new URLSearchParams(window.location.hash.split("?")[1]);this.props.history.push({search:t.toString()});var n=t.get("year")||"";this.onYearChange(n)}},{key:"assignMatchResultClass",value:function(e,t){if(null!==e)return"DRAW"===e?"draw":e.substr(0,4).toLowerCase()===t?"win":"lose"}},{key:"renderTableData",value:function(e){var t=this;return e.map((function(e){var n=e.id,a=e.date,r=e.winner,c=e.homeTeam,s=e.awayTeam,i=t.assignMatchResultClass(r,"home"),o=t.assignMatchResultClass(r,"away");return Object(b.jsxs)("tr",{className:"row-hover",children:[Object(b.jsx)("td",{children:a}),Object(b.jsx)("td",{className:"".concat(i),children:c}),Object(b.jsx)("td",{className:"".concat(o),children:s})]},n)}))}},{key:"renderTableHeader",value:function(){return Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Date"}),Object(b.jsx)("th",{children:"Home Team"}),Object(b.jsx)("th",{children:"Away Team"})]})})}},{key:"filterFinished",value:function(e){return e.filter((function(e){return"FINISHED"===e.status})).reverse()}},{key:"filterScheduled",value:function(e){return e.filter((function(e){return"SCHEDULED"===e.status}))}},{key:"filterByYear",value:function(e,t){return t?e.filter((function(e){return e.date.substr(6,4)===t})):e}},{key:"render",value:function(){var e=this.state,t=e.matches,n=e.loading,a=e.selectedOption,r=e.startDate,c=e.endDate,s=e.error;if(n)return Object(b.jsx)(T,{});if(s)return Object(b.jsx)(N,{});var i=this.filterScheduled(this.filterByDates(this.filterByYear(t,a),r,c)),o=this.filterFinished(this.filterByDates(this.filterByYear(t,a),r,c));return Object(b.jsxs)("div",{className:"space",children:[Object(b.jsx)("h2",{id:"title",children:this.props.itemName}),Object(b.jsxs)("div",{className:"options",children:[Object(b.jsx)(K,{onChange:this.onDateChange}),Object(b.jsx)(E,{items:this.updateArray(t),optionField:"date",onChange:this.onYearChange,selectedOption:a})]}),Object(b.jsx)("div",{className:"table-wrapper",children:Object(b.jsxs)("table",{className:"fl-table fixed",children:[this.renderTableHeader(),Object(b.jsxs)("tbody",{children:[Object(b.jsx)("tr",{children:Object(b.jsx)("td",{colSpan:"3",children:Object(b.jsxs)("span",{className:"split",children:["Scheduled (",i.length,")"]})})}),this.renderTableData(i),Object(b.jsx)("tr",{children:Object(b.jsx)("td",{colSpan:"3",children:Object(b.jsxs)("span",{className:"split",children:["Finished (",o.length,")"]})})}),this.renderTableData(o)]})]})})]})}}]),n}(a.Component)),q=Object(h.o)(P),I=function(e){var t=e.teamId,n=new G,r=Object(a.useState)(),c=Object(p.a)(r,2),s=c[0],i=c[1];return Object(a.useEffect)((function(){n.getTeam(t).then((function(e){i(e.name)}))}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(q,{itemId:t,itemName:s,type:"teams"})})},M=function(e){var t=e.leagueId,n=new G,r=Object(a.useState)(),c=Object(p.a)(r,2),s=c[0],i=c[1];return Object(a.useEffect)((function(){n.getLeague(t).then((function(e){i(e.name)}))}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(q,{itemId:t,itemName:s,type:"competitions"})})},V=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(b.jsx)(l.HashRouter,{children:Object(b.jsxs)(w,{children:[Object(b.jsx)(m,{}),Object(b.jsx)(h.d,{exact:!0,path:"/",children:Object(b.jsx)(h.c,{to:"/teams"})}),Object(b.jsx)(h.d,{path:"/teams",exact:!0,component:J}),Object(b.jsx)(h.d,{path:"/leagues",exact:!0,component:W}),Object(b.jsx)(h.d,{path:"/teams/:id",render:function(e){var t=e.match;return Object(b.jsx)(I,{teamId:t.params.id})}}),Object(b.jsx)(h.d,{path:"/leagues/:id",render:function(e){var t=e.match;return Object(b.jsx)(M,{leagueId:t.params.id})}})]})})}}]),n}(a.Component);c.a.render(Object(b.jsx)(V,{}),document.getElementById("root"))}},[[415,1,2]]]);
//# sourceMappingURL=main.f6aeb441.chunk.js.map