function createCounter(buttonId, spanId) {
    let count = 0;
    const button = document.getElementById(buttonId);
    const span = document.getElementById(spanId)

    button.addEventListener("click", () => {
        count++;
        span.innerText = count;
    });
}

createCounter("button1", "neil");
createCounter("button2", "nichola");
createCounter("button3", "jim");
