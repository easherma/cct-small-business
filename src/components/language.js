import React from 'react'
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl'
import Button from 'react-bootstrap/Button'

const languageName = {
  en: 'English',
  es: 'Español',
}

const Language = () => {
  return (
    <div className="language-switcher">
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <Button key={language} onClick={() => changeLocale(language)}>
              {languageName[language]}
            </Button>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Language
