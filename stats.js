const ctx = document.getElementById("stats");
const labels = ["소개", "프로젝트경험", "수상내역", "대외활동", "맺음말"];
const data = [193, 388, 1126, 215, 367];
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

new Chart(ctx, config);
