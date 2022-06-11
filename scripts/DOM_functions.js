Blockly.Blocks['dom_getelementid'] = {
  init: function() {
    this.appendValueInput("ID")
        .setCheck("String")
        .appendField("getElementByID")
        .appendField(new Blockly.FieldTextInput("ID"), "ID");
    this.setOutput(true, null);
    this.setColour(90);
 this.setTooltip("Get a DOM element using its ID");
 this.setHelpUrl("https://www.w3schools.com/js/js_htmldom_methods.asp");
  }
};

Blockly.Blocks['dom_getelementsbytagname'] = {
  init: function() {
    this.appendValueInput("TagName")
        .setCheck("String")
        .appendField("getElementsByTagName ")
        .appendField(new Blockly.FieldTextInput("TagName"), "TagName");
    this.setOutput(true, null);
    this.setColour(60);
 this.setTooltip("Get elements using tag name");
 this.setHelpUrl("https://www.w3schools.com/js/js_htmldom_elements.asp");
  }
};

Blockly.Blocks['dom_node'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("node")
        .appendField(new Blockly.FieldDropdown([["childNodes","childNodes"], ["firstChild","firstChild"], ["lastChild","lastChild"], ["parentNode","parentNode"], ["nextSibling","nextSibling"], ["previousSibling","previousSibling"]]), "node");
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    this.setOutput(true, null);
    this.setColour(45);
 this.setTooltip("To create a node of an element then append it to an existing element");
 this.setHelpUrl("https://www.w3schools.com/js/js_htmldom_nodes.asp");
  }
};

Blockly.Blocks['dom_createelement'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("createElement")
        .appendField(new Blockly.FieldTextInput("element"), "element_type");
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    this.setOutput(true, null);
    this.setColour(15);
 this.setTooltip("Create an element in the current document");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['dom_appendchild'] = {
  init: function() {
    this.appendValueInput("child")
        .setCheck("String")
        .appendField("appendChild");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("to");
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("To append a child to an element");
 this.setHelpUrl("https://www.w3schools.com/js/js_htmldom_document.asp");
  }
};

Blockly.Blocks['dom_removechild'] = {
  init: function() {
    this.appendValueInput("child")
        .setCheck("String")
        .appendField("removeChild");
    this.appendValueInput("from")
        .setCheck("String")
        .appendField("from");
    this.setOutput(true, null);
    this.setColour(345);
 this.setTooltip("To remove a child of an element");
 this.setHelpUrl("https://www.w3schools.com/js/js_htmldom_document.asp");
  }
};

Blockly.Blocks['dom_getattribute'] = {
  init: function() {
    this.appendValueInput("getAttribute")
        .setCheck("String")
        .appendField("getAttribute")
        .appendField(new Blockly.FieldTextInput("attribute"), "attribute");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(330);
 this.setTooltip("To get value of attributes of an element");
 this.setHelpUrl("https://www.w3schools.com/jsref/met_element_getattribute.asp");
  }
};

Blockly.Blocks['dom_setattribute'] = {
  init: function() {
    this.appendValueInput("setAttribute")
        .setCheck("String")
        .appendField("setAttribute")
        .appendField(new Blockly.FieldTextInput("value"), "attributeValue")
        .appendField(new Blockly.FieldTextInput("attribute"), "attribute");
        this.setOutput(true, null);
    this.setInputsInline(true);
    this.setColour(315);
 this.setTooltip("To set value to an attribute of an element");
 this.setHelpUrl("https://www.w3schools.com/jsref/met_element_setattribute.asp");
  }
};

Blockly.Blocks['dom_forms'] = {
  init: function() {
    this.appendValueInput("forms")
        .setCheck("String")
        .appendField("forms")
        .appendField(new Blockly.FieldTextInput("form_ID"), "form_ID");
    this.setColour(300);
    this.setOutput(true, null);
 this.setTooltip("Access HTML forms in a document'");
 this.setHelpUrl("https://www.w3schools.com/jsref/coll_doc_forms.asp");
  }
};

Blockly.Blocks['dom_innerhtml'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("innerHTML")
        .appendField(new Blockly.FieldTextInput("value"), "value");
        this.setOutput(true, null);
    this.setInputsInline(true);
    this.setColour(255);
 this.setTooltip("Get or set HTML content of an element");
 this.setHelpUrl("https://www.w3schools.com/jsref/prop_html_innerhtml.asp");
  }
};

Blockly.Blocks['dom_getelementsbyclassname'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("getElementsByClassName")
        .appendField(new Blockly.FieldTextInput("class"), "class");
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("To get elements by class name");
 this.setHelpUrl("https://www.w3schools.com/jsref/met_element_getelementsbyclassname.asp");
  }
};

Blockly.Blocks['dom_addeventlistener'] = {
  init: function() {
    this.appendValueInput("addEventListener")
        .setCheck("String")
        .appendField("addEventListener")
        .appendField(new Blockly.FieldTextInput("event"), "event")
        .appendField(new Blockly.FieldTextInput("function"), "function");
    this.setOutput(true, null);
    this.setColour(105);
 this.setTooltip("add an event listener to an element");
 this.setHelpUrl("https://www.w3schools.com/jsref/met_element_addeventlistener.asp");
  }
};