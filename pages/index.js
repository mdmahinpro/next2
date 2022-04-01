import UserList from "../components/UserList"

export default function Home({users}) {
  return (
    <div>
       <h1 className="text-3xl font-bold text-emerald-500 text-center">Welcome Web Developers</h1>
        <UserList users={users}></UserList>
    </div>
  )
}

export async function getStaticProps(){
  const  res=await fetch('https://jsonplaceholder.typicode.com/users')
  const data=await res.json()
  return {
    props:{
      users:data
    }
  }
}
