import User from "./User";

export default function UserList({users}) {
  return (
    <div>
    {
        users.map(user=>(
            <div className="flex flex-col">
                <User user={user}></User>
            </div>
            
        ))
    }
    </div>
  )
}
