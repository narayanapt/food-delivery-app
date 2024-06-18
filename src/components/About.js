import User from "./User";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component {
    
    constructor() {
        super();
        this.state = {
            name : "dummy name",
            location: "dummy location",
            contact : "dummy email",
            img: "dummy url"
        };
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/narayanapt");
        const json = await data.json();
        this.setState(
            this.state = {
                name:json.name,
                location:json.location,
                contact:json.login,
                img: json.avatar_url
            }
        );
        console.log(json);
        
    }
    
    render() {

        const {name,location,contact,img} = this.state;

        return (
            <div>
                <h1>About Us</h1>
                <h2>This is the About Us Page for the app</h2>
                
                <UserClass img={img} name={name} location={location} contact={contact + "@gmail.com"} />
            </div>
        );

    }
}

export default About;