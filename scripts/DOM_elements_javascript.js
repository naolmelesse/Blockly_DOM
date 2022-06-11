Blockly.JavaScript['dom_classname'] = function(block) {
  var text_class = block.getFieldValue('class');
  var value_class = Blockly.JavaScript.valueToCode(block, 'class', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['dom_title'] = function(block) {
  var text_title_text = block.getFieldValue('title_text');
  var value_title = Blockly.JavaScript.valueToCode(block, 'title', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['dom_div'] = function(block) {
  var value_child = Blockly.JavaScript.valueToCode(block, 'child', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = addElement("div");
  return code;
};

Blockly.JavaScript['dom_heading'] = function(block) {
  var dropdown_headings = block.getFieldValue('headings');
  var text_heading_text = block.getFieldValue('heading_text');
  var value_heading = Blockly.JavaScript.valueToCode(block, 'heading', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = addElementWithText(dropdown_headings, text_heading_text);
  return code;
};

Blockly.JavaScript['dom_p'] = function(block) {
  var text_p_text = block.getFieldValue('p_text');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = addElementWithText("p", text_p_text);
  return code;
};

function addElement(tag){
  var code = `document.createElement("${tag}")`;
  return code;
}

function addElementWithText(tag, text){
  var code = `var element = document.createElement("${tag}");\n`;
  code += `var text = document.createTextNode("${text}");\n`;
  code += `element.appendChild(text);\n`
  code += `document.getElementById('executed_code_display').appendChild(element);\n`;
  

  return code;
}