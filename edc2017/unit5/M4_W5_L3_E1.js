// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//            Standard Start Code
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var starter_path = null;
// The id is to act as a course identifier.
// NOTE: FOR NOW YOU ALSO HAVE TO ADD THE ID TO THE BOTTOM OF THE PAGE.
var courseID = "BJC.34x";  // e.g. "BJCx"
// Specify a prerequisite task id, should be null if no such requirement.
var preReqTaskID = null;
var preReqID = courseID + preReqTaskID;
// taskID uniquely identifies the task for saving in browser sessionStorage.
var taskID = "_M4_W5_L3_E1"; //this should follow the name of the nomenclature document
id = courseID + taskID;
var isEDX = isEDXurl();
// if this question is not meant to be graded, change this flag to false
var graded = true;
// to hide feedback for this problem, set this to false
var showFeedback = true;
// to allow ability to regrade certain tests, set this to true
var regradeOn = true;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//           Actual Autograder Code
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function AGTest(outputLog) {
    var fb = new FeedbackLog(
        world,
        id,
        'Comparing Algorithms'
    );

    var sumBlockName = "sum from 1 to %";
    var sumBlockChunk = fb.newChunk(
        'Complete the "' + sumBlockName + '" block.'
    );

    var sumBlockExists = function() {
        return spriteContainsBlock(sumBlockName);
    }

    var input1 = [13];
    var IOTest1 = function(output) {
        return output == 91;
    }

    var input2 = [10];
    var IOTest2 = function(output) {
        return output == 55;
    }

    var sumBlockCheckExists = sumBlockChunk.newTip('Make sure you name your block exactly "' + sumBlockName + '" and place it in the scripting area.', 'The "' + sumBlockName + '" block exists.');
    
    sumBlockCheckExists.newAssertTest(
            sumBlockExists,
            'Testing if the "' + sumBlockName + '" block is in the scripting area.',
            'The "' + sumBlockName + '" block is in the scripting area.',
            'Make sure you name your block exactly "' + sumBlockName + '" and place it in the scripting area.',
            1
        )

    var sumBlockIOTest1 = sumBlockChunk.newTip(
        'Make sure your sum block adds numbers correctly.',
        'The sum block works.'
    );

    sumBlockIOTest1.newIOTest('r',
            sumBlockName,
            input1,
            IOTest1,
            4 * 1000,
            true,
            1
        );

    sumBlockIOTest1.newIOTest('r',
            sumBlockName,
            input2,
            IOTest2,
            4 * 1000,
            true,
            1
        );

    return fb;

};