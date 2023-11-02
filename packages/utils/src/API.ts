export type AnyObject = Record<string, unknown> | null;

export type APIResponse = {
  status: 'success' | 'error' | 'info' | 'warning';
  data: AnyObject;
  message: string;
};

export class API {
  static success(data: AnyObject, message: string): APIResponse {
    return { status: 'success', data, message };
  }
  static error(message: string): APIResponse {
    return { status: 'error', data: null, message };
  }
}
