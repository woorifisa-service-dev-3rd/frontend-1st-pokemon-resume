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
        beginAtZero: true,
        font: {
          size: 16,
        },
      },
      y: {
        ticks: {
          font: {
            size: 18,
          },
        },
      },
    },
    plugins: {
      title: {
        display: true,
        align: "start",
        font: {
          size: 30,
        },
        color: "black",
        text: "Base Stats",
      },
      legend: {
        display: false,
      },
    },
  },
};

const chart = new Chart(ctx, config);
