import React from 'react';

type DarkMode = {
 isDarkMode: boolean,
 setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

export const ThemeContext = React.createContext<DarkMode>({} as DarkMode);
