import styled from 'styled-components'

export const DiscoverWrapper = styled.div`
  background-color: ${(props) => props.theme.color.secondary};
  height: 25px;
  .content {
    position: relative;
    top: -1px;
    display: flex;
    ${(props) => props.theme.mixin.wrapv1}
    margin-left: 30.3%;
    .item {
      margin-left: 30px;
      a {
        color: #fff;
        padding: 2px 10px;
        border-radius: 15px;
        &:hover,
        &.active {
          background-color: #333;
          text-decoration: none;
        }
      }
    }
  }
`
