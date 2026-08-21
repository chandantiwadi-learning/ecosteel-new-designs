import React, { useState } from 'react';

const accordionItems = [
  {
    id: 1,
    title: 'Application Industries',
    content:
      'We offer a wide range of product forms that meet your exact requirements commonly served in Aerospace, Oil and Gas, Medical, Defence, Chemical, Automotive, Machining and Tooling, Marine, fabrication Nuclear, Electronics, High Temperature, Lighting and Private Sectors.',
  },
  {
    id: 2,
    title: 'We Export',
    content:
      'We are currently exporting to UAE, Saudi Arabia, Bahrain, Egypt, Iran, Kuwait, Oman, South Africa, Qatar, Russia, Turkey and around the globe. To meet the requirements of its clients it has always vouched for supplying materials of high quality and standards at competitive price range.',
  },
  {
    id: 3,
    title: 'Customer Service',
    content:
      'Keeping efficient and friendly customer service as the top concern, provides ultimate flexibility in fulfilling each & every customer requirement irrespective of the size of order. Most of our clients are doing business with us since years, which indicates higher levels of customer satisfaction. We always welcome any queries or suggesions from our clients to improve the services and hence to serve them better.',
  },
];

const Accordion = () => {
  const [activeId, setActiveId] = useState(2);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="accordion">
      {accordionItems.map((item) => {
        const isActive = activeId === item.id;
        return (
          <React.Fragment key={item.id}>
            <h6
              className={`accordion-title ${isActive ? 'active' : ''}`}
              onClick={() => toggleAccordion(item.id)}
              style={{ cursor: 'pointer' }}
            >
              {item.title}
            </h6>
            <div
              className={`accordion-inner ${isActive ? 'active' : ''}`}
              style={{ display: isActive ? 'block' : 'none' }}
            >
              <p>{item.content}</p>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Accordion;
