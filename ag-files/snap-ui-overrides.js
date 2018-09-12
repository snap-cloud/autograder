IDE_Morph.prototype.toggleStageSize = (function (originalToggle) {
    return function (isSmall, forcedRatio) {
        originalToggle.call(this, arguments);
        setTimeout(function() {
            moveAutogradingBar();
        }, 100);
    }
})(IDE_Morph.prototype.toggleStageSize);