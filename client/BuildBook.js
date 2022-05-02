import React, {useState, useEffect, useLayoutEffect, useRef} from 'react';
import Draggable, {DraggableCore} from 'react-draggable'
import Draw from './Draw'

const characters = [
    {   id: 11,
        title: '',
        image: "https://i.ibb.co/jHLTXyn/robot1.png"
    },
    {   id: 12,
        title: '',
        image: "https://i.ibb.co/4fxypNZ/robot2.png"
    },
    {   id: 13,
        title: '',
        image: "https://i.ibb.co/Fn996NC/robot3.png"
    }
]

const pageBackgrounds = [
    {   id:1,
        title: "desert",
        image: 'https://images.unsplash.com/photo-1547235001-d703406d3f17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80'},
    {   id:2,
        title: "forest",
        image: 'https://images.unsplash.com/photo-1542202229-7d93c33f5d07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'},
    {   id:3,
        title: "beach",
        image: "https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
    ]


const BuildBooks = () => {
    const [background, setBackground] = useState('');
    const [positions, setPositions] = useState({x:0, y:0})

    const trackPos = (data) => {
        setPositions({x: data.x, y: data.y})
    }

    useEffect(() => {
      }, []);


    // useLayoutEffect( () =>{
    //     const canvas = document.getElementById('canvas');
    //     const ctx = canvas.getContext('2d');

    // })


    return  (
        <div>
            <div className="title">
                <h1 >Build A Book</h1>
            </div>
            <div>
                <div>
                    <p className="select">Select background:</p>
                    <div className="backgroundContainer">
                    {pageBackgrounds.map((ground, index)=>(
                        <div key={index} onClick={()=>setBackground(ground.image)}>
                            <img className="pageImage" src={ground.image} />
                        </div>
                    ))}
                    </div>
                </div>
            </div>  
            <div className="buildpage">
                <div className='charactersCol'>
                    <p>Select characters:</p>
                    <div>
                        {characters.map((character, index)=>(
                            <>
                            <Draggable
                                onDrag={(e, data) => trackPos(data)}
                                    >
                                <div key={index}>
                                    <img src={character.image} className="character"/>
                                </div>
                           </Draggable>
                            </>
                        ))}
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${background})`}} className="page">
                    <canvas id="canvas" width={window.innerWidth} height={window.innerHeight}></canvas>
                </div>
            </div>
            <button>Save Page</button>
        </div>)
}

export default BuildBooks