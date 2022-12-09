import styled from 'styled-components'

export const AppHeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  font-size: 14px;
  color: #fff;
  border-bottom: 5px solid ${(props) => props.theme.color.primary};
  .app_header {
    display: flex;
    justify-content: space-between;
    ${(props) => props.theme.mixin.wrapv1};
    .app_header_left {
      display: flex;
      justify-content: center;
      align-items: center;
      .logo {
        display: block;
        width: 176px;
        height: 73px;
        background-position: 0 0;
        text-indent: -9999px;
      }
      .text {
        position: relative;

        display: inline-block;
        height: 75px;
        line-height: 75px;
        color: #fff;
        padding: 0 19px;
        //&:hover {
        //  color: #fff;
        //  background-color: #111;
        //  text-decoration: none;
        //}
        .icon {
          position: absolute;
          display: inline-block;
          width: 12px;
          height: 7px;
          bottom: 6px;
          left: 50%;
          transform: translate(-50%, 0);
          background: url(${require('@/assets/img/sprite_01.png')}) no-repeat -226px
            0;
          //background-position: -226px 0;
          text-indent: -9999px;
        }
      }
    }
    .app_header_right {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      .item {
        margin-left: 15px;
      }
      .creation {
        width: 110px;
        padding: 5px 0;
        &:hover {
          border: 1px solid #eee;
          border-radius: 15px;
        }
      }
    }
  }
`
