import React from 'react';
import { DocumentType } from '../../mainTypes';
import DocumentItem from './DocumentItem';

type PropsTypes = {
  documents: Array<DocumentType>
}

const DocumentsBlock: React.FC<PropsTypes> = ({ documents }) => {
  const [showMore, setShowMore] = React.useState(documents.length > 3 ? false : true);
  const onShowMore = () => {
    setShowMore(true);
  }

  if (!documents) {
    return null;
  }

  const documentsItems = documents.slice(0, showMore ? documents.length : 3);
  return (
    <section className="documents" id="documents">
      <div className="documents__wrapper">
        <h2 className="documents__title">Документы</h2>
        <ul className="documents__list">
          {documentsItems.map((item, index)=><DocumentItem key={index+"_doc"} name={item.name} weight={item.weight} src={item.src}/>)}
        </ul>
        { !showMore && <button type="button" className="documents__show-btn show__btn" onClick={onShowMore}>Показать ещё документы</button>}
        <button type="button" id="consultationBtn" className="documents__btn light__btn">Получить консультацию
          юриста</button>
      </div>
    </section>
     
    
    )
}

export default React.memo(DocumentsBlock);

   