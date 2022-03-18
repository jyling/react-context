export const Home = ({ user }) => {
  return (
    <div className="justify-content-center">
      <h2>Welcome to the homepage! {user?.name || ""}</h2>
      <p>You can do this, I believe in you.</p>
      <ProfileViewer user={user || ""}/>
    </div>
  );
}


function ProfileViewer({user}) {
  return <div className="d-flex border w-50 mx-auto">
    <div className="d-flex align-items-start p-3">
    <div className="d-flex flex-column p-3">
    <img className="img-thumbnail mb-3" width={120} height={120} src={user.profilePicture} alt="new"/>
    <p>Username: {user.name}</p>
    <p>Email: {user.email}</p>
    <p>UserRole: <span className={'badge bg-primary'}>{user.role}</span></p>
    </div>
    <div className="d-flex justify-content-center h-100 flex-column p-3">
    <p className="">{user.description}</p>
    </div>
    </div>
  </div>
}
