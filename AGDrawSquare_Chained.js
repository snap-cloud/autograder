if (localStorage.getItem("id") === null) {
    var id_url = (window.location != window.parent.location)
            ? document.referrer
            : document.location;

    var order = Array.apply(null, Array(window.parent.document.getElementsByTagName("iframe").length)).map(function (_, i) {return i;});

    if (localStorage.getItem("problems") === null) {
        localStorage["problems"] = JSON.stringify(Array.apply(null, Array(window.parent.document.getElementsByTagName("iframe").length)).map(function (_, i) {return i;}));
    } 
    var id_problem = JSON.parse(localStorage.getItem("problems"))[0];
    localStorage["problems"] = JSON.stringify(JSON.parse(localStorage.getItem("problems")).slice(1));
    if (JSON.parse(localStorage.getItem("problems")).length === 0) {
        localStorage.removeItem("problems");
    }

    var id = id_url + id_problem

}

alert(id);



var AGDrawSquareState = {
    'checkState': false,
    'comment': "Please run 'Grade Question' before clicking the 'Check' button.",
    'feedback': {}
}
//This is unsafe. Store this elsewhere
var testLog;

function AGTest() {
    testLog = multiTestBlock("%s my plus %s", [[1,2],[2,2],[2,3],[3,3]], [3,4,5,6], [-1, -1, -1, -1]);
}

var AGDrawSquare = (function() {
    
    var channel;

    if (window.parent !== window) {
        channel = Channel.build({
            window: window.parent,
            origin: "*",
            scope: "JSInput"
        });

        channel.bind("getGrade", getGrade);
        channel.bind("getState", getState);
        channel.bind("setState", setState);
    }

    // function isCorrect() {
    //     return AGstate["checkState"];
    // }

    function getGrade() {
        // The following return value may or may not be used to grade
        // server-side.
        // If getState and setState are used, then the Python grader also gets
        // access to the return value of getState and can choose it instead to
        // grade.
        // console.log("Getting Grade!");
        
        //Store the item in localStorage
        //TODO: Consider using sessionStorage
        var ide = world.children[0];
        // scripts = ide.sprites.contents[0].scripts.children;
        
        // console.log(scripts);
        // for (i in scripts) {
        //     console.log(scripts[i].blockSpec);
        //     if (typeof scripts[i].blockSpec !== "undefined" &&
        //         scripts[i].blockSpec === "Draw Square") {
        //         console.log("SUCCESS");
        //         AGDrawSquareState['checkState'] = true;
        //     }
        //     console.log("SCRIPT NOT FOUND OIIS");
        // }
        console.log("I GOT HERE");
        var glog = testLog;

        //Convert world to XML and store in local Storage
        var xmlString = ide.serializer.serialize(ide.stage);
        localStorage.setItem(id, xmlString); 
        localStorage.setItem("M1_L1_T2", xmlString);

        if (glog !== undefined) {

            
            AGDrawSquareState['feedback'] = dictLog(glog);
            AGDrawSquareState['comment'] = "Autograder Finished";
            AGDrawSquareState['checkState'] = glog.allCorrect;
            console.log(JSON.stringify(AGDrawSquareState));
            //saves correct student answer, as well as state, in case student returns to question
            localStorage.setItem(id + "answer", JSON.stringify(AGDrawSquareState));
            localStorage.setItem(id + "correctstate", xmlString);
            
        } 


        //Return the gradeable object (either anew or from previously saved state)
        console.log("I got all the way down here?");
        if (localStorage.getItem(id + "answer") !== null && xmlString === localStorage.getItem(id + "correctstate")) {
            return localStorage.getItem(id + "answer");
        } else {
            return JSON.stringify(AGDrawSquareState);
        }
        //return JSON.stringify(AGDrawSquareState);
    }

    function getState() {
        return JSON.stringify(AGDrawSquareState);
    }

    function setState() {
        
    }

    return {
        getState: getState,
        setState: setState,
        getGrade: getGrade};
}());