import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import Spanish from '../i18n/messages/es.json';
import English from '../i18n/messages/en.json';

export const ContextLanguage = React.createContext();

const local = navigator.language;

let language;

if (local === 'en') {
  language = English;
} else if (local === 'es') {
  language = Spanish;
}

const Wrapper = (props) => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(language);

  function setLang(e) {
    const newLocale = e.target.value;
    setLocale(newLocale);

    if (newLocale === 'en') {
      setMessages(English);
    } else if (newLocale === 'es') {
      setMessages(Spanish);
    }
  }

  return (
    <ContextLanguage.Provider value={{ locale, setLang }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </ContextLanguage.Provider>
  );
};

export default Wrapper;
