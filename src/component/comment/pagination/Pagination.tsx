import classnames from 'classnames'
import { Fragment } from 'react'
import { PaginationContainer, PaginationItem } from './Style'
import { DOTS, usePagination } from './usePagination'

// THIS PAGINATION COMPONENT COMES FROM FREECODECAMP
// https://stackblitz.com/edit/react-1zaeqk?file=src%2FusePagination.js
// https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/

type PaginationTypes = {
  onPageChange: (page: number) => void
  totalObjects: number
  siblingCount: number
  currentPage: number
  objectsPerPage: number
  className: string
}

export const Pagination = (props: PaginationTypes) => {
  const {
    onPageChange,
    totalObjects,
    siblingCount,
    currentPage,
    objectsPerPage,
  } = props

  const paginationRange: (string | number)[] = usePagination({
    currentPage,
    totalObjects,
    siblingCount,
    objectsPerPage,
  })

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  const lastPage = paginationRange[paginationRange.length - 1]
  return (
    <PaginationContainer>
      {/* Left navigation arrow */}
      <PaginationItem
        // className={classnames('pagination-item', {
        //   disabled: currentPage === 1,
        // })}
        onClick={onPrevious}
      >
        <div className="arrow left">&lt;&lt;</div>
      </PaginationItem>
      {paginationRange.map((pageNumber, index) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return (
            <Fragment key={index}>
              <PaginationItem>&#8230;</PaginationItem>
            </Fragment>
          )
        }

        // Render our Page Pills
        return (
          <PaginationItem
            key={index}
            className={classnames('pagination-item', {
              selected: pageNumber === currentPage,
            })}
            onClick={() =>
              typeof pageNumber === 'number' ? onPageChange(pageNumber) : null
            }
          >
            {pageNumber}
          </PaginationItem>
        )
      })}
      {/*  Right Navigation arrow */}
      <PaginationItem
        className={classnames('pagination-item', {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className="arrow right">&gt;&gt;</div>
      </PaginationItem>
    </PaginationContainer>
  )
}
