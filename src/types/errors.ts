export interface MethodNotAllowedResponse {
  /**
   * A message describing the error.
   */
  message: string;
}

export interface NotFoundResponse {
  /**
   * A message describing the error.
   */
  message: string;
}

export interface UnprocessableContentResponse {
  /**
   * A message describing the error.
   */
  message: string;
  /**
   * A list of validation errors.
   * The keys are the field names and the values are the validation errors.
   *
   * @example { "name": ["The name field is required."] }
   */
  errors: Record<string, string[]>;
}

export interface InternalServerErrorResponse {
  /**
   * A message describing the error.
   */
  message: string;
}
