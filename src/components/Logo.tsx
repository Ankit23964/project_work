import React from "react";
import logo from '../../assets/images/logo.png'

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src={logo} // Make sure this path matches your actual logo image path
        alt="Enver Logo"
        className="w-8 h-8 object-contain"
      />
      <span className="text-lg font-bold">Enver</span>
    </div>
  );
};
