import { Button, Cell, Form, Field, RadioGroup, Radio, Stepper } from 'vant'

export default {
  install(vm) {
    vm.use(Button)
    vm.use(Cell)
    vm.use(Form)
    vm.use(Field)
    vm.use(RadioGroup)
    vm.use(Radio)
    vm.use(Stepper)
  }
}
