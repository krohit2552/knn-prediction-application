const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Helper Function to Generate Random Dataset
function generateRandomDataset(size, range) {
  const dataset = [];
  for (let i = 0; i < size; i++) {
    const x = Math.random() * range;
    const y = Math.random() * range;
    dataset.push({ x, y });
  }
  return dataset;
}

// API Endpoint to Predict Class
app.post('/predict', (req, res) => {
  const { classA, classB, k, newPoint } = req.body;

  // Placeholder Predict Functionality
  const distance = (p1, p2) =>
    Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
  const allPoints = [
    ...classA.map((p) => ({ ...p, class: 'A' })),
    ...classB.map((p) => ({ ...p, class: 'B' })),
  ];
  const sorted = allPoints
    .map((p) => ({ ...p, distance: distance(p, newPoint) }))
    .sort((a, b) => a.distance - b.distance);
  const nearest = sorted.slice(0, k);
  const classCounts = nearest.reduce(
    (counts, p) => {
      counts[p.class]++;
      return counts;
    },
    { A: 0, B: 0 }
  );
  const predictedClass = classCounts.A > classCounts.B ? 'A' : 'B';

  res.json({ predictedClass });
});

// API Endpoint to Generate Random Dataset
app.get('/generate-dataset', (req, res) => {
  const { size = 10, range = 100 } = req.query;

  const classA = generateRandomDataset(Number(size), Number(range));
  const classB = generateRandomDataset(Number(size), Number(range));

  res.json({ classA, classB });
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
