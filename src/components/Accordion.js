import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (index) => {
    /* 
    Functional version is used if the new value depends on old one
    the reason for using function state update is that we are fixing a rare bug which is when we update state varibale very fast, react may still wait for changing the value of the state varibale. In this case, the old and the new values of the varibale will be the same, so you will see that the accordion item is still closed even we clicked it two times (it was closed at the start) --section11-v187.
    */
    setExpandedIndex((currentExpandedIndex) =>
      currentExpandedIndex === index ? -1 : index
    );
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = expandedIndex === index;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.title}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.description}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
};

export default Accordion;
