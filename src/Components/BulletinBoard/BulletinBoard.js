import React from "react";
import styles from "./BulletinBoard.module.css";

import ReactPost from "./ReactPost/ReactPost";

const BulletinBoard = () => {
  const postArray = [
    {
      id: "1",
      question: "Vad är tre fördelar med att använda React?",
      answer:
        "1.Man kan skapa egna komponenter med JSX, då man kan skriva 'html' i sina javascript-filer. React har en stor community där om man stöter på ett problem så finns det ofta olika lösningar. React-projekt är lätta att hålla uppdaterade, eftersom man kodar komponenter och när man vill ändra något så går man bara till komponenten.",
    },

    {
      id: "2",
      question: "Vad är tre nackdelar med att använda React?",
      answer:
        "1. Att utvecklingen går fort, därför måste utvecklare anpassa sig snabbt till nya sätt att göra saker på. 2. Eftersom att utvecklingen går så snabbt så hinner man inte dokumentera allt ordentligt. 3. Att i React, om man ska göra en app, så måste man importera olika bibliotek för att få en fullt fungerande app. Men alla tycker inte att det är något negativt.",
    },

    {
      id: "3",
      question: "Vad är tre skillnader mellan React och Angular?",
      answer:
        "1. React är en bibliotek, inte ett fullskaligt framework, där react uppdaterar ett virtuellt DOM. Medans Angular är ett framework, där Angular uppdaterar den riktiga DOM-en. 2. React använder JSX, där man kan skriva sin html i sin javascript-fil. Angular använder html-filer för sina komponenter istället. 3. React är skrivet i vanlig Javascript, Angular är skrivet i Typescript som är ett superset av Javascript med fler funktioner osv.",
    },

    {
      id: "4",
      question: "Vad är tre bibliotek man kan använda med React?",
      answer:
        "1. Create-react-app, den bygger upp strukturen för din react-applikation, med filer, verktyg osv. 2. Redux, hanterar appens state. Den hjälper till att connecta components till ett state. Detta gör att man inte längre behöver använda props till exempel. 3. Styled Components, man kan skriva css-syntax direkt i din komponent. Detta hjälper till att inte överskrida andra css-klasser med samma namn.",
    },
  ];

  return (
    <div className={styles.BulletinBoard}>
      {postArray.map((post) => {
        return (
          <ReactPost
            key={post.id}
            id={post.id}
            question={post.question}
            answer={post.answer}
          ></ReactPost>
        );
      })}
    </div>
  );
};

export default BulletinBoard;
