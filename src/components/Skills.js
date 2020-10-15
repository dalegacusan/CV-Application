import React from 'react';
import Button from './button/Button';

export default function Skills(){
    return (
        <div className="categoryBox">
            <p>Skills</p>
            <hr/>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <input type="text" className="form-control" id="inputSkill" placeholder="Skill Description" />
                            <button type="button" className="btn btn-primary">Add Skill</button>
                    </div>
                </div>
                <div className="form-row d-flex flex-row-reverse">
                    <Button type="submit" class="btn btn-success" value="Save"/>
                </div>
            </form>
        </div>
    );
}