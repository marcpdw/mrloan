import Axios from 'axios'

class FactorialServer {

  constructor() {}

  getEmployees() {
    return Axios.get('https://api.factorialhr.com/api/v1/employees')
  }
}

const Factorial = new FactorialServer()
export default Factorial
