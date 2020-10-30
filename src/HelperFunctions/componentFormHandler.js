import { v4 as uuidv4 } from 'uuid';

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
        return { [arrayName]: [...currState[arrayName], { id: uuidv4(), text: inputText }] };
    });
}

// Save, Next, Skip Button Handlers
export function handleSubmit(e) {
    const { name, value } = e.target;

    if (value === "save") {
        // Don't skip - push to education array
        this.props.handleInformationSubmit(e, name, { ...this.state, id: uuidv4() }, false);

    } else if (value === "newState") {
        // Clear values of form
        this.setState((obj) => {
            const newState = { ...obj };

            for (let item in newState) {
                if (Array.isArray(newState[item])) {
                    newState[item] = "";
                } else if (item === "status") {
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

export function handleDelete(e, thisValue, key) {

    const { name, value } = e.target;
    const currState = { ...thisValue.props.state };

    if (name === "achievements" || name === "education") {

        loop1:
        for (let i = 0; i < currState[name].length; i++) {
            const currentObj = currState[name][i];

            loop2:
            for (let j = 0; j < currentObj[value].length; j++) {
                const item = currentObj[value][j];

                if (item.id === key) {
                    currentObj[value].splice(j, 1);

                    break loop1;
                }
            }
        }

    } else {
        for (let i = 0; i < currState[name].length; i++) {
            const currentItem = currState[name][i];

            if (currentItem.id === key) {
                currState[name].splice(i, 1);
                break;
            }
        }
    }

    thisValue.handleEditSubmit(e, "delete", currState);
}