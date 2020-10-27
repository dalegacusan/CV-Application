export function handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
}

// (Add Button) Retrieve Input
export function handleRetrieveInput(e, thisValue, arrayName) {

    // Plural = arrayName
    // Singular = state

    // Button Name
    const { name } = e.target;

    // props.setArray is connected to setComponentArray below
    thisValue.props.setArray(thisValue.state[name], arrayName);

    thisValue.setState({ [name]: '' });
}

// Called when Add Button is Clicked
export function setComponentArray(inputText, arrayName) {
    this.setState(currState => {
        return { [arrayName]: [...currState[arrayName], inputText] };
    });
}

export function handleSubmit(e, buttonClicked) {

    if (buttonClicked === "submitAchievement") {
        // Don't skip - push to education array
        this.props.handleInformationSubmit(e, "achievements", this.state, false);
    } else if (buttonClicked === "newAchievement") {
        // Clear values of form
        this.setState({
            companyName: '',
            position: '',
            contributions: []
        });
    } else if (buttonClicked === "nextComponent") {
        // Skip - don't push anything education array
        this.props.handleInformationSubmit(e, "achievements", this.state, true);
    }

}

