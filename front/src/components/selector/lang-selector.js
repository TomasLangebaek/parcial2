import React, { useContext } from 'react';
import { ContextLanguage } from '../../context/Wrapper';
export const LangSelector = (props) => {
  const context = useContext(ContextLanguage);
  return (
    <select value={context.locale} onChange={context.setLang}>
      <option value='es'>Español</option>
      <option value='en'>English</option>
    </select>
  );
};
