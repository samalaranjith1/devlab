import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

function FilterableProductTable({products}) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products}/>
    </div>
  )
}

export default FilterableProductTable