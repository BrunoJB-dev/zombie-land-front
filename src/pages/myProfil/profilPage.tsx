import MyProfile from "../../components/myProfil/myProfil";


import "./profilPage.scss"

function ProfilePage() {
  return (
    <main>
      <div className="banner-myProfil">
        <h1>Mon compte</h1>
      </div>
      <div>
        <MyProfile/>
      </div>
    </main>
  )
}

export default ProfilePage;