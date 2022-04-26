import { useEffect, useState } from "react";
import { EmployeeInterface } from "../../types/employees";
import EmployeesService from "../../api/employees/employees.service";

export function useEmplyees() {
  const [employees, setEmployees] = useState<EmployeeInterface[]>([]);

  const getEmpleeyees = async () => {
    EmployeesService.getEmployess().then((res: EmployeeInterface[]) => {
      setEmployees(res);
    });
  };

  useEffect(() => {
    getEmpleeyees();
    //to catch the changes of the employees array json is the best to catch the diff
  }, [JSON.stringify(employees)]);

  return {
    employees,
  };
}
