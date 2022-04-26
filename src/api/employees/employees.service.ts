import rest from "../../utils/common";
import get from "lodash/get";
import { AxiosResponse } from "axios";
import { EmployeeInterface } from "../../types/employees";
class Employees {
  async getEmployess(): Promise<EmployeeInterface[]> {
    const data = await rest
      .get("/api/employees")
      .then((res: AxiosResponse): EmployeeInterface[] => get(res, "data", []));
    return data;
  }
}

export default new Employees();
