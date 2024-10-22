let user = new Object();

user = {
  name: "John",
  surname: "Smith",
};

user.name = "Pete";
delete user.name;

for (let key in user) {
  console.log(key, user[key]);
}

function isEmpty(obj) {
  if (obj.isEmpty) return true;
  else return false;
}
console.log(isEmpty(user));

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let i in salaries) {
  sum += salaries[i];
}
console.log(sum);

function multiplyNumeric(obj) {
  for (let i in obj) {
    obj[i] *= 2;
  }
}
multiplyNumeric(salaries);
for (let i in salaries) {
  console.log(salaries[i]);
}

const Student = {
  fio: "",
  number_group: "",
  mark: [],
};

function createStudent() {
  const student = Object.create(Student);
  student.fio = prompt("Введите фамилию студента: ");
  student.number_group = prompt("Введите номер группы: ");

  student.mark = [];
  for (let i = 0; i < 5; i++) {
    const marks = parseFloat(
      prompt(`Введите оценку ${i + 1} для ${student.fio}:`)
    );
    student.mark.push(marks);
  }

  return student;
}

const students = [];
for (let i = 0; i < 1; i++) {
  const student = createStudent();
  students.push(student);
}

for (let i in students) {
  alert(`${students[i].fio}\n${students[i].number_group}\n${students[i].mark}`);
}

students.sort((a, b) => a.number_group.localeCompare(b.number_group));

const students_avg = [];
for (let i = 0; i < students.length; i++) {
  let sum = 0;
  for (let j = 0; j < students[i].mark.length; j++) {
    sum += students[i].mark[j];
  }
  let avg = sum / students[i].mark.length;
  if (avg > 4.0) {
    students_avg.push(students[i]);
  }
}
if (students_avg.length !== 0) {
  for (let i in students_avg) {
    alert(`${students_avg[i].fio}\n${students_avg[i].number_group}`);
  }
} else alert("Студентов со средним балом выше 4 нету...");
