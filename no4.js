function example() {
    function dummy() {
        return 2;
    }
    return dummy();
    function dummy() {
        return 5;
    }
    return dummy();
}

console.log(example());
  