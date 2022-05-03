import { useEffect, useState } from "react";
import { EmployeeInterface } from "../../types/employees";
import EmployeesService from "../../api/employees/employees.service";

export function useEmplyees() {
  const [employees, setEmployees] = useState<EmployeeInterface[]>([]);
  const [currentEmployee, setEmployee] = useState<EmployeeInterface>();

  const getEmpleeyees = async () => {
    EmployeesService.getEmployees().then((res: EmployeeInterface[]) => {
      setEmployees(res);
    });
  };

  const getEmployee = async (_id: string) => {
    EmployeesService.getEmployee(_id).then((res: EmployeeInterface) => {
      setEmployee(res);
    });
  };

  const createEmployee = EmployeesService.createEmployee;

  const updateEmployee = EmployeesService.updateEmployee;

  useEffect(() => {
    getEmpleeyees();
    //to catch the changes of the employees array json is the best to catch the diff
  }, [JSON.stringify(employees)]);

  return {
    employees,
    currentEmployee,
    getEmployee,
    setEmployee,
    createEmployee,
    updateEmployee,
  };
}
