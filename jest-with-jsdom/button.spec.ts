import {LitElement} from 'lit-element';

describe('custom-button', () => {

    it('runs the test', async () => {
        const dummyText = "Web components & JSDOM";
        const buttonElement = window.document.createElement("custom-button") as LitElement;
        buttonElement.setAttribute('buttonText', dummyText);
        window.document.body.appendChild(buttonElement);
        await buttonElement.updateComplete;

        const renderedText = window.document.body.getElementsByTagName('custom-button')[0].textContent;
        expect(renderedText.indexOf(dummyText)).not.toBe(-1);
    })
});
