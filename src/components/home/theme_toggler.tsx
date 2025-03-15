import React from "react"

import { cn } from "@/lib/utils";
import { useDarkMode } from "@/hooks/use_dark_mode";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

const ThemeToggler: React.FC = () => {
    const { theme, toggleMode } = useDarkMode()
    return (
        <Tabs value={theme} onValueChange={toggleMode} className="md:hidden absolute top-4 left-1/2 -translate-x-1/2 transition-all">
            <TabsList className="grid grid-cols-2 h-[unset] p-2 rounded-full">
                <TabsTrigger value="light" className="rounded-full">
                    <FontAwesomeIcon icon={faSun} className="text-2xl py-2" />
                </TabsTrigger>
                <TabsTrigger value="dark" className="rounded-full">
                    <FontAwesomeIcon icon={faMoon} className="text-2xl py-2" />
                </TabsTrigger>
            </TabsList>
        </Tabs>
    );
}

export default ThemeToggler;
