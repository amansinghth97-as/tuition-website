
    /* Typing Effect */
    const words = ["Web Developer", "Frontend Developer", "Student"];
    let i = 0, j = 0;

    function typing() {
        if (i === words.length) i = 0;
        let word = words[i];
        document.getElementById("typing").textContent = word.slice(0, ++j);

        if (j === word.length) {
            i++;
            j = 0;
            setTimeout(typing, 1500);
        } else {
            setTimeout(typing, 120);
        }
    }
    typing();
