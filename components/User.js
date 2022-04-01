import Link from 'next/link'
export default function User({user}) {
  return (
    <Link href='user/user[id]' as={`/user/${user.id}`}>
        <a>
            {user.username}
        </a>
    </Link>
  )
}
