export const getEmployees = async () => {
    const response = await fetch ("http://localhost:8088/employees?_expand=computer&&_expand=department&&_expand=location")
    return await response.json()
}