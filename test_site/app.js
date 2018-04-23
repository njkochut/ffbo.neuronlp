// For any third party dependencies, like jQuery, place them in the lib folder.
//define('modernizr', [], Modernizr);

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.

define('three', ['https://cdn.rawgit.com/mrdoob/three.js/r92/build/three.min.js'], function(THREE){
  window.THREE = THREE;
  return THREE;
});
requirejs.config({
  baseUrl: '../js',
  paths: {
    // app: 'app',
    mesh3d: 'https://neuronlp.fruitflybrain.org:8888/lib/js/mesh3d',
    infopanel: "info_panel/infopanel",
    autobahn: '//cdn.rawgit.com/crossbario/autobahn-js-built/master/autobahn.min',
    d3: '//cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min',
    jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',
    detector: '//cdn.rawgit.com/mrdoob/three.js/r92/examples/js/Detector',
    simplifymodifier: '//cdn.rawgit.com/mrdoob/three.js/r92/examples/js/utils/SceneUtils',
    lut: '//cdn.rawgit.com/mrdoob/three.js/r92/examples/js/math/Lut',
    copyshader: '//cdn.rawgit.com/mrdoob/three.js/r92/examples/js/shaders/CopyShader',
    convolutionshader: '//cdn.rawgit.com/mrdoob/three.js/r92/examples/js/shaders/ConvolutionShader',
    fxaashader: '//cdn.rawgit.com/mrdoob/three.js/r92/examples/js/shaders/FXAAShader',
    ssaoshader: '//cdn.rawgit.com/mrdoob/three.js/r92/examples/js/shaders/SSAOShader',
    luminosityhighpassshader: '//cdn.rawgit.com/mrdoob/three.js/r92/examples/js/shaders/LuminosityHighPassShader',
    luminosityshader: '//cdn.rawgit.com/mrdoob/three.js/r92/examples/js/shaders/LuminosityShader',
    tonemapshader: '//cdn.rawgit.com/mrdoob/three.js/r92/examples/js/shaders/ToneMapShader',
    gammacorrectionshader: '//cdn.rawgit.com/mrdoob/three.js/r92/examples/js/shaders/GammaCorrectionShader',
    effectcomposer: '//cdn.rawgit.com/mrdoob/three.js/r92/examples/js/postprocessing/EffectComposer',
    renderpass: '//cdn.rawgit.com/mrdoob/three.js/r92/examples/js/postprocessing/RenderPass',
    ssaarenderpass: '//cdn.rawgit.com/mrdoob/three.js/r92/examples/js/postprocessing/SSAARenderPass',
    shaderpass: '//cdn.rawgit.com/mrdoob/three.js/r92/examples/js/postprocessing/ShaderPass',
    ssaopass: '//cdn.rawgit.com/mrdoob/three.js/r92/examples/js/postprocessing/SSAOPass',
    maskpass: '//cdn.rawgit.com/mrdoob/three.js/r92/examples/js/postprocessing/MaskPass',
    bloompass: '//cdn.rawgit.com/mrdoob/three.js/r92/examples/js/postprocessing/BloomPass',
    unrealbloompass: '//cdn.rawgit.com/mrdoob/three.js/r92/examples/js/postprocessing/UnrealBloomPass',
    adaptivetonemappingpass: '//cdn.rawgit.com/mrdoob/three.js/r92/examples/js/postprocessing/AdaptiveToneMappingPass',
    trackballcontrols: '//cdn.rawgit.com/fruitflybrain/ffbo.lib/VisualizationUpdates/js/three/libs/TrackballControls',
    lightshelper: '//cdn.rawgit.com/fruitflybrain/ffbo.lib/VisualizationUpdates/js/lightshelper',
    modernizr: "//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min",
    d3: "//cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3",
    jqueryui: "//code.jquery.com/ui/1.12.1/jquery-ui",
    perfectscrollbar: "//cdnjs.cloudflare.com/ajax/libs/jquery.perfect-scrollbar/0.7.0/js/perfect-scrollbar.jquery.min",
    "jquery.mobile": "//code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min",
    spectrum: "//cdnjs.cloudflare.com/ajax/libs/spectrum/1.8.0/spectrum.min",
    "jquery.mmenu": "//cdn.rawgit.com/FrDH/jQuery.mmenu/v7.0.3/dist/jquery.mmenu.all",
    bootsrapslider: "//cdnjs.cloudflare.com/ajax/libs/bootstrap-slider/10.0.0/bootstrap-slider.min",
    swiper: "//cdnjs.cloudflare.com/ajax/libs/Swiper/4.2.2/js/swiper.min",
    bootstrap: "//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min",
    blockui: "//cdnjs.cloudflare.com/ajax/libs/jquery.blockUI/2.70/jquery.blockUI.min",
    tageditor: "//cdnjs.cloudflare.com/ajax/libs/tag-editor/1.0.20/jquery.tag-editor.min"
    /* Notify, bootbox, colormaps, demos, mouse, vis_set, ResizeSensor, read_vars, colorm[aps */
  },
  shim: {
    bootstrap: {deps: ['jquery']},
    modernizr: {exports: 'Modernizr'},
    detector: {deps: ['three'], exports: 'Detector'},
    trackballcontrols: {deps: ['three']},
    simplifymodifier: {deps: ['three']},
    lut: {deps: ['three']},
    copyshader: {deps: ['three']},
    convolutionshader: {deps: ['three']},
    fxaashader: {deps: ['three']},
    ssaoshader: {deps: ['three']},
    luminosityhighpassshader: {deps: ['three']},
    luminosityshader: {deps: ['three']},
    tonemapshader: {deps: ['three']},
    gammacorrectionshader: {deps: ['three']},
    effectcomposer: {deps: ['three']},
    renderpass: {deps: ['three']},
    ssaarenderpass: {deps: ['three']},
    shaderpass: {deps: ['three']},
    ssaopass: {deps: ['three']},
    maskpass: {deps: ['three']},
    bloompass: {deps: ['three']},
    unrealbloompass: {deps: ['three']},
    adaptivetonemappingpass: {deps: ['three']},
    lightshelper: {deps: ['three']},
    tageditor: {deps: ['jquery']},
  }
});




