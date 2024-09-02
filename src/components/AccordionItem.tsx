// src/components/AccordionItem.tsx
import { useState } from "react";
import AccordionSubItem from "@/components/AccordionItem";

interface AccordionItemProps {
  item: {
    title: string;
    subItems?: string[];
  };
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700">
      <button
        className="w-full text-left p-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        {item.title}
      </button>
      {isOpen && item.subItems && (
        <div className="pl-4">
          {item.subItems.map((subItem, idx) => (
            <AccordionSubItem key={idx} item={{ title: subItem }} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
