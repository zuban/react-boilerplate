import { injectGlobal } from 'styled-components'

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: Arial, Helvetica, sans-serif !important;
    font-size: 0.9rem;

  }

  body.fontLoaded {
    font-family: Arial, Helvetica, sans-serif !important;
    font-size: 0.9rem;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }
  
  .roboto {
    font-family: 'Roboto Slab';
  }
  .roboto-bold {
    font-family: 'Roboto Slab';
    font-weight: bold;
  }

  .default_btn.has_icon i {
    display: inline-block;
  }
  .default_btn.has_icon i.left {
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .default_btn.has_icon i.right {
    position: absolute;
    top: 10px;
    left: 0px;
  }
  .text-bold {
    font-weight: bold;
  }
   
  .logo {
      height: 100px !important;
    width: 100px !important;
    position: relative;
    padding-left: 0px;
    margin-left: -15px;
    }
    
  .icons-grey-light {
    background: url(/jotform/icons/icons_set_grey_light.png) no-repeat;
    background-size: 125px auto;
    height: 25px;
    width: 25px;
    display: inline-block;
    background-position: -21px -135px !important;    
    color: #a8a8a8;
    line-height: 20px;
    font-style: normal;
  }
  
  .header-font  {  
    color: #a8a8a8;
    height: 25px;
    line-height: 25px;
    vertical-align: middle;
    display: inline-block;
    font-size: 12px;
  }
  
  .layout-img-container {
    background: url(/jotform/bg-header.jpg) no-repeat 50% 0;
    -webkit-background-size: cover;
    background-size: cover;
    margin-top: 40px;
    height: 135px;
  }
  
  
  footer {
    border-top: 1px solid #acacac;
    padding: 40px 0 0;
    margin-top: 80px;
  }
  footer .f-box	{
    float: left;
    color: #444444;
    box-sizing: border-box;
    padding-right: 50px;
    font-size: 12px;
  }
  footer .f-box a {
    color: #444444;
    font-weight: 300;
    font-style: normal;
    font-size: 12px;
  }
  footer .f-box strong {
    margin-bottom: 15px;
    display: block;
    font-size: 12px;
  }
  footer .lang a {
    height: 25px;
    line-height: 25px;
    display: inline-block;
    vertical-align: middle;
  }
  
  footer .footer-line {
    background: #444444;
    color: #d5d5d5;
    padding: 21px 0 25px;
    font-size: 12px;
    margin-top: 40px;
  }
  footer .footer-line a {
    color: #d5d5d5;

  }
  footer .footer-line ul {
    display: inline-block;
    margin: 0;
  }
  footer .footer-line ul li {
    display: inline-block;
    margin: 0 20px;
    line-height: 20px;
  }
  footer .footer-line ul li:first-child {
    margin-left: 0;
  }
  footer .footer-line ul li:last-child {
    margin-right: 0;
  }
  footer .social-icons {
    overflow: hidden;
  }
  footer .social-icons li .fa {
    text-align: center;
    color: #444444;
    width: 20px;
    height: 20px;
    line-height: 20px;
    background: #d4d4d4;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
  }
  footer .footer-line a:hover {
    color: #c2c2c2;
    font-size: larger;
  }
  @media screen and (max-width: 1200px) {
    footer .social-icons li {
      margin: 0 10px !important;
    }
  }
  
  .list-unstyled {
    margin-top: 10px;
  }
  
  .form-control.form-control-custom {
    border-color: rgba(0,0,0,0) !important;
    box-shadow: none !important;
  }
  
  .jotform-container {
    margin-top: 50px;
    font-family: 'Roboto Slab';
  }
  
  .jotform-container h2 {
    color: #333333 !important;
    font-size: 30px !important;
    font-weight: normal !important;
    margin-bottom: 40px !important;
    font-weight: bold;
    text-align: center;
  }
  
  .jotform-image {
     max-width: 450px;
  }
  
  .jotform-row {
    max-width: 800px;
  }
  
  .form-check-input {
    position: absolute;
    margin-top: 0.25rem;
    margin-left: 10px;
    margin-right: 10px;
}

  .form-check-label {
    padding-left: 1.25rem;
    margin-right: 10px;
    margin-bottom: 0;
    cursor: pointer;
  }  
  
  [type="checkbox"], [type="radio"] {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
    margin-left: 10px;
  }
  
  .alert-dismissible .close {
    position: relative;
    top: -0.95rem;
    right: -1.25rem;
    padding: 0.75rem 1.25rem;
    color: inherit;
  }
`
