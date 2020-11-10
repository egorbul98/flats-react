import React, {Children} from 'react';
import classNames from 'classnames';
type PropsType = {
    onClickItem: (currentPage:number) => void,
    countPage: number,
    currentPage: number
}

const Pagination : React.FC < PropsType > = ({countPage, currentPage, onClickItem}) => {
    
    let PaginateItems = [];
    for (let i = 0; i < countPage; i++) {
        const index = i + 1;
        if (i == 0 && currentPage > 1) {
            PaginateItems.push( <div key={"pagination__prev"} className="pagination__prev" onClick={() => onClickItem(currentPage - 1)}>«</div> );
        }

        PaginateItems.push(
            <div key={index+"_"+"pagination"}
                className={ classNames("pagination__item",{"pagination__item--active": currentPage == (index)})}
                onClick={() => onClickItem(index)}>
                {index}
            </div>
        );

        if (i == countPage - 1 && currentPage < countPage) {
            PaginateItems.push( <div key={"pagination__next"} className="pagination__next" onClick={() => onClickItem(currentPage + 1)}>»</div> );
        }
    }

    return (
        <div className="pagination">
            {/* <div className="pagination__item pagination__item--active first-page">1</div> */}
            {PaginateItems}
          
        </div>
    )
}

export default React.memo(Pagination);