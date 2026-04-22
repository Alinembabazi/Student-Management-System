import { createStudent, getStudents } from "../../../src/lib/studentStore";

export async function GET() {
  const students = await getStudents();
  return Response.json(students);
}

export async function POST(request) {
  const body = await request.json();
  const student = await createStudent(body);

  return Response.json(student, { status: 201 });
}
