export default interface IResult {
  status: "error" | "success",
  message: string,
  error_code?: number,
  data?: any
};