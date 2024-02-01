export interface MethodNotAllowedResponse {
  message: string;
}

export interface NotFoundResponse {
  message: string;
}

export interface UnprocessableContentResponse {
  message: string;
  errors: Record<string, string[]>;
}

export interface InternalServerErrorResponse {
  message: string;
}
