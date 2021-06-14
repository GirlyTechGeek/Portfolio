import React from 'react';
import ReactDOM from "react-dom";
import ReactPWAInstallProvider, { useReactPWAInstall } from "react-pwa-install";
import PWAInstallerPrompt from 'react-pwa-installer-prompt';


 function Prompt() {
  const { pwaInstall, supported, isInstalled } = useReactPWAInstall();
 
  const handleClick = () => {
    pwaInstall({
      title: "Install My Portfolio",
      
      features: (
        <ul>
          <li>Works offline</li>
        </ul>
      ),
      description: "This is a very good app that does a lot of useful stuff. ",
    })
      .then(() => alert("App installed successfully or instructions for install shown"))
      .catch(() => alert("User opted out from installing"));
  };
 
  return (
    <div>
      {supported() && !isInstalled() && (
        <button type="button" onClick={handleClick}>
          Install App
        </button>
      )}
    </div>
  );
  
  
}
export default Prompt;