function User (props) {
    return ( 
        <div className="container">
        <span className={props.online?"pro online":"pro offline"}>{props.online?"ONLINE":"OFFLINE" }</span>
        <img src={props.profile} className="img" alt="" />
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.discription}</p>
        <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
        </div>
        <div className="skills">
        <h4>Skills</h4>
        <ul> {props.skills.map((skill,index)=>(
          <li key={index}>{skill}</li>
        ))} </ul>
      </div>
    </div>
    );
}
export const UserCard = () => {
  return (
            <User name="Ariprasanth R" city="Chennai" discription="Frontend Developer" 
            skills={["UI/UX","Frontend developer","HTML","CSS","JacaScript","React","Node"]}
            profile="images/Image 1.jpg" online={true}/>
      );
};
