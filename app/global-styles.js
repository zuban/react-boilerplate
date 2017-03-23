import { injectGlobal } from 'styled-components'

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 0.9rem;

  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 0.9rem;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }
  
  
  .react-tagsinput-tag {
  display: inline-block;
  padding: .3em .4em;
  font-size: 85%;

  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  padding-right: .6em;
  padding-left: .6em;
  border-radius: 10rem;
  background-color: #636c72;
  border: none;
  font-family: inherit;
}

.react-tagsinput {
  width: 100%;
  line-height: 1.25;
  border: none;
}

.react-tagsinput--focused {
  border-color: #2895f1
}

`
