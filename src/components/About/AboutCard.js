import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Всем привет, Я <span className="purple">Анель </span>
            из <span className="purple"> Алматы.</span>
            <br />Я начинающий веб-разработчик
            <br />
            <br />
            Люблю эксперименты 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Создаю мудборды
            </li>
            <li className="about-activity">
              <ImPointRight /> Пишу блог о науке
            </li>
            <li className="about-activity">
              <ImPointRight /> Путешествую
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Стремитесь создавать вещи, которые имеют значение!"{" "}
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
