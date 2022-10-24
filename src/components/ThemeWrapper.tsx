import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContextType } from '../@types/theme';
import { ThemeContext } from '../context/themeContext';
import { Button } from './UI';

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme, changeTheme } = React.useContext(ThemeContext) as ThemeContextType;

  const handleThemeChange = () => {
    theme === 'light' ? changeTheme('dark') : changeTheme('light');
  };

  return (
    <div data-theme={theme} className={'theme--controller'}>
      <Button className="theme--button" onClick={handleThemeChange}>
        {theme === 'dark' ? <FaSun /> : <FaMoon />}
      </Button>
      {children}
    </div>
  );
};
export default ThemeWrapper;
