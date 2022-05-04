import { useEffect, useState } from "react";
import { EmployeeInterface } from "../../types/employees";
import EmployeesService from "../../api/employees/employees.service";
import { assign, forOwn, findIndex } from "lodash";

export function useEmplyees() {
  const [employees, setEmployees] = useState<EmployeeInterface[]>([]);
  const [currentEmployee, setEmployee] = useState<EmployeeInterface>();
  const [employeesFilter, setEmployeesFilter] = useState({
    query: {
      AND: [
        {
          match: {
            field: "credentials.isAdmin",
            condition: {
              eq: false,
            },
          },
        },
        {
          OR: [],
        },
      ],
    },
  });

  const createFilter = (key: string, value: any) => {
    return {
      match: {
        field: `${key}`,
        condition: {
          ctn: value,
        },
      },
    };
  };

  const handleSetFilter = (filters: any) => {
    let filter: any = [];
    forOwn(filters, (value: any, key: string) => {
      let index = findIndex(filter, (item: any) => item.match.field === key);
      if (index === -1) {
        filter.push(createFilter(key, value));
      } else {
        filter[index](createFilter(key, value));
      }
    });

    setEmployeesFilter(
      assign({}, employeesFilter, {
        query: {
          AND: [
            {
              match: {
                field: "credentials.isAdmin",
                condition: {
                  eq: false,
                },
              },
            },
            {
              OR: filter,
            },
          ],
        },
      })
    );
  };

  const getEmployees = async (filter: any) => {
    EmployeesService.getEmployees(filter).then((res: EmployeeInterface[]) => {
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

  const deleteEmployee = EmployeesService.deleteEmployee;

  const refetchList = () => {
    getEmployees(employeesFilter);
  };

  useEffect(() => {
    refetchList();
    console.log("Employees List filtred in the hook", employees);
    //console.log(JSON.stringify(employees));
    //to catch the changes of the employees array json is the best to catch the diff
  }, [JSON.stringify(employees), employeesFilter]);

  return {
    employees,
    currentEmployee,
    getEmployee,
    setEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    handleSetFilter,
    refetchList,
  };
}
