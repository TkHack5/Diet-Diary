function openTab(tabName) {
    const tabPanes = document.getElementsByClassName('tab-pane');
    for (let pane of tabPanes) {
        pane.style.display = 'none';
    }
    document.getElementById(tabName).style.display = 'block';
}

function logFood(mealType) {
    const foodInput = document.getElementById(`${mealType}-food`).value;
    const caloriesInput = document.getElementById(`${mealType}-calories`).value;
    if (foodInput && caloriesInput) {
        alert(`Logged ${caloriesInput} calories for ${foodInput} in ${mealType}.`);
    } else {
        alert('Please enter both food item and calorie amount.');
    }
}
