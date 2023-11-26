import React from 'react';

interface SocialListItemProps {
  background: string;
  color?: string;
  boxShadow?: string;
  icon: React.ReactNode;
  label: string;
}

const SocialListItem: React.FC<SocialListItemProps> = ({
  background,
  color = 'white',
  boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)',
  icon,
  label,
}) => {
  return (
    <li
      style={{
        background,
        color,
        boxShadow,
      }}
    >
      {icon}
      <span>{label}</span>
    </li>
  );
};

export default SocialListItem;
