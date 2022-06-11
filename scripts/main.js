
var workspace = Blockly.inject('blocklyDiv', {toolbox: toolbox});

workspace.addChangeListener(myUpdateFunction);

function myUpdateFunction() {
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    document.getElementById('textarea').innerHTML = code;
    console.log(toolbox);
  }
 

// function showCode() {
//     // Generate JavaScript code and display it.
//     Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
//     var code = Blockly.JavaScript.workspaceToCode(workspace);
//    //alert(document.getElementById('textarea').innerHTML);
//     document.getElementById('textarea').innerHTML = code;
//     //alert(code);
//   }

function runCode() {
    // Generate JavaScript code and run it.
    window.LoopTrap = 1000;
    Blockly.JavaScript.INFINITE_LOOP_TRAP =
        'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    try {
      eval(code);
    } catch (e) {
      alert(e);
    }
  }