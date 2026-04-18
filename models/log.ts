import { StatusType } from "../utils/logger";

export class Log {
  status: StatusType;
  message: string;
  data: any;

  constructor(status: StatusType, message: string, data: any = null) {
    this.status = status;
    this.message = message;
    this.data = data;
  }
}
