import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     count : 0,
        //     count2: 10
        // };
    }

    render() {
        const {img, name,location,contact} = this.props;
        // const {count,count2} = this.state;

        return (
            <div className="user-card">
                {/* <h1>Count = {count}</h1>
                <h1>Count2 = {count2}</h1>
                <button onClick={()=> {
                    this.setState(
                        {
                            count : this.state.count + 1,
                            count2 : this.state.count2 - 1
                        }
                    );
                }}>Increase Count and Decrease Count2</button> */}
                <img src={img}></img>
                <h2>{name}</h2>
                <h3>{location}</h3>
                <h3>{contact}</h3>
            </div>
        );
    }
}

export default UserClass;