import TopBar from '../components/mainpage/TopBar'
import { Outlet} from "react-router-dom";

function RootLayout(){
    return (
        <>
          <TopBar />
          <main>
            <Outlet />
          </main>
        </>
      );
}

export default RootLayout