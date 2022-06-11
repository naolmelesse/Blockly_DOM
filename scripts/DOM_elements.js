Blockly.Blocks['dom_classname'] = {
  init: function() {
    this.appendValueInput("class")
        .setCheck(null)
        .appendField(new Blockly.FieldTextInput("class"), "class");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("class name for an HTML element");
 this.setHelpUrl("https://www.w3schools.com/html/html_classes.asp");
  }
};

Blockly.Blocks['dom_title'] = {
  init: function() {
    this.appendValueInput("title")
        .setCheck(null)
        .appendField(new Blockly.FieldTextInput("title"), "title_text");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['dom_div'] = {
  init: function() {
    this.appendValueInput("child")
        .setCheck("String")
        .appendField("div");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setColour(345);
 this.setTooltip("a div element");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['dom_heading'] = {
  init: function() {
    this.appendValueInput("heading")
        .setCheck("String")
        .appendField("heading")
        .appendField(new Blockly.FieldDropdown([["h1","H1"], ["h2","H2"], ["h3","H3"], ["h4","H4"], ["h5","H5"], ["h6","H6"]]), "headings")
        .appendField(new Blockly.FieldTextInput("heading"), "heading_text");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("HTML heading element");
 this.setHelpUrl("https://www.w3schools.com/html/html_headings.asp");
  }
};

Blockly.Blocks['dom_p'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("p")
        .appendField(new Blockly.FieldTextInput("text"), "p_text");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};