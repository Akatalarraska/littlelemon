const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
};

window.fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getTime());

    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
            result.push(i + ':00');
        }
        if (random() < 0.5) {
            result.push(i + ':30');
        }
    }
    console.log("Available times for", date.toDateString(), ":", result);
    return result;
};

window.submitAPI = function (formData) {
    return true;
};
