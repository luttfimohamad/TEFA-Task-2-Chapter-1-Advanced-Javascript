function example() {
    function dummy1() {
        return 2;
    }
    function dummy2() {
        return 5;
    }
    return dummy2();
    return dummy1();
}

console.log(example());
  