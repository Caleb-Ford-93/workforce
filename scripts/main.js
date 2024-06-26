import { CustomerList } from "./components/customers.js"
import { EmployeeList } from "./components/employees.js"

const mainContainer = document.querySelector("#container")
const render = async () => {
    const employeeHTML = await EmployeeList()
    const customerHTML = await CustomerList()

    const allHTML = `${employeeHTML}
                     ${customerHTML}
    `

    mainContainer.innerHTML = allHTML
}

render()