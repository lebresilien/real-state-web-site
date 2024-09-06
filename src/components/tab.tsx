import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatePresence, motion } from "framer-motion";
import { Testimony } from "../../types";
import Slide from "./caroussel";
import Story from "./story";

const variants = {
    visible: {x: 0, opacity: 1, y: -10, transition:  { staggerChildern: 0.5 }},
    hidden: {x: 0, opacity: 0, y: 10}
}

const TabComponent = ({ testimonies }: { testimonies: Testimony[] }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const onTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  const trigger = [
    {
        name: "Histoire",
        value: "story",
        content: <Story />
    },
    {
        name: "Equipe",
        value: "team",
        content: "Notre equipe"
    },
    {
        name: "Témoignages",
        value: "Testimony",
        content: <Slide testimonies={testimonies}/>
    }
]

	return ( 
        <div className="flex flex-col items-center bg-white">
            <Tabs defaultValue="story" className="w-full space-y-10">
                <TabsList className="space-x-5 px-10 py-8">
                    {trigger.map((el, index) => (
                        <TabsTrigger onClick={() => onTabClick(index)} value={el.value} key={el.value}>{el.name}</TabsTrigger>
                    ))}
                </TabsList>
                <AnimatePresence mode="popLayout">
                    {trigger.map((el, index) => (
                        <motion.div
                            variants={variants}
                            animate={activeTabIndex === index ? 'visible': 'hidden'}
                            exit="hidden"
                            key={el.value}
                        >
                            <TabsContent value={el.value}>{el.content}</TabsContent>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </Tabs>
           
        </div>
    )
}

export default TabComponent;