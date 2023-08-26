import React from 'react';
import SkillCard from './SkillCard';

const SkillsList = ({ data }) => {
  return (
    <div>
      {data.map(category => <SkillCard key={category.title} category={category} />)}
    </div>
  );
}

export default SkillsList;
