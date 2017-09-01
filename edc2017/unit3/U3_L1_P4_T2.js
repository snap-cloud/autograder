var starter_path = "U3_L1_P4_T2_starter.xml";
// The id is to act as a course identifier.
// NOTE: FOR NOW YOU ALSO HAVE TO ADD THE ID TO THE BOTTOM OF THE PAGE.
var courseID = "edc";  // e.g. "BJCx"
// Specify a prerequisite task id, should be null if no such requirement.
var preReqTaskID = null;
var preReqID = courseID + preReqTaskID;
// taskID uniquely identifies the task for saving in browser sessionStorage.
var taskID = "_U3_L1_P4_T2";
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
        'Selecting Specific Data'
    );

    var blockName = "find contacts with name: %";
    var originalVariable;
    var originalContents;

    /*var spriteIndex;
    var ide = world.children[0];
    var sprites = ide.sprites.contents;
    for (var i = 0; i < sprites.length; i++) {
        if (sprites[i].name === "Minimize Function") {
            spriteIndex = i;
            break;
        }
    }*/

    var chunk_1 = fb.newChunk('Complete the "' + blockName + '" block.');

    var blockExists_1 = function () {
        var exists = false;
        for (i = 0; i < world.children[0].sprites.contents.length; i++) {
            exists = spriteContainsBlock(blockName, i) ? true : exists;
        }
        return exists;
    }

    var stringContainsExists_1 = function() {
        return customBlockContains(blockName, "string % contains % ?");
    }

    var keepItemsExists_1 = function() {
        return customBlockContains(blockName, "keep items such that %predRing from %l");
    }

    var emptyExists_1 = function() {
        return customBlockContains(blockName, "empty? %");
    }

    var nameFromContactOrdisplayFormOfNameExists_1 = function() {
        return customBlockContains(blockName, "name from contact: %") || customBlockContains(blockName, "display form of name: %");;
    }

    var displayFormOfNameExists_1 = function() {
        return customBlockContains(blockName, "display form of name: %");
    }

    var contactListExists_1 = function() {
        try {
            originalVariable = getGlobalVar("contact list", getAllGlobalVars());
            originalContents = originalVariable.contents;
            getGlobalVar("contact list", getAllGlobalVars()).contents = [new List(["Betsy Anderson", "123 Main St. #4, New York NY 10001", "212-555-1234"]), new List(["John Smith", "50 First Lane", "435-9876"]), new List(["Alphie Preston", "149 E. 16th Ave.", "234-555-6789"])];
            return true;
        } catch(err) {
            return false;
        }
    }
    
    var tip_1_1 = chunk_1.newTip('Make sure you name your block exactly "' + blockName + '", place it in the scripting area.',
        'The "' + blockName + '" block exists.');

    tip_1_1.newAssertTest(
        blockExists_1,
        'Testing if the "' + blockName + '" block is in the scripting area.',
        'The "' + blockName + '" block is in the scripting area.',
        'Make sure you name your block exactly "' + blockName + '" and place it in the scripting area.',
        1
    );

    tip_1_1.newAssertTest(
        stringContainsExists_1,
        'Testing if the "' + blockName + '" block uses the "string % contains % ?" block.',
        'The "' + blockName + '" block uses the "string % contains % ?" block.',
        'Make sure your "' + blockName + '" block uses the "string % contains % ?" block.',
        1
    );

    tip_1_1.newAssertTest(
        keepItemsExists_1,
        'Testing if the "' + blockName + '" block uses the "keep items such that % from %" block.',
        'The "' + blockName + '" block uses the "keep items such that % from %" block.',
        'Make sure your "' + blockName + '" block uses the "keep items such that % from %" block.',
        1
    );

    tip_1_1.newAssertTest(
        emptyExists_1,
        'Testing if the "' + blockName + '" block uses the "empty? %" block.',
        'The "' + blockName + '" block uses the "empty? %" block.',
        'Make sure your "' + blockName + '" block uses the "empty? %" block.',
        1
    );

    tip_1_1.newAssertTest(
        nameFromContactOrdisplayFormOfNameExists_1,
        'Testing if the "' + blockName + '" block uses the "name from contact: %" block or the "display form of name: %" block.',
        'The "' + blockName + '" block uses the "name from contact: %" block or the "display form of name: %" block.',
        'Make sure your "' + blockName + '" block uses the "name from contact: %" block or the "display form of name: %" block.',
        1
    );

    console.log("I get here before");

    tip_1_1.newAssertTest(
        contactListExists_1,
        'Testing if the "contact list" global variable exists.',
        'The "contact list" global variable exists.',
        'Make sure you initialize the global variable "contact list".',
        1
    );

    console.log("i get here!!!!!!");
    if (!contactListExists_1()) {
        return fb;
    }

    var tip_1_2 = chunk_1.newTip(
        'Your block should return the correct values for the given input and the global variable "contact list" containing the values [["Betsy Anderson", ...], ["John Smith", ...], ["Alphie Preston", ...]].',
        'Great job! Your block reports the correct value for given inputs.'
    );

    var input_1_2_1 = ["Alphie"];
    tip_1_2.newIOTest('r',  // testClass
        blockName,          // blockSpec
        input_1_2_1,        // input
        function (output) {
            // Output should be a list of numbers.
            var expected,
                actual;
            console.log("Output here: ", output);

            expected = [["Alphie Preston", "149 E. 16th Ave.", "234-555-6789"]];
            expected2 = ["Alphie Preston,149 E. 16th Ave.,234-555-6789"];
            if (output instanceof List) {
                actual = output.asArray();
            } else {
                actual = output;
                actual += ""; //to string
            }
            for (i = 0; i < actual.length; i++)
            {
                if (actual[i] instanceof List) {
                    actual[i] = actual[i].asArray() + "";
                } else {
                    actual[i] = actual[i] + ""; //turns into strings
                }
            }
            if (!_.isEqual(actual, expected) && !_.isEqual(actual, expected2)) {
                tip_1_2.suggestion = 'The output should be ' + expected + ';';
                tip_1_2.suggestion += ' but was ' + actual + '.';
                return false;
            }
            return true;
        },
        4 * 1000, // 4 second time out.
        true, // is isolated
        1 // points
    );

    var input_1_2_2 = ["on"];
    tip_1_2.newIOTest('r',  // testClass
        blockName,          // blockSpec
        input_1_2_2,        // input
        function (output) {
            // Output should be a list of numbers.
            var expected,
                actual;
            console.log("Output here: ", output);

            expected = [["Betsy Anderson", "123 Main St. #4, New York NY 10001", "212-555-1234"], ["Alphie Preston", "149 E. 16th Ave.", "234-555-6789"]];
            expected2 = ["Betsy Anderson,123 Main St. #4, New York NY 10001,212-555-1234", "Alphie Preston,149 E. 16th Ave.,234-555-6789"];
            if (output instanceof List) {
                actual = output.asArray();
            } else {
                actual = output;
                actual += ""; //to string
            }
            for (i = 0; i < actual.length; i++)
            {
                if (actual[i] instanceof List) {
                    actual[i] = actual[i].asArray() + "";
                } else {
                    actual[i] = actual[i] + ""; //turns into strings
                }
            }
            if (!_.isEqual(actual, expected) && !_.isEqual(actual, expected2)) {
                tip_1_2.suggestion = 'The output should be ' + expected + ';';
                tip_1_2.suggestion += ' but was ' + actual + '.';
                return false;
            }
            return true;
        },
        4 * 1000, // 4 second time out.
        true, // is isolated
        1 // points
    );

    var input_1_2_3 = ["Tom"];
    tip_1_2.newIOTest('r',  // testClass
        blockName,          // blockSpec
        input_1_2_3,        // input
        function (output) {
            // Output should be a list of numbers.
            var expected,
                actual;
            console.log("Output here: ", output);

            expected = [];
            if (output instanceof List) {
                actual = output.asArray();
            } else {
                actual = output;
                actual += ""; //to string
            }
            for (i = 0; i < actual.length; i++)
            {
                if (actual[i] instanceof List) {
                    actual[i] = actual[i].asArray() + "";
                } else {
                    actual[i] = actual[i] + ""; //turns into strings
                }
            }
            if (!_.isEqual(actual, expected)) {
                tip_1_2.suggestion = 'The output should be ' + expected + ';';
                tip_1_2.suggestion += ' but was ' + actual + '.';
                return false;
            }
            return true;
        },
        4 * 1000, // 4 second time out.
        true, // is isolated
        1 // points
    );

    var input_1_2_3 = [""];
    tip_1_2.newIOTest('r',  // testClass
        blockName,          // blockSpec
        input_1_2_3,        // input
        function (output) {
            // Output should be a list of numbers.
            var expected,
                actual;
            console.log("Output here: ", output);

            expected = [["Betsy Anderson", "123 Main St. #4, New York NY 10001", "212-555-1234"], ["John Smith", "50 First Lane", "435-9876"], ["Alphie Preston", "149 E. 16th Ave.", "234-555-6789"]];
            expected2 = ["Betsy Anderson,123 Main St. #4, New York NY 10001,212-555-1234", "John Smith,50 First Lane,435-9876", "Alphie Preston,149 E. 16th Ave.,234-555-6789"];
            if (output instanceof List) {
                actual = output.asArray();
            } else {
                actual = output;
                actual += ""; //to string
            }
            for (i = 0; i < actual.length; i++)
            {
                if (actual[i] instanceof List) {
                    actual[i] = actual[i].asArray() + "";
                } else {
                    actual[i] = actual[i] + ""; //turns into strings
                }
                
            }
            if (!_.isEqual(actual, expected) && !_.isEqual(actual, expected2)) {
                tip_1_2.suggestion = 'The output should be ' + expected + ';';
                tip_1_2.suggestion += ' but was ' + actual + '.';
                return false;
            }
            getGlobalVar("contact list", getAllGlobalVars()).contents = [];
            return true;
        },
        4 * 1000, // 4 second time out.
        true, // is isolated
        1 // points
    );

    var tip_1_3 = chunk_1.newTip(
        'Your block should return the correct values for the given input and the global variable "contact list" containing no values.',
        'Great job! Your block reports the correct value for given inputs.'
    );

    var input_1_3_1 = ["Tom"];
    tip_1_3.newIOTest('r',  // testClass
        blockName,          // blockSpec
        input_1_3_1,        // input
        function (output) {
            // Output should be a list of numbers.
            var expected,
                actual;
            console.log("Output here: ", output);

            expected = [];
            if (output instanceof List) {
                actual = output.asArray();
            } else {
                actual = output;
                actual += ""; //to string
            }
            for (i = 0; i < actual.length; i++)
            {
                if (actual[i] instanceof List) {
                    actual[i] = actual[i].asArray() + "";
                } else {
                    actual[i] = actual[i] + ""; //turns into strings
                }
            }
            if (!_.isEqual(actual, expected)) {
                tip_1_2.suggestion = 'The output should be ' + expected + ';';
                tip_1_2.suggestion += ' but was ' + actual + '.';
                return false;
            }
            return true;
        },
        4 * 1000, // 4 second time out.
        true, // is isolated
        1 // points
    );

    var input_1_3_2 = [""];
    tip_1_3.newIOTest('r',  // testClass
        blockName,          // blockSpec
        input_1_3_2,        // input
        function (output) {
            // Output should be a list of numbers.
            var expected,
                actual;
            console.log("Output here: ", output);

            expected = [];
            if (output instanceof List) {
                actual = output.asArray();
            } else {
                actual = output;
                actual += ""; //to string
            }
            for (i = 0; i < actual.length; i++)
            {
                if (actual[i] instanceof List) {
                    actual[i] = actual[i].asArray() + "";
                } else {
                    actual[i] = actual[i] + ""; //turns into strings
                }
            }
            if (!_.isEqual(actual, expected)) {
                tip_1_2.suggestion = 'The output should be ' + expected + ';';
                tip_1_2.suggestion += ' but was ' + actual + '.';
                return false;
            }
            console.log(originalContents);
            getGlobalVar("contact list", getAllGlobalVars()).contents = originalContents;
            return true;
        },
        4 * 1000, // 4 second time out.
        true, // is isolated
        1 // points
    );

    return fb;
    
    }