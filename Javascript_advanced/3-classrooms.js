function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return function() {return seat}
    }
    var students = []
    for (var student = 0; student < numbersOfStudents; student++) {
        students[student] = studentSeat(student + 1)
    }
    return students
}
var classRoom = createClassRoom(10)