export const Card = ({ fullName, userName, designation, age, email, phone, dateOfBirth, address, imageSrc, gender }) => {
    return (
        <div className="user-card">
            <div>
                <div>
                    <img src={imageSrc} alt="Avatar" className="user-avatar" />
                </div>
                <div className="user-info-holder">
                    <h2 className="name">{fullName}</h2>
                    <h3 className="user-name">UserName: {userName}</h3>
                    <div className="skill">Designation: {designation}</div>
                    <div className="skill">Gender: {gender}</div>
                    <div className="age">Age: <span>{age}</span></div>
                    <div className="email">email: <span>{email}</span></div>
                    <div className="phone">phone: <span>{phone}</span></div>
                    <div className="date-birth">Date of Birth birthdate: <span>{dateOfBirth}</span></div>
                    <div className="address">Address: <span>{address}</span></div>
                </div>
            </div>
        </div>
    )
}
