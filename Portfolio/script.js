document.getElementById('recommend_btn').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const recommendationText = document.getElementById('new_recommendation').value;

    if (recommendationText.trim() === "") {
        alert("Please enter a recommendation.");
        return;
    }

    const recommendationContainer = document.getElementById('all_recommendations');
    const newRecommendation = document.createElement('div');
    newRecommendation.className = 'recommendation';
    newRecommendation.innerHTML = `<span>&#8220;</span>${name ? name + ': ' : ''}${recommendationText}<span>&#8221;</span>`;
    
    recommendationContainer.appendChild(newRecommendation);
    
    document.getElementById('new_recommendation').value = '';
    document.getElementById('name').value = '';
    
    showPopup(true);
});

function showPopup(isVisible) {
    document.getElementById('popup').style.display = isVisible ? 'block' : 'none';
}
