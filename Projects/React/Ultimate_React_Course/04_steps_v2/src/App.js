import { useState } from "react";

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

export default function App() {
    /* 	useState will update the step variable; this has to be `const`  */
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true); // display a div

    function handlePrevious() {
        if (step > 1) setStep(step - 1);
    }

    function handleNext() {
        if (step < 3) {
            setStep((s) => s + 1); // 's' = step
            // setStep((s) => s + 1);      // jump forward twice
        }
    }

    return (
        <>
            <button
                className="close"
                onClick={() => setIsOpen((isOpen) => !isOpen)}
            >
                &times;
            </button>
            {isOpen && ( // this is a state variable to display the following content
                <div className="steps">
                    <div className="numbers">
                        {/* add classes conditionally */}
                        <div className={step >= 1 ? "active" : ""}>1</div>
                        <div className={step >= 2 ? "active" : ""}>2</div>
                        <div className={step >= 3 ? "active" : ""}>3</div>
                    </div>

                    <StepMessage step={step}>{messages[step - 1]}</StepMessage>

                    <div className="buttons">
                        <Button
                            bgColor="#7950f2"
                            textColor="#fff"
                            onClick={handlePrevious}
                        >
                            <span>👈 Previous</span>
                        </Button>

                        <Button
                            bgColor="#7950f2"
                            textColor="#fff"
                            onClick={handleNext}
                        >
                            Next <span>👉</span>
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
}

function StepMessage({ step, children }) {
    return (
        <p className="message">
            <h3>Step {step}:</h3>
            {children}
        </p>
    );
}

function Button({ textColor, bgColor, onClick, children }) {
    return (
        <button
            style={{ backgroundColor: bgColor, color: textColor }}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
