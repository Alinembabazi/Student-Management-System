import StudentTable from "../src/StudentTable";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12 text-slate-900">
      <div className="mx-auto w-full max-w-4xl">
        <StudentTable />
      </div>
    </main>
  );
}
