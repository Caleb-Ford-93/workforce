export const getEmployeeCustomers = async () => {
    const response = await fetch("http://localhost:8088/employeeCustomers?_expand=customer")
    return await response.json()
}