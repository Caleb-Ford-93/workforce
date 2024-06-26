import { getEmployeeCustomers } from "../managers/employeeCustomerManager.js"
import { getEmployees } from "../managers/employeeManager.js"

export const EmployeeList = async () => {
    const employees = await getEmployees()
    const customerRelationships = await getEmployeeCustomers()


    const employeeHTML = `
        ${
            employees.map(employee => {
                const relationships = customerRelationships.filter(relationship => relationship.employeeId.includes(employee.id))
                const assignedCustomers = relationships.map(rel => { return `<li>${rel.customer.name}</li>`}).join("")
              const html =  `<div class="employee">
                                <header class="employee__name">
                                    <h1>${employee.firstName} ${employee.lastName}</h1>
                                </header>
                                <section class="employee__computer">
                                    Currently using a ${employee.computer.year} ${employee.computer.model}
                                </section>
                                <section class="employee__department">
                                    Works in the ${employee.department.name} department
                                </section>
                                <section class="employee__location">
                                    Works at the ${employee.location.location} office
                                </section>
                                <section class="employee_customers">
                                    Has worked for the following customers:
                                    <ul>
                                        ${assignedCustomers}
                                    </ul>
                                </section>
                            </div>`
            return html
            
            }).join("") 
        } `
    
        return employeeHTML
    
}