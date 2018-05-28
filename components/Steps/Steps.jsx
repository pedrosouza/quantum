import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import Step from './sub-components/Step';


const Container = styled.div`
  clear: both;
  display: table;
  width: 100%;
`;

const ProgressBar = styled.ul`
  padding: 0;

  li {
      list-style-type: none;
      width: calc(100% / ${props => props.steps});
      float: left;
      font-size: 12px;
      position: relative;
      text-align: center;
      color: #7d7d7d;
      margin-top: 50px;
  }

  li:before {
      width: 36px;
      height: 36px;
      content: '';
      line-height: 30px;
      border: 1px solid #cccccc;
      display: block;
      text-align: center;
      margin: 0 auto 10px auto;
      border-radius: 50%;
      background-color: white;
  }

   li:after {
      width: 100%;
      height: 0.6px;
      content: '';
      position: absolute;
      background-color: #cccccc;
      top: 15px;
      left: -50%;
      z-index: -1;
  }

  li:first-child:after {
      content: none;
  }

  li.active {
      color: #005da4;      
  }

  li.active:before {
      background: #005da4;
      border: 1px solid #005da4;
  }

  li.active + li:after {
      background-color: #cccccc;
  }
  
  li.done + li:after {
      background-color: #cccccc;
  }

  li p {
    position: relative;
    top: -80px;
    width: 90px;
    margin: 0 auto;
  }
`;

const stepList = [
  {
    title: 'Criação de conta',
    active: false,
    done: true,
    icon: '1',
  },
  {
    title: 'Plano e forma de pagamento',
    active: true,
    icon: '2',
  },
  {
    title: 'Preencher o currículo',
    active: false,
    icon: '3',
  },
];

const Steps = () => (
  <React.Fragment>
    <Container>
      <ProgressBar steps={stepList.length}>
        {stepList.map((step, index) => <Step {...step} key={index} />)}
      </ProgressBar>
    </Container>
  </React.Fragment>
);

// Steps.propTypes = {
//   name: PropTypes.string,
// };
//
// Steps.defaultProps = {
//   name: 'Steps',
// };

export default Steps;
