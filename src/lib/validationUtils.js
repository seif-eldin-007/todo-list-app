// lib/validationUtils.js
export function formatZodError(error) {
  return {
    message: "Validation failed",
    errors: error.flatten(),
  };
}
