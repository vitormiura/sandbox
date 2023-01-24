import { useRouter } from "next/router";
import Link from "next/link";
import { trpc } from "../utils/trpc";

export default function NotesDetail() {
  const router = useRouter();
  const NotesId = router.query.id as string;
  const { data: messageDetail, isLoading } = trpc.mynotes?.detailNote.useQuery({
    id: NotesId,
  });

  if (isLoading) return <>Loading...</>;

  return (
    <>
      <main className="mx-auto flex min-h-screen flex-col py-10 sm:container">
        <Link
          className="indigo-700 inline-block py-4 text-base font-semibold leading-7 text-green-700"
          href="/"
        >
          Go back
        </Link>
        <h1 className="mb-8 text-3xl font-bold tracking-tight sm:text-left sm:text-3xl">
          Note details
        </h1>
        <div className="mb-5">{messageDetail?.id}</div>
        <h6 className="mb-5">{messageDetail?.title}</h6>
        <p className="mb-5">{messageDetail?.description}</p>
      </main>
    </>
  );
}
