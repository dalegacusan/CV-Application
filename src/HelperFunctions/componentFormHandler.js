export function handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
}

// (Add (+) Button) Retrieve Input
export function handleRetrieveInput(e, thisValue, arrayName) {

    // Plural = arrayName
    // Singular = state

    // Button Name
    const { name } = e.target;

    // props.setArray is connected to setComponentArray below
    thisValue.props.setArray(thisValue.state[name], arrayName);

    thisValue.setState({ [name]: '' });
}

// Called when Add (+) Button is Clicked
// Adds input to component array
export function setComponentArray(inputText, arrayName) {
    this.setState(currState => {
        return { [arrayName]: [...currState[arrayName], inputText] };
    });
}

// Save, Next, Skip Button Handlers
export function handleSubmit(e) {
    const { name, value } = e.target;

    if (value === "save") {
        // Don't skip - push to education array
        this.props.handleInformationSubmit(e, name, this.state, false);

    } else if (value === "newState") {
        // Clear values of form
        this.setState((obj) => {
            const newState = { ...obj };

            for (let item in newState) {
                if (Array.isArray(newState[item])) {
                    newState[item] = "";
                } else if(item === "status"){
                    newState[item] = "Undegraduate";
                } else {
                    newState[item] = "";
                }
            }

            return newState;
        });
    } else if (value === "nextButton") {
        // Skip - don't push anything education array
        this.props.handleInformationSubmit(e, name, this.state, true);
    }
}

