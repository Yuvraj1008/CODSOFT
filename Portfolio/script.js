document.addEventListener('DOMContentLoaded', () => {
    const recommendBtn = document.getElementById('recommend_btn');
    const recommendationInput = document.getElementById('new_recommendation');
    const recommendationContainer = document.getElementById('all_recommendations');
    const popup = document.getElementById('popup');

    recommendBtn.addEventListener('click', () => {
        const recommendationText = recommendationInput.value.trim();

        if (recommendationText === "") {
            alert("Please enter a recommendation.");
            return;
        }

        const newRecommendation = document.createElement('div');
        newRecommendation.className = 'recommendation';
        newRecommendation.innerHTML = `
            <span aria-hidden="true">&#8220;</span>
            ${recommendationText}
            <span aria-hidden="true">&#8221;</span>
        `;

        recommendationContainer.appendChild(newRecommendation);
        recommendationInput.value = '';

        showPopup();
    });

    function showPopup() {
        popup.style.display = 'block';
        setTimeout(() => {
            popup.style.display = 'none';
        }, 3000);
    }
});
