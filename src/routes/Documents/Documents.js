import React from "react";

import documentImg from '../../assets/images/document.png'
import './style.css'

export function Documents({content, size, setTabValue}) {
  // изменение положения ползунка в меню
  React.useEffect(() => {
    setTabValue(2)
  }, [setTabValue])
  // прокрутка при переходе
  window.scrollTo({ top: 0, behavior: 'smooth' })
  // разделяемвсе документы по секциям
  const sectionsFormat = () => {
    const result = {}
    content.documents.forEach((document) => {
      if (!(document.sectionName in result)) {
        result[document.sectionName] = []
        result[document.sectionName].push(document)
      } else {
        result[document.sectionName].push(document)
      }
    })
    return result
  }

  const sections = sectionsFormat()

  return (
    <div className="documents-container">
      {Object.keys(sections).map((key) => (
        <div className="documents-section" key={key}>
          {key !== 'null' && <div className="documents-section-title">{key}</div>}
          <div className="documents-section-content">
            {sections[key].map((document) => (
              <div className={"documents-section-item " + size} key={document.id}>
                <a href={document.url} target="_blank" rel="noreferrer">
                  <div className="document-name">{document.name}</div>
                  <img src={documentImg} alt="document" />
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}