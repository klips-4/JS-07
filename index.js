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

    buttonPrefix = 'button-';
    buttonNextId = this.buttonPrefix + 'next';
    buttonBackId = this.buttonPrefix + 'back';

    slideIdPrefix = 'Slide-';
    slideItemIdPrefix = 'slide-item-';

    animateDelay = 1500;
    timer = null;


    constructor() {
        this.init();
        this.timer = setInterval(this._changeSlide.bind(this), this.animateDelay);
    }

    init() {
        $(this._createSelector(this.buttonNextId, true)).on('click', () => {
            this._changeSlide(true);
            if (this.timer) {
                clearInterval(this.timer);
            }
        });
            $(this._createSelector(this.buttonBackId, true)).on('click', () => {
                this._changeSlide(false);
                if (this.timer) {
                    clearInterval(this.timer)
                }
            });
            $(this._createSelector(this.controlPanelButtonClassName)).on('click', (event) => {
                let id = event.target.id;

                if (!id) {
                    id = $(event.target)
                        .parents(this._createSelector(this.controlPanelButtonClassName))[0].id;
                }

                id = id.replace(this.slideIdPrefix, '');
                const numberSlide = Number(id);
                this._changeSlide(null, numberSlide);
            });
        };

        _changeSlide(isNext = true, numberSlide = null)
        {
            const slide = this._getNumberSlide(isNext, numberSlide);
            const slideItemId = this._createSelector(this.slideItemIdPrefix + slide, true)
            const slideButtonId = this._createSelector(this.slideIdPrefix + slide, true)
            if (numberSlide === this.currentSlide) {
                return;
            } else if (numberSlide) {
                this.currentSlide = numberSlide;
            }

            $(this._createSelector(this.activeSlideClassName))
                .removeClass(this.activeSlideClassName);

            $(this._createSelector(this.activeControlButtonClassName))
                .removeClass(this.activeControlButtonClassName)

            $(slideItemId).addClass(this.activeSlideClassName);
            $(slideButtonId).addClass(this.activeControlButtonClassName)

        }

        _getNumberSlide(isNext, numberSlide = null)
        {
            if (numberSlide) {
                return numberSlide;
            }

            isNext ? this.currentSlide++ : this.currentSlide--;

            if (this.currentSlide < 1) {
                this.currentSlide = this.maxSlide;
            } else if (this.currentSlide > this.maxSlide) {
                this.currentSlide = 1;
            }

            return this.currentSlide;
        }

        _createSelector(name, isId = false)
        {
            return (isId ? '#' : '.') + name;
        }


    }

    const
    slider = new Slider();