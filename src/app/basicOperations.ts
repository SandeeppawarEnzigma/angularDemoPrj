// import { error } from "console";
import { DocError } from "./errorMethod";

export class calculator {
  public static addValues(a: number, b: any) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return {message: "invalid type", errorCode:"400", statusCode:200, status: true}
      // return DocError.error("invalid type provided", "success", 400, 400)
    }
    return a+b;
  }
}
