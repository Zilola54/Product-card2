class Form {
  constructor(formId) {
    this.formElement = document.getElementById(formId);
  }
  getValues() {
    const formData = new FormData(this.formElement);
    return Object.fromEntries(formData.entries());
  }
  isValid() {
     return this.formElement.checkValidity();
  }
  reset() {
    this.formElement.reset();
  }
}

export default Form;