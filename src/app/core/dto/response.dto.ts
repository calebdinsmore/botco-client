export interface ResponseDto<T> {
  success: boolean;
  message: string;
  result: T;
}
