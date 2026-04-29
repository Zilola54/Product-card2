export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.#initOpen(buttonId);
  }

  handleOverlayClick = (event) => {
    if (event.target === this.overlay) {
      this.close();
    }
  }

  open = () => {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');

    if (this.shouldCloseOnOverlay) {
      this.overlay.removeEventListener('click', this.handleOverlayClick);
      this.overlay.addEventListener('click', this.handleOverlayClick);
    }

    const closeBtn = this.modal.querySelector('.modal-close-button');
    if (closeBtn) {
      closeBtn.onclick = this.close;
    }
  }

  close = () => {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');
    this.overlay.removeEventListener('click', this.handleOverlayClick);
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener('click', () => this.open());
    } else {
      console.error(`Кнопка с id "${buttonId}" не найдена!`);
    }
  }
}