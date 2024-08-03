import { useMoveBack } from '../hooks/useMoveBack';

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <main className="flex h-screen items-center justify-center bg-indigo-950 p-12">
      <div className="flex-0 flex-shrink-1 w-full max-w-4xl rounded-lg border-2 border-indigo-50 bg-indigo-100 p-12 text-center">
        <h1 className="mb-8">
          The page you are looking for could not be found 😢
        </h1>
        <button1
          onClick={moveBack}
          className="rounded-lg bg-orange-500 px-4 py-2 text-white"
        >
          &larr; Go back
        </button1>
      </div>
    </main>
  );
}

export default PageNotFound;
