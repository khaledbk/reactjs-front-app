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
}

export default new Employees();
