import { UserContext } from "../../providers/User"

export const Dashboard = () => {
  const user = {isAdmin: true} // apagar

  return user.isAdmin ? 
  (
    <>admDash</>
  ) : (
    <>userDash</>
  )
}