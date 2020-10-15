import React, { useState } from 'react';

export default function Contributions(props) {

    const [contribution, setContribution] = useState("");

    const handleInputChange = (e) => {
        const { value } = e.target;
        setContribution(value);
        props.handleInputChange(contribution);
    }

    const handleContributionClick = () => {
        
    }

    return (
        <div>
            <input type="text" name="contribution" value={contribution} className="form-control" id="inputsContributions" placeholder="Relevant Contributions" onChange={handleInputChange} />
            <button type="button" onClick={handleContributionClick} className="btn btn-primary">Add Contribution</button>
        </div>
    );
}