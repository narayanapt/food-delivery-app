const User = (props) => {

    const {name, email, contact} = props;
    return (
        <div className="user-card">
            <h2>{name}</h2>
            <h3>{email}</h3>
            <h3>{contact}</h3>
        </div>
    );
};

export default User;