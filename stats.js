const ctx = document.getElementById("stats");
const labels = [
  "Introduction",
  "프로젝트 경험",
  "수상내역/자격증",
  "활동",
  "맺음말",
];
const data = [12, 19, 3, 5, 2, 3];
const config = {
  type: "bar",
  data: {
    labels: labels,
    datasets: [
      {
        data: data,
        borderWidth: 1,
        backgroundColor: [
          "#9ED9D1",
          "#F7523E",
          "#F47E0A",
          "#FCFD38",
          "#837698",
        ],
      },
    ],
  },
  options: {
    responsive: false,
    indexAxis: "y",
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
};

const chart = new Chart(ctx, config);
