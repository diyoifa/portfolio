import React from 'react'
import './pagination.css'
import { Pagination } from '@mui/material'

const Paginacíon = ({array, dataPerPage, currentPage, paginate}) => {
  return (
    <div className='pagination'>
          {array?.length > dataPerPage && (
              <Pagination
              //propiedades del componente
                color="primary"
                shape="rounded"
                defaultPage={1}
                count={Math.ceil(array.length / dataPerPage)} //TOTAL DE PAGINAS
                page={currentPage}
                //llamamos la funcion 
                onChange={paginate}
                size="large"
              />
            )}
        </div>
  )
}

export default Paginacíon
