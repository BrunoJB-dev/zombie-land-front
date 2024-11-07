import MyProfile from "../../components/myProfil/myProfil";
import MyReservation from "../../components/reservationByProfil/myReservation";
import { useAuth } from "../../AuthContext";
import "./profilPage.scss"

function ProfilePage() {
  const {user} = useAuth();
  return (
    <main>
      <div className="banner-myProfil">
        <h1>Mon compte</h1>
      </div>
      <div>
        <MyProfile/>
        <MyReservation/>
      </div>
    </main>
  )
}

export default ProfilePage;