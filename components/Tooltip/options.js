import Colors from '../Colors';

const arrowSize = '5px';
const upDownBorders = `
  border-left: ${arrowSize} solid transparent;
  border-right: ${arrowSize} solid transparent;
  left: 50%;
  transform: translateX(-50%);
`;

const sideBorders = `
  border-top: ${arrowSize} solid transparent;
  border-bottom: ${arrowSize} solid transparent;
  top: 50%;
  transform: translateY(-50%);
`;

const placement = {
  arrowPosition: {
    bottom: `
      ${upDownBorders}
      border-bottom: ${arrowSize} solid;
      border-bottom-color: inherit;
      top: -${arrowSize};
    `,
    top: `
      ${upDownBorders}
      border-top: ${arrowSize} solid;
      border-top-color: inherit;
      bottom: -${arrowSize};
    `,
    left: `
      ${sideBorders}
      border-left: ${arrowSize} solid;
      border-left-color: inherit;
      right: -${arrowSize};
    `,
    right: `
      ${sideBorders}
      border-right: ${arrowSize} solid;
      border-right-color: inherit;
      left: -${arrowSize};
    `,
  },

  tipPosition: ({ place, height, width }) => {
    const position = {
      top: `top: -${height + 10}px; left: 50%; margin-left: -${Math.floor(width / 2)}px;`,
      right: `right: -${width + 15}px;top: 50%; margin-top: -${Math.floor(height / 2)}px;`,
      bottom: `bottom: -${height + 10}px; left: 50%; margin-left: -${Math.floor(width / 2)}px;`,
      left: `left: -${width + 15}px;top: 50%; margin-top: -${Math.floor(height / 2)}px;`,
    };
  
    return position[place] || position.top;
  },
};

const skins = {
  info: Colors.SECONDARY['500'],
  danger: Colors.DANGER['500'],
  success: Colors.ACTION['400'],
  warning: Colors.WARMING['400'],
};

export {
  skins,
  placement,
};
