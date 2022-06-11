Blockly.Blocks['div'] = {
  init: function() {
    this.appendValueInput("child")
        .setCheck(null)
        .appendField("div");
    this.setColour(90);
 this.setTooltip("a div element");
 this.setHelpUrl("hey");
  }
};


Blockly.JavaScript['div'] = function(block) {
  var value_child = Blockly.JavaScript.valueToCode(block, 'child', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "window.alert(\"Hello\")";
  return code;
};