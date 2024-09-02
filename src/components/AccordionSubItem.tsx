// src/components/AccordionSubItem.tsx
interface AccordionSubItemProps {
  title: string;
}

const AccordionSubItem: React.FC<AccordionSubItemProps> = ({ title }) => {
  return <div className="p-2 pl-6 hover:bg-gray-700">{title}</div>;
};

export default AccordionSubItem;
