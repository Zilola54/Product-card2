class Modal {
  constructor(modalId) {
    this.modalElement = document.getElementById(modalId);
    this.initCloseEvents();
  }

  open() {
    this.modalElement.classList.add('modal-showed');
  }

  close () {
    this.modalElement.classList.remove('modal-showed');
   }
  isOpen() {
    return this.modalElement.classList.contains('modal-showed');
  }
  initCloseEvents() {
    const closeBtn = this.modalElement.querySelector('.close-cross');
    closeBtn.addEventListener('click', () => this.close());
  }
}
export default Modal;