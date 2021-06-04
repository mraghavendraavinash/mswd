import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";



const Heading = (props) => <h4>{props.text}</h4>;


const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

const Anecdote = (props) => {
  return (
    <>
      <b>" {props.anecdote} "</b>
      <br />
      
      Number of votes this anecdote has voted: {props.votes}
      <br />
    </>
  );
};

const MostVoted = (props) => {
  return (
    <>
      <Heading text="Most Voted Anecdote" />
      {!props.hasVotes && <>No anecdotes have been voted .</>}
      {props.hasVotes && (
        <Anecdote anecdote={props.anecdote} votes={props.votes} />
      )}
    </>
  );
};









const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(props.anecdotes.length).fill(0));
  const [hasVotes, setHasVotes] = useState(false);

  const getRandomIdx = (length) => {
    return Math.floor(Math.random() * length);
  };

  const setNewRandomAnecdote = () => {
    let randomAnecdoteIdx;

    do {
      randomAnecdoteIdx = getRandomIdx(props.anecdotes.length);
    } while (randomAnecdoteIdx === selected);

    setSelected(randomAnecdoteIdx);
  };

  const incrementVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
    setHasVotes(true);
  };

  const handleButtonClick = (type) => {
    switch (type) {
      case "next":
        setNewRandomAnecdote();
        break;
      case "vote":
        incrementVote();
        break;
      default:
        break;
    }
  };






  const maxVote = votes.reduce(
    (acc, num, idx) => {
      if (num > acc.num) {
        acc.num = num;
        acc.idx = idx;
      }

      return acc;
    },
    { num: 0 }
  );

  const maxVotedAnecdote = anecdotes[maxVote.idx];

  return (
    <div>
      <Heading text="Anecdote of the Day" />
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <br />
      <Button onClick={() => handleButtonClick("vote")} text="Vote" />
      <Button onClick={() => handleButtonClick("next")} text="Next Anecdote " />
      <MostVoted
        hasVotes={hasVotes}
        anecdote={maxVotedAnecdote}
        votes={maxVote.num}
      />
    </div>
  );
};




// additionally i have added some anecdotes

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "gentlemen you cant't fight in here there is the war room",
  "Before you marry a person, you should first make them use a computer with slow Internet to see who they really are.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Premature optimization is the root of all evil.",


];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
export default App