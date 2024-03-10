import React, { useState } from 'react';

const LevelIndicator = () => {
    const [levelTwoClicked, setLevelTwoClicked] = useState(false);
    const [levelThreeClicked, setLevelThreeClicked] = useState(false);
    const [levelFourClicked, setLevelFourClicked] = useState(false);
    const [levelFiveClicked, setLevelFiveClicked] = useState(false);
    const [levelText, setLevelText] = useState('Lowest');

    const levelClick = (level) => {
        switch(level) {
            case 1:
            setLevelTwoClicked(false);
            setLevelThreeClicked(false);
            setLevelFourClicked(false);
            setLevelFiveClicked(false);
            setLevelText("Lowest");
            break;
            case 2:
            setLevelTwoClicked(true);
            setLevelThreeClicked(false);
            setLevelFourClicked(false);
            setLevelFiveClicked(false);
            setLevelText("Low");
            break;
            case 3:
            setLevelTwoClicked(true);
            setLevelThreeClicked(true);
            setLevelFourClicked(false);
            setLevelFiveClicked(false);
            setLevelText("Medium");
            break;
            case 4:
            setLevelTwoClicked(true);
            setLevelThreeClicked(true);
            setLevelFourClicked(true);
            setLevelFiveClicked(false);
            setLevelText("High");
            break;
            case 5:
            setLevelTwoClicked(true);
            setLevelThreeClicked(true);
            setLevelFourClicked(true);
            setLevelFiveClicked(true);
            setLevelText("Highest");
            break;
        }
    }
    return (
        <div className="level-indicator" style={{marginTop: '10px'}}>
        <button data-testid="Level1" className="level-button-clicked level-1" onClick={() => levelClick(1)}></button>
        <button className={levelTwoClicked ? "level-button-clicked level-2" : "level-button level-2"} onClick={() => levelClick(2)}></button>
        <button className={levelThreeClicked ? "level-button-clicked level-3" : "level-button level-3"} onClick={() => levelClick(3)}></button>
        <button className={levelFourClicked ? "level-button-clicked level-4" : "level-button level-4"} onClick={() => levelClick(4)}></button>
        <button className={levelFiveClicked ? "level-button-clicked level-5" : "level-button level-5"} onClick={() => levelClick(5)}></button>
        <p style={{color: 'white'}}>{levelText}</p>
        </div>
    );
};

export default LevelIndicator;
