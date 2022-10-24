/**
 * It clears the form with the id passed in as the first argument
 * @param {string} elementToClearById - The id of the form element to clear.
 * @returns A boolean value
 */
export const clearForm = (elementToClearById: string): boolean => {
  let didClearForm = false;
  const form = document.getElementById(elementToClearById) as HTMLFormElement | null;
  if (form !== null) {
    form.reset();
    didClearForm = true;
  }
  return didClearForm;
};
