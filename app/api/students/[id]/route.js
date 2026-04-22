import {
  deleteStudent,
  getStudentById,
  updateStudent,
} from "../../../../src/lib/studentStore";

export async function GET(_request, { params }) {
  const { id } = await params;
  const student = await getStudentById(id);

  if (!student) {
    return Response.json({ message: "Student not found" }, { status: 404 });
  }

  return Response.json(student);
}

export async function PUT(request, { params }) {
  const { id } = await params;
  const body = await request.json();
  const student = await updateStudent(id, body);

  if (!student) {
    return Response.json({ message: "Student not found" }, { status: 404 });
  }

  return Response.json(student);
}

export async function DELETE(_request, { params }) {
  const { id } = await params;
  const deleted = await deleteStudent(id);

  if (!deleted) {
    return Response.json({ message: "Student not found" }, { status: 404 });
  }

  return new Response(null, { status: 204 });
}
