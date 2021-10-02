import React, {useState} from 'react'

export default function About() {
    const[myStyle, setMyStyle]=useState({
        color: "black",
        backgroundColor: "white"
    })
    const [btnText, setbBnText] = useState("Enable Dark Mode")
    const toggleStyle=()=>{
        if(myStyle.color==="black"){
            setMyStyle({
                color: "white",
                backgroundColor: "black",
                border: "1px solid white"
            })
            setbBnText("Enable Light Mode")
        }
        else{
            setMyStyle({
                color: "black",
                backgroundColor: "white"
            })
            setbBnText("Enable Dark Mode");
        }
    }
    return (
        <div className="container" style={myStyle} >
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the first item's on Text Util's about page.</strong> Text Utils Enhances Your Typing
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the second item's on Text Util's about page.</strong> Text Utils Enhances Your Typing
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's on Text Util's about page.</strong> Text Utils Enhances Your Typing
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-2">
                <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
            </div>
        </div>
    )
}
