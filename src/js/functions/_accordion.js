export default class Accordion {
  constructor(element) {
    this.element = element;
    this.summary = element.querySelector('summary');
    this.content = element.querySelector('summary + div');
    this.animation = null;
    this.isClosing = false;
    this.isExpanding = false;
    this.summary.addEventListener('click', e => {
      this.onClick(e);
    });
  }

  onClick(e) {
    e.preventDefault();
    this.element.style.overflow = 'hidden';

    if (this.isClosing || !this.element.open) {
      this.open();
    } else if (this.isExpanding || this.element.open) {
      this.shrink();
    }
  }

  shrink() {
    this.isClosing = true;

    const startHeight = `${this.element.offsetHeight}px`;
    const endHeight = `${this.summary.offsetHeight}px`;

    if (this.animation) {
      this.animation.cancel();
    }

    this.animationElement(startHeight, endHeight);

    this.animation.onfinish = () => this.onAnimationFinish(false);

    this.animation.oncancel = () => (this.isClosing = false);
  }

  open() {
    this.shrink();

    this.element.style.height = `${this.element.offsetHeight}px`;

    this.element.open = true;
    // Wait for the next frame to call the expand function
    window.requestAnimationFrame(() => this.expand());
  }

  animationElement(startHeight, endHeight) {
    this.animation = this.element.animate({
      // Set the keyframes from the startHeight to endHeight
      height: [startHeight, endHeight],
    }, {
      duration: 400,
      easing: 'ease',
    });
  }

  onAnimationFinish(open) {
    // Set the open attribute based on the parameter
    this.element.open = open;
    // Clear the stored animation
    this.animation = null;
    // Reset isClosing & isExpanding
    this.isClosing = false;
    this.isExpanding = false;
    // Remove the overflow hidden and the fixed height
    this.element.style.height = this.element.style.overflow = '';
  }

  expand() {
    // Set the element as "being expanding"
    this.isExpanding = true;
    // Get the current fixed height of the element
    const startHeight = `${this.element.offsetHeight}px`;
    // Calculate the open height of the element (summary height + content height)
    const endHeight = `${
      this.summary.offsetHeight + this.content.offsetHeight
    }px`;

    // If there is already an animation running
    if (this.animation) {
      // Cancel the current animation
      this.animation.cancel();
    }

    this.animationElement(startHeight, endHeight);

    // When the animation is complete, call onAnimationFinish()
    this.animation.onfinish = () => this.onAnimationFinish(true);
    // If the animation is cancelled, isExpanding variable is set to false
    this.animation.oncancel = () => (this.isExpanding = false);
  }
}
