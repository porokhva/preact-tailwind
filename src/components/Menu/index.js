import { h } from 'preact'
import { Link } from 'preact-router/match'

const Header = () => (
  <aside class="bg-grey-lightest w-full p-2 flex-auto side-menu">
    <div class="flex flex-col">
      <Link class="text-orange mr-2" href="/">
        Home
      </Link>
      <Link class="text-orange mr-2" href="/profile">
        Me
      </Link>
      <Link class="text-orange mr-2" href="/profile/john">
        John
      </Link>
      <Link class="text-orange mr-2" href="/login">
        Login
      </Link>
    </div>
  </aside>
)

export default Header
