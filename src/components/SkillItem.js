import React from 'react';

const SkillItem = ({ skill }) => {
  const { name } = skill;

  const iconName = name.replace(/\s+/g, ''); 
  const iconSrc = require(`../assets/icons/${iconName}.svg`);
  
  const displayName = name.replace("CSharp", "C#");

  return (
    <div className="d-flex align-items-center justify-content-center w-100 single-item">
    <img src={iconSrc} alt={`${displayName} Icon`} />
    <span>{displayName}</span>
  </div>
  )
}

export default SkillItem;