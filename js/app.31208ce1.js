(function(t){function e(e){for(var p,r,o=e[0],i=e[1],y=e[2],l=0,h=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&h.push(s[r][0]),s[r]=0;for(p in i)Object.prototype.hasOwnProperty.call(i,p)&&(t[p]=i[p]);c&&c(e);while(h.length)h.shift()();return n.push.apply(n,y||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],p=!0,o=1;o<a.length;o++){var i=a[o];0!==s[i]&&(p=!1)}p&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var p={},s={app:0},n=[];function r(e){if(p[e])return p[e].exports;var a=p[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=p,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var p in t)r.d(a,p,function(e){return t[e]}.bind(null,p));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var y=0;y<o.length;y++)e(o[y]);var c=i;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var p=a("85ec"),s=a.n(p);s.a},"4af2":function(t,e,a){},"54d9":function(t,e,a){"use strict";var p=a("4af2"),s=a.n(p);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var p=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("b-container",{attrs:{fluid:"",id:"main-container"}},[a("b-row",{staticClass:"text-center",attrs:{id:"first-row"}},[a("b-col",{staticClass:"collapse-container"},[a("img",{attrs:{alt:"MSF logo",src:this.imgURL+"logo-msf.svg"}}),a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-1",modifiers:{"collapse-1":!0}}],attrs:{variant:"dark"}},[t._v("Menu")]),a("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-1"}},[a("b-card",[a("b-row",{staticClass:"text-center"},[a("b-col",[a("b-button",{attrs:{variant:"info"},on:{click:t.up}},[t._v("Augmenter")]),a("b-button",{attrs:{variant:"dark"},on:{click:t.down}},[t._v("Diminuer")])],1)],1),a("b-row",{staticClass:"text-center"},[a("b-col",[a("span",[t._v("Taille: "+t._s(t.size))])])],1),a("b-row",{attrs:{"align-h":"center"}},[a("b-col",{attrs:{cols:"4"}},[a("b-button",{attrs:{variant:"success"},on:{click:t.generate}},[t._v("Générer des icones")]),a("b-button",{attrs:{size:"sm"},on:{click:t.selectAllRows}},[t._v("Select all")]),a("b-button",{attrs:{size:"sm"},on:{click:t.clearSelected}},[t._v("Clear selected")]),a("b-table",{ref:"selectableTable",attrs:{selectable:"","select-mode":"multi",items:t.items,fields:t.fields,responsive:"sm","sticky-header":"","head-variant":"light"},on:{"row-selected":t.onRowSelected},scopedSlots:t._u([{key:"cell(selected)",fn:function(e){var p=e.rowSelected;return[p?[a("span",{attrs:{"aria-hidden":"true"}},[t._v("✓")]),a("span",{staticClass:"sr-only"},[t._v("Selected")])]:[a("span",{attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"sr-only"},[t._v("Not selected")])]]}},{key:"icon",fn:function(t){var e=t.item.icon;return[a("img",{attrs:{src:e}})]}}])})],1)],1)],1)],1)],1)],1),a("b-row",{attrs:{id:"second-row"}},[a("Mymap")],1)],1)],1)},n=[],r=(a("a4d3"),a("e01a"),a("d28b"),a("d3b7"),a("3ca3"),a("ddb0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"map"}})}),o=[],i=(a("d81d"),a("b0c0"),a("e11e")),y=a.n(i),c={name:"MyMap",mounted:function(){this.initMap()},computed:{dataset:function(){return this.$store.state.dataset},iconSize:function(){return this.$store.state.iconSize}},watch:{dataset:function(){this.refreshMap()},iconSize:function(){this.refreshMap()}},methods:{initMap:function(){var t=this;this.map=y.a.map("map").setView([0,0],3),this.tileLayer=y.a.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",{maxZoom:18,attribution:"ESRI"}),this.updateBounds(),this.tileLayer.addTo(this.map),this.map.on("moveend",(function(){t.updateBounds()}))},refreshMap:function(){this.map.hasLayer(this.iconLayer)&&this.map.removeLayer(this.iconLayer),this.iconLayer=y.a.layerGroup();var t=!0,e=!1,a=void 0;try{for(var p,s=this.dataset[Symbol.iterator]();!(t=(p=s.next()).done);t=!0){var n=p.value,r=y.a.icon({iconUrl:n.path,iconSize:[this.iconSize,1.5*this.iconSize]});y.a.marker([n.y,n.x],{icon:r}).addTo(this.iconLayer).bindPopup(n.name)}}catch(o){e=!0,a=o}finally{try{t||null==s.return||s.return()}finally{if(e)throw a}}this.iconLayer.addTo(this.map)},updateBounds:function(){var t=this.map.getBounds();this.$store.commit("updateBounds",t)}}},l=c,h=(a("54d9"),a("2877")),u=Object(h["a"])(l,r,o,!1,null,null,null),v=u.exports,g=!1,d={name:"app",components:{Mymap:v},data:function(){return{fields:["selected","name"],items:function(){var t=this.$store.state.icons,e=[],a=!0,p=!1,s=void 0;try{for(var n,r=t[Symbol.iterator]();!(a=(n=r.next()).done);a=!0){var o=n.value,i={name:o.path};e.push(i)}}catch(y){p=!0,s=y}finally{try{a||null==r.return||r.return()}finally{if(p)throw s}}return e}}},computed:{size:function(){return this.$store.state.iconSize},selected:{get:function(){return this.$store.state.selected},set:function(t){this.$store.commit("updateSelection",t)}},imgURL:function(){var t=g?"/images/":"./images/";return t}},methods:{up:function(){this.$store.commit("upIconSize")},down:function(){this.$store.commit("downIconSize")},onRowSelected:function(t){this.selected=t},selectAllRows:function(){this.$refs.selectableTable.selectAllRows()},clearSelected:function(){this.$refs.selectableTable.clearSelected()},generate:function(){this.$store.commit("generateDataset")}}},T=d,f=(a("034f"),Object(h["a"])(T,s,n,!1,null,null,null)),m=f.exports,_=a("5f5b"),b=(a("f9e3"),a("2dd8"),a("caad"),a("2532"),a("2f62"));p["default"].use(b["a"]);var S=new b["a"].Store({state:{mapBounds:null,iconSize:15,icons:[{path:"Worship.svg",type:"Type001"},{path:"Worship.png",type:"Type002"},{path:"Woman_symbol.svg",type:"Type003"},{path:"Woman_classic.svg",type:"Type004"},{path:"Woman.svg",type:"Type005"},{path:"Well.svg",type:"Type006"},{path:"Water_trucking.svg",type:"Type007"},{path:"Water_supply_2.svg",type:"Type008"},{path:"Water_supply_1.svg",type:"Type009"},{path:"Water_1.svg",type:"Type010"},{path:"Water.svg",type:"Type011"},{path:"Waste.svg",type:"Type012"},{path:"Wash_hand_sanitation.svg",type:"Type013"},{path:"Warehouse.svg",type:"Type014"},{path:"Vaccination.svg",type:"Type015"},{path:"University.svg",type:"Type016"},{path:"UN_peacekeeper.svg",type:"Type017"},{path:"Truck.svg",type:"Type018"},{path:"Temple.svg",type:"Type019"},{path:"Temperature_measurement.svg",type:"Type020"},{path:"Tap.svg",type:"Type021"},{path:"Tank.svg",type:"Type022"},{path:"Synagogue.svg",type:"Type023"},{path:"Submersible_pump.svg",type:"Type024"},{path:"Storm_hurricaine.svg",type:"Type025"},{path:"Standard_pin.svg",type:"Type026"},{path:"Spring_water.svg",type:"Type027"},{path:"Shower.svg",type:"Type028"},{path:"Shooting.svg",type:"Type029"},{path:"School_3.svg",type:"Type030"},{path:"School_2.svg",type:"Type031"},{path:"School_1.svg",type:"Type032"},{path:"Restaurant.svg",type:"Type033"},{path:"Recycling.svg",type:"Type034"},{path:"Power_station.svg",type:"Type035"},{path:"Port.svg",type:"Type036"},{path:"Police_station.svg",type:"Type037"},{path:"Play_ground.svg",type:"Type038"},{path:"Pharmacy.svg",type:"Type039"},{path:"Person.svg",type:"Type040"},{path:"Peak.svg",type:"Type041"},{path:"Oil_field.svg",type:"Type042"},{path:"Official_building.svg",type:"Type043"},{path:"NGO.svg",type:"Type044"},{path:"NFI.svg",type:"Type045"},{path:"New_born.svg",type:"Type046"},{path:"National_army.svg",type:"Type047"},{path:"MSF_office_2.svg",type:"Type048"},{path:"MSF_office_1.svg",type:"Type049"},{path:"MSF_Landcruiser.svg",type:"Type050"},{path:"Mosquito_trap.svg",type:"Type051"},{path:"Mosquito.svg",type:"Type052"},{path:"Mosque.svg",type:"Type053"},{path:"Money.svg",type:"Type054"},{path:"Mobile_clinic.svg",type:"Type055"},{path:"Mine.svg",type:"Type056"},{path:"Meeting_point.svg",type:"Type057"},{path:"Market.svg",type:"Type058"},{path:"Man_symbol.svg",type:"Type059"},{path:"Man_classic.svg",type:"Type060"},{path:"Man.svg",type:"Type061"},{path:"Laundry.svg",type:"Type062"},{path:"Latrine.svg",type:"Type063"},{path:"Landcruiser_2.svg",type:"Type064"},{path:"Landcruiser_1.svg",type:"Type065"},{path:"Laboratory.svg",type:"Type066"},{path:"Icones_OCHA_CARTO.svg",type:"Type067"},{path:"Hygene_Soap.svg",type:"Type068"},{path:"House.svg",type:"Type069"},{path:"Hotel_Guest_House.svg",type:"Type070"},{path:"Hospital_2.svg",type:"Type071"},{path:"Hospital_1.svg",type:"Type072"},{path:"Heliport.svg",type:"Type073"},{path:"Health_centre_3.svg",type:"Type074"},{path:"Health_centre_2.svg",type:"Type075"},{path:"Health_centre_1.svg",type:"Type076"},{path:"Health.svg",type:"Type077"},{path:"Hand_pump.svg",type:"Type078"},{path:"Gate.svg",type:"Type079"},{path:"Gas_station.svg",type:"Type080"},{path:"Garage.svg",type:"Type081"},{path:"Food_distribution.svg",type:"Type082"},{path:"Food.svg",type:"Type083"},{path:"Factory.svg",type:"Type084"},{path:"Epidemic.svg",type:"Type085"},{path:"Entrance.svg",type:"Type086"},{path:"Ebola.svg",type:"Type087"},{path:"Drinking_water.svg",type:"Type088"},{path:"Displaced_people.svg",type:"Type089"},{path:"Church.svg",type:"Type090"},{path:"Checkpoint.svg",type:"Type091"},{path:"Camp.svg",type:"Type092"},{path:"Bus_station.svg",type:"Type093"},{path:"Bridge_2.svg",type:"Type094"},{path:"Bridge_1.svg",type:"Type095"},{path:"Bridge_1.png",type:"Type096"},{path:"Borehole.svg",type:"Type097"},{path:"Border_crossing_point_one_way.svg",type:"Type098"},{path:"Border_crossing_point.svg",type:"Type099"},{path:"Border_crossing.svg",type:"Type100"},{path:"Bar.svg",type:"Type101"},{path:"Bank.svg",type:"Type102"},{path:"Attention_mark_x.svg",type:"Type103"},{path:"Attention_mark_v.svg",type:"Type104"},{path:"Attention_mark_i.svg",type:"Type105"},{path:"Attention_mark_!.svg",type:"Type106"},{path:"Attention_mark_-.svg",type:"Type107"},{path:"Attack_Explosion.svg",type:"Type108"},{path:"Armed_group.svg",type:"Type109"},{path:"Antenna.svg",type:"Type110"},{path:"Airport.svg",type:"Type111"},{path:"Airfield.svg",type:"Type112"},{path:"Airbase.svg",type:"Type113"}],selected:null,dataset:null},mutations:{upIconSize:function(t){t.iconSize++},downIconSize:function(t){t.iconSize--},updateBounds:function(t,e){t.mapBounds=e},generateDataset:function(){var t=[],e=!1,a=e?"/images/":"./images/",p=!0,s=!1,n=void 0;try{for(var r,o=this.state.icons[Symbol.iterator]();!(p=(r=o.next()).done);p=!0){var i=r.value;if(this.state.selection.includes(i.path))for(var y=0;y<5;y++){var c={path:a+i.path,name:i.path,type:i.type,x:Math.random()*(this.state.mapBounds._northEast.lng-this.state.mapBounds._southWest.lng)+this.state.mapBounds._southWest.lng,y:Math.random()*(this.state.mapBounds._northEast.lat-this.state.mapBounds._southWest.lat)+this.state.mapBounds._southWest.lat};t.push(c)}}}catch(l){s=!0,n=l}finally{try{p||null==o.return||o.return()}finally{if(s)throw n}}this.state.dataset=t},updateSelection:function(t,e){var a=[],p=!0,s=!1,n=void 0;try{for(var r,o=e[Symbol.iterator]();!(p=(r=o.next()).done);p=!0){var i=r.value;a.push(i.name)}}catch(y){s=!0,n=y}finally{try{p||null==o.return||o.return()}finally{if(s)throw n}}this.state.selection=a}},actions:{}});p["default"].use(_["a"]),p["default"].config.productionTip=!1,new p["default"]({store:S,render:function(t){return t(m)}}).$mount("#app")},"85ec":function(t,e,a){}});
//# sourceMappingURL=app.31208ce1.js.map