// Start loading the main app file. Put all of
// your application logic in there.
require([
  'jquery',
  'client',
  'three',
  'detector',
  'mesh3d',
  'infopanel',
  'dynamicmenu',
  'ui',
  'tags',
  'bootstrap',
  'jquery.mobile',
  'jqueryui',
  'blockui'
], function (
   $,
   FFBOClient,
   THREE,
   Detector,
   FFBOMesh3D,
   InfoPanel,
   FFBODynamicMenu,
   NeuroNLPUI,
   Tags
){

  $.mobile.ajaxEnabled = false;
  window.NeuroNLPUI = new NeuroNLPUI();
  var infoPanel = new InfoPanel("info-panel");

  var dynamicNeuronMenu = new FFBODynamicMenu({singleObjSel: '#single-neu > .mm-listview', pinnedObjSel: '#single-pin > .mm-listview'});
  var dynamicNeuropilMenu = new FFBODynamicMenu({singleObjSel: '#toggle_neuropil > .mm-listview'});
  var ffbomesh = new FFBOMesh3D('vis-3d', undefined, {"globalCenter": {'x': 0, 'y':-250, 'z':0}});
  var tagsPanel = new Tags($('#wrapper'));
  var client = new FFBOClient();
  client.startConnection("guest", "guestpass", "wss://neuronlp.fruitflybrain.org:8888/ws");

  window.client = client;
  window.tagsPanel = tagsPanel;
  window.ffbomesh = ffbomesh;
  tagsPanel.initialize();

  function dataCallback(data){
    ffbomesh.addJson({ffbo_json: data, type: 'morphology_json'});
  }

  client.notifySuccess = function(message){
    console.log("Success: " + message);
  }

  client.notifyError = function(message){
    console.log("Error: " + message);
  }

  client.receiveCommand = function(message){
    console.log("Command Received");
    console.log(message);
    if(!'commands' in message)
      return;
    if('reset' in message['commands']){
      ffbomesh.reset();
      delete message.commands.reset;
    }
    for(var cmd in message["commands"])
      ffbomesh.execCommand({"commands":[cmd],"neurons": message["commands"][cmd][0],"args":message['commands'][cmd][1]});
  }


  infoPanel.isInWorkspace = (rid) => {
    return (rid in ffbomesh.meshDict);
  };

  infoPanel.addByUname = (uname) => {
    queryID = client.addByUname(uname, {success: dataCallback});
  };

  infoPanel.removeByUname = (uname) => {
    queryID = client.removeByUname(uname);
  };

  infoPanel.getAttr = (id,attr) => {
    if (attr !== 'color') {
      return undefined;
    }
    return ffbomesh.meshDict[id].color.getHexString();
  };
  infoPanel.setAttr = (id,attr,value) => {
    if (attr !== 'color') {
      return;
    }
    ffbomesh.setColor(id, value);
  };

  ffbomesh.on('click',   function(e){
    $("#info-intro").hide();
    //$("#info-panel").show();
    queryID = client.getInfo(e.value, {success: function(data){
      data['summary']['rid'] = e.value;
      infoPanel.update(data);
    }});
  })

  dynamicNeuronMenu.dispatch.highlight = function(id) {ffbomesh.highlight(id, true)};
  dynamicNeuronMenu.dispatch.resume = function(id) {ffbomesh.highlight(undefined)};
  dynamicNeuronMenu.dispatch.toggle = function(id) {ffbomesh.toggleVis(id)};
  dynamicNeuronMenu.dispatch.unpin = function(id) {ffbomesh.unpin(id)};
  dynamicNeuropilMenu.dispatch.toggle = function(id) {ffbomesh.toggleVis(id)};


  ffbomesh.on('add',
    function(e) {
      if(!e.value.background)
        dynamicNeuronMenu.addNeuron(e.prop, e.value.label);
      else
        dynamicNeuropilMenu.addNeuron(e.prop, e.value.label)
      infoPanel.renderAddRemoveBtn(e.value.label, true)
    });
  ffbomesh.on('remove', function(e) {
    if(!e.value.background)
      dynamicNeuronMenu.removeNeuron(e.prop)
    infoPanel.renderAddRemoveBtn(e.value.label, false)
  });
  ffbomesh.on('visible', (function(e) {
    if(this.states.highlight[0] !== e.path[1]) dynamicNeuronMenu.toggleVisibility(e.path[1], e.value)}).bind(ffbomesh));
  ffbomesh.on('pinned', function(e) { dynamicNeuronMenu.updatePinnedNeuron(e.path[0], e.obj.label, e.value)});


  function updateThreshold(e) {client.threshold = e.value ? 1 : 20;}
  updateThreshold({value: ffbomesh.settings.neurons_3d})
  ffbomesh.settings.on('change', updateThreshold, 'neurons_3d')



  var srchInput = document.getElementById('srch_box');
  var srchBtn = document.getElementById('srch_box_btn');
  //add event listener
  srchBtn.addEventListener('click', function(event) {
    query = document.getElementById('srch_box').value;
    $("#search-wrapper").block({ message: null });
    srchInput.blur();
    queryID = client.executeNLPquery(query, {success: dataCallback});
    client.status.on("change", function(e){
      $("#search-wrapper").unblock();
      srchInput.focus();
      srchInput.value = "";
    }, queryID);
  });

  srchInput.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13)
      srchBtn.click();
  });

  ffbomesh.createUIBtn("showSettings", "fa-cog", "Settings")
  ffbomesh.createUIBtn("takeScreenshot", "fa-camera", "Download Screenshot")
  ffbomesh.createUIBtn("showInfo", "fa-info-circle", "GUI guideline")
  ffbomesh.createUIBtn("resetView", "fa-refresh", "Reset View")
  ffbomesh.createUIBtn("resetVisibleView", "fa-align-justify", "Centre View To Visible Objects")
  ffbomesh.createUIBtn("show_all", "fa-eye", "Show All")
  ffbomesh.createUIBtn("hide_all", "fa-eye-slash", "Hide All")
  ffbomesh.createUIBtn("removeUnpin", "fa-trash", "Remove Unpinned Neurons")
  ffbomesh.createUIBtn("DownData", "fa-download", "Download Connectivity")

  ffbomesh.on('resetView', (function() {ffbomesh.resetView()}));
  ffbomesh.on('resetVisibleView', (function() {ffbomesh.resetVisibleView()}));
  ffbomesh.on('showInfo', (function() {closeAllOverlay(true); $("#gui-3d").show()}));
  ffbomesh.on('removeUnpin', (function() {$("#btn-pin-keep").trigger("click")}));
  ffbomesh.on('hide_all', (function() {ffbomesh.hideAll()}));
  ffbomesh.on('show_all', (function() {ffbomesh.showAll()}));
  ffbomesh.on('takeScreenshot', (function() {ffbomesh._take_screenshot=true;}));

  $.getJSON("config.json", function(json) {
    ffbomesh.addJson({"ffbo_json": json, "showAfterLoadAll": true});
  });
});
