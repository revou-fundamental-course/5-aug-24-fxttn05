document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get input values
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);
    const height = heightCm / 100; // Convert cm to meters
    
    // Validate inputs
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Please enter valid values.');
        return;
    }
    
    // Calculate BMI
    const bmi = weight / (height * height);
    
    // Interpret BMI result
    let interpretation = '';
    if (bmi < 18.5) {
        interpretation = 'Anda kekurangan berat badan.';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation = 'Berat badan Anda ideal.';
    } else if (bmi >= 25 && bmi <= 29.9) {
        interpretation = 'Anda memiliki berat badan berlebih.';
    } else {
        interpretation = 'Anda mengalami obesitas.';
    }
    
    // Display the result
    document.getElementById('bmiResult').textContent = `BMI Anda: ${bmi.toFixed(1)}`;
    document.getElementById('bmiInterpretation').textContent = interpretation;
    document.getElementById('resultSection').style.display = 'block';
});
