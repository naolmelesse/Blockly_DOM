Blockly.JavaScript['dom_getelementid'] = function(block) {
  var text_id = block.getFieldValue('ID');
  var value_id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `document.getElementById("${text_id}")`;
  // TODO: Change ORDER_NONE to the correct strength.
  // document.getElementById('executed_code_display').innerHTML = "Hello " + document.getElementById(`"${text_id}"`);
  console.log(document.getElementById("sample"));
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['dom_getelementsbyclassname'] = function(block) {
  var text_class = block.getFieldValue('class');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `document.getElementsByClassName("${text_class}")`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['dom_getelementsbytagname'] = function(block) {
  var text_tagname = block.getFieldValue('TagName');
  var value_tagname = Blockly.JavaScript.valueToCode(block, 'TagName', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `document.getElementsByTagName("${text_tagname}")`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['dom_node'] = function(block) {
  var dropdown_node = block.getFieldValue('node');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  // if(dropdown_node == 'childNodes')
  //   var code = `${value_name}.${dropdown_node}`;
  // else
  var code = `${value_name}.${dropdown_node}`;

  return code;
};

Blockly.JavaScript['dom_createelement'] = function(block) {
  var text_element_type = block.getFieldValue('element_type');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `document.createElement("${text_element_type}");\n`;
  return code;
};

Blockly.JavaScript['dom_appendchild'] = function(block) {
  var value_child = Blockly.JavaScript.valueToCode(block, 'child', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_name}.appendChild(${value_child})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['dom_removechild'] = function(block) {
  var value_child = Blockly.JavaScript.valueToCode(block, 'child', Blockly.JavaScript.ORDER_ATOMIC);
  var value_from = Blockly.JavaScript.valueToCode(block, 'from', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_from}.removeChild(${value_child})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['dom_getattribute'] = function(block) {
  var text_attribute = block.getFieldValue('attribute');
  var value_getattribute = Blockly.JavaScript.valueToCode(block, 'getAttribute', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_getattribute}.getAttribute("${text_attribute}")`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['dom_setattribute'] = function(block) {
  var text_attributevalue = block.getFieldValue('attributeValue');
  var text_attribute = block.getFieldValue('attribute');
  var value_setattribute = Blockly.JavaScript.valueToCode(block, 'setAttribute', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_setattribute}.setAttribute(${text_attribute}, "${text_attributevalue}")`;
  return code;
};

Blockly.JavaScript['dom_forms'] = function(block) {
  var text_form_id = block.getFieldValue('form_ID');
  var value_forms = Blockly.JavaScript.valueToCode(block, 'forms', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'document.forms()';
  
  return code;
};

Blockly.JavaScript['dom_innerhtml'] = function(block) {
  var text_value = block.getFieldValue('value');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_name}.innerHTML = ${text_value}`;
  return code;
};

Blockly.JavaScript['dom_addeventlistener'] = function(block) {
  var text_event = block.getFieldValue('event');
  var text_function = block.getFieldValue('function');
  var value_addeventlistener = Blockly.JavaScript.valueToCode(block, 'addEventListener', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_addeventlistener}.addEventListener("${text_event}", ${text_function}())`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};