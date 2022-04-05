import { useRouter } from "next/router";
import { useEffect } from "react";

const User = ({ user }) => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="shadow-2xl m-20 p-10 text-center">
      <h1 className="text-2xl text-blue-400">Hello I am {user.name}</h1>
      <p>My email is {user.email}</p>
      <p>My company name is {user.company.name}</p>
    </div>
  );
};

export default User;

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await res.json();
  const paths = users.map((user) => {
    return { params: { id: user.id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
};
