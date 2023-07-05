import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container">
        <h1 className="text-center"> JavaScript Quiz App</h1>
      </div>

      <div className="container flex gap-7 justify-center items-center">
        <Link href="/htmlquiz">
          <button>Start HTML Quiz</button>
        </Link>

        <Link href="/cssquiz">
          <button>Start CSS Quiz</button>
        </Link>
        <Link href="/javascriptquiz">
          <button>Start javaScript Quiz</button>
        </Link>
      </div>
    </main>
  );
}
