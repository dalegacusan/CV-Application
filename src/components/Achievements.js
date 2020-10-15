import React, {useState} from 'react';
import Contributions from './Contributions';

export default function Achievements() {

    const [contribution, setContribution] = useState("");
    const [contributionList, setContributionList] = useState([]);

    const handleInputChange = (data) => {
        setContribution(data);
        // setContributionList([...contributionList, contribution]);
    }

    return (
        <div className="categoryBox">
            <p>Achievements</p>
            <hr />
            <form>
                <div className="form-row">
                    <div className="form-group col-12">
                        <label htmlFor="inputCompanyName">Company/Organization Name</label>
                        <input type="text" className="form-control" id="inputCompanyName" placeholder="Company/Organization Name" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputPosition">Position/Role</label>
                        <input type="text" className="form-control" id="inputPosition" placeholder="Position" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputsContributions">Relevant Contributions</label>
                        <Contributions handleInputChange={handleInputChange}/>
                    </div>
                </div>
                <div className="form-row d-flex flex-row-reverse">
                    <button type="submit" className="btn btn-success" value="Save">Save</button>
                </div>
            </form>
        </div>
    );
}