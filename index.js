class Slider {
    currentSlide = 1;
    maxSlide = 6;

    activePrefix = '-active';

    slideClassName = 'Slider__container';
    activeSlideClassName = this.slideClassName + this.activePrefix;
    buttonSlidePrefix = 'Slider-button__';
    buttonBackClassName = this.buttonSlidePrefix + 'back';
    buttonNextClassName = this.buttonSlidePrefix + 'next';
    controlPanelButtonClassName = 'Slider-controlPanel__button';
    activeControlButtonClassName = this.controlPanelButtonClassName + this.activePrefix;

    _createSelector(name, isId = false) {
        return (isId ? '#' : '.') + name;
    }
}