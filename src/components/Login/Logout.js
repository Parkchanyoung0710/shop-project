import { signOut } from "firebase/auth"
import { auth } from "../../firebase"

function Logout () {
    
    const logout = async () => {
        await signOut(auth);
    }
    <div>

<button onClick={logout}>로그아웃</button>
    </div>
}
export default Logout;