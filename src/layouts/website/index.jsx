import './style.css';
import smartFarmerLogo from '/smart-farmer.svg';
import { Outlet } from 'react-router-dom';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import DirectionsIcon from '@mui/icons-material/Directions';

export default function Website() {
  return (
    <>
      <div className="login-container flex flex-col justify-center items-center">
        {/* logo */}
        <div>
          <img src={smartFarmerLogo} />
        </div>
        {/* form box */}

        <Outlet />
      </div>
      {/* footer */}
      <div className="w-full h-52 bg-white flex justify-between items-center">
        <div>
          <img src="/araihazar-logo.png" />
        </div>
        <div className="text-center">
          <div>যোগাযোগ</div>
          <div className="flex gap-2  justify-center">
            <div>
              <img
                src="/fb.svg"
                alt="facebook"
                className="bg-[#3B5998] p-2  rounded-md"
              />
            </div>
            <div>
              <img
                src="/yt.svg"
                alt="youtube"
                className="bg-[#FF0000] p-2 rounded-md"
              />
            </div>
          </div>
        </div>
        <div>
          <img src="/vector360-logo.png" />
        </div>
      </div>
    </>
  );
}
