import React from 'react';

type PropsTypesFieldsFromToWrap = {
  name: string,
  placeholder: string
}

const FieldsFromToWrap: React.FC<PropsTypesFieldsFromToWrap> = ({name, placeholder}) => {
  return (
      <div className="filter-field filter-field-cost">
          <span className="filter-field__name filter-field__name-cost">{placeholder}</span>
          <div className="filter-field-cost__wrap filter-field__wrap-from-to">
              <input
                  type="text"
                  className='filter__cost-from filter__input'
                  name={`${name}From`}
                  placeholder="от"/>
              <input
                  type=" text"
                  className='filter__cost-to filter__input'
                  name={`${name}To`}
                  placeholder="до"/>
          </div>
      </div>
  )
}
export default React.memo(FieldsFromToWrap);