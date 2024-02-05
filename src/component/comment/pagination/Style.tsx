import styled from 'styled-components'

export const PaginationContainer = styled.ul`
  display: flex;
  list-style-type: none;
  user-select: none;
  justify-content: center;
`

export const PaginationItem = styled.div`
  padding: 0 12px;
  height: 32px;
  text-align: center;
  margin: auto 1px;
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  box-sizing: border-box;
  align-items: center;
  letter-spacing: 0.01071em;
  border-radius: 2px;
  line-height: 1.43;
  font-family: Oswald, sans-serif;
  font-size: 15px;
  min-width: 32px;
  transition: background-color 0.3s;

  &.dots:hover {
    background-color: transparent;
    cursor: default;
  }

  &:hover {
    background-color: rgba(40, 44, 52, 0.3);
    cursor: pointer;
  }

  &.selected {
    background-color: rgba(40, 44, 52, 0.7);
    color: white;
  }

  .arrow {
    font-size: 16px;
    transition: all 0.2s;
  }

  &.disabled {
    pointer-events: none;

    .arrow::before {
      border-right: 0.12em solid rgba(0, 0, 0, 0.43);
      border-top: 0.12em solid rgba(0, 0, 0, 0.43);
    }

    &:hover {
      background-color: transparent;
      cursor: default;
    }
  }
`
