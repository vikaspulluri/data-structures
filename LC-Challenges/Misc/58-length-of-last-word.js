var lengthOfLastWordForward = function(s) {
    let length = 0;
    const n = s.length;
    let reset = false;
    for (let i=0;i<n;i++) {
        if (s[i] === ' ') {
            reset = true;
        } else {
            length = reset ? 1 : length + 1;
            reset = false;
        }
    }
    return length;
};

var lengthOfLastWordBackward = function(s) {
    let length = 0;
    const n = s.length;
    for (let i=n-1;i>=0;i--) {
        if (length && s[i] === ' ') {
            return length;
        } else if (s[i] !== ' ') {
            length++;
        }
    }
    return length;
};