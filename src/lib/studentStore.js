import { readFile, writeFile } from "fs/promises";
import path from "path";

const DB_PATH = path.join(process.cwd(), "db.json");

function normalizeStudent(student) {
  return {
    id: Number(student.id),
    name: student.name ?? "",
    place: student.place ?? student.Place ?? "",
    phone: student.phone ?? "",
  };
}

async function readDatabase() {
  const content = await readFile(DB_PATH, "utf8");
  const parsed = JSON.parse(content);

  return {
    ...parsed,
    students: Array.isArray(parsed.students) ? parsed.students : [],
  };
}

async function writeDatabase(database) {
  await writeFile(DB_PATH, `${JSON.stringify(database, null, 2)}\n`, "utf8");
}

export async function getStudents() {
  const database = await readDatabase();
  return database.students.map(normalizeStudent);
}

export async function getStudentById(id) {
  const students = await getStudents();
  return students.find((student) => student.id === Number(id)) ?? null;
}

export async function createStudent(student) {
  const database = await readDatabase();
  const students = database.students.map(normalizeStudent);
  const nextId =
    students.length > 0 ? Math.max(...students.map((item) => item.id)) + 1 : 1;

  const newStudent = normalizeStudent({
    ...student,
    id: nextId,
  });

  await writeDatabase({
    ...database,
    students: [...students, newStudent],
  });

  return newStudent;
}

export async function updateStudent(id, updates) {
  const database = await readDatabase();
  const studentId = Number(id);
  let updatedStudent = null;

  const students = database.students.map((item) => {
    const student = normalizeStudent(item);

    if (student.id !== studentId) {
      return student;
    }

    updatedStudent = normalizeStudent({
      ...student,
      ...updates,
      id: studentId,
    });

    return updatedStudent;
  });

  if (!updatedStudent) {
    return null;
  }

  await writeDatabase({
    ...database,
    students,
  });

  return updatedStudent;
}

export async function deleteStudent(id) {
  const database = await readDatabase();
  const studentId = Number(id);
  const students = database.students.map(normalizeStudent);
  const nextStudents = students.filter((student) => student.id !== studentId);

  if (nextStudents.length === students.length) {
    return false;
  }

  await writeDatabase({
    ...database,
    students: nextStudents,
  });

  return true;
}
