import { h } from 'preact'
import Input from '../../components/common/inputs/Input'

const Home = () => (
  <div class="flex w-full h-screen">
    <div class="flex flex-col w-2/3 h-full justify-center items-center bg-primary">
      <h1 class="text-white text-2xl text-lg logo-descr">Title</h1>
    </div>
    <div class="flex flex-col w-1/3 h-full bg-white">
      <form class="flex flex-col ">
        <h5 class=" mb-16">Вход</h5>
        <Input />
      </form>
    </div>
  </div>
)

export default Home
