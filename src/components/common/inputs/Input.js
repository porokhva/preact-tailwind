import { h } from 'preact'

const Input = (props) => {
  console.log(props)
  return (
    <div class="flex flex-col input-field">
      <input placeholder="Login" class=" input" />
      <p class="error-text">123</p>
    </div>
  )
}

export default Input
