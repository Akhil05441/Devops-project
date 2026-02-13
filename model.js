function predictHeartDisease(data) {
    let riskScore = 0;

    if (data.age > 50) riskScore++;
    if (data.cholesterol > 240) riskScore++;
    if (data.bloodPressure > 140) riskScore++;
    if (data.smoking === "yes") riskScore++;
    if (data.diabetes === "yes") riskScore++;

    return riskScore >= 3
        ? "High Risk of Heart Disease"
        : "Low Risk of Heart Disease";
}

module.exports = predictHeartDisease;
