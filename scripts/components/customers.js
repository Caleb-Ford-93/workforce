import { getEmployeeCustomers } from "../managers/employeeCustomerManager.js"
import { getEmployees } from "../managers/employeeManager.js"

export const CustomerList = async () => {
   const employeeCustomers = await getEmployeeCustomers()
   const employees = await getEmployees()

   const customerHTML = `
                ${
                    employeeCustomers.map(empCust => {
                        const relationships = employees.filter(employee => empCust.employeeId.includes(employee.id))
                        const assignedEmployees = relationships.map(rel => { return `<li>${rel.firstName} ${rel.lastName}</li>`}).join("")
                        return `<p>${empCust.customer.name} has the following employees assigned:</p>
                                <ul>
                                ${assignedEmployees}
                                </ul>
                        `
                    }).join("")
                }
   `
   return customerHTML
}