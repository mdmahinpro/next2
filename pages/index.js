import Link from "next/link";

export default function Home({ users }) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-emerald-500 text-center">
        Welcome Web Developers
      </h1>
      {users.map((user) => (
        <div key={user.id}>
          <Link href={`/user/${user.id}`}>
            <h1 className="text-3xl shadow-md m-4 p-4 text-gray-500 hover: border-l-2 hover:border-orange-400">
              {user.name}
            </h1>
          </Link>
        </div>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
};
