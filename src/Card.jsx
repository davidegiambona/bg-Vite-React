import profilePic from './assets/mybg.jpg'

function Card() {
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile-picture"></img>
            <h2 className="card-title">davidegiambona</h2>
            <p className="card-text">Appassionate for computer science</p>
        </div>
    );
}

export default Card