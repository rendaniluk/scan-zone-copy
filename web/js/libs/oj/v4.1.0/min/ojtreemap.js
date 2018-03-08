/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdvt-base","ojs/internal-deps/dvt/DvtTreeView"],function(a,g,c,b,d){a.hb("oj.ojTreemap",g.oj.dvtBaseComponent,{widgetEventPrefix:"oj",options:{beforeDrill:null,drill:null},di:function(a,b,c){return d.Treemap.newInstance(a,b,c)},Nm:function(a){var b=a.subId;"oj-treemap-node"==b?b="node"+this.YC(a.indexPath):"oj-treemap-tooltip"==b&&(b="tooltip");return b},Bj:function(a){var b={};0==a.indexOf("node")?(b.subId="oj-treemap-node",b.indexPath=this.Wq(a)):
"tooltip"==a&&(b.subId="oj-treemap-tooltip");return b},ah:function(){var a=this._super();a.push("oj-treemap");return a},El:function(){var a=this._super();a["oj-treemap-attribute-type-text"]={path:"styleDefaults/_attributeTypeTextStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-treemap-attribute-value-text"]={path:"styleDefaults/_attributeValueTextStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-treemap-drill-text "]={path:"styleDefaults/_drillTextStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-treemap-current-drill-text "]=
{path:"styleDefaults/_currentTextStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-treemap-node"]={path:"nodeDefaults/labelStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-treemap-node oj-hover"]={path:"nodeDefaults/hoverColor",property:"border-top-color"};a["oj-treemap-node oj-selected"]=[{path:"nodeDefaults/selectedOuterColor",property:"border-top-color"},{path:"nodeDefaults/selectedInnerColor",property:"border-bottom-color"}];a["oj-treemap-node-header"]=[{path:"nodeDefaults/header/backgroundColor",property:"background-color"},
{path:"nodeDefaults/header/borderColor",property:"border-top-color"},{path:"nodeDefaults/header/labelStyle",property:"CSS_TEXT_PROPERTIES"}];a["oj-treemap-node-header oj-hover"]=[{path:"nodeDefaults/header/hoverBackgroundColor",property:"background-color"},{path:"nodeDefaults/header/hoverOuterColor",property:"border-top-color"},{path:"nodeDefaults/header/hoverInnerColor",property:"border-bottom-color"},{path:"nodeDefaults/header/_hoverLabelStyle",property:"CSS_TEXT_PROPERTIES"}];a["oj-treemap-node-header oj-selected"]=
[{path:"nodeDefaults/header/selectedBackgroundColor",property:"background-color"},{path:"nodeDefaults/header/selectedOuterColor",property:"border-top-color"},{path:"nodeDefaults/header/selectedInnerColor",property:"border-bottom-color"},{path:"nodeDefaults/header/_selectedLabelStyle",property:"CSS_TEXT_PROPERTIES"}];return a},Sm:function(){return["optionChange","drill","beforeDrill"]},Ok:function(){var a=this.options.translations,b=this._super();b["DvtTreemapBundle.COLOR"]=a.labelColor;b["DvtTreemapBundle.ISOLATE"]=
a.tooltipIsolate;b["DvtTreemapBundle.RESTORE"]=a.tooltipRestore;b["DvtTreemapBundle.SIZE"]=a.labelSize;b["DvtUtilBundle.TREEMAP"]=a.componentName;return b},Yn:function(a){var b=a.type;"isolate"===b?(b=this.options.xoa,b||(this.options.xoa=[],b=this.options.xoa),(a=a.id)?(b.push(a),this.pf("isolatedNode",a)):(b.pop(),this.pf("isolatedNode",0<b.length?b[b.length]:null))):"drill"==b?(b={id:a.id,data:a.data},this.Y()||(b.component=a.component),a.id&&this._trigger("beforeDrill",null,b)&&(this.pf("rootNode",
a.id),this.gi(),this._trigger("drill",null,b))):this._super(a)},rt:function(){return["tooltip/renderer","nodeContent/renderer"]},gr:function(){this._super();var a=this.options.nodeContent;a&&a._renderer&&(a.renderer=this.PH(a._renderer,"nodeContent"))},mp:function(){null==this.options._resources&&(this.options._resources={});var a=this.options._resources;a.isolate="oj-treemap-isolate-icon";a.isolateOver="oj-treemap-isolate-icon oj-hover";a.isolateDown="oj-treemap-isolate-icon oj-active";a.restore=
"oj-treemap-restore-icon";a.restoreOver="oj-treemap-restore-icon oj-hover";a.restoreDown="oj-treemap-restore-icon oj-active"},getNode:function(a){return this.Ka.getAutomation().getNode(a)},getContextByNode:function(a){return(a=this.getSubIdByNode(a))&&"oj-treemap-tooltip"!==a.subId?a:null},Rm:function(){return{root:["nodes"]}}});a.J.Ua("oj-treemap","dvtBaseComponent",{properties:{animationDuration:{type:"number"},animationOnDataChange:{type:"string",enumValues:["auto","none"]},animationOnDisplay:{type:"string",
enumValues:["auto","none"]},animationUpdateColor:{type:"string"},colorLabel:{type:"string"},displayLevels:{type:"number"},drilling:{type:"string",enumValues:["on","off"]},groupGaps:{type:"string",enumValues:["all","none","outer"]},hiddenCategories:{type:"Array\x3cstring\x3e",writeback:!0},highlightedCategories:{type:"Array\x3cstring\x3e",writeback:!0},highlightMatch:{type:"string",enumValues:["any","all"]},hoverBehavior:{type:"string",enumValues:["dim","none"]},hoverBehaviorDelay:{type:"number"},
isolatedNode:{type:"string",writeback:!0},layout:{type:"string",enumValues:["sliceAndDiceHorizontal","sliceAndDiceVertical","squarified"]},nodeDefaults:{type:"object",properties:{groupLabelDisplay:{type:"string",enumValues:["node","off","header"]},header:{type:"object",properties:{backgroundColor:{type:"string"},borderColor:{type:"string"},hoverBackgroundColor:{type:"string"},hoverInnerColor:{type:"string"},hoverOuterColor:{type:"string"},isolate:{type:"string",enumValues:["on","off"]},labelHalign:{type:"string",
enumValues:["center","end","start"]},labelStyle:{type:"object"},selectedBackgroundColor:{type:"string"},selectedInnerColor:{type:"string"},selectedOuterColor:{type:"string"},useNodeColor:{type:"string",enumValues:["on","off"]}}},hoverColor:{type:"string"},labelDisplay:{type:"string",enumValues:["off","node"]},labelHalign:{type:"string",enumValues:["start","end","center"]},labelStyle:{type:"object"},labelValign:{type:"string",enumValues:["top","bottom","center"]},selectedInnerColor:{type:"string"},
selectedOuterColor:{type:"string"}}},nodes:{type:"Array\x3cobject\x3e|Promise"},nodeContent:{type:"object",properties:{renderer:{}}},nodeSeparators:{type:"string",enumValues:["bevels","gap"]},rootNode:{type:"string"},selection:{type:"Array\x3cstring\x3e",writeback:!0},selectionMode:{type:"string",enumValues:["none","single","multiple"]},sizeLabel:{type:"string"},sorting:{type:"string",enumValues:["on","off"]},tooltip:{type:"object",properties:{renderer:{}}},touchResponse:{type:"string"},translations:{properties:{componentName:{type:"string"},
labelColor:{type:"string"},labelSize:{type:"string"},tooltipIsolate:{type:"string"},tooltipRestore:{type:"string"}}}},events:{beforeDrill:{},drill:{}},methods:{getContextByNode:{},getNode:{}},extension:{Xa:"ojTreemap"}});a.J.register("oj-treemap",{metadata:a.J.getMetadata("oj-treemap")})});