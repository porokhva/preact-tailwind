import { observable } from 'mobx'

export class rootStore {
  @observable login = ''
}
export default new rootStore()
