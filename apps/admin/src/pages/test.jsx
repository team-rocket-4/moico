import { useRouter } from "next/router";

export default function TestPage() {
  const { query } = useRouter();

  console.log(query);

  return (
    <div>
      test
      <button
        onClick={async () => {
          const res = await fetch("http://localhost:4000", {
            method: "POST",
          });

          const data = await res.json();

          console.log(data);
        }}
      >
        OK
      </button>
    </div>
  );
}
