import Link from "next/link";
import EditStudent from "../../../../src/EditStudent";

export default function EditStudentPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12 text-slate-900">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 rounded-3xl bg-white p-8 shadow-sm">
        <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-700">
              Student Data
            </p>
            <h1 className="text-3xl font-semibold">Edit Student</h1>
          </div>
          <Link
            href="/"
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
          >
            Back Home
          </Link>
        </div>

        <EditStudent />
      </div>
    </main>
  );
}
