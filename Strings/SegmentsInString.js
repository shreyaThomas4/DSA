var countSegments = function(s) {
    if(s === "") {
        return 0;
    }
    return s.split(" ").length;
};

countSegments("Hello, my name is John");