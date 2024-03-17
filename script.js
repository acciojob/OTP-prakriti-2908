//your JS code here. If required.
function focusNext(current, nextFieldID) {
    if (current.value.length === current.maxLength) {
        document.getElementById(nextFieldID).focus();
    }
}