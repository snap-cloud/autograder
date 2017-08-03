var starter_path = 'U3_W8_L1_T2_E1_starter_file.xml';
// The id is to act as a course identifier.
// NOTE: FOR NOW YOU ALSO HAVE TO ADD THE ID TO THE BOTTOM OF THE PAGE.
var courseID = "edc";  // e.g. "BJCx"
// Specify a prerequisite task id, should be null if no such requirement.
var preReqTaskID = null;
var preReqID = courseID + preReqTaskID;
// taskID uniquely identifies the task for saving in browser sessionStorage.
var taskID = "_U3_W8_L1_T2_E1";
var id = courseID + taskID;
var isEDX = isEDXurl();
// if this question is not meant to be graded, change this flag to false
var graded = true;
// to hide feedback for this problem, set this to false
var showFeedback = true;
// to allow ability to regrade certain tests, set this to true
var regradeOn = true;
function AGTest(outputLog) {
    var fb = new FeedbackLog(
        world,
        id,
        'Script Variables'
    );

    var blockName = "Add Item";

    /*var spriteIndex;
    var ide = world.children[0];
    var sprites = ide.sprites.contents;
    for (var i = 0; i < sprites.length; i++) {
        if (sprites[i].name === "Minimize Function") {
            spriteIndex = i;
            break;
        }
    }*/

    var chunk_1 = fb.newChunk('Complete the add item sprite.')

    var spriteContains_whenClicked = function() {
      return spriteContainsBlock('when I am %interaction', 0)
    }

    var tip_1_1 = chunk_1.newTip(
      'Your script should be able to detect when the Add Item button is clicked.',
      'Good job! Your script detects when the Add Item button is clicked.'
    )

    tip_1_1.newAssertTest(
      spriteContains_whenClicked,
      'Testing if the add item sprite contains the when clicked block.',
      'The add item sprite uses when clicked properly.',
      'Make sure your sprite can tell when it is clicked on.',
      1
    )

    var spriteContains_ask = function() {
      return spriteContainsBlock('ask % and wait', 0)
    }

    var tip_1_2 = chunk_1.newTip(
      'Make sure your script is asking the user what they want to add.',
      'Good job! Your script asks the user what they want to add.'
    )

    tip_1_2.newAssertTest(
      spriteContains_ask,
      'Testing if the add item script contains the ask block.',
      'The add item script contains the ask block.',
      "Make sure your sprite is asking for the user's input",
      1
    )

    var spriteContains_add = function() {
      return spriteContainsBlock('add % to %', 0, ['answer', 'shopping list'])
    }

    var spriteContains_insert = function() {
      return spriteContainsBlock('insert % at % of %', 0, ['answer', 'shopping list'])
    }

    var tip_1_3 = chunk_1.newTip(
      "Make sure your script correctly adds things to the shopping list",
      "Good job! You're correctly adding to the shopping list."
    )

    tip_1_3.newAssertTest(
      spriteContains_add || spriteContains_insert,
      'Testing if the add item script adds items to the shopping list',
      'The add item script correctly adds items to the shopping list',
      'Make sure your add item script correctly adds items to the shopping list',
      1
    )

    var chunk_2 = fb.newChunk('Complete the Clear List sprite.')

    var spriteContains_whenClicked_clearList = function() {
      return spriteContainsBlock('when I am %interaction', 1)
    }

    var tip_2_1 = chunk_2.newTip(
      'Your script should be able to detect when the Clear List button is clicked.',
      'Good job! Your script detects when the Clear List button is clicked.'
    )

    tip_2_1.newAssertTest(
      spriteContains_whenClicked_clearList,
      'Testing if the clear list sprite contains the when clicked block.',
      'The clear list sprite uses when clicked properly.',
      'Make sure your sprite can tell when it is clicked on.',
      1
    )

    var spriteContains_set = function() {
      return spriteContainsBlock('set %var to %', 1)
    }

    var tip_2_2 = chunk_2.newTip(
      'Your script should be clearing the shopping list properly.',
      'Good job! Your script clears the shopping list when asked to!'
    )

    var spriteContains_delete = function() {
      return spriteContainsBlock('delete %ida of %l', 1)
    }

    tip_2_2.newAssertTest(
      spriteContains_set || spriteContains_delete,
      'Testing if the clear list sprite correctly clears the shopping list',
      'The clear list sprite successfully clears the shopping list',
      'Make sure your clear list sprite clears the shopping list properly',
      1
    )







    // var tip_1_2 = chunk_1.newTip(
    //     'Your block should return the correct values for the given inputs.',
    //     'Great job! Your block reports the correct value for given inputs.'
    // );
    //
    // var tip_1_3 = chunk_1.newTip('Make sure your block definition uses the round block.')
    //
    // var blockContains_round = function() {
    //   return customBlockContains('integer? %', 'round %')
    // }
    //
    // tip_1_3.newAssertTest(
    //   blockContains_round,
    //   'Testing if the ' + blockName + 'definition contains the round block.',
    //   'The ' + blockName + 'block uses round in its solution.',
    //   'Make sure you use the round block in your solution.',
    //   1
    // )
    //
    // var input_1_2_1 = ["10"];
    // tip_1_2.newIOTest('r',  // testClass
    //     blockName,          // blockSpec
    //     input_1_2_1,        // input
    //     function (output) {
    //         // Output should be a list of numbers.
    //         var expected,
    //             actual;
    //         console.log(output);
    //
    //         expected = "true";
    //         if (output instanceof List) {
    //             actual = output.asArray();
    //         } else {
    //             actual = output;
    //             actual += ""; //to string
    //         }
    //         for (i = 0; i < actual.length; i++)
    //         {
    //             actual[i] = actual[i] + ""; //turns into strings
    //         }
    //         if (!_.isEqual(actual, expected)) {
    //             tip_1_2.suggestion = 'The output should be ' + expected + ';';
    //             tip_1_2.suggestion += ' but was ' + actual + '.';
    //             return false;
    //         }
    //         return true;
    //     },
    //     4 * 1000, // 4 second time out.
    //     true, // is isolated
    //     1 // points
    // );
    //
    // var input_1_2_3 = ["0"];
    // tip_1_2.newIOTest('r',  // testClass
    //     blockName,          // blockSpec
    //     input_1_2_3,        // input
    //     function (output) {
    //         // Output should be a list of numbers.
    //         var expected,
    //             actual;
    //         console.log(output);
    //
    //         expected = "true";
    //         if (output instanceof List) {
    //             actual = output.asArray();
    //         } else {
    //             actual = output;
    //             actual += ""; //to string
    //         }
    //         for (i = 0; i < actual.length; i++)
    //         {
    //             actual[i] = actual[i] + ""; //turns into strings
    //         }
    //         if (!_.isEqual(actual, expected)) {
    //             tip_1_2.suggestion = 'The output should be ' + expected + ';';
    //             tip_1_2.suggestion += ' but was ' + actual + '.';
    //             return false;
    //         }
    //         return true;
    //     },
    //     4 * 1000, // 4 second time out.
    //     true, // is isolated
    //     1 // points
    // );
    //
    // var input_1_2_4 = ["-100"];
    // tip_1_2.newIOTest('r',  // testClass
    //     blockName,          // blockSpec
    //     input_1_2_4,        // input
    //     function (output) {
    //         // Output should be a list of numbers.
    //         var expected,
    //             actual;
    //         console.log(output);
    //
    //         expected = "true";
    //         if (output instanceof List) {
    //             actual = output.asArray();
    //         } else {
    //             actual = output;
    //             actual += ""; //to string
    //         }
    //         for (i = 0; i < actual.length; i++)
    //         {
    //             actual[i] = actual[i] + ""; //turns into strings
    //         }
    //         if (!_.isEqual(actual, expected)) {
    //             tip_1_2.suggestion = 'The output should be ' + expected + ';';
    //             tip_1_2.suggestion += ' but was ' + actual + '.';
    //             return false;
    //         }
    //         return true;
    //     },
    //     4 * 1000, // 4 second time out.
    //     true, // is isolated
    //     1 // points
    // );
    //
    // tip_1_2.newIOTest('r',  // testClass
    //     blockName,          // blockSpec
    //     ["4.5"],        // input
    //     function (output) {
    //         // Output should be a list of numbers.
    //         var expected,
    //             actual;
    //         console.log(output);
    //
    //         expected = "false";
    //         if (output instanceof List) {
    //             actual = output.asArray();
    //         } else {
    //             actual = output;
    //             actual += ""; //to string
    //         }
    //         for (i = 0; i < actual.length; i++)
    //         {
    //             actual[i] = actual[i] + ""; //turns into strings
    //         }
    //         if (!_.isEqual(actual, expected)) {
    //             tip_1_2.suggestion = 'The output should be ' + expected + ';';
    //             tip_1_2.suggestion += ' but was ' + actual + '.';
    //             return false;
    //         }
    //         return true;
    //     },
    //     4 * 1000, // 4 second time out.
    //     true, // is isolated
    //     1 // points
    // );
    //
    // tip_1_2.newIOTest('r',  // testClass
    //     blockName,          // blockSpec
    //     ["0.5"],        // input
    //     function (output) {
    //         // Output should be a list of numbers.
    //         var expected,
    //             actual;
    //         console.log(output);
    //
    //         expected = "false";
    //         if (output instanceof List) {
    //             actual = output.asArray();
    //         } else {
    //             actual = output;
    //             actual += ""; //to string
    //         }
    //         for (i = 0; i < actual.length; i++)
    //         {
    //             actual[i] = actual[i] + ""; //turns into strings
    //         }
    //         if (!_.isEqual(actual, expected)) {
    //             tip_1_2.suggestion = 'The output should be ' + expected + ';';
    //             tip_1_2.suggestion += ' but was ' + actual + '.';
    //             return false;
    //         }
    //         return true;
    //     },
    //     4 * 1000, // 4 second time out.
    //     true, // is isolated
    //     1 // points
    // );


    return fb;

    }
