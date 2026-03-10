document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('#display');
    const buttons = document.querySelector('.buttons');

    buttons.addEventListener('click', event => {
        // Ensure we're clicking a button
        if (!event.target.matches('button')) {
            return;
        }

        const button = event.target;
        const action = button.dataset.action;
        const buttonValue = button.dataset.value;
        const displayedNum = display.value;

        // Handle number and operator buttons
        if (buttonValue) {
             if (displayedNum === '0' || displayedNum === 'Error') {
                display.value = buttonValue;
            } else {
                display.value += buttonValue;
            }
        }

        // Handle action buttons (clear, delete, calculate)
        if (action) {
            switch (action) {
                case 'clear':
                    display.value = '0';
                    break;
                case 'delete':
                    if (display.value.length > 1) {
                        display.value = display.value.slice(0, -1);
                    } else {
                        display.value = '0';
                    }
                    break;
                case 'calculate':
                    try {
                        // Use a safer evaluation method if possible in production,
                        // but eval() is simple for this example.
                        const result = eval(displayedNum.replace('x', '*').replace('÷', '/'));
                        display.value = result;
                    } catch {
                        display.value = 'Error';
                    }
                    break;
            }
        }
    });
});
