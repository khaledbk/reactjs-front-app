import rest from "../../utils/common";
import get from "lodash/get";
import { AxiosResponse } from "axios";
import { EmployeeInterface } from "../../types/employees";
class Employees {
  async getEmployees(): Promise<EmployeeInterface[]> {
    const data = await rest
      .get("/api/employees")
      .then((res: AxiosResponse): EmployeeInterface[] => get(res, "data", []));
    return data;
  }

  async getEmployee(_id: string): Promise<EmployeeInterface> {
    const data = await rest
      .get(`/api/employee/${_id}`)
      .then((res: AxiosResponse): EmployeeInterface => get(res, "data", {}));
    return data;
  }

  async createEmployee(): Promise<string> {
    const data = await rest
      .get(`/api/insertEmployee/`)
      .then((res: AxiosResponse): string => get(res, "data", {}));
    return data;
  }

  async updateEmployee(employee: EmployeeInterface): Promise<void> {
    rest.post("/api/updateEmployee", employee);
    return;
  }

  async deleteEmployee(employeeId: string): Promise<boolean> {
    return rest
      .post(`/api/deleteEmployee/`, { employeeId })
      .then((res: AxiosResponse) => {
        const deletResult = get(res, "data", false);
        if (deletResult) return true;
        return false;
      });
  }
}

export default new Employees();
