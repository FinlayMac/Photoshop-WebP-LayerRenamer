var layers = app.activeDocument.layers;
var layerNum = layers.length;

if (layerNum <= 0) {
    alert("You have no layers");
} else {
    var duration = prompt("How long in ms should each frame be? 24fps = 42ms", "100");
    if (duration) {
        for (var i = 0; i < layerNum; i++) {
            layers[i].name = '"(' + duration + ' ms)"';
        }
        alert("Done");
    } else {
        alert("Cancelled Operation");
    }
}