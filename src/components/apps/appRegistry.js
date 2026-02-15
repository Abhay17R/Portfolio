// src/components/apps/appRegistry.js

import FileExplorer from "./FileExplorer";
import Chrome from "./Chrome";
import MyProjects from "./MyProjects";
import Calculator from "./Calculator";
import PdfViewer from "./PdfViewer";
import Notepad from "./Notepad";
import Terminal from "./Terminal";
import WindowsMediaPlayer from "./WindowsMediaPlayer";
import Paint from "./Paint";
import Settings from "./Settings";

// Ye registry ab ek central source hai.
// Isme key (ID) aur value (Component) hai.
export const appRegistry = {
  explorer: <FileExplorer />,
  chrome: <Chrome />,
  notepad: <Notepad />,
  paint: <Paint />,
  "media-player": <WindowsMediaPlayer />,
  terminal: <Terminal />,
  calculator: <Calculator />,
  // projects aur resume special cases hain, inko handle karenge
  projects: MyProjects, // Component ko pass karenge, instance nahi
  resume: <PdfViewer fileUrl="/resume.pdf" fileName="My Resume.pdf" />,
  settings: <Settings />,
};