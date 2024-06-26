"use strict";(self.webpackChunkmtd_mobile_ui=self.webpackChunkmtd_mobile_ui||[]).push([[7501],{7501:(x,h,o)=>{o.r(h),o.d(h,{BrowsePageModule:()=>C});var l=o(177),v=o(4341),s=o(3819),d=o(2787),g=o(5329),u=o(4412),b=o(4572),f=o(6354),t=o(4438);let m=(()=>{class n{constructor(e){this.dataService=e,this.$config=this.dataService.$config,this.$currentEntries=new u.t([]),this.$currentIndexStart=new u.t(0),this.$manualTrigger=new u.t(null),this.currentTen$=(0,b.z)([this.$currentIndexStart,this.$currentEntries,this.$manualTrigger]).pipe((0,f.T)(([r,i,a])=>i.slice(r,r+10))),this.currentLetter$=this.currentTen$.pipe((0,f.T)(r=>{if(r&&this.$config?.value?.alphabet){const i=r[0].sorting_form.filter(a=>a<1e4)[0];return this.$config.value?.alphabet[i]}return""}))}static#t=this.\u0275fac=function(r){return new(r||n)(t.KVO(g.u))};static#e=this.\u0275prov=t.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var p=o(7530);const $=n=>({start:n});function w(n,c){if(1&n&&(t.j41(0,"ion-select-option"),t.EFF(1),t.k0s()),2&n){const e=c.$implicit;t.R7$(),t.JRh(e)}}function S(n,c){if(1&n&&(t.j41(0,"ion-select-option"),t.EFF(1),t.k0s()),2&n){const e=c.$implicit;t.R7$(),t.JRh(e)}}function y(n,c){if(1&n){const e=t.RV6();t.j41(0,"ion-item")(1,"ion-select",15),t.nI1(2,"async"),t.bIt("ionChange",function(i){t.eBV(e);const a=t.XpG();return t.Njj(a.handleLetterChange(i))}),t.DNE(3,S,2,1,"ion-select-option",6),t.k0s(),t.j41(4,"ion-toast",16),t.bIt("didDismiss",function(){t.eBV(e);const i=t.XpG();return t.Njj(i.letterNotFound=!1)}),t.k0s()()}if(2&n){const e=t.XpG();t.R7$(),t.Y8G("value",t.bMT(2,4,e.browseService.currentLetter$)),t.R7$(2),t.Y8G("ngForOf",e.displayLetters),t.R7$(),t.Y8G("isOpen",e.letterNotFound)("duration",5e3)}}function _(n,c){if(1&n&&(t.j41(0,"div",17),t.nrm(1,"mtd-entry-list",18),t.k0s()),2&n){const e=c.ngIf;t.R7$(),t.Y8G("entries",e)}}function I(n,c){if(1&n&&(t.j41(0,"ion-title"),t.EFF(1),t.nI1(2,"async"),t.k0s()),2&n){let e;const r=t.XpG().ngIf,i=t.XpG();t.R7$(),t.E5c("Viewing ",r.start+1," to ",r.start+10," of ",null==(e=t.bMT(2,3,i.browseService.$currentEntries))?null:e.length," Dictionary Entries")}}function T(n,c){if(1&n&&(t.j41(0,"div",19),t.DNE(1,I,3,5,"ion-title",7),t.k0s()),2&n){const e=c.ngIf;t.R7$(),t.Y8G("ngIf",null!==e.start)}}const B=[{path:"",component:(()=>{class n{constructor(e,r){this.dataService=e,this.browseService=r,this.$config=this.dataService.$config,this.displayLetters=[],this.categories=[],this.letterNotFound=!1}ngOnInit(){this.$dataHash=this.dataService.$entriesHash,this.dataService.$categories.subscribe(e=>this.categories=e),this.dataService.$categorizedEntries.subscribe(e=>{void 0!==e.All&&e.All.length>0&&this.browseService.$currentEntries.next(e.All)}),this.$config.subscribe(e=>{e&&(this.displayLetters=Array.isArray(e.alphabet)?e.alphabet:[...e.alphabet])})}handleLetterChange(e){this.letterNotFound=!1;const r=e?.currentTarget;let i=!1;for(const a of this.browseService.$currentEntries.value)if(a.word.startsWith(r.value)){this.browseService.$currentIndexStart.next(this.browseService.$currentEntries.value.indexOf(a)),i=!0;break}i||(this.letterNotFound=!0)}handleCategoryChange(e){const r=e?.currentTarget;this.browseService.$currentEntries.next(this.dataService.$categorizedEntries.value[r.value]),this.browseService.$currentIndexStart.next(0)}goBack(){this.browseService.$currentIndexStart.next(Math.max(0,this.browseService.$currentIndexStart.value-10))}goForward(){this.browseService.$currentIndexStart.next(Math.min(this.browseService.$currentEntries.value.length-10,this.browseService.$currentIndexStart.value+10))}static#t=this.\u0275fac=function(r){return new(r||n)(t.rXU(g.u),t.rXU(m))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["mtd-browse"]],decls:28,vars:12,consts:[[3,"translucent"],["slot","start"],[3,"fullscreen"],["collapse","condense"],["size","large"],["label","Select a Category","placeholder","All",3,"ionChange"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","entry-container",4,"ngIf"],["slot","start",1,"bar-buttons","bar-buttons-ios"],[3,"click"],["slot","icon-only","name","chevron-back-outline",1,"scroll"],["class","browse-info",4,"ngIf"],["slot","end",1,"bar-buttons","bar-buttons-ios"],["slot","icon-only","name","chevron-forward-outline",1,"scroll"],["label","Current Letter",3,"ionChange","value"],["message","Sorry, it doesn't look like there are any words that start with that letter",3,"didDismiss","isOpen","duration"],[1,"entry-container"],[3,"entries"],[1,"browse-info"]],template:function(r,i){1&r&&(t.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),t.nrm(3,"ion-menu-button"),t.k0s(),t.j41(4,"ion-title"),t.EFF(5,"Browse"),t.k0s()()(),t.j41(6,"ion-content",2)(7,"ion-header",3)(8,"ion-toolbar")(9,"ion-title",4),t.EFF(10,"browse"),t.k0s()()(),t.j41(11,"ion-list")(12,"ion-item")(13,"ion-select",5),t.bIt("ionChange",function(j){return i.handleCategoryChange(j)}),t.DNE(14,w,2,1,"ion-select-option",6),t.k0s()(),t.DNE(15,y,5,6,"ion-item",7),t.k0s(),t.DNE(16,_,2,1,"div",8),t.nI1(17,"async"),t.k0s(),t.j41(18,"ion-footer")(19,"ion-toolbar")(20,"ion-buttons",9)(21,"ion-button",10),t.bIt("click",function(){return i.goBack()}),t.nrm(22,"ion-icon",11),t.k0s()(),t.DNE(23,T,2,1,"div",12),t.nI1(24,"async"),t.j41(25,"ion-buttons",13)(26,"ion-button",10),t.bIt("click",function(){return i.goForward()}),t.nrm(27,"ion-icon",14),t.k0s()()()()),2&r&&(t.Y8G("translucent",!0),t.R7$(6),t.Y8G("fullscreen",!0),t.R7$(8),t.Y8G("ngForOf",i.categories),t.R7$(),t.Y8G("ngIf",i.displayLetters),t.R7$(),t.Y8G("ngIf",t.bMT(17,6,i.browseService.currentTen$)),t.R7$(7),t.Y8G("ngIf",t.eq3(10,$,t.bMT(24,8,i.browseService.$currentIndexStart))))},dependencies:[l.Sq,l.bT,s.Jm,s.QW,s.W9,s.M0,s.eU,s.iq,s.uz,s.nf,s.MC,s.Nm,s.Ip,s.BC,s.op,s.ai,s.Je,p.e,l.Jj],styles:[".browse-info[_ngcontent-%COMP%]{margin:0 auto;text-align:center}@media only screen and (max-width: 600px){.browse-info[_ngcontent-%COMP%]{display:none}}"]})}return n})()}];let E=(()=>{class n{static#t=this.\u0275fac=function(r){return new(r||n)};static#e=this.\u0275mod=t.$C({type:n});static#n=this.\u0275inj=t.G2t({imports:[d.iI.forChild(B),d.iI]})}return n})();var F=o(3023);let C=(()=>{class n{static#t=this.\u0275fac=function(r){return new(r||n)};static#e=this.\u0275mod=t.$C({type:n});static#n=this.\u0275inj=t.G2t({providers:[m],imports:[l.MD,v.YN,s.bv,E,F.G]})}return n})()}}]);