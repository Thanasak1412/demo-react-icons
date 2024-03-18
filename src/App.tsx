import './App.css';

import { useEffect, useMemo, useState } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineUnlock } from 'react-icons/ai';
import { BiBuilding, BiDice6 } from 'react-icons/bi';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa6';
import { GiKeyLock, GiMoneyStack } from 'react-icons/gi';
import { GrCopy } from 'react-icons/gr';
import { HiMailOpen } from 'react-icons/hi';
import { HiOutlineWrenchScrewdriver } from 'react-icons/hi2';
import { ImProfile } from 'react-icons/im';
import { IoIosListBox } from 'react-icons/io';
import { LuFileSpreadsheet } from 'react-icons/lu';
import {
  MdAdminPanelSettings,
  MdEngineering,
  MdOutlineMonitor,
} from 'react-icons/md';
import { PiArticleMedium } from 'react-icons/pi';
import { RiUserAddLine } from 'react-icons/ri';
import { TbCheckupList, TbMoneybag } from 'react-icons/tb';
import { TfiHome, TfiWrite } from 'react-icons/tfi';
import { TiFolderOpen } from 'react-icons/ti';

function App() {
  const [color, setColor] = useState([0, 0, 0]);
  const [alpha, setAlpha] = useState(0.0);

  const randomColor = (c: number[]) => {
    return c.map((_, i) => {
      setAlpha(`0.${i}` as unknown as number);

      return Math.floor(Math.random() * 255);
    });
  };

  useEffect(() => {
    setColor((prev) => randomColor(prev));
  }, []);

  const value = useMemo(
    () => ({
      className: "icon-item",
      size: "3.5rem",
      color: `rgb(${color.join()}, ${alpha})`,
    }),
    [color, alpha]
  );

  return (
    <div className="container">
      <IconContext.Provider value={value}>
        <AiOutlineUnlock />
      </IconContext.Provider>
      <IconContext.Provider value={value}>
        <BiBuilding />
      </IconContext.Provider>
      <IconContext.Provider value={value}>
        <BiDice6 />
      </IconContext.Provider>
      <IconContext.Provider value={value}>
        <FaRegCalendarAlt />
      </IconContext.Provider>
      <IconContext.Provider value={value}>
        <FaChartLine />
      </IconContext.Provider>
      <IconContext.Provider value={value}>
        <GiKeyLock />
      </IconContext.Provider>
      <IconContext.Provider value={value}>
        <GiMoneyStack />
      </IconContext.Provider>
      <IconContext.Provider value={value}>
        <GrCopy />
      </IconContext.Provider>
      <IconContext.Provider value={value}>
        <HiMailOpen />
      </IconContext.Provider>
      <IconContext.Provider value={value}>
        <HiOutlineWrenchScrewdriver />
      </IconContext.Provider>
      <IconContext.Provider value={value}>
        <ImProfile />
      </IconContext.Provider>
      <IconContext.Provider value={value}>
        <IoIosListBox />
      </IconContext.Provider>
      <IconContext.Provider value={value}>
        <LuFileSpreadsheet />
      </IconContext.Provider>
      <IconContext.Provider value={value}>
        <MdAdminPanelSettings />
      </IconContext.Provider>
      <IconContext.Provider value={value}>
        <MdEngineering />
      </IconContext.Provider>
      <IconContext.Provider value={value}>
        <MdOutlineMonitor />
      </IconContext.Provider>
      <IconContext.Provider value={value}>
        <PiArticleMedium />
      </IconContext.Provider>
      <IconContext.Provider value={value}>
        <RiUserAddLine />
      </IconContext.Provider>
      <IconContext.Provider value={value}>
        <TbCheckupList />
      </IconContext.Provider>
      <IconContext.Provider value={value}>
        <TbMoneybag />
      </IconContext.Provider>
      <IconContext.Provider value={value}>
        <TfiHome />
      </IconContext.Provider>
      <IconContext.Provider value={value}>
        <TfiWrite />
      </IconContext.Provider>
      <IconContext.Provider value={value}>
        <TiFolderOpen />
      </IconContext.Provider>
    </div>
  );
}

export default App;
