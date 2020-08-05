import React from "react";
import { Bar } from "react-chartjs-2";

function AboutMe() {
  const barChart = (
    <Bar
      data={{
        labels: [
          "React",
          "HTML/CSS",
          "API Integration",
          "AWS",
          "JavaScript",
          "Bootstrap",
        ],
        datasets: [
          {
            label: "Skills (out of 100)",
            data: [90, 90, 70, 70, 70, 70],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      }}
      options={{
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        maintainAspectRatio: false,
      }}
      width={100}
      height={100}
    />
  );
  return (
    <section class="whoami" id="about">
      <h2 class="section__title"> about me </h2>
      <div class="about__text">
        <img
          src={require("../images/dev-disha-02.jpg")}
          class="about__img"
        ></img>
        <p>
          I am a second year Computer Science Graduate student at Northeastern
          University, Seattle.
        </p>
        <p>
          I like to keep learning about new technologies, and almost everything
          I know about development is self-taught. Over the past few months,
          I've really been into learning <mark>Frontend Web Development</mark>{" "}
          and
          <mark>Cloud Computing</mark>.
        </p>
        <p>
          A few other skills I have tucked under my academia hat are Java,
          Python, AWS, React, and Docker.
        </p>
        <p>
          When my brain isn't occupied with coding, I'm usually thinking about
          music, coffee, dogs, books, and food.
        </p>
        <br />
      </div>
    </section>
  );
}

export default AboutMe;
