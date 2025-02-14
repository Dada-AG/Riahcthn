document.addEventListener("DOMContentLoaded", function () {
    // Confirm Vote Functionality (when confirm button is clicked)
    document.querySelectorAll(".vote-btn").forEach(button => {
        button.addEventListener("click", function () {
            const candidateName = this.closest('.participant').querySelector('h3').innerText;
            alert(`You have voted for ${candidateName}! Your vote has been recorded.`);
        });
    });
});
