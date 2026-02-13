document.getElementById("heartForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = {
        age: parseInt(document.getElementById("age").value),
        cholesterol: parseInt(document.getElementById("cholesterol").value),
        bloodPressure: parseInt(document.getElementById("bloodPressure").value),
        smoking: document.getElementById("smoking").value,
        diabetes: document.getElementById("diabetes").value
    };

    const response = await fetch("/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    document.getElementById("result").innerText = result.prediction;
});
