import React from 'react';

type DarkMode = {
 isDarkModeActive: boolean,
 setisDarkModeActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const ThemeContext = React.createContext<DarkMode>({} as DarkMode);
