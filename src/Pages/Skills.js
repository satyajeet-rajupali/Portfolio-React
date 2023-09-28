import React from 'react'
import reacticon from '../Data/skillIcons/react.png'
import css from '../Data/skillIcons/css3.png'
import html from '../Data/skillIcons/html.png'
import jss from '../Data/skillIcons/jss.png'
import cpp from '../Data/skillIcons/cpp.png'
import python from '../Data/skillIcons/python.png'
import hub from '../Data/skillIcons/hub.png'
import git from '../Data/skillIcons/git.png'


const Skills = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img className="image-fluid mx-1 my-1" src={html} alt="skill" style={{ height: '7vh', width: '7vh' }} />
                    <img className="image-fluid mx-1 my-1" src={css} alt="skill" style={{ height: '7vh', width: '7vh' }} />
                    <img className="image-fluid mx-1 my-1" src={jss} alt="skill" style={{ height: '7vh', width: '7vh' }} />
                    <img className="image-fluid mx-1 my-1" src={reacticon} style={{ height: '7vh', width: '7vh' }} alt="skill" />
                    <img className="image-fluid mx-1 my-1" src={cpp} alt="skill" style={{ height: '7vh', width: '7vh' }} />
                    <img className="image-fluid mx-1 my-1" src={python} alt="skill" style={{ height: '7vh', width: '7vh' }} />
                    <img className="image-fluid mx-1 my-1" src={hub} alt="skill" style={{ height: '7vh', width: '7vh' }} />
                    <img className="image-fluid mx-1 my-1" src={git} alt="skill" style={{ height: '7vh', width: '7vh' }} />
                </div>
            </div>
        </div>
    );
}

export default Skills